import authorization from "../middleware/authorization.js";
import express from "express";
const router = express.Router();

router.post("/register", validInfo, async (req, res) => {
  try {
    const { ets, branch, clearanceType } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      res.send("Student already exists");
    }

    const newUser = await pool.query(
      `INSERT INTO students(ets, branch, clearanceType) VALUES($1, $2, $3) RETURNING *`,
      [ets, branch, clearanceType]
    );

    const token = jwtGenerator(newUser.rows[0].userId);

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error...");
  }
});

export { router as studentRouter };
