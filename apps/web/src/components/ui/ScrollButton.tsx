"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollButton() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const scrollToPosition = () => {
    if (scrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.getElementById("readings");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToPosition}
      aria-label={scrolled ? "Scroll to top" : "Scroll to content"}
      className={cn(
        "fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#EBE6DA] dark:border-[#D5AE63]/30 bg-white/90 dark:bg-[#0B121B]/90 backdrop-blur-md shadow-lg text-[#B9684D] dark:text-[#D5AE63] transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-[#C59758] active:scale-95 cursor-pointer group"
      )}
    >
      {/* Subtle Celestial Glow on Hover */}
      <div className="absolute inset-0 rounded-full bg-[#C59758]/10 dark:bg-[#D5AE63]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      {scrolled ? (
        <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      ) : (
        <ArrowDown className="h-5 w-5 transition-transform duration-200 group-hover:translate-y-0.5" />
      )}
    </button>
  );
}

