import authorization from "../middleware/authorization.js";
import jwtGenerator from "../utils/jwtGenerator.js";
import validInfo from "../middleware/validInfo.js";
import pool from "../db/db.js";
import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/register", validInfo, async (req, res) => {
  try {
    const { username, password, firstName, lastName, email, role } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      res.send("This email is already in use.");
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
      [username, bcryptPassword, firstName, lastName, email, role]
    );

    const token = jwtGenerator(newUser.rows[0].userId);

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error...");
  }
});

router.post("/login", validInfo, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      `SELECT * FROM users WHERE user_email = ${email}`
    );

    if (user.rows.length < 1) {
      return res.send("User not found...");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.send("Incorrect name or email...");
    }

    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export { router as userRouter };