import contentCollections from "@content-collections/vinxi";
import { defineConfig } from "@tanstack/start/config";
import { FontaineTransform } from "fontaine";
import path from "node:path";
import { generateSitemap } from "tanstack-router-sitemap";
import viteTsConfigPaths from "vite-tsconfig-paths";

import { sitemap } from "./sitemap";

export default defineConfig({
  server: {
    preset: "vercel",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
    hooks: {
      "prerender:routes": async (routes) => {
        // add each post path to the routes set
        const { allPosts } = await import("./.content-collections/generated");
        allPosts.forEach((post) => {
          routes.add(`/blog/${post._meta.path}`);
        });
      },
    },
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      contentCollections(),
      FontaineTransform.vite({
        fallbacks: ["Arial"],
        resolvePath: (id) => {
          return new URL(
            path.join(path.dirname(import.meta.url), "node_modules", id),
          );
        },
      }),
      generateSitemap(sitemap),
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
