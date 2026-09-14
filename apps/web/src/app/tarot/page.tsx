"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { RWS_78_DECK, RWSTarotCard } from "@/data/rwsTarotDeck";
import { TarotCard3D } from "@/components/game/TarotCard3D";

export default function TarotEncyclopediaPage() {
  const [activeTab, setActiveTab] = useState<"All" | "Major" | "Wands" | "Cups" | "Swords" | "Pentacles">("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCard, setSelectedCard] = useState<RWSTarotCard | null>(null);

  const filteredCards = useMemo(() => {
    return RWS_78_DECK.filter((card) => {
      // Tab filter
      if (activeTab === "Major" && card.arcanaType !== "Major") return false;
      if (activeTab === "Wands" && card.suit !== "Wands") return false;
      if (activeTab === "Cups" && card.suit !== "Cups") return false;
      if (activeTab === "Swords" && card.suit !== "Swords") return false;
      if (activeTab === "Pentacles" && card.suit !== "Pentacles") return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = card.name.toLowerCase().includes(query);
        const matchAstro = card.astrology.zodiacOrPlanet.toLowerCase().includes(query);
        const matchKeywords = card.keywords.some((k) => k.toLowerCase().includes(query));
        const matchYesNo = card.yesOrNo.toLowerCase().includes(query);
        return matchName || matchAstro || matchKeywords || matchYesNo;
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#020912] text-[#221A14] dark:text-[#F5F3EF] flex flex-col pt-8 pb-20 transition-colors duration-500">
      <Container>
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C59758]/15 dark:bg-[#D5AE63]/15 border border-[#C59758]/30 mb-4 shadow-sm">
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#B9684D] dark:text-[#D5AE63] font-bold">
              ✦ HERMETIC RIDER-WAITE-SMITH (RWS) ✦
            </span>
          </div>

          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#221A14] dark:text-[#F5F3EF] mb-3 tracking-tight">
            The 78-Card Astrological Encyclopedia
          </h1>
          <p className="text-sm sm:text-base text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed max-w-2xl mx-auto">
            Authentic astrological decans, planetary rulers, Kabbalistic Tree of Life paths, and esoteric allegorical symbolism used by practicing professional astrologers worldwide.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/game"
              className="px-5 py-2.5 rounded-full bg-[#B9684D] hover:bg-[#A8583E] dark:bg-[#D5AE63] dark:hover:bg-[#C49E53] dark:text-[#020912] text-white text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center gap-2"
            >
              <span>Draw Free 3-Card Oracle</span>
              <span>🔮</span>
            </Link>
          </div>
        </div>

        {/* ================= SEARCH & TABS FILTER ================= */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by card name, astrological ruler (e.g. Mercury, Aries, Venus), or keyword..."
              className="w-full px-5 py-3.5 rounded-2xl bg-white dark:bg-[#0B121B] border-2 border-[#C59758]/40 focus:border-[#C59758] focus:outline-none text-sm sm:text-base text-[#221A14] dark:text-[#F5F3EF] placeholder:text-[#6A655C]/60 dark:placeholder:text-[#AAA7A1]/60 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#6A655C] hover:text-[#221A14] dark:hover:text-[#F5F3EF]"
              >
                ✕ Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {(["All", "Major", "Wands", "Cups", "Swords", "Pentacles"] as const).map((tab) => {
              const isActive = activeTab === tab;
              const labels: Record<typeof tab, string> = {
                All: "All 78 Cards",
                Major: "Major Arcana (22)",
                Wands: "🔥 Wands (Fire)",
                Cups: "🌊 Cups (Water)",
                Swords: "💨 Swords (Air)",
                Pentacles: "🌱 Pentacles (Earth)",
              };

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${isActive
                      ? "bg-[#C59758] dark:bg-[#D5AE63] text-white dark:text-[#020912] shadow-md scale-105"
                      : "bg-white dark:bg-[#0B121B] border border-[#C59758]/30 hover:border-[#C59758] text-[#6A655C] dark:text-[#AAA7A1]"
                    }`}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 78-CARD GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="rounded-3xl bg-white dark:bg-[#0B121B] border-2 border-[#C59758]/30 hover:border-[#C59758] dark:hover:border-[#D5AE63] shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between cursor-pointer group"
            >
              {/* Card Top Pill */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif font-bold text-xs text-[#B9684D] dark:text-[#D5AE63]">
                  {card.arcanaType === "Major" ? `Major • ${card.number}` : `${card.suit} • ${card.number}`}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-[#C59758]/10 text-[#C59758] dark:text-[#D5AE63] border border-[#C59758]/30">
                  {card.yesOrNo}
                </span>
              </div>

              {/* Title & Astrological Ruler */}
              <div className="mb-4">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#221A14] dark:text-[#F5F3EF] group-hover:text-[#B9684D] dark:group-hover:text-[#D5AE63] transition-colors line-clamp-1">
                  {card.name}
                </h3>
                <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] font-medium mt-1 flex items-center gap-1.5">
                  <span>🪐</span>
                  <span>{card.astrology.zodiacOrPlanet}</span>
                </p>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {card.keywords.slice(0, 3).map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7EE] dark:bg-[#121B26] text-[#6A655C] dark:text-[#AAA7A1] border border-[#C59758]/20"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* Upright Essence */}
              <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] line-clamp-2 leading-relaxed mb-4">
                {card.upright.overview}
              </p>

              {/* Footer CTA */}
              <div className="pt-3 border-t border-[#C59758]/20 flex items-center justify-between text-xs font-semibold text-[#B9684D] dark:text-[#D5AE63]">
                <span>View Full Astrological Data</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DETAILED CARD MODAL ================= */}
        {selectedCard && (
          <div
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl bg-[#FAF7EE] dark:bg-[#0B121B] border-2 border-[#D5AE63] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white dark:bg-[#121B26] border border-[#C59758]/40 flex items-center justify-center text-sm font-bold text-[#6A655C] hover:text-[#221A14] dark:hover:text-[#F5F3EF]"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="border-b border-[#C59758]/30 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-serif uppercase tracking-widest text-[#B9684D] dark:text-[#D5AE63] font-bold">
                    {selectedCard.arcanaType} Arcana • {selectedCard.element} Element
                  </span>
                </div>
                <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#221A14] dark:text-[#F5F3EF]">
                  {selectedCard.name}
                </h2>
              </div>

              {/* Astrological & Kabbalistic Correspondences Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-white dark:bg-[#121B26] border border-[#C59758]/30 text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-[#C59758] dark:text-[#D5AE63]">🪐 Astrological Ruler:</span>
                  <p className="text-[#221A14] dark:text-[#F5F3EF] mt-0.5">{selectedCard.astrology.zodiacOrPlanet}</p>
                </div>
                {selectedCard.astrology.decan && (
                  <div>
                    <span className="font-bold text-[#C59758] dark:text-[#D5AE63]">⭐ Decan Degree:</span>
                    <p className="text-[#221A14] dark:text-[#F5F3EF] mt-0.5">{selectedCard.astrology.decan}</p>
                  </div>
                )}
                {selectedCard.astrology.hebrewLetter && (
                  <div>
                    <span className="font-bold text-[#C59758] dark:text-[#D5AE63]">✡ Hebrew Letter:</span>
                    <p className="text-[#221A14] dark:text-[#F5F3EF] mt-0.5">{selectedCard.astrology.hebrewLetter}</p>
                  </div>
                )}
                {selectedCard.astrology.treeOfLifePath && (
                  <div>
                    <span className="font-bold text-[#C59758] dark:text-[#D5AE63]">🌳 Tree of Life:</span>
                    <p className="text-[#221A14] dark:text-[#F5F3EF] mt-0.5">{selectedCard.astrology.treeOfLifePath}</p>
                  </div>
                )}
                <div>
                  <span className="font-bold text-[#C59758] dark:text-[#D5AE63]">⏳ Timing / Season:</span>
                  <p className="text-[#221A14] dark:text-[#F5F3EF] mt-0.5">{selectedCard.timing}</p>
                </div>
                <div>
                  <span className="font-bold text-[#C59758] dark:text-[#D5AE63]">⚖ Yes / No Answer:</span>
                  <p className="text-[#221A14] dark:text-[#F5F3EF] mt-0.5">{selectedCard.yesOrNo}</p>
                </div>
              </div>

              {/* Upright Interpretations */}
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-base text-[#B9684D] dark:text-[#D5AE63] flex items-center gap-1.5">
                  <span>✦</span>
                  <span>Upright Interpretations</span>
                </h4>
                <p className="text-sm text-[#221A14] dark:text-[#F5F3EF] leading-relaxed">
                  {selectedCard.upright.overview}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#121B26] border border-[#C59758]/20">
                    <span className="text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] block mb-1">❤️ Love</span>
                    <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">{selectedCard.upright.love}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#121B26] border border-[#C59758]/20">
                    <span className="text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] block mb-1">💼 Career</span>
                    <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">{selectedCard.upright.career}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#121B26] border border-[#C59758]/20">
                    <span className="text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] block mb-1">🧘 Spirituality</span>
                    <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">{selectedCard.upright.spirituality}</p>
                  </div>
                </div>
              </div>

              {/* Reversed Interpretations */}
              <div className="space-y-3 border-t border-[#C59758]/20 pt-4">
                <h4 className="font-serif font-bold text-base text-[#B9684D] dark:text-[#D5AE63] flex items-center gap-1.5">
                  <span>🔄</span>
                  <span>Reversed Interpretations</span>
                </h4>
                <p className="text-sm text-[#221A14] dark:text-[#F5F3EF] leading-relaxed">
                  {selectedCard.reversed.overview}
                </p>
              </div>

              {/* Allegorical Symbolism & Astrologer Practitioner Notes */}
              <div className="space-y-3 border-t border-[#C59758]/20 pt-4">
                <h4 className="font-serif font-bold text-base text-[#B9684D] dark:text-[#D5AE63] flex items-center gap-1.5">
                  <span>🎨</span>
                  <span>Rider-Waite-Smith Symbolism</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCard.symbolism.map((sym, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white dark:bg-[#121B26] border border-[#C59758]/30 text-[#221A14] dark:text-[#F5F3EF]"
                    >
                      {sym}
                    </span>
                  ))}
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-[#C59758]/10 dark:bg-[#D5AE63]/10 border border-[#C59758]/40">
                  <span className="text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] block mb-1">
                    🧙‍♂️ Master Astrologer's Practitioner Note:
                  </span>
                  <p className="text-xs sm:text-sm text-[#221A14] dark:text-[#F5F3EF] leading-relaxed">
                    {selectedCard.astrologerNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

