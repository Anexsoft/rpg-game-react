import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginImport from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: eslintPluginImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            // 🔹 Built-in Node.js modules (fs, path, etc.)
            { pattern: "node:*", group: "builtin", position: "before" },
            { pattern: "fs", group: "builtin", position: "before" },
            { pattern: "path", group: "builtin", position: "before" },

            // 🔹 Third-party packages
            { pattern: "react", group: "external", position: "before" },
            { pattern: "react-dom", group: "external", position: "before" },
            { pattern: "*", group: "external", position: "before" },

            // 🔸 Internal aliases (custom modules)
            { pattern: "@core/**", group: "internal", position: "before" },
            { pattern: "@shared/**", group: "internal", position: "after" },
            { pattern: "@layout/**", group: "internal", position: "after" },
            { pattern: "@ui/**", group: "internal", position: "after" },
            { pattern: "@resources/**", group: "internal", position: "after" },
            { pattern: "@scenes/**", group: "internal", position: "after" },
            { pattern: "@npc/**", group: "internal", position: "after" },
            { pattern: "@player/**", group: "internal", position: "after" },
            { pattern: "@enemy/**", group: "internal", position: "after" },
            { pattern: "@weapons/**", group: "internal", position: "after" },
            { pattern: "@armor/**", group: "internal", position: "after" },
            {
              pattern: "@consumables/**",
              group: "internal",
              position: "after",
            },
            { pattern: "@src/**", group: "internal", position: "after" },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
