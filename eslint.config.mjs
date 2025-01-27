import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";
import pluginHooks from "eslint-plugin-react-hooks"; // Import react-hooks plugin
import pluginRefresh from "eslint-plugin-react-refresh";

/**@type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["coverage", "coverage", "node_modules"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
      // https://github.com/import-js/eslint-import-resolver-typescript#configuration
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginRefresh.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs["flat/recommended"],
  {
    settings: {
      react: {
        version: "detect", // Automatically detects the React version installed in your project
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginHooks,
    },
    rules: {
      // Enable recommended rules for react-hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off",
      ...pluginHooks.configs.recommended.rules,
    },
  },
  // Test-specific configuration moved to the flat config array
  {
    files: ["**/src/**/*.test.{ts,tsx}"], // Target all test files
    rules: {
      "i18next/no-literal-string": "off", // Disable the `no-literal-string` rule for test files
    },
  },
];
