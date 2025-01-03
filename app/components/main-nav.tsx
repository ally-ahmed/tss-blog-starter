import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className={cn("lg:sticky mb-16", className)}>
      <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
        <div className="flex flex-row space-x-0 pr-10">
          <Link
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            to="/"
          >
            Home
          </Link>
          <Link
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            to="/blog"
          >
            {" "}
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}