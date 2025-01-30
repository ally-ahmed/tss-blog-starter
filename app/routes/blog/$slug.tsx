import mdxCss from "@/styles/mdx.css?url";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

import { Mdx } from "@/components/mdx-components";
import { buttonVariants } from "@/components/ui/button";
import { seo } from "@/lib/seo";
import { getTableOfContents } from "@/lib/toc";
import { cn, formatDate } from "@/lib/utils";
import { allPosts } from "content-collections";

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
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          ...seo({
            title: `${loaderData?.post.title} | TSS Blog Starter`,
            description: loaderData?.post.description,
          }),
        ]
      : [],
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
  const { post } = Route.useLoaderData();
  return (
    <section className="">
      <article className="container relative max-w-3xl">
        <Link
          to="/blog"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[-200px] top-30 hidden xl:inline-flex",
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
        {/* TODO:  */}
        {/* <div className="hidden text-sm xl:block"> */}
        {/*   <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10"> */}
        {/*     <TableOfContents toc={toc} /> */}
        {/*   </div> */}
        {/* </div> */}
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
          <Link to="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </Link>
        </div>
      </article>
    </section>
  );
}
