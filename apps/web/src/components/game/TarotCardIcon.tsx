"use client";

import React from "react";
import { TarotCard } from "@/data/tarotCards";

interface TarotCardIconProps {
  card?: TarotCard;
  className?: string;
}

export function TarotCardIcon({ card, className = "w-10 h-10 sm:w-12 sm:h-12" }: TarotCardIconProps) {
  if (!card) return <span className="text-2xl text-[#D5AE63]">✨</span>;

  // 1. MINOR ARCANA SUITS
  if (card.arcanaType === "Minor" || card.suit) {
    if (card.suit === "Pentacles") {
      // Intricate 5-Pointed Star Golden Pentacle Coin
      return (
        <svg viewBox="0 0 100 100" className={`${className} text-[#D5AE63] filter drop-shadow-[0_0_6px_rgba(213,174,99,0.6)]`} fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="44" strokeWidth="3" stroke="#D5AE63" />
          <circle cx="50" cy="50" r="39" strokeWidth="1.5" strokeDasharray="3,3" stroke="#C59758" />
          <circle cx="50" cy="50" r="34" strokeWidth="2" stroke="#D5AE63" />
          <polygon
            points="50,16 60,37 83,37 64,51 71,73 50,59 29,73 36,51 17,37 40,37"
            fill="rgba(213,174,99,0.25)"
            stroke="#D5AE63"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="50" r="7" fill="#FFE5A3" />
        </svg>
      );
    }

    if (card.suit === "Cups") {
      // Ornate Sacred Chalice / Holy Grail
      return (
        <svg viewBox="0 0 100 100" className={`${className} text-[#60A5FA] filter drop-shadow-[0_0_6px_rgba(96,165,250,0.6)]`} fill="none" stroke="currentColor">
          {/* Bowl */}
          <path d="M25 24 C25 55, 75 55, 75 24 Z" fill="rgba(96,165,250,0.2)" stroke="#60A5FA" strokeWidth="3" />
          <ellipse cx="50" cy="24" rx="25" ry="6" stroke="#93C5FD" strokeWidth="2" />
          {/* Stem & Base */}
          <path d="M47 52 L47 76 L32 84 L68 84 L53 76 L53 52" fill="rgba(96,165,250,0.3)" stroke="#60A5FA" strokeWidth="2.5" />
          {/* Sacred Droplets */}
          <circle cx="50" cy="12" r="3" fill="#93C5FD" />
          <circle cx="42" cy="18" r="2" fill="#60A5FA" />
          <circle cx="58" cy="18" r="2" fill="#60A5FA" />
        </svg>
      );
    }

    if (card.suit === "Swords") {
      // Upright Crowned Broadsword
      return (
        <svg viewBox="0 0 100 100" className={`${className} text-[#FCD34D] filter drop-shadow-[0_0_6px_rgba(252,211,77,0.6)]`} fill="none" stroke="currentColor">
          {/* Blade */}
          <path d="M50 12 L56 68 L44 68 Z" fill="rgba(252,211,77,0.2)" stroke="#FCD34D" strokeWidth="2.5" />
          <line x1="50" y1="14" x2="50" y2="68" stroke="#FFFBEB" strokeWidth="1.5" />
          {/* Guard */}
          <path d="M28 68 L72 68" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
          {/* Grip & Pommel */}
          <line x1="50" y1="68" x2="50" y2="82" stroke="#D97706" strokeWidth="4" />
          <circle cx="50" cy="86" r="4.5" fill="#FCD34D" stroke="#D97706" strokeWidth="2" />
        </svg>
      );
    }

    if (card.suit === "Wands") {
      // Sprouting Living Fire Wand
      return (
        <svg viewBox="0 0 100 100" className={`${className} text-[#F87171] filter drop-shadow-[0_0_6px_rgba(248,113,113,0.6)]`} fill="none" stroke="currentColor">
          {/* Wooden Staff */}
          <path d="M47 14 L53 14 L51 86 L49 86 Z" fill="#B9684D" stroke="#EF4444" strokeWidth="2" />
          {/* Sprouting Leaves & Flame Aura */}
          <path d="M53 30 Q65 24 60 38 Q54 36 53 30" fill="#34D399" stroke="#059669" strokeWidth="1" />
          <path d="M47 48 Q35 42 40 56 Q46 54 47 48" fill="#34D399" stroke="#059669" strokeWidth="1" />
          <path d="M53 62 Q65 56 60 70 Q54 68 53 62" fill="#34D399" stroke="#059669" strokeWidth="1" />
          {/* Top Fire Sparkle */}
          <circle cx="50" cy="8" r="3" fill="#FCD34D" />
        </svg>
      );
    }
  }

  // 2. MAJOR ARCANA SACRED SYMBOLS
  const id = card.id;

  if (id.includes("fool")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} text-[#D5AE63]`} fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="38" strokeWidth="2" strokeDasharray="4,2" />
        <path d="M50 15 L54 38 L77 50 L54 62 L50 85 L46 62 L23 50 L46 38 Z" fill="rgba(213,174,99,0.25)" stroke="#D5AE63" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#FFF3D1" />
      </svg>
    );
  }

  if (id.includes("magician")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} text-[#D5AE63]`} fill="none" stroke="currentColor">
        {/* Infinity Lemniscate */}
        <path d="M35 50 C20 30, 20 70, 35 50 C50 30, 65 70, 65 50 C65 30, 50 70, 35 50" stroke="#D5AE63" strokeWidth="3.5" fill="none" />
        <circle cx="50" cy="50" r="3.5" fill="#FFE5A3" />
      </svg>
    );
  }

  if (id.includes("priestess")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} text-[#60A5FA]`} fill="none" stroke="currentColor">
        {/* Crescent Moons & Full Moon */}
        <circle cx="50" cy="50" r="16" fill="rgba(96,165,250,0.2)" stroke="#60A5FA" strokeWidth="2.5" />
        <path d="M22 32 C36 32, 36 68, 22 68 C30 58, 30 42, 22 32 Z" fill="#93C5FD" />
        <path d="M78 32 C64 32, 64 68, 78 68 C70 58, 70 42, 78 32 Z" fill="#93C5FD" />
      </svg>
    );
  }

  if (id.includes("empress")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} text-[#10B981]`} fill="none" stroke="currentColor">
        {/* Venus Symbol with 12 Stars */}
        <circle cx="50" cy="40" r="22" stroke="#10B981" strokeWidth="3" fill="rgba(16,185,129,0.15)" />
        <line x1="50" y1="62" x2="50" y2="86" stroke="#10B981" strokeWidth="3" />
        <line x1="38" y1="74" x2="62" y2="74" stroke="#10B981" strokeWidth="3" />
      </svg>
    );
  }

  if (id.includes("emperor")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} text-[#EF4444]`} fill="none" stroke="currentColor">
        {/* Aries Ram Horns & Crown */}
        <path d="M50 78 L50 35 C38 18, 16 30, 26 48 C34 60, 42 42, 48 36" stroke="#EF4444" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M50 78 L50 35 C62 18, 84 30, 74 48 C66 60, 58 42, 52 36" stroke="#EF4444" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  if (id.includes("sun")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} text-[#F59E0B]`} fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="22" fill="rgba(245,158,11,0.25)" stroke="#F59E0B" strokeWidth="3" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1={50 + 26 * Math.cos((deg * Math.PI) / 180)}
            y1={50 + 26 * Math.sin((deg * Math.PI) / 180)}
            x2={50 + 40 * Math.cos((deg * Math.PI) / 180)}
            y2={50 + 40 * Math.sin((deg * Math.PI) / 180)}
            stroke="#F59E0B"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </svg>
    );
  }

  if (id.includes("star")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} text-[#D5AE63]`} fill="none" stroke="currentColor">
        <polygon
          points="50,10 58,36 84,26 68,48 90,62 64,68 62,94 48,74 26,88 36,64 12,54 36,44 24,18 48,30"
          fill="rgba(213,174,99,0.25)"
          stroke="#D5AE63"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="5" fill="#FFF3D1" />
      </svg>
    );
  }

  if (id.includes("world")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} text-[#10B981]`} fill="none" stroke="currentColor">
        {/* Victory Laurel Wreath */}
        <circle cx="50" cy="50" r="36" stroke="#10B981" strokeWidth="2.5" strokeDasharray="6,4" />
        <circle cx="50" cy="50" r="24" stroke="#D5AE63" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="8" fill="#D5AE63" />
      </svg>
    );
  }

  // Fallback: Sacred Golden Astrological Glyph
  return (
    <div className="flex items-center justify-center font-serif font-bold text-2xl text-[#D5AE63]">
      {card.symbol && card.symbol.length <= 2 && !/[^\u0000-\u007F]/.test(card.symbol) ? card.symbol : "✦"}
    </div>
  );
}

