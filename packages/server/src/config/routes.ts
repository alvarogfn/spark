import type Koa from "koa";
import type KoaRouter from "koa-router";

export default function setupRoutes(app: Koa, router: KoaRouter) {
  router.get("/", (ctx) => {
    ctx.body = {
      graphql: "/graphql",
      healthcheck: "/healthcheck",
      playground: "/playground",
    };
  });

  app.use(router.routes()).use(router.allowedMethods());
}
