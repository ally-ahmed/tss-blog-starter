import { cn } from "@/lib/utils";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center justify-between gap-4 px-8 sm:flex md:flex-row md:gap-2 md:px-0 ">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MIT Licensed.
          </p>
        </div>
      </div>
    </footer>
  );
}
