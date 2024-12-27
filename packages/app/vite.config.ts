import { reactRouter } from "@react-router/dev/vite";

import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig, loadEnv } from "vite";
import relay from "vite-plugin-relay";
import tsconfigPaths from "vite-tsconfig-paths";
import { z } from "zod";

export default defineConfig(({ mode }) => {
  const env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  const port = Number(env.PORT ?? "5173");

  return {
    build: { target: "esnext" },
    css: { postcss: { plugins: [tailwindcss, autoprefixer] } },
    envPrefix: "PUBLIC_",
    optimizeDeps: { esbuildOptions: { target: "esnext" } },
    plugins: [relay, reactRouter(), tsconfigPaths()],
    server: { port },
  };
});
