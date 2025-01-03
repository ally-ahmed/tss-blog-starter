import { MobileNav } from "@/components/mobile-nav";
import { MainNav } from "@/components/main-nav";

export function Header() {
  return (
    <>
      <MainNav className="hidden md:block" />
      <MobileNav className="md:hidden" />
    </>
  );
}
