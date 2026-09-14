"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ChevronRight, User } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const drawerContent = (
    <div className="lg:hidden">
      {/* Backdrop Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 z-[9998] bg-black/75 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Solid Opaque Slide-over Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-[9999] w-[85vw] max-w-sm bg-[#FAF7EE] dark:bg-[#020912] border-r border-[#EBE6DA] dark:border-[#D5AE63]/25 p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out touch-auto",
          isOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Header with Logo and Close */}
          <div className="flex items-center justify-between pb-6 border-b border-[#EBE6DA] dark:border-[#D5AE63]/20 shrink-0">
            <div onClick={() => setIsOpen(false)}>
              <Logo />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBE6DA] dark:border-[#D5AE63]/30 bg-white dark:bg-[#0B121B] text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer touch-manipulation"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-2">
            {navigation.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 rounded-2xl text-[16px] font-semibold transition-all duration-200 touch-manipulation",
                    active
                      ? "bg-[#B9684D]/15 dark:bg-[#D5AE63]/20 text-[#B9684D] dark:text-[#D5AE63] font-bold"
                      : "text-foreground hover:bg-white/80 dark:hover:bg-[#0B121B] hover:text-[#B9684D] dark:hover:text-[#D5AE63] active:bg-muted"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              );
            })}
          </nav>

          {/* Spacer */}
          <div className="flex-1 min-h-6" />

          {/* Footer Actions inside Drawer */}
          <div className="pt-6 border-t border-[#EBE6DA] dark:border-[#D5AE63]/20 flex flex-col gap-3.5 shrink-0">
            {/* Appearance Theme Switcher */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white dark:bg-[#0B121B] border border-[#EBE6DA] dark:border-[#D5AE63]/25">
              <span className="text-sm font-semibold text-foreground">Appearance Theme</span>
              <ThemeToggle />
            </div>

            {/* Login Button */}
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full">
              <button
                type="button"
                className="w-full h-12 rounded-full border border-[#B9684D] dark:border-[#D5AE63] text-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#B9684D]/10 dark:hover:bg-[#D5AE63]/15 active:scale-98 transition-all cursor-pointer touch-manipulation"
              >
                <User className="h-4 w-4 text-[#B9684D] dark:text-[#D5AE63]" />
                <span>Login / Sign In</span>
              </button>
            </Link>

            {/* Primary Action Button */}
            <Link href="/readings" onClick={() => setIsOpen(false)} className="w-full">
              <button
                type="button"
                className="w-full h-12 rounded-full bg-[#B9684D] hover:bg-[#A8583E] dark:bg-[#D5AE63] dark:hover:bg-[#C49E53] dark:text-[#020912] text-white font-semibold text-sm shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
              >
                <Sparkles className="h-4 w-4" />
                <span>Explore Sacred Readings</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      {/* Mobile Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBE6DA] dark:border-[#D5AE63]/30 bg-white dark:bg-[#0B121B] text-foreground hover:bg-muted active:scale-90 transition-all cursor-pointer touch-manipulation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Render Drawer into document.body */}
      {mounted && typeof document !== "undefined" && createPortal(drawerContent, document.body)}
    </div>
  );
}