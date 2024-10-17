import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier"; // Importar plugin de Prettier
import prettierConfig from "eslint-config-prettier"; // Importar configuración de Prettier

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  prettierConfig, // Desactiva las reglas que pueden entrar en conflicto con Prettier
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Aplica Prettier como una regla de ESLint
    },
  },
];
