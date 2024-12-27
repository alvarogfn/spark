/* eslint-disable no-console, unicorn/prefer-top-level-await */
/* istanbul ignore file -- @preserve */

// import mongoose from "mongoose";

import app from "./config/app.js";
import env from "./config/env.js";

async function startServer() {
  // TODO: replace with yup
  // if (!env.MONGO_SVR) {
  //   throw new Error("MONGO_SVR is not defined");
  // }
  //
  // await mongoose.connect(env.MONGO_SVR);
  //
  // mongoose.connection.once("open", () => {
  //   console.log("✅ Connected to database");
  // });

  const listener = app.listen(Number(env.PORT), env.HOSTNAME, () => {
    console.log(
      `Server running at http://${env.HOSTNAME}:${env.PORT}/playground`,
    );
  });

  listener.on("error", (err) => {
    throw err;
  });
}

startServer().catch((error) => console.error(error));
