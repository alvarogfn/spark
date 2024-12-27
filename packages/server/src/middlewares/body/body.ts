import type { Middleware } from "koa";
import { koaBody } from "koa-body";

export default function cors(): Middleware {
  return koaBody({ json: true, urlencoded: true });
}
