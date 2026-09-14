"use client";

import Image from "next/image";

export default function HeroArtwork() {
  return (
    <div className="relative mx-auto flex w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[530px] items-center justify-center select-none">
      {/* Ambient Celestial Glow */}
      <div className="absolute -inset-4 rounded-full blur-3xl pointer-events-none bg-accent-gold/15 dark:bg-[#D5AE63]/15 transition-colors duration-500" />

      {/* Generated Artwork Container with feathered radial mask */}
      <div
        className="relative w-full transition-all duration-300"
        style={{
          maskImage: "radial-gradient(circle at center, black 65%, rgba(0,0,0,0.9) 78%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 65%, rgba(0,0,0,0.9) 78%, transparent 100%)",
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
            className="object-contain mix-blend-multiply pointer-events-none"
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
            className="object-contain pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
