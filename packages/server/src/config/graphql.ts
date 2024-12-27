import { glob } from "glob";
import { graphqlHTTP, Options } from "koa-graphql";
import type KoaRouter from "koa-router";
import { readFileSync } from "node:fs";
import path from "node:path";

import { mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = readFileSync(
  path.join(import.meta.dirname, "../schema.graphql"),
  { encoding: "utf8" },
);

const routes = glob.sync([
  path.resolve(import.meta.dirname, "../resolvers/**/*-resolver.{js,ts}"),
]);

const modulesPromise = routes.map(async (file) => {
  const module = await import(file);

  return module.default;
});

const options: Options = async (_request, _response, ctx, _params) => {
  const resolvers = await Promise.all(modulesPromise);

  const schema = makeExecutableSchema({
    resolvers: mergeResolvers(resolvers),
    typeDefs,
  });

  return {
    context: ctx,
    rootValue: { request: ctx.request },
    schema,
  };
};

export default function setupGraphQL(router: KoaRouter) {
  router.post("/graphql", graphqlHTTP(options));
}
