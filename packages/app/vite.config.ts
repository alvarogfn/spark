import { reactRouter } from "@react-router/dev/vite";

import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import relay from "vite-plugin-relay";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  build: { target: "esnext" },
  css: { postcss: { plugins: [tailwindcss, autoprefixer] } },
  optimizeDeps: { esbuildOptions: { target: "esnext" } },
  plugins: [relay, reactRouter(), tsconfigPaths()],
});
