import { defineConfig } from "@tanstack/start/config";
import { cloudflare } from "unenv";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    unenv: cloudflare,
    rollupConfig: {
      external: ["node:async_hooks"],
    },
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
  react: {
    babel: {
      plugins: [
        [
          "babel-plugin-react-compiler",
          {
            target: "19",
          },
        ],
      ],
    },
  },
});
