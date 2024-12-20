import { defineConfig } from "@tanstack/start/config";
import { cloudflare } from "unenv";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    unenv: cloudflare,
    rollupConfig: {
      external: ["node:async_hooks"],
    },
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
