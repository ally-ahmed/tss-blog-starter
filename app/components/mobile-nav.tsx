import { HomeIcon, Package, SunMoon, Notebook } from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Blog",
    icon: (
      <Notebook className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/blog",
  },
];

export function MobileNav({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn(
        "absolute bottom-2 left-1/2 max-w-full -translate-x-1/2",
        className,
      )}
    >
      <Dock className="items-end pb-3 bg-background border">
        {data.map((item, idx) => (
          <Link key={idx} to={item.href}>
            <DockItem className="aspect-square rounded-full">
              <DockLabel className="bg-primary/90 text-primary-foreground">
                {item.title}
              </DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}

        <DockItem className="aspect-square rounded-full">
          <DockLabel className="bg-primary/90 text-primary-foreground">
            Theme
          </DockLabel>
          <DockIcon>
            <SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}
