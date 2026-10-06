import js from "@eslint/js";
import html from "eslint-plugin-html";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.html"],
    plugins: { html },
    languageOptions: {
      sourceType: "script",
      globals: globals.browser,
    },
  },
];
