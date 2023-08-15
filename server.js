import express from "express";
import dotenv from 'dotenv';
//import { studentRouter } from "../Authorization/routes/student.js";
// import pg from "pg";
import pkg from 'pg';
import cors from 'cors';
import pool from "./DB/db.js";
import { userRouter } from "./Authorization/routes/jwtAuth.js";
import { manageRouter } from "./Authorization/routes/manager.js";


dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.static('dist'));
// const { Pool } = pkg;

// const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.use(express.json());

app.use('/api/auth', userRouter)
app.use('/api/manager', manageRouter)

  

// -------------- SERVER ROUTES FOR TASKS --------------------

app.get("/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks");
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).json({ error: "Internal server error" });
  }
});

// app.get("/api/tasks", async (req, res, next) => {
//   const result = await db
//     .query("SELECT * FROM tasks ORDER BY dueDate")
//     .catch(next);
//   res.send(result.rows);
// });

app.get("/api/tasks", async (req, res, next) => {
  const result = await db
    .query("SELECT * FROM tasks ORDER BY dueDate")
    .catch(next);
  res.send(result.rows);
});

app.get("/api/tasks/:id", async (req, res, next) => {
  let id = req.params.id;
  const result = await db
    .query("SELECT * FROM tasks WHERE taskId = $1", [id])
    .catch(next);

  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows[0]);
  }
});

app.post("/api/tasks", async (req, res, next) => {
  const { studentsId, taskName, taskDescription, dueDate, apptDate } = req.body;

  const result = await db
    .query(
      "INSERT INTO tasks (studentsId, taskName, taskDescription, dueDate, apptDate) VALUES ($1, $2, $3, $4, $5)",
      [studentsId, taskName, taskDescription, dueDate, apptDate]
    )
    .catch(next);
  res.send(result.rows[0]);
});

app.put("/api/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const { studentsId, taskName, taskDescription, dueDate, apptDate } = req.body;
  try {
    const result = await db.query(
      `UPDATE tasks SET studentsId =$1, taskName = $2, taskDescription = $3, dueDate = $4, apptDate = $5 WHERE taskId = $6 RETURNING *`,
      [studentsId, taskName, taskDescription, dueDate, apptDate, id]
    );
    if (result.rowCount === 0) {
      res.status(404).send("Task not found");
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Could not connect to database");
  }
});

app.delete("/api/tasks/:id", async (req, res, next) => {
  const { id } = req.params;

// //  -------------- SERVER ROUTES FOR COHORTS -------------------- 

// app.get("/api/cohort", async (req, res, next) => {
//   const result = await db.query("SELECT * FROM cohort ORDER BY cohortId DESC").catch(next);
//   res.send(result.rows);
// });

app.get("/api/cohort", async (req, res, next) => {
  const result = await db
    .query("SELECT * FROM cohort ORDER BY cohortId DESC")
    .catch(next);
  res.send(result.rows);
});

app.post("/api/cohort", async (req, res, next) => {
  const { cohortName, startDate, endDate } = req.body;

  const result = await db
    .query(
      "INSERT INTO cohort (cohortName, startDate, endDate) VALUES ($1, $2, $3)",
      [cohortName, startDate, endDate]
    )
    .catch(next);
  res.send(result.rows[0]);
});

app.get("/api/cohort/:id", async (req, res, next) => {
  let id = req.params.id;
  const result = await db
    .query("SELECT * FROM cohort WHERE cohortId = $1", [id])
    .catch(next);

  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows[0]);
  }
});

app.put("/api/cohort/:id", async (req, res) => {
  const id = req.params.id;
  const { cohortName, startDate, endDate } = req.body;
  try {
    const result = await db.query(
      `UPDATE cohort SET cohortName = $1, startDate = $2, endDate = $3 WHERE cohortId = $4 RETURNING *`,
      [cohortName, startDate, endDate, id]
    );
    if (result.rowCount === 0) {
      res.status(404).send("Task not found");
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Could not connect to database");
  }
});

app.delete("/api/cohort/:id", async (req, res, next) => {
  const { id } = req.params;

  await db.query("DELETE FROM tasks WHERE id = $1", [id]).catch(next);
  res.sendStatus(204);
});


// --------------- ROUTE FOR GET STUDENT INFO --------------------

app.get("/api/studentinfo", async (req, res) => {
  try {
    const result = await db.query('SELECT users.firstName, users.lastName, users.email, students.ets, students.branch, students.clearanceType FROM users JOIN students ON users.usersId = students.usersId')
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Could not connect to database');
  }
});

app.get ("/api/studentinfo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT users.firstName, users.lastName, users.email, students.ets, students.branch, students.clearanceType FROM users JOIN students ON users.usersId = students.usersId WHERE users.usersId = $1', [id]).catch(next);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Could not connect to database');
  }
});


/* -------------------------- Important -------------------  */
app.get("/manager/:cohort/students", async (req, res) => {
  const {cohort} = req.params
  try {
    const result = await pool.query("SELECT u.firstName, u.lastName FROM users u JOIN students s ON u.usersId = s.usersId WHERE s.cohortsId = $1 ORDER BY u.lastName ASC", [cohort])
    if (result.rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(result.rows);
    }
  } catch (error) {
    console.error('Error querying tasks:', error.stack);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/manager/cohorts", async (req, res) => {
  const {cohort} = req.params
  try {
    const result = await pool.query("SELECT * from cohorts")
    if (result.rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(result.rows);
    }
  } catch (error) {
    console.error('Error querying tasks:', error.stack);
    res.status(500).send('Internal Server Error');
  }
});

/* -------------------------- Important -------------------  */

// ----------------------------------------------

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
