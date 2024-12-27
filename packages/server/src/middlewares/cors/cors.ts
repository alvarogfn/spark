import type { Middleware } from "koa";

import koaCors from "@koa/cors";

export default function cors(): Middleware {
  return koaCors({});
}
