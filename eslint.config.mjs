import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";
import reactHooks from "eslint-plugin-react-hooks"; // Import react-hooks plugin

/**@type {import('eslint').Linter.Config[]} */ export default [
  {
    ignores: ["vitest.config.mts"], // Replaced `ignorePatterns` with `ignores`
    files: ["/*.{js,mjs,cjs,ts,jsx,tsx}"], // For all project files
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.serviceworker },
    },
  },
  pluginJs.configs.recommended,
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
    files: ["/*.{ts,tsx}"], // Target all TypeScript and TSX files
    plugins: {
      "react-hooks": reactHooks, // Define the react-hooks plugin properly
    },
    rules: {
      // Enable recommended rules for react-hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
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
