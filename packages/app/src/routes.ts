import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("/", "./pages/index.tsx"),

  // pattern ^           ^ module file
] satisfies RouteConfig;
