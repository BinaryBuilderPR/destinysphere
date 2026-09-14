"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function HeroArtwork() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative mx-auto flex w-full max-w-[480px] lg:max-w-[530px] aspect-square items-center justify-center select-none" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative mx-auto flex w-full max-w-[480px] lg:max-w-[530px] items-center justify-center select-none">
      {/* Ambient Celestial Glow */}
      <div
        className={`absolute -inset-4 rounded-full blur-3xl pointer-events-none transition-colors duration-500 ${
          isDark ? "bg-[#D5AE63]/15" : "bg-[var(--accent-gold)]/10"
        }`}
      />

      {/* Generated Artwork Container */}
      <div
        className="relative w-full transition-all duration-300"
        style={{
          maskImage: "radial-gradient(circle at center, black 65%, rgba(0,0,0,0.9) 78%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 65%, rgba(0,0,0,0.9) 78%, transparent 100%)",
        }}
      >
        {isDark ? (
          <Image
            key="dark-hero"
            src="/hero-generated-dark.jpg"
            alt="DestinySphere Celestial Midnight Tarot Guidance"
            width={530}
            height={530}
            priority
            style={{ width: "100%", height: "auto" }}
            className="object-contain pointer-events-none"
          />
        ) : (
          <Image
            key="light-hero"
            src="/hero-generated-light.jpg"
            alt="DestinySphere Celestial Tarot Guidance"
            width={530}
            height={530}
            priority
            style={{ width: "100%", height: "auto" }}
            className="object-contain mix-blend-multiply pointer-events-none"
          />
        )}
      </div>
    </div>
  );
}
