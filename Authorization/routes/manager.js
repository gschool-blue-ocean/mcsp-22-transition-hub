import authorization from "../middleware/authorization.js";
import express from "express";
const router = express.Router();

// ------------------------- MANAGER ONLY COHORT ROUTES -----------------------------------------------------

router.get("/cohort", async (req, res, next) => {
  const result = await db.query("SELECT * FROM cohorts ORDER BY cohortsId DESC").catch(next);
  res.send(result.rows);
});

router.post("/cohort", async (req, res, next) => {
  const { cohortName, startDate, endDate } = req.body;

  const result = await db
    .query("INSERT INTO cohorts (cohortName, startDate, endDate) VALUES ($1, $2, $3)", [cohortName, startDate, endDate])
    .catch(next);
  res.send(result.rows[0]);
});

router.put("/cohort/:id", async (req, res, next) => { 
  const id = req.params.id;
  const { cohortName, startDate, endDate } = req.body;

      const result = await db.query(`UPDATE cohorts SET cohortName = $1, startDate = $2, endDate = $3 WHERE cohortsId = $4 RETURNING *`, [cohortName, startDate, endDate, id]).catch(next);
      if (result.rowCount === 0) {
          res.status(404).send('Task not found');
      }
      res.status(200).json(result.rows[0]);
});

router.delete("/cohort/:id", async (req, res, next) => {
  const { id } = req.params;

  await db.query("DELETE FROM cohorts WHERE cohortsId = $1", [id]).catch(next);
  res.sendStatus(204);
});

// ---------------------------------------- MANAGER ONLY STUDENT ROUTES ----------------------------------------------------------------

router.get("/student", authorization, async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error from manager get students route");
  }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

export { router as manageRouter };
