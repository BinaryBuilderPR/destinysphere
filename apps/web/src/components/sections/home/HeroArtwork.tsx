"use client";

import Image from "next/image";

export default function HeroArtwork() {
  return (
    <div className="relative mx-auto flex w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[530px] items-center justify-center select-none">
      {/* Ambient Pulsing Celestial Glow */}
      <div className="absolute -inset-8 rounded-full blur-3xl pointer-events-none bg-[#C59758]/20 dark:bg-[#D5AE63]/25 animate-pulse-glow transition-colors duration-500" />

      {/* Rotating Sacred Constellation Ring */}
      <div className="absolute -inset-6 rounded-full border border-dashed border-[#C59758]/30 dark:border-[#D5AE63]/30 animate-rotate-slow pointer-events-none" />

      {/* Generated Artwork Container with organic floating motion */}
      <div className="relative w-full transition-all duration-300 animate-float-slow">
        {/* Light Mode Hero Illustration - Crystal Clear Transparent PNG */}
        <div className="block dark:hidden">
          <Image
            src="/hero-generated-light.png"
            alt="DestinySphere Celestial Tarot Guidance"
            width={530}
            height={530}
            priority
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 530px"
            style={{ width: "100%", height: "auto" }}
            className="object-contain pointer-events-none drop-shadow-[0_12px_30px_rgba(197,151,88,0.2)]"
          />
        </div>

        {/* Dark Mode Hero Illustration - Crystal Clear Transparent PNG */}
        <div className="hidden dark:block">
          <Image
            src="/hero-generated-dark.png"
            alt="DestinySphere Celestial Midnight Tarot Guidance"
            width={530}
            height={530}
            priority
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 530px"
            style={{ width: "100%", height: "auto" }}
            className="object-contain pointer-events-none drop-shadow-[0_15px_40px_rgba(213,174,99,0.25)]"
          />
        </div>
      </div>
    </div>
  );
}
