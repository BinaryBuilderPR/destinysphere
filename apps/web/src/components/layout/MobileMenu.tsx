"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ChevronRight, User } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Mobile Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-background/80 text-foreground hover:bg-muted transition-colors cursor-pointer"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Slide-over Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[85vw] max-w-sm bg-background border-r border-[var(--border)] p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        )}
      >
        <div>
          {/* Header with Logo and Close */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
            <Logo />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-background text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-1.5">
            {navigation.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200",
                    active
                      ? "bg-[#B9684D]/10 dark:bg-[#D5AE63]/15 text-[#B9684D] dark:text-[#D5AE63] font-bold"
                      : "text-foreground hover:bg-[var(--card)] hover:text-[#B9684D] dark:hover:text-[#D5AE63]"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions inside Drawer */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col gap-4">
          {/* Appearance Theme Switcher */}
          <div className="flex items-center justify-between px-2 py-1">
            <span className="text-sm font-semibold text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>

          {/* Login Button */}
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full h-11 rounded-full border border-[#B9684D] dark:border-[#D5AE63] text-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#B9684D]/10 dark:hover:bg-[#D5AE63]/10 transition-colors cursor-pointer">
              <User className="h-4 w-4 text-[#B9684D] dark:text-[#D5AE63]" />
              <span>Login / Account</span>
            </button>
          </Link>

          {/* Primary CTA */}
          <Link href="/readings" onClick={() => setIsOpen(false)}>
            <button className="w-full h-11 rounded-full bg-[#B9684D] hover:bg-[#A8583E] dark:bg-[#D5AE63] dark:hover:bg-[#C49E53] dark:text-[#020912] text-white font-semibold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <Sparkles className="h-4 w-4" />
              <span>Explore Readings</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}