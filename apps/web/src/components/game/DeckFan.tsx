"use client";

import React, { useState, useEffect } from "react";
import { TAROT_DECK, TarotCard } from "@/data/tarotCards";
import { audioEngine } from "@/lib/audioEngine";
import { LuxuryCardBack } from "@/components/game/LuxuryCardBack";

interface DeckFanProps {
  onCardSelect: (card: TarotCard) => void;
  remainingPicks: number;
  disabled: boolean;
  deckMode?: "78-full" | "22-major";
}

export function DeckFan({
  onCardSelect,
  remainingPicks,
  disabled,
  deckMode = "78-full",
}: DeckFanProps) {
  const [shuffledDeck, setShuffledDeck] = useState<TarotCard[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [handPosIdx, setHandPosIdx] = useState<number>(5);

  // Initialize randomized deck cards based on selected mode (13 visible cards in fan)
  useEffect(() => {
    let pool = [...TAROT_DECK];
    if (deckMode === "22-major") {
      pool = pool.filter((c) => c.arcanaType === "Major");
    }
    const shuffled = pool.sort(() => Math.random() - 0.5);
    setShuffledDeck(shuffled.slice(0, 13));
  }, [deckMode]);

  // Idle animation for the mystical guiding hand when user is not hovering
  useEffect(() => {
    if (disabled || hoveredIdx !== null) return;
    const interval = setInterval(() => {
      setHandPosIdx((prev) => {
        const next = prev + 1;
        return next > 11 ? 1 : next;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, [disabled, hoveredIdx]);

  const handleCardClick = (card: TarotCard, index: number) => {
    if (disabled) return;
    audioEngine.playCardSelect();
    onCardSelect(card);
    // Remove selected card from fan
    setShuffledDeck((prev) => prev.filter((_, i) => i !== index));
    setHoveredIdx(null);
  };

  const handleMouseEnter = (idx: number) => {
    if (disabled) return;
    setHoveredIdx(idx);
    setHandPosIdx(idx);
    audioEngine.playCardHover();
  };

  const targetHandIdx = hoveredIdx !== null ? hoveredIdx : handPosIdx;

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center select-none">
      {/* Active Deck Mode & Selection Guidance Pill */}
      <div className="mb-4 sm:mb-6 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FAF7EE]/90 dark:bg-[#0B121B]/90 border border-[#C59758]/40 shadow-lg backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C59758] animate-ping" />
          <span className="font-serif text-xs sm:text-sm md:text-base font-semibold text-[#221A14] dark:text-[#F5F3EF]">
            {remainingPicks === 3 && "✨ Select 1st Card: The Past (Karmic Origin)"}
            {remainingPicks === 2 && "⚡ Select 2nd Card: The Present (Cosmic Anchor)"}
            {remainingPicks === 1 && "🔮 Select 3rd Card: The Future (Ascending Destiny)"}
            {remainingPicks === 0 && "🌟 All 3 Cards Drawn — Consulting Oracle..."}
          </span>
        </div>

        {/* Deck Active Badge */}
        <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-serif font-bold text-[#C59758] dark:text-[#D5AE63] uppercase tracking-wider px-3 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-[#C59758]/30">
          <span>{deckMode === "78-full" ? "🌟 Grand 78-Card Deck (RWS)" : "🔮 22 Major Arcana Deck"}</span>
        </div>
      </div>

      {/* Fanned Arc Container - Auto-plays when mouse enters, automatically mutes when mouse leaves */}
      <div
        onMouseEnter={() => {
          audioEngine.startAmbientTone();
          audioEngine.setMuted(false);
        }}
        onMouseLeave={() => {
          setHoveredIdx(null);
          audioEngine.setMuted(true);
        }}
        className="relative w-full h-[220px] sm:h-[270px] md:h-[310px] flex items-center justify-center overflow-visible"
      >
        {shuffledDeck.map((card, idx) => {
          const total = shuffledDeck.length;
          const mid = (total - 1) / 2;
          const offset = idx - mid;
          const rotDeg = offset * 4.8; // Fan rotation angle
          const translateY = Math.abs(offset) * 6.5; // Arc height curve
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={card.id + idx}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => handleCardClick(card, idx)}
              className={`absolute top-0 transition-all duration-300 cursor-pointer ${
                disabled ? "pointer-events-none opacity-50" : ""
              }`}
              style={{
                transform: `translateX(${offset * 24}px) translateY(${
                  isHovered ? translateY - 40 : translateY
                }px) rotate(${isHovered ? 0 : rotDeg}deg) scale(${isHovered ? 1.15 : 1})`,
                zIndex: isHovered ? 50 : idx + 10,
              }}
            >
              {/* Ultra-Premium Physical Luxury Card Back in Fan */}
              <div className="w-[82px] h-[135px] sm:w-[108px] sm:h-[175px] md:w-[128px] md:h-[200px]">
                <LuxuryCardBack
                  deckMode={deckMode}
                  subTitle={
                    card.arcanaType === "Minor" && card.suit
                      ? card.suit.toUpperCase()
                      : undefined
                  }
                  isHovered={isHovered}
                />
              </div>
            </div>
          );
        })}

        {/* ================= Animated Mystical Guiding Selector ================= */}
        {!disabled && shuffledDeck.length > 0 && (
          <div
            className="absolute -bottom-8 sm:-bottom-10 pointer-events-none transition-all duration-700 ease-out z-[60] flex flex-col items-center"
            style={{
              transform: `translateX(${(targetHandIdx - (shuffledDeck.length - 1) / 2) * 24}px) translateY(${
                hoveredIdx !== null ? "-28px" : "0px"
              })`,
            }}
          >
            {/* Pulsing Golden Beam */}
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-t from-[#D5AE63] to-transparent rounded-full animate-pulse shadow-[0_0_14px_#D5AE63]" />

            {/* Glowing Golden Starburst Pointer Badge */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0E1622] border-2 border-[#D5AE63] flex items-center justify-center shadow-[0_0_20px_rgba(213,174,99,0.9)] animate-bounce">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#D5AE63] filter drop-shadow-[0_0_4px_#D5AE63]"
                fill="currentColor"
              >
                <path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z" />
              </svg>
            </div>

            <span className="text-[10px] sm:text-[11px] font-serif font-bold tracking-wider text-[#D5AE63] bg-[#09111B]/95 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#D5AE63]/60 shadow-xl mt-1 backdrop-blur-md whitespace-nowrap">
              ✦ Tap to Draw ✦
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
