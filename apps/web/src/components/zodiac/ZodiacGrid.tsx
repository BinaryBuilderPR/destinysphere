"use client";

import React, { useState } from "react";
import { ZODIAC_SIGNS, ZodiacSign } from "@/data/zodiacSigns";
import { audioEngine } from "@/lib/audioEngine";

const ELEMENT_COLORS: Record<ZodiacSign["element"], { badge: string; border: string; glow: string; text: string }> = {
  Fire: { badge: "bg-red-500/15 text-red-700 dark:text-red-300 border-red-500/30", border: "border-red-500/40", glow: "rgba(239, 68, 68, 0.25)", text: "text-red-600 dark:text-red-400" },
  Water: { badge: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30", border: "border-blue-500/40", glow: "rgba(59, 130, 246, 0.25)", text: "text-blue-600 dark:text-blue-400" },
  Air: { badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30", border: "border-amber-500/40", glow: "rgba(245, 158, 11, 0.25)", text: "text-amber-600 dark:text-amber-400" },
  Earth: { badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30", border: "border-emerald-500/40", glow: "rgba(16, 185, 129, 0.25)", text: "text-emerald-600 dark:text-emerald-400" },
};

export function ZodiacGrid() {
  const [elementFilter, setElementFilter] = useState<string>("All");
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedSign) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedSign]);

  const filteredSigns = ZODIAC_SIGNS.filter((sign) => {
    if (elementFilter === "All") return true;
    return sign.element === elementFilter;
  });

  const handleOpenSign = (sign: ZodiacSign) => {
    audioEngine.playCardSelect();
    setSelectedSign(sign);
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
      {/* Header & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF]">
            The 12 Sacred Zodiac Archetypes
          </h3>
          <p className="text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1]">
            Explore dates, ruling planets, compatibility, and esoteric tarot correspondences.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="inline-flex items-center p-1 rounded-full bg-white/90 dark:bg-[#0B121B]/90 border border-[#C59758]/40 shadow-sm backdrop-blur-md">
          {["All", "Fire", "Earth", "Air", "Water"].map((elem) => (
            <button
              key={elem}
              onClick={() => {
                audioEngine.playCardHover();
                setElementFilter(elem);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${elementFilter === elem
                ? "bg-[#C59758] text-white shadow-sm"
                : "text-[#6A655C] dark:text-[#AAA7A1] hover:text-[#221A14] dark:hover:text-[#F5F3EF]"
                }`}
            >
              {elem === "All" && "✦ All Signs"}
              {elem === "Fire" && "🔥 Fire"}
              {elem === "Earth" && "🌱 Earth"}
              {elem === "Air" && "💨 Air"}
              {elem === "Water" && "🌊 Water"}
            </button>
          ))}
        </div>
      </div>

      {/* 12 Sign Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {filteredSigns.map((sign) => {
          const style = ELEMENT_COLORS[sign.element];

          return (
            <div
              key={sign.id}
              onClick={() => handleOpenSign(sign)}
              className="group rounded-2xl p-4 bg-white/95 dark:bg-[#0B121B]/95 border border-[#C59758]/30 hover:border-[#C59758] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-102"
            >
              {/* Glyph Emblem */}
              <div className="w-12 h-12 rounded-full bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/40 group-hover:border-[#C59758] flex items-center justify-center mb-2.5 transition-all shadow-inner">
                <span className="text-2xl filter drop-shadow-[0_0_4px_#C59758]">
                  {sign.glyph}
                </span>
              </div>

              <h4 className="font-serif font-bold text-sm sm:text-base text-[#221A14] dark:text-[#F5F3EF] group-hover:text-[#B9684D] dark:group-hover:text-[#D5AE63] transition-colors">
                {sign.name}
              </h4>
              <span className="text-[10px] text-[#6A655C] dark:text-[#AAA7A1] font-medium block truncate w-full">
                {sign.dates}
              </span>

              <span className={`mt-2 text-[9px] font-bold px-2 py-0.5 rounded-full border ${style.badge}`}>
                {sign.element}
              </span>

              <span className="mt-3 text-[10px] font-semibold text-[#C59758] dark:text-[#D5AE63] opacity-0 group-hover:opacity-100 transition-opacity">
                View Full Profile →
              </span>
            </div>
          );
        })}
      </div>

      {/* ================= MODAL DETAILED PROFILE ================= */}
      {selectedSign && (
        <div
          onClick={() => setSelectedSign(null)}
          className="fixed inset-0 z-[9999] bg-[#020912]/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#FAF7EE] dark:bg-[#0B121B] border-2 border-[#C59758] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative text-[#221A14] dark:text-[#F5F3EF] z-[10000] isolate"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSign(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/10 dark:bg-white/10 hover:bg-[#C59758]/20 border border-[#C59758]/40 flex items-center justify-center text-sm font-bold cursor-pointer transition-all"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#C59758]/20 border-2 border-[#C59758] flex items-center justify-center shadow-md">
                <span className="text-3xl filter drop-shadow-[0_0_8px_#C59758]">
                  {selectedSign.glyph}
                </span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#C59758] dark:text-[#D5AE63]">
                  {selectedSign.dates} • {selectedSign.modality} {selectedSign.element}
                </span>
                <h3 className="font-serif font-extrabold text-2xl sm:text-3xl">
                  {selectedSign.name} ({selectedSign.latinName})
                </h3>
                <span className="text-xs text-[#6A655C] dark:text-[#AAA7A1] font-medium">
                  {selectedSign.tagline}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed mb-6 text-[#221A14]/90 dark:text-[#F5F3EF]/90">
              {selectedSign.summary}
            </p>

            {/* Key Data Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white dark:bg-[#121B26] border border-[#C59758]/30">
                <span className="text-[10px] uppercase font-bold text-[#6A655C] dark:text-[#AAA7A1] block">
                  Ruling Planet
                </span>
                <span className="font-serif font-bold text-xs sm:text-sm text-[#B9684D] dark:text-[#D5AE63] block mt-0.5">
                  {selectedSign.rulingPlanet}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-[#121B26] border border-[#C59758]/30">
                <span className="text-[10px] uppercase font-bold text-[#6A655C] dark:text-[#AAA7A1] block">
                  Tarot Arcana
                </span>
                <span className="font-serif font-bold text-xs sm:text-sm text-[#B9684D] dark:text-[#D5AE63] block mt-0.5">
                  {selectedSign.tarotCard}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-[#121B26] border border-[#C59758]/30">
                <span className="text-[10px] uppercase font-bold text-[#6A655C] dark:text-[#AAA7A1] block">
                  Sacred Stone
                </span>
                <span className="font-serif font-bold text-xs sm:text-sm text-[#B9684D] dark:text-[#D5AE63] block mt-0.5">
                  {selectedSign.gemstone}
                </span>
              </div>
            </div>

            {/* Mantra */}
            <div className="p-4 rounded-2xl bg-[#C59758]/10 border border-[#C59758]/40 text-center mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#C59758] dark:text-[#D5AE63] block mb-1">
                ✧ Affirmation Mantra ✧
              </span>
              <p className="font-serif italic font-semibold text-sm sm:text-base text-[#B9684D] dark:text-[#D5AE63]">
                &ldquo;{selectedSign.mantra}&rdquo;
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedSign(null)}
              className="w-full py-3 rounded-2xl bg-[#C59758] hover:bg-[#B9684D] text-white font-serif font-bold text-sm text-center shadow-lg transition-all cursor-pointer"
            >
              Close Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
