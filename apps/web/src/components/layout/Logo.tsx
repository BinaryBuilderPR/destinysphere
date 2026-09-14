"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Link
      href="/"
      className="group flex items-center gap-3 select-none transition-opacity hover:opacity-95"
    >
      {/* 12 Zodiac Celestial Emblem Icon */}
      <div
        className="relative flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{
          clipPath: "circle(48.5% at 50% 50%)",
        }}
      >
        <Image
          src={isDark ? "/logo-zodiac-dark.png" : "/logo-zodiac-light.png"}
          alt="DestinySphere 12 Zodiac Wheel"
          width={56}
          height={56}
          priority
          className="h-full w-full object-cover scale-[1.04]"
        />
      </div>

      {/* Brand Typography - Bold & High Contrast */}
      <div className="leading-tight">
        <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-normal text-foreground">
          DestinySphere
        </h1>
        <p className="text-xs tracking-wider text-muted-foreground font-medium font-sans">
          Discover. Understand. Transform.
        </p>
      </div>
    </Link>
  );
}