import contentCollections from "@content-collections/vinxi";
import { defineConfig } from "@tanstack/start/config";
import { FontaineTransform } from "fontaine";
import path from "node:path";
import { cloudflare } from "unenv";
import wasm from "vite-plugin-wasm";
import wasmModuleWorkers from "vite-plugin-wasm-module-workers";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    unenv: cloudflare,
    rollupConfig: {
      external: ["node:async_hooks"],
    },
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
    experimental: {
      wasm: true,
    },
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      wasm(),
      wasmModuleWorkers(),
      contentCollections(),
      FontaineTransform.vite({
        fallbacks: ["Arial", "Helvetica Neue"],
        resolvePath: (id) => {
          return new URL(
            path.join(path.dirname(import.meta.url), "node_modules", id),
          );
        },
      }),
    ],
    // build: {
    //   minify: false,
    // },
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
