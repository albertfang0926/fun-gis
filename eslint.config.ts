import js from "@eslint/js"
import { defineConfig } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import pluginVue from "eslint-plugin-vue"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  eslintConfigPrettier,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier: eslintPluginPrettier
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "prettier/prettier": "error"
    }
  }
])
