import antfu from "@antfu/eslint-config";
import pluginRouter from "@tanstack/eslint-plugin-router";

export default antfu(
  {
    formatters: true,
    react: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["**/routeTree.gen.ts"],
  },
  ...pluginRouter.configs["flat/recommended"],
  {
    rules: {
      "no-console": ["warn"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
      "style/jsx-one-expression-per-line": ["off"],
      "style/arrow-parens": ["off"],
      "style/multiline-ternary": ["off"],
      "react-refresh/only-export-components": ["off"],
    },
  },
);
