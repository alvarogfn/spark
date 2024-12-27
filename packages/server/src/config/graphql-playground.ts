import graphqlKoaPlayground from "graphql-playground-middleware-koa";
import type KoaRouter from "koa-router";

const koaPlayground = graphqlKoaPlayground.default;

export default function setupGraphQL(router: KoaRouter) {
  router.get("/playground", koaPlayground({ endpoint: "/graphql" }));
}
