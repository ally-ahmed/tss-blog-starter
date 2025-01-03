import { formatDate } from "@/lib/utils";
import type { Posts } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function BlogList({ posts }: { posts: Posts }) {
  return (
    <ul className="gap-4 my-8">
      {posts.map((post) => (
        <Link
          to="/blog/$slug"
          params={{ slug: post._meta.path }}
          key={post._meta.path}
          className="flex flex-col space-y-1 mb-4"
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="tabular-nums text-muted-foreground">
              {formatDate(post.publishedAt)}
            </p>
            <p className="tracking-tight">{post.title}</p>
          </div>
        </Link>
      ))}
    </ul>
  );
}
