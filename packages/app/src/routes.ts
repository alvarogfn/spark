import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("/", "./pages/Home/HomePage.tsx"),

  route("/sign-up", "./pages/SignUp/SignUpPage.tsx"),

  // pattern ^           ^ module file
] satisfies RouteConfig;
