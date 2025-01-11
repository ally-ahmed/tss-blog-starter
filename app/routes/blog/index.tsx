import { createFileRoute } from "@tanstack/react-router";

import { BlogList } from "@/components/blog-list";
import { seo } from "@/lib/seo";
import { sortedPosts } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      ...seo({
        title: "Blog | TSS Blog Starter",
      }),
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <h3 className="mb-8 scroll-m-20 text-2xl font-semibold tracking-tight font-heading">
        My Blog
      </h3>
      <BlogList posts={sortedPosts} />
    </section>
  );
}
