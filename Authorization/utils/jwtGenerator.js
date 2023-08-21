import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// const secret = process.env.SECRET;

const jwtGenerator = (userId) => {
  const payload = {
    user: userId,
  };

  return jwt.sign(payload, process.env.SECRET, { expiresIn: "1hr" });
};

export default jwtGenerator;
