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
      <div className="h-9 w-[70px] rounded-full border border-transparent opacity-0" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle light and dark theme"
      className="relative flex h-9 w-[70px] items-center justify-between rounded-full border border-[#E5DFD0] dark:border-[#D5AE63] bg-[#FFFDF8] dark:bg-[#0B121B] px-2 transition-all duration-300 select-none shadow-2xs hover:shadow-xs cursor-pointer"
    >
      {/* Sliding Active Pill Knob */}
      <span
        className={`absolute top-1 h-7 w-7 rounded-full transition-all duration-300 ease-out shadow-2xs ${isDark
            ? "left-1 bg-[#151D2A]"
            : "left-[37px] bg-[#FAF7EE] border border-[#E5DFD0]/60"
          }`}
      />

      {/* Moon Icon (Left side) */}
      <Moon
        className={`relative z-10 h-4 w-4 transition-all duration-200 ${isDark
            ? "text-[#D5AE63]"
            : "text-[#8A847A]/70"
          }`}
      />

      {/* Sun Icon (Right side) */}
      <Sun
        className={`relative z-10 h-4 w-4 transition-all duration-200 ${!isDark
            ? "text-[#C59758]"
            : "text-[#AAA7A1]/40"
          }`}
      />
    </button>
  );
}