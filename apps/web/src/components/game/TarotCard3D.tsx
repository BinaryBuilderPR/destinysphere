"use client";

import React from "react";
import { TarotCard } from "@/data/tarotCards";
import { LuxuryCardBack } from "@/components/game/LuxuryCardBack";
import { TarotCardIcon } from "@/components/game/TarotCardIcon";

interface TarotCard3DProps {
  card?: TarotCard;
  isFlipped: boolean;
  positionLabel?: string;
  onClick?: () => void;
  className?: string;
  highlight?: boolean;
  deckMode?: "78-full" | "22-major";
}

const ELEMENT_COLORS: Record<TarotCard["element"], { badge: string; border: string; glow: string }> = {
  Fire: { badge: "bg-red-500/15 text-red-700 dark:text-red-300 border-red-500/30", border: "border-red-500/40", glow: "rgba(239, 68, 68, 0.25)" },
  Water: { badge: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30", border: "border-blue-500/40", glow: "rgba(59, 130, 246, 0.25)" },
  Air: { badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30", border: "border-amber-500/40", glow: "rgba(245, 158, 11, 0.25)" },
  Earth: { badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30", border: "border-emerald-500/40", glow: "rgba(16, 185, 129, 0.25)" },
  Spirit: { badge: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30", border: "border-purple-500/30", glow: "rgba(168, 85, 247, 0.25)" },
};

export function TarotCard3D({
  card,
  isFlipped,
  positionLabel,
  onClick,
  className = "",
  highlight = false,
  deckMode = "78-full",
}: TarotCard3DProps) {
  const elementStyle = card ? ELEMENT_COLORS[card.element] : null;

  return (
    <div className={`flex flex-col items-center gap-1.5 sm:gap-2.5 w-full ${className}`}>
      {positionLabel && (
        <span className="text-[10px] sm:text-[12px] md:text-[13px] font-semibold tracking-wider sm:tracking-widest uppercase text-[#C59758] dark:text-[#D5AE63] px-2 sm:px-3 py-0.5 rounded-full bg-[#C59758]/10 dark:bg-[#D5AE63]/15 border border-[#C59758]/30 shadow-xs text-center line-clamp-1">
          {positionLabel}
        </span>
      )}

      <div
        onClick={onClick}
        className={`relative w-full max-w-[108px] h-[175px] xs:max-w-[125px] xs:h-[200px] sm:max-w-[175px] sm:h-[280px] md:max-w-[200px] md:h-[315px] rounded-xl sm:rounded-2xl cursor-pointer select-none transition-all duration-500 [perspective:1000px] ${
          highlight ? "scale-105" : "hover:scale-[1.03]"
        }`}
        style={{
          boxShadow: highlight
            ? "0 0 35px rgba(213, 174, 99, 0.7), 0 10px 25px rgba(0,0,0,0.4)"
            : "0 8px 20px rgba(0,0,0,0.25)",
        }}
      >
        <div
          className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* ================= ULTRA-PREMIUM CARD BACK ================= */}
          <div className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl [backface-visibility:hidden]">
            <LuxuryCardBack
              deckMode={deckMode}
              subTitle={
                card?.arcanaType === "Minor" && card?.suit
                  ? `${card.suit.toUpperCase()} SUIT`
                  : undefined
              }
              isHovered={highlight}
            />
          </div>

          {/* ================= CARD FRONT (Revealed Tarot Arcana) ================= */}
          <div className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#F3ECD8] dark:from-[#111A24] dark:via-[#0D141D] dark:to-[#070B10] border-2 border-[#D5AE63] shadow-2xl flex flex-col justify-between p-2 sm:p-3.5 md:p-4">
            {/* Header: Number & Exact Suit / Arcana Category */}
            <div className="flex items-center justify-between z-10">
              <span className="font-serif font-bold text-xs sm:text-sm md:text-base text-[#B9684D] dark:text-[#D5AE63]">
                {card?.number || "✦"}
              </span>
              {card && (
                <span
                  className={`text-[8px] sm:text-[9px] md:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full border font-bold truncate max-w-[70px] sm:max-w-none ${
                    elementStyle?.badge || ""
                  }`}
                >
                  {card.arcanaType === "Major" ? "🔮 Major" : `${card.suit}`}
                </span>
              )}
            </div>

            {/* Central Visual Sigil & Emblem */}
            <div className="relative my-auto flex flex-col items-center justify-center py-1 sm:py-2">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#C59758]/20 via-[#B9684D]/10 to-transparent border border-[#C59758]/50 flex items-center justify-center shadow-inner p-1.5 sm:p-2.5">
                <TarotCardIcon card={card} className="w-7 h-7 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" />
              </div>
              <div className="mt-1 sm:mt-2 text-center w-full px-1">
                <h4 className="font-serif font-bold text-[11px] xs:text-xs sm:text-sm md:text-base text-[#221A14] dark:text-[#F5F3EF] leading-tight truncate">
                  {card?.name.replace(/^[0-9IVXLCDM]+\s*•\s*/, "") || "Mystic Arcana"}
                </h4>
                {card?.astrology && (
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-[#C59758] dark:text-[#D5AE63] font-medium block mt-0.5 truncate">
                    {card.astrology}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom: Keywords */}
            {card && (
              <div className="z-10 pt-1 border-t border-[#C59758]/30 dark:border-[#C59758]/20">
                <p className="text-[7px] xs:text-[8px] sm:text-[10px] text-center font-medium text-[#6A655C] dark:text-[#AAA7A1] truncate">
                  {card.keywords.slice(0, 2).join(" • ")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
