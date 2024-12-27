import { SharedContext } from "@/shared/protocols/context.js";
import { Resolvers } from "@/types/graphql.js";

export function defineResolvers(params: Resolvers<SharedContext>): Resolvers {
  return params;
}
