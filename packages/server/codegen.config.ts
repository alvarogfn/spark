import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "src/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  schema: "./src/schema.graphql",
};

export default config;
