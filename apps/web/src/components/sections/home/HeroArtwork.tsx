"use client";

import Image from "next/image";

export default function HeroArtwork() {
  return (
    <div className="relative mx-auto flex w-full max-w-[440px] sm:max-w-[560px] lg:max-w-[620px] items-center justify-center select-none">
      {/* Generated Artwork Container with organic floating motion */}
      <div className="relative w-full transition-all duration-300 animate-float-slow flex items-center justify-center">
        {/* Light Mode Hero Illustration */}
        <div className="block dark:hidden w-full">
          <Image
            src="/hero-generated-light.png"
            alt="DestinySphere Celestial Tarot Guidance"
            width={1024}
            height={1024}
            priority
            unoptimized
            style={{ width: "100%", height: "auto" }}
            className="object-contain pointer-events-none"
          />
        </div>

        {/* Dark Mode Hero Illustration */}
        <div className="hidden dark:block w-full">
          <Image
            src="/hero-generated-dark.png"
            alt="DestinySphere Celestial Midnight Tarot Guidance"
            width={1024}
            height={1024}
            priority
            unoptimized
            style={{ width: "100%", height: "auto" }}
            className="object-contain pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
