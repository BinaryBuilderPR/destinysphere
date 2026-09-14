"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-16 rounded-full border border-[var(--border)] opacity-0" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle light and dark theme"
      className="relative flex h-8 w-16 items-center justify-between rounded-full border border-[#E5DFD0] dark:border-[#D5AE63]/70 bg-[#FFFDF8] dark:bg-[#0B121B] px-1.5 transition-all duration-300 select-none shadow-2xs hover:shadow-xs cursor-pointer"
    >
      {/* Sliding Active Pill Knob */}
      <span
        className={`absolute top-1 h-6 w-6 rounded-full transition-all duration-300 ${isDark
            ? "left-1 bg-[#1A2332] border border-[#D5AE63]/30 shadow-2xs"
            : "left-[34px] bg-[#EFE9DC] border border-[#E5DFD0] shadow-2xs"
          }`}
      />

      {/* Moon Icon (Left side) */}
      <Moon
        className={`relative z-10 h-3.5 w-3.5 transition-all duration-200 ${isDark
            ? "text-[#D5AE63] scale-105"
            : "text-[#8A847A] opacity-60"
          }`}
      />

      {/* Sun Icon (Right side) */}
      <Sun
        className={`relative z-10 h-3.5 w-3.5 transition-all duration-200 ${!isDark
            ? "text-[#C59758] scale-105"
            : "text-[#8A847A] opacity-40"
          }`}
      />
    </button>
  );
}