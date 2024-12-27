import dotenv from "dotenv";

const MODE = process.env["MODE"]?.toLocaleLowerCase() ?? "dev";

dotenv.config({
  path: [`.env.${MODE}`, ".env"],
});

export default {
  HOSTNAME: process.env["HOSTNAME"] ?? "localhost",
  MODE: process.env["MODE"] ?? "dev",
  MONGO_SVR: process.env["MONGO_SVR"],
  PORT: process.env["PORT"] ?? 3000,
};
