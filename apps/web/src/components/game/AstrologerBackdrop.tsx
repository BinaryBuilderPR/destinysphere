"use client";

import React from "react";
import Image from "next/image";

interface AstrologerBackdropProps {
  currentStage: "intro" | "drawing" | "revealed" | "chat";
}

export function AstrologerBackdrop({ currentStage }: AstrologerBackdropProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* ================= ATMOSPHERIC SEER SANCTUARY LAYER ================= */}
      <div className="absolute inset-0 opacity-40 dark:opacity-55 transition-opacity duration-1000 scale-105">
        <Image
          src="/astrologer-bg.jpg"
          alt="Mystic Altar & Temple"
          fill
          sizes="100vw"
          priority
          className="object-cover object-top filter blur-[0.5px]"
        />
      </div>

      {/* ================= PROMINENT LADY ASTROLOGER SEER PRESENCE ================= */}
      <div className="absolute top-[8%] sm:top-[6%] md:top-[4%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[320px] md:w-[380px] h-[260px] sm:h-[320px] md:h-[380px] flex flex-col items-center justify-center opacity-85 dark:opacity-95 transition-all duration-1000">
        {/* Sacred Golden Aura & Radiance Halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C59758]/35 via-[#D5AE63]/25 to-transparent blur-2xl animate-pulse" style={{ animationDuration: "4s" }} />

        {/* Concentric Celestial Zodiac Halo */}
        <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-dashed border-[#D5AE63]/40 animate-[spin_50s_linear_infinite]" />
        <div className="absolute -inset-8 sm:-inset-10 rounded-full border border-[#C59758]/25 animate-[spin_35s_linear_infinite_reverse]" />

        {/* Lady Astrologer Portrait Portal */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#D5AE63] shadow-[0_0_50px_rgba(213,174,99,0.5)]">
          <Image
            src="/astrologer-avatar.jpg"
            alt="High Astrologer Elena Seer"
            fill
            sizes="256px"
            priority
            className="object-cover object-top filter contrast-[1.05]"
          />
          {/* Subtle gradient vignette on portrait */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020912]/80 via-transparent to-transparent" />
        </div>

        {/* Glowing Title Ribbon below Seer */}
        <div className="relative -mt-4 z-10 px-4 py-1 rounded-full bg-[#0B121B]/90 border border-[#D5AE63]/60 shadow-lg backdrop-blur-md flex items-center gap-1.5">
          <span className="text-[11px] font-serif tracking-widest uppercase text-[#D5AE63] font-bold">
            ✦ HIGH ASTROLOGER ELENA ✦
          </span>
        </div>
      </div>

      {/* ================= RADIAL VIGNETTE OVERLAYS ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7EE]/60 via-[#FAF7EE]/85 to-[#FAF7EE] dark:from-[#020912]/60 dark:via-[#020912]/85 dark:to-[#020912] transition-colors duration-700" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(213,174,99,0.18)_0%,transparent_75%)]" />

      {/* ================= FLOATING CELESTIAL PARTICLES & CANDLE FLICKERS ================= */}
      <div className="absolute inset-0 opacity-50 dark:opacity-75">
        <div className="absolute top-[18%] left-[12%] w-2 h-2 rounded-full bg-[#D5AE63] animate-ping" style={{ animationDuration: "3.5s" }} />
        <div className="absolute top-[32%] right-[14%] w-2.5 h-2.5 rounded-full bg-[#C59758] animate-ping" style={{ animationDuration: "4.5s" }} />
        <div className="absolute top-[60%] left-[8%] w-2 h-2 rounded-full bg-[#D5AE63] animate-pulse" style={{ animationDuration: "2.8s" }} />
        <div className="absolute top-[52%] right-[10%] w-2 h-2 rounded-full bg-[#D5AE63] animate-ping" style={{ animationDuration: "5s" }} />
      </div>

      {/* Altar Sacred Diya / Candle Flame Warmth */}
      <div className="absolute bottom-16 left-[15%] w-32 h-32 rounded-full bg-[#E59866]/25 blur-3xl animate-pulse" style={{ animationDuration: "2s" }} />
      <div className="absolute bottom-16 right-[15%] w-32 h-32 rounded-full bg-[#E59866]/25 blur-3xl animate-pulse" style={{ animationDuration: "2.4s" }} />
    </div>
  );
}
