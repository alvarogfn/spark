import type Koa from "koa";

import body from "@/middlewares/body/body.js";
import cors from "@/middlewares/cors/cors.js";
import logger from "@/middlewares/logger/logger.js";

export default function setupMiddlewares(app: Koa): void {
  app.use(body());
  app.use(cors());
  app.use(logger());
}
