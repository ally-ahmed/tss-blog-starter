import { defineCollection, defineConfig } from "@content-collections/core";

const posts = defineCollection({
  name: "posts",
  directory: "content",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
});

export default defineConfig({
  collections: [posts],
});
