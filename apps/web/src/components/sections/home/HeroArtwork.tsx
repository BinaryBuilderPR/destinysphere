"use client";

import Image from "next/image";

export default function HeroArtwork() {
  return (
    <div className="relative mx-auto flex w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[530px] items-center justify-center select-none">
      {/* Ambient Celestial Glow - Dark mode only so light mode remains clean & crisp */}
      <div className="hidden dark:block absolute inset-2 rounded-full blur-3xl pointer-events-none bg-[#D5AE63]/15 animate-pulse-glow transition-colors duration-500" />

      {/* Generated Artwork Container with organic floating motion */}
      <div className="relative w-full transition-all duration-300 animate-float-slow">
        {/* Light Mode Hero Illustration - 100% Crisp & Clean */}
        <div className="block dark:hidden">
          <Image
            src="/hero-generated-light.png"
            alt="DestinySphere Celestial Tarot Guidance"
            width={530}
            height={530}
            priority
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 530px"
            style={{ width: "100%", height: "auto" }}
            className="object-contain pointer-events-none"
          />
        </div>

        {/* Dark Mode Hero Illustration */}
        <div className="hidden dark:block">
          <Image
            src="/hero-generated-dark.png"
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
