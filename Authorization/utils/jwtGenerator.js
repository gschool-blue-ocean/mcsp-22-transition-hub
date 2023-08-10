import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.secret;

const jwtGenerator = (userId) => {
  const payload = {
    user: userId,
  };

  return jwt.sign(payload, secret, { expiresIn: "1hr" });
};

export default jwtGenerator;
