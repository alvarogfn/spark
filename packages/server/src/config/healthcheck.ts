import type Koa from "koa";
import mount from "koa-mount";

import { HttpStatusCode } from "@/shared/protocols/http-client.js";

export default function setupHealthCheck(app: Koa): void {
  app.use(
    mount("/healthcheck", (ctx) => {
      ctx.status = HttpStatusCode.ok;
      ctx.body = { status: "Running :)" };
    }),
  );
}
