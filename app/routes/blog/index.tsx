import { BlogList } from "@/components/blog-list";
import { createFileRoute, Link } from "@tanstack/react-router";
import { sortedPosts } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <h3 className="mb-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        My Blog
      </h3>
      <BlogList posts={sortedPosts} />
    </section>
  );
}
