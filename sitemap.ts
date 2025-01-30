import type { ParseRoute } from "@tanstack/react-router";
import type { Sitemap } from "tanstack-router-sitemap";

import type { routeTree } from "@/routeTree.gen";

// This will become a string literal union of all your routes
type MyRoutes = ParseRoute<typeof routeTree>["fullPath"];

// Define your sitemap
export const sitemap: Sitemap<MyRoutes> = {
  siteUrl: "https://tss-blog-starter.pages.dev",
  defaultPriority: 0.5,
  routes: {
    "/": {
      priority: 1,
      changeFrequency: "daily",
    },
    "/blog": {
      priority: 1,
      changeFrequency: "daily",
    },
    // Dynamic route example
    "/blog/$slug": async () => {
      const { allPosts } = await import("./.content-collections/generated");
      return allPosts.map((post) => ({
        path: `/blog/${post._meta.path}`,
        priority: 0.8,
        changeFrequency: "daily",
      }));
    },
  },
};
