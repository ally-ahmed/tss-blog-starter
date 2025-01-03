import { BlogList } from "@/components/blog-list";
import { sortedPosts } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <section>
      <h3 className="mb-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        About
      </h3>
      <p className="mb-4 text-balance">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
        voluptates id, tenetur ad, consectetur quasi, distinctio nulla quos a
        voluptatem non quis velit! Eius illo, nesciunt tempora in et hic! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam quis ab
        earum, eveniet excepturi accusamus culpa animi ipsum, labore facilis
        iure asperiores corrupti dolores, dolorem fuga sed debitis ex!
      </p>
      <BlogList posts={sortedPosts} />
    </section>
  );
}
