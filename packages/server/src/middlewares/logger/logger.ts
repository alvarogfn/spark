/* istanbul ignore file -- @preserve */

import morgan from "koa-morgan";
import { IncomingMessage } from "node:http";

function skip(req: IncomingMessage) {
  return req.body?.operationName === "IntrospectionQuery";
}

export default function logger(format?: string) {
  return morgan(
    format ?? ":method :status :res[content-length]kb - :response-time ms",
    { skip },
  );
}
