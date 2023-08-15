import authorization from '../middleware/authorization.js'
import jwtGenerator from "../utils/jwtGenerator.js";
import validInfo from "../middleware/validInfo.js";
import pool from "../../DB/db.js";
import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();

// ----------------------- AUTH ROUTES FOR LOGIN AND REGISTER -------------------------------------------------------------

router.post("/register", validInfo, async (req, res, next) => {

    const { username, password, firstName, lastName, email, role } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]).catch(next);

    if (user.rows.length !== 0) {
      res.send("This email is already in use.");
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
      [username, bcryptPassword, firstName, lastName, email, role]
    ).catch(next);

    const token = jwtGenerator(newUser.rows[0].usersId);

    res.json({ token });

});

router.post("/login", validInfo, async (req, res, next) => {
  const { username, password } = req.body;
    const user = await pool.query(
      'SELECT * FROM users WHERE userName = $1', [username]
    ).catch(next);

    if (user.rows.length < 1) {
      return res.send("User not found...");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!validPassword) {
      return res.send("Incorrect username or password...");
    }

    const token = jwtGenerator(user.rows[0].userId);
    res.json({ token });

});


// // -------------- AUTH ROUTES FOR TASKS -------------------- 

router.get("/tasks", async (req, res, next) => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY dueDate").catch(next);
  res.send(result.rows);
});

router.get("/tasks/:id", async (req, res, next) => {
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
    .query("INSERT INTO tasks (studentsId, taskName, taskDescription, dueDate, apptDate) VALUES ($1, $2, $3, $4, $5) RETURNING *", [studentsId, taskName, taskDescription, dueDate, apptDate])
    .catch(next);
  res.send(result.rows[0]);
});

router.patch("/tasks/:id", async (req, res, next) => { 
  const id = req.params.id;
  const { studentsId, taskName, taskDescription, dueDate, apptDate } = req.body;
      const result = await pool.query(`UPDATE tasks SET studentsId =$1, taskName = $2, taskDescription = $3, dueDate = $4, apptDate = $5 WHERE tasksId = $6 RETURNING *`, [studentsId, taskName, taskDescription, dueDate, apptDate, id]).catch(next);
      if (result.rowCount === 0) {
          res.send('Task not found');
      }
      res.status(200).json(result.rows[0]);
});

router.delete("/tasks/:id", async (req, res, next) => {
  const id = req.params.id

  await pool.query("DELETE FROM tasks WHERE tasksId = $1", [id]).catch(next);
  res.status(204).send('deleted');
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
    res.json(true).catch(next);
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

export { router as userRouter };
