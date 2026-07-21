import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <NavLinks />

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button variant="ghost">
              Login
            </Button>

            <Button>
              Get Reading
            </Button>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}