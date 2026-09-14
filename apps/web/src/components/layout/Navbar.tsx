import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-background/85 backdrop-blur-md transition-colors duration-200">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo />

          <NavLinks />

          <div className="flex items-center gap-3">
            {/* Pill Capsule Theme Toggle */}
            <ThemeToggle />

            {/* Login Button matching exact reference screenshot */}
            <Link href="/login" className="hidden sm:block">
              <button className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 shadow-2xs bg-[#B9684D] hover:bg-[#A8583E] text-white dark:bg-transparent dark:border dark:border-[#D5AE63] dark:text-[#D5AE63] dark:hover:bg-[#D5AE63]/10 cursor-pointer">
                Login
              </button>
            </Link>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}