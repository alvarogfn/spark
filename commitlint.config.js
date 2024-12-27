export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-empty": [2, "always"],
    "footer-empty": [2, "always"],
    "scope-enum": [2, "always", ["app", "server", "core"]],
    "scope-empty": [2, "never"],
  },
};
