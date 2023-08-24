import authorization from "../middleware/authorization.js";
import jwtGenerator from "../utils/jwtGenerator.js";
import validInfo from "../middleware/validInfo.js";
import pool from "../../DB/db.js";
import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();

// ----------------------- AUTH ROUTES FOR LOGIN AND REGISTER -------------------------------------------------------------

router.post("/register/verify", async (req, res) => {
  const { passcode } = req.body;
  try {
    if (passcode === "manager") {
      return res.send({ role: "manager" });
    }

    const result = await pool.query(
      "SELECT * FROM cohorts WHERE cohortName = $1",
      [passcode]
    );

    if (result.rows[0].cohortname) {
      return res.send({ role: "student", id: result.rows[0].cohortsid });
    } else {
      return res.send("Incorrect Passcode");
    }
  } catch (error) {
    console.error("Error querying tasks:", error.stack);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/register", validInfo, async (req, res, next) => {
  const { username, password, firstName, lastName, email, role, cohortsid } =
    req.body;

  const user = await pool
    .query("SELECT * FROM users WHERE username = $1", [username])
    .catch(next);


  if (user.rows.length !== 0) {
    return res.status(401).send("This username is already in use.");
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const bcryptPassword = await bcrypt.hash(password, salt);

  const newUser = await pool
    .query(
      `INSERT INTO users(username, password, firstName, lastName, email, role) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
      [username, bcryptPassword, firstName, lastName, email, role]
    )
    .catch(next);

  if (role === "student") {
    const { ETS, branch, clearance, dutylocation, jobtitle } = req.body;
    await pool
      .query(
        "INSERT INTO students (usersId, cohortsid, ets, branch, clearancetype, dutylocation, jobtitle) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [newUser.rows[0].usersid, cohortsid, ETS, branch, clearance, dutylocation, jobtitle]
      )
      .catch(next);
  }

  const token = jwtGenerator(newUser.rows[0].usersId);

  res.json({ token });
});

router.post("/login", validInfo, async (req, res, next) => {
  const { username, password } = req.body;
  let user = await pool
    .query("SELECT * FROM users WHERE userName = $1", [username])
    .catch(next);


    if(user.rows[0]){
      const validPassword = await bcrypt.compare(password, user.rows[0].password);
      if(!validPassword) return res.status(401).send("Incorrect username or password...");
    } else {
      return res.status(401).send("Incorrect username or password...");
    }

  const token = jwtGenerator(user.rows[0].userId);

  if (user.rows[0].role === "student") {
    user = await pool
      .query(
        "SELECT u.*, s.studentsId FROM users u JOIN students s ON u.usersId = s.usersId WHERE userName = $1",
        [username]
      )
      .catch(next);

    return res.json({
      token,
      role: user.rows[0].role,
      id: user.rows[0].studentsid,
    });
  } else {
    res.json({ token, role: user.rows[0].role });
  }
});

// // -------------- AUTH ROUTES FOR TASKS --------------------

router.get("/tasks", async (req, res, next) => {
  const result = await pool
    .query("SELECT * FROM tasks ORDER BY dueDate")
    .catch(next);

  res.send(result.rows);
});

router.get("/tasks/:id", authorization, async (req, res, next) => {
  let id = req.params.id;
  const result = await pool
    .query("SELECT * FROM tasks WHERE taskId = $1", [id])
    .catch(next);

  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows[0]);
  }
});

router.post("/tasks", async (req, res, next) => {
  const { studentsId, taskName, taskDescription, dueDate, apptDate } = req.body;

  const result = await pool
    .query(
      "INSERT INTO tasks (studentsId, taskName, taskDescription, dueDate, apptDate) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [studentsId, taskName, taskDescription, dueDate, apptDate]
    )
    .catch(next);
  res.send(result.rows[0]);
});

router.patch("/tasks/:id", async (req, res, next) => {
  const id = req.params.id;
  const { studentsId, taskName, taskDescription, dueDate, apptDate } = req.body;
  const result = await pool
    .query(
      `UPDATE tasks SET studentsId =$1, taskName = $2, taskDescription = $3, dueDate = $4, apptDate = $5 WHERE tasksId = $6 RETURNING *`,
      [studentsId, taskName, taskDescription, dueDate, apptDate, id]
    )
    .catch(next);
  if (result.rowCount === 0) {
    res.send("Task not found");
  }
  res.status(200).json(result.rows[0]);
});

router.delete("/tasks/:id", async (req, res, next) => {
  const id = req.params.id;

  await pool.query("DELETE FROM tasks WHERE tasksId = $1", [id]).catch(next);
  res.status(204).send("deleted");
});

// //  -------------- AUTH ROUTES FOR COHORTS --------------------

router.get("/cohorts/:id", async (req, res, next) => {
  let id = req.params.id;
  const result = await pool
    .query("SELECT * FROM cohorts WHERE cohortsId = $1", [id])
    .catch(next);

  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows[0]);
  }
});

// ----------------------------------------------

router.get("/verify", authorization, async (req, res, next) => {
  res.json(true);
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

export { router as userRouter };
