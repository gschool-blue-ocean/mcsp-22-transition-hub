import express from "express";
import dotenv from 'dotenv';
import path from 'path';
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
// const staticPath = path.join(__dirname, "MCSP-22-TRANSITION-HUB");
app.use(cors());
app.use(express.static('dist'));
// app.use(express.static(staticPath));
// const { Pool } = pkg;

// const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.use(express.json());

app.use('/api/auth', userRouter)
app.use('/api/manager', manageRouter)

  

// -------------- SERVER ROUTES FOR TASKS --------------------

app.get('/tasks', async (req, res) => {
  try{
      const result = await pool.query('SELECT * FROM tasks');
      res.json(result.rows);
  }catch(err){
      console.error('Error executing query', err.stack);
      res.status(500).json({error: 'Internal server error'});
  }
});

app.get('/tasks/:studentsId', async (req, res) => {
  const studentsId = req.params.studentsId;  

  try {
      const result = await pool.query('SELECT * FROM tasks WHERE studentsId = $1', [studentsId]);  
      res.json(result.rows);
  } catch (error) {
      console.error('Error querying tasks:', error.stack);
      res.status(500).send('Internal Server Error');
  }
});

app.patch("/tasks/:taskId/complete", async (req, res) => {
  const { taskId } = req.params;
  try {
    const currentStatusResult = await pool.query("SELECT completed FROM tasks WHERE tasksId = $1", [taskId]);
    
    if (currentStatusResult.rows.length === 0) {
      res.sendStatus(404).send('Task not Found'); 
    } else {
      const newStatus = !currentStatusResult.rows[0].completed;
    
      await pool.query("UPDATE tasks SET completed = $1 WHERE tasksId = $2", [newStatus, taskId]);
      
      res.status(200).send({ completed: newStatus }); 
    }
  } catch (error) {
    console.error('Error updating task:', error.stack);
    res.status(500).send('Internal Server Error');
  }
});

// app.get("/api/tasks", async (req, res, next) => {
//   const result = await db
//     .query("SELECT * FROM tasks ORDER BY dueDate")
//     .catch(next);
//   res.send(result.rows);
// });

// app.get("/api/tasks/:id", async (req, res, next) => {
//   let id = req.params.id;
//   const result = await db
//     .query("SELECT * FROM tasks WHERE taskId = $1", [id])
//     .catch(next);

//   if (result.rows.length === 0) {
//     res.sendStatus(404);
//   } else {
//     res.send(result.rows[0]);
//   }
// });

// app.post("/api/tasks", async (req, res, next) => {
//   const { studentsId, taskName, taskDescription, dueDate, apptDate } = req.body;

//   const result = await db
//     .query(
//       "INSERT INTO tasks (studentsId, taskName, taskDescription, dueDate, apptDate) VALUES ($1, $2, $3, $4, $5)",
//       [studentsId, taskName, taskDescription, dueDate, apptDate]
//     )
//     .catch(next);
//   res.send(result.rows[0]);
// });

// app.put("/api/tasks/:id", async (req, res) => {
//   const id = req.params.id;
//   const { studentsId, taskName, taskDescription, dueDate, apptDate } = req.body;
//   try {
//     const result = await db.query(
//       `UPDATE tasks SET studentsId =$1, taskName = $2, taskDescription = $3, dueDate = $4, apptDate = $5 WHERE taskId = $6 RETURNING *`,
//       [studentsId, taskName, taskDescription, dueDate, apptDate, id]
//     );
//     if (result.rowCount === 0) {
//       res.status(404).send("Task not found");
//     }
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Could not connect to database");
//   }
// });

// app.delete("/api/tasks/:id", async (req, res, next) => {
//   const { id } = req.params;

//   await db.query("DELETE FROM tasks WHERE id = $1", [id]).catch(next);
//   res.sendStatus(204);
// });

// //  -------------- SERVER ROUTES FOR COHORTS -------------------- 

// app.get("/api/cohort", async (req, res, next) => {
//   const result = await db.query("SELECT * FROM cohort ORDER BY cohortId DESC").catch(next);
//   res.send(result.rows);
// });

// app.post("/api/cohort", async (req, res, next) => {
//   const { cohortName, startDate, endDate } = req.body;

//   const result = await db
//     .query(
//       "INSERT INTO cohort (cohortName, startDate, endDate) VALUES ($1, $2, $3)",
//       [cohortName, startDate, endDate]
//     )
//     .catch(next);
//   res.send(result.rows[0]);
// });

// app.get("/api/cohort/:id", async (req, res, next) => {
//   let id = req.params.id;
//   const result = await db
//     .query("SELECT * FROM cohort WHERE cohortId = $1", [id])
//     .catch(next);

//   if (result.rows.length === 0) {
//     res.sendStatus(404);
//   } else {
//     res.send(result.rows[0]);
//   }
// });

// app.put("/api/cohort/:id", async (req, res) => {
//   const id = req.params.id;
//   const { cohortName, startDate, endDate } = req.body;
//   try {
//     const result = await db.query(
//       `UPDATE cohort SET cohortName = $1, startDate = $2, endDate = $3 WHERE cohortId = $4 RETURNING *`,
//       [cohortName, startDate, endDate, id]
//     );
//     if (result.rowCount === 0) {
//       res.status(404).send("Task not found");
//     }
//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Could not connect to database");
//   }
// });

// app.delete("/api/cohort/:id", async (req, res, next) => {
//   const { id } = req.params;

//   await db.query("DELETE FROM tasks WHERE id = $1", [id]).catch(next);
//   res.sendStatus(204);
// });


// --------------- ROUTE FOR GET STUDENT INFO --------------------

app.get("/api/studentinfo", async (req, res) => {
  try {
    const result = await pool.query('SELECT users.firstName, users.lastName, users.email, students.ets, students.branch, students.clearanceType FROM users JOIN students ON users.usersId = students.usersId')
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Could not connect to database');
  }
});

app.get ("/user/:usersId/info", async (req, res) => {
  const { usersId } = req.params;

  try {
    const result = await pool.query('SELECT users.firstName, users.lastName, users.email, students.ets, students.branch, students.clearanceType FROM users JOIN students ON users.usersId = students.usersId WHERE users.usersId = $1', [usersId]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Could not connect to database');
  }
});


/* -------------------------- Important -------------------  */
//Grab each students first and last name from each cohort
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
//Grab all cohorts
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
//Grab all tasks and cohort id for each task, order desc
app.get('/manager/tasks/all', async (req, res) => {
  try{
    const result = await pool.query(`
    SELECT c.cohortsId, t.studentsId, t.tasksId, t.taskName, t.taskDescription, t.dueDate, t.apptDate 
    FROM tasks t
    JOIN students s ON t.studentsId = s.studentsId
    JOIN cohorts c ON s.cohortsId = c.cohortsId
    ORDER BY c.cohortsId ASC`)
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

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'MCSP-22-TRANSITION-HUB', 'index.html'));
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
