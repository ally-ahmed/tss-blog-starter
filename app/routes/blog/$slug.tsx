import { createFileRoute, redirect, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import mdxCss from "@/styles/mdx.css?url";
import { Mdx } from "@/components/mdx-components";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { getTableOfContents } from "@/lib/toc";
import { TableOfContents } from "@/components/toc";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: () => ({
    allPosts,
  }),
  loader: async ({ params, context: { allPosts } }) => {
    const slug = params.slug;
    const post = allPosts.find((post) => post._meta.path === slug);
    if (!post) {
      throw redirect({
        to: "/blog",
      });
    }

    const toc = await getTableOfContents(post.content);
    return { post, toc };
  },
  head: () => ({
    links: [
      {
        rel: "stylesheet",
        href: mdxCss,
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { post, toc } = Route.useLoaderData();
  return (
    <div className="flex flex-col items-center">
      <main className="">
        <Link
          to="/blog"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[-200px] top-14 hidden xl:inline-flex",
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
        <article className="container relative max-w-3xl">
          <div>
            {post.publishedAt && (
              <time
                dateTime={post.publishedAt}
                className="block text-sm text-muted-foreground"
              >
                Published on {formatDate(post.publishedAt)}
              </time>
            )}
            <h1 className="my-4 inline-block font-heading text-4xl leading-tight lg:text-5xl">
              {post.title}
            </h1>
          </div>
          <Mdx code={post.mdx} />
          <hr className="mt-12" />

          <div className="flex justify-center py-6 lg:py-10">
            <Link
              to="/blog"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              See all posts
            </Link>
          </div>
        </article>
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
            <TableOfContents toc={toc} />
          </div>
        </div>
      </main>
    </div>
  );
}