"use client";

import Image from "next/image";

export default function HeroArtwork() {
  return (
    <div className="relative mx-auto flex w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[530px] items-center justify-center select-none">
      {/* Ambient Pulsing Celestial Glow */}
      <div className="absolute -inset-8 rounded-full blur-3xl pointer-events-none bg-[#C59758]/20 dark:bg-[#D5AE63]/25 animate-pulse-glow transition-colors duration-500" />

      {/* Rotating Sacred Constellation Ring */}
      <div className="absolute -inset-6 rounded-full border border-dashed border-[#C59758]/30 dark:border-[#D5AE63]/30 animate-rotate-slow pointer-events-none" />

      {/* Generated Artwork Container with feathered radial mask & floating motion */}
      <div
        className="relative w-full transition-all duration-300 animate-float-slow"
        style={{
          maskImage: "radial-gradient(circle at center, black 68%, rgba(0,0,0,0.9) 82%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 68%, rgba(0,0,0,0.9) 82%, transparent 100%)",
        }}
      >
        {/* Light Mode Hero Illustration */}
        <div className="block dark:hidden">
          <Image
            src="/hero-generated-light.jpg"
            alt="DestinySphere Celestial Tarot Guidance"
            width={530}
            height={530}
            priority
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 530px"
            style={{ width: "100%", height: "auto" }}
            className="object-contain mix-blend-multiply pointer-events-none drop-shadow-[0_15px_35px_rgba(197,151,88,0.25)]"
          />
        </div>

        {/* Dark Mode Hero Illustration */}
        <div className="hidden dark:block">
          <Image
            src="/hero-generated-dark.jpg"
            alt="DestinySphere Celestial Midnight Tarot Guidance"
            width={530}
            height={530}
            priority
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 530px"
            style={{ width: "100%", height: "auto" }}
            className="object-contain pointer-events-none drop-shadow-[0_15px_45px_rgba(213,174,99,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}
