import globals from "globals";
import { defineFlatConfig } from "eslint-define-config";
import { fixupPluginRules } from "@eslint/compat";
import javascript from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
import configPrettier from "eslint-config-prettier";
import pluginUnicorn from "eslint-plugin-unicorn";
import testingLibrary from "eslint-plugin-testing-library";
import tsEslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import importX from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import promise from "eslint-plugin-promise";
import pluginN from "eslint-plugin-n";

export function extractFromArray(array, key) {
  return array.reduce((obj, next) => {
    return { ...obj, ...next[key] };
  }, {});
}

let allFiles = [
  "**/*.js",
  "**/*.jsx",
  "**/*.mjs",
  "**/*.cjs",
  "**/*.ts",
  "**/*.tsx",
  "**/*.mts",
  "**/*.cts",
];
export default defineFlatConfig([
  {
    ignores: [
      "*.env",
      "*.js",
      "*.md",
      "*.html",

      "**/dist",
      "**/build",
      "**/node_modules",
      "**/coverage",
      "**/.react-router",

      "pnpm-lock.yaml",
      "package-lock.json",
      ".npmrc",
      ".gitignore",
      ".prettierignore",
    ],
  },

  {
    files: allFiles,
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    settings: {
      "import-x/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["tsconfig.json", "./packages/*/tsconfig.json"],
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsEslint.plugin,
      n: pluginN,
      "import-x": importX,
      perfectionist,
      promise,
    },
    rules: {
      ...promise.configs["flat/recommended"].rules,
      ...javascript.configs.recommended.rules,
      "perfectionist/sort-imports": [
        "warn",
        {
          internalPattern: ["@/*"],
          customGroups: {
            type: { react: ["react", "react-*"] },
            value: { react: ["react", "react-*"] },
          },
          groups: [
            "react",
            ["builtin", "builtin-type", "external", "external-type"],
            ["internal", "internal-type"],
            ["parent", "parent-type", "sibling", "sibling-type"],
            ["index", "index-type"],
          ],
        },
      ],
      "import-x/no-cycle": ["warn", { maxDepth: 3 }],
      "import-x/no-self-import": "warn",
      "import-x/export": "warn",
      "import-x/no-duplicates": "warn",
      ...extractFromArray(tsEslint.configs.recommended, "rules"),
      "@typescript-eslint/no-import-type-side-effects": "warn",
      "@typescript-eslint/no-unsafe-function-type": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-wrapper-object-types": "warn",
      // "@typescript-eslint/no-restricted-imports": [
      //   "warn",
      //   {
      //     paths: [
      //       {
      //         name: "@testing-library/react",
      //         message: 'Please use "@/testing-library" instead.',
      //         allowTypeImports: false,
      //       },
      //     ],
      //   },
      // ],
      ...promise.configs["flat/recommended"].rules,
      ...javascript.configs.recommended.rules,
      "no-console": "warn",
      "object-shorthand": "warn",
      "perfectionist/sort-array-includes": "warn",
      "perfectionist/sort-classes": "warn",
      "perfectionist/sort-enums": "warn",
      "perfectionist/sort-exports": "warn",
      "perfectionist/sort-interfaces": "warn",
      "perfectionist/sort-intersection-types": "warn",
      "perfectionist/sort-jsx-props": "warn",
      "perfectionist/sort-maps": "warn",
      "perfectionist/sort-named-exports": "warn",
      "perfectionist/sort-named-imports": "warn",
      "perfectionist/sort-object-types": "warn",
      "perfectionist/sort-objects": "warn",
      "perfectionist/sort-sets": "warn",
      "perfectionist/sort-switch-case": "warn",
      "perfectionist/sort-union-types": "warn",
      "perfectionist/sort-variable-declarations": "warn",
    },
  },

  {
    files: ["**/*.test.tsx", "**/*.spec.tsx", "**/*.test.ts", "**/*.spec.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        vi: false,
      },
    },
    plugins: {
      "testing-library": fixupPluginRules(testingLibrary),
      vitest,
    },
    rules: {
      ...testingLibrary.configs["flat/react"].rules,
      "vitest/expect-expect": "warn",
      "vitest/no-commented-out-tests": "warn",
      "vitest/no-identical-title": "warn",
      "vitest/no-import-node-test": "warn",
      "vitest/require-local-test-context-for-concurrent-snapshots": "warn",
      "vitest/valid-describe-callback": "warn",
      "vitest/valid-expect": "warn",
      "vitest/valid-title": "warn",
    },
  },

  {
    files: [
      "**/*.jsx",
      "**/*.tsx",
      "packages/app/**/*.js",
      "packages/app/**/*.ts",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        document: "readonly",
        navigator: "readonly",
        window: "readonly",
      },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      "jsx-a11y": jsxA11y,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/no-autofocus": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/display-name": "off",
      "react/function-component-definition": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx", ".mdx"] },
      ],
      "react/jsx-props-no-spreading": "off",
      "react/jsx-sort-props": "off",
      "react/no-array-index-key": "off",
      "react/no-unstable-nested-components": ["warn", { allowAsProps: true }],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: { react: { version: "18.3.0" } },
  },

  pluginUnicorn.configs["flat/recommended"],

  {
    languageOptions: {
      globals: {
        ...globals.node,
        console: "readonly",
      },
      ecmaVersion: 5,
      sourceType: "script",
    },
    files: ["packages/server/**/*.ts"],
  },

  {
    files: allFiles,
    rules: {
      "perfectionist/sort-maps": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-global-this": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/prefer-spread": "off",
      "unicorn/filename-case": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-fallthrough": "off",
      "no-restricted-exports": "off",
      "no-shadow": "off",
      "no-use-before-defined": "off",
      "no-unused-vars": "off",
    },
  },

  {
    files: ["**/__mocks__/*.ts", "**/__mocks__/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  configPrettier,
]);
