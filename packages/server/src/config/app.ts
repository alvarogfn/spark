import Koa from "koa";
import KoaRouter from "koa-router";

import setupPlayground from "./graphql-playground.js";
import setupGraphQL from "./graphql.js";
import setupHealthCheck from "./healthcheck.js";
import setupMiddlewares from "./middlewares.js";
import setupRoutes from "./routes.js";

const app = new Koa();
const router = new KoaRouter();

setupMiddlewares(app);
setupHealthCheck(app);
setupGraphQL(router);
setupPlayground(router);
setupRoutes(app, router);

export default app;
