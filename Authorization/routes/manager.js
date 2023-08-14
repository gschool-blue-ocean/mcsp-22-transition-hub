import authorization from "../middleware/authorization.js";
import express from "express";
const router = express.Router();

// ------------------------- MANAGER ONLY COHORT ROUTES -----------------------------------------------------

router.get("/cohort", async (req, res, next) => {
  const result = await db.query("SELECT * FROM cohort ORDER BY cohortId DESC").catch(next);
  res.send(result.rows);
});

router.post("/cohort", async (req, res, next) => {
  const { cohortName, startDate, endDate } = req.body;

  const result = await db
    .query("INSERT INTO cohort (cohortName, startDate, endDate) VALUES ($1, $2, $3)", [cohortName, startDate, endDate])
    .catch(next);
  res.send(result.rows[0]);
});

router.put("/cohort/:id", async (req, res, next) => { 
  const id = req.params.id;
  const { cohortName, startDate, endDate } = req.body;

      const result = await db.query(`UPDATE cohort SET cohortName = $1, startDate = $2, endDate = $3 WHERE cohortId = $4 RETURNING *`, [cohortName, startDate, endDate, id]).catch(next);
      if (result.rowCount === 0) {
          res.status(404).send('Task not found');
      }
      res.status(200).json(result.rows[0]);
});

router.delete("/cohort/:id", async (req, res, next) => {
  const { id } = req.params;

  await db.query("DELETE FROM tasks WHERE id = $1", [id]).catch(next);
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
