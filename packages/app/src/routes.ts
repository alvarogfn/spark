import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("/", "./pages/Home/HomePage.tsx", []),
  route("/sign-up", "./pages/SignUp/SignUpPage.tsx"),
  route("/sign-in", "./pages/SignIn/SignInPage.tsx"),
] satisfies RouteConfig;
