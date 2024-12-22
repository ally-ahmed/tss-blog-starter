import { Button } from "@/components/ui/button";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
        Hello World
      </h1>
      <p>Another paragraph</p>
      <Button>My Button</Button>
      <ul>
        {allPosts.map((post) => (
          <li key={post._meta.path}>
            <a href={`/posts/${post._meta.path}`}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
