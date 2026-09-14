"use client";

import React from "react";

interface LuxuryCardBackProps {
  className?: string;
  isHovered?: boolean;
  subTitle?: string;
  deckMode?: "78-full" | "22-major";
}

export function LuxuryCardBack({
  className = "",
  isHovered = false,
  subTitle,
  deckMode = "78-full",
}: LuxuryCardBackProps) {
  const isFull78 = deckMode === "78-full";
  const defaultSubTitle = isFull78 ? "78 RWS GRAND DECK" : "22 MAJOR ARCANA";
  const displayTitle = subTitle || defaultSubTitle;

  return (
    <div
      className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-between p-2 sm:p-3 transition-all duration-300 ${
        isHovered
          ? "border-2 border-[#FFE5A3] shadow-[0_0_35px_rgba(213,174,99,0.95)]"
          : "border-2 border-[#D5AE63]"
      } ${className}`}
      style={{
        backgroundImage: isFull78
          ? `
            radial-gradient(circle at 50% 50%, #150F26 0%, #080711 75%),
            repeating-linear-gradient(45deg, rgba(213,174,99,0.04) 0px, rgba(213,174,99,0.04) 2px, transparent 2px, transparent 8px),
            repeating-linear-gradient(-45deg, rgba(213,174,99,0.04) 0px, rgba(213,174,99,0.04) 2px, transparent 2px, transparent 8px)
          `
          : `
            radial-gradient(circle at 50% 50%, #111A26 0%, #06090E 70%),
            repeating-linear-gradient(45deg, rgba(213,174,99,0.03) 0px, rgba(213,174,99,0.03) 2px, transparent 2px, transparent 8px),
            repeating-linear-gradient(-45deg, rgba(213,174,99,0.03) 0px, rgba(213,174,99,0.03) 2px, transparent 2px, transparent 8px)
          `,
      }}
    >
      {/* 24K Gold Gilded Edge Rim Simulation */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#D5AE63]/60 pointer-events-none" />

      {/* Holographic Shimmer Sweep */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFF2CC]/15 to-transparent -translate-x-full animate-[shimmer_5s_infinite] pointer-events-none" />

      {/* Outer & Inner Baroque Filigree Borders */}
      <div className="absolute inset-1 rounded-xl border border-[#D5AE63]/80 pointer-events-none" />
      <div className="absolute inset-2 rounded-lg border border-dashed border-[#C59758]/50 pointer-events-none" />

      {/* 4 Corner Emblems (Elemental for 78-deck, Fleur-de-lis for 22-major) */}
      {isFull78 ? (
        <>
          <div className="absolute top-1.5 left-1.5 text-[10px] sm:text-xs select-none filter drop-shadow-[0_0_2px_#D5AE63]" title="Wands / Fire">
            🔥
          </div>
          <div className="absolute top-1.5 right-1.5 text-[10px] sm:text-xs select-none filter drop-shadow-[0_0_2px_#D5AE63]" title="Cups / Water">
            🌊
          </div>
          <div className="absolute bottom-1.5 left-1.5 text-[10px] sm:text-xs select-none filter drop-shadow-[0_0_2px_#D5AE63]" title="Swords / Air">
            💨
          </div>
          <div className="absolute bottom-1.5 right-1.5 text-[10px] sm:text-xs select-none filter drop-shadow-[0_0_2px_#D5AE63]" title="Pentacles / Earth">
            🌱
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-1.5 left-1.5 text-[#D5AE63] text-xs select-none filter drop-shadow-[0_0_2px_#D5AE63]">
            ⚜
          </div>
          <div className="absolute top-1.5 right-1.5 text-[#D5AE63] text-xs select-none filter drop-shadow-[0_0_2px_#D5AE63]">
            ⚜
          </div>
          <div className="absolute bottom-1.5 left-1.5 text-[#D5AE63] text-xs select-none filter drop-shadow-[0_0_2px_#D5AE63]">
            ⚜
          </div>
          <div className="absolute bottom-1.5 right-1.5 text-[#D5AE63] text-xs select-none filter drop-shadow-[0_0_2px_#D5AE63]">
            ⚜
          </div>
        </>
      )}

      {/* TOP HEADER BRAND */}
      <div className="z-10 text-center mt-0.5">
        <div className="text-[8px] sm:text-[10px] font-serif uppercase tracking-[0.25em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D5AE63] via-[#FFF3D1] to-[#C59758] filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          DESTINY SPHERE
        </div>
        <div className="flex items-center justify-center gap-1 text-[6px] sm:text-[7px] text-[#D5AE63]/80 mt-0.5 tracking-widest uppercase">
          <span>✧</span>
          <span>{isFull78 ? "GRAND 78 ORACLE" : "SACRED 22 ORACLE"}</span>
          <span>✧</span>
        </div>
      </div>

      {/* ================= DENSE HIGH-DETAIL SVG MANDALA ================= */}
      <div className="relative my-auto w-full max-w-[110px] sm:max-w-[140px] md:max-w-[160px] aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-[#D5AE63] filter drop-shadow-[0_0_6px_rgba(213,174,99,0.4)]"
          fill="none"
          stroke="currentColor"
        >
          {/* Outer Sunburst Radiance */}
          <g strokeWidth="0.8" stroke="rgba(213,174,99,0.5)">
            {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((deg) => (
              <line
                key={deg}
                x1="100"
                y1="100"
                x2={100 + 88 * Math.cos((deg * Math.PI) / 180)}
                y2={100 + 88 * Math.sin((deg * Math.PI) / 180)}
                strokeDasharray="2,3"
              />
            ))}
          </g>

          {/* Concentric Astronomical Rings */}
          <circle cx="100" cy="100" r="82" strokeWidth="1.2" stroke="#D5AE63" />
          <circle cx="100" cy="100" r="74" strokeWidth="0.8" strokeDasharray="3,3" stroke="#C59758" />
          <circle cx="100" cy="100" r="64" strokeWidth="1" stroke="#D5AE63" />
          <circle cx="100" cy="100" r="50" strokeWidth="1.2" stroke="#E5C378" />
          <circle cx="100" cy="100" r="38" strokeWidth="0.8" strokeDasharray="4,2" stroke="#C59758" />
          <circle cx="100" cy="100" r="26" strokeWidth="1.5" stroke="#FFE5A3" />

          {/* Sacred 8-Pointed Star of Ishtar / Solomonic geometry */}
          <polygon
            points="100,38 108,72 142,64 116,88 142,112 108,104 100,138 92,104 58,112 84,88 58,64 92,72"
            fill={isFull78 ? "rgba(197,151,88,0.22)" : "rgba(213,174,99,0.18)"}
            stroke="#D5AE63"
            strokeWidth="1"
          />

          {/* Symmetrical Diamond Cross */}
          <polygon
            points="100,48 112,88 152,100 112,112 100,152 88,112 48,100 88,88"
            fill="rgba(255,230,163,0.12)"
            stroke="#FFE5A3"
            strokeWidth="0.8"
          />

          {/* Corner Floral Rosettes */}
          <circle cx="50" cy="50" r="8" strokeWidth="0.8" stroke="#D5AE63" />
          <circle cx="150" cy="50" r="8" strokeWidth="0.8" stroke="#D5AE63" />
          <circle cx="50" cy="150" r="8" strokeWidth="0.8" stroke="#D5AE63" />
          <circle cx="150" cy="150" r="8" strokeWidth="0.8" stroke="#D5AE63" />
          <circle cx="100" cy="100" r="16" fill={isFull78 ? "rgba(21,15,38,0.9)" : "rgba(11,16,23,0.9)"} stroke="#FFE5A3" strokeWidth="1.5" />
        </svg>

        {/* Central Embossed Golden All-Seeing Eye */}
        <div className="absolute w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#C59758] via-[#FFE5A3] to-[#C59758] flex items-center justify-center shadow-[0_0_16px_#D5AE63] border border-[#FFF] select-none">
          <span className="text-[10px] sm:text-xs text-[#05080E] font-bold">
            {isFull78 ? "✦" : "👁"}
          </span>
        </div>
      </div>

      {/* BOTTOM FOOTER EMBLEM */}
      <div className="z-10 text-center mb-0.5">
        <div className="flex items-center justify-center gap-1 text-[7px] sm:text-[8px] font-serif uppercase tracking-[0.2em] text-[#D5AE63] font-bold">
          <span>✦</span>
          <span className="truncate max-w-[90px] sm:max-w-[130px]">{displayTitle}</span>
          <span>✦</span>
        </div>
      </div>
    </div>
  );
}

