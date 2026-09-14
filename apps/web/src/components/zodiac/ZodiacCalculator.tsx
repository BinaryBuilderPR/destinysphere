"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ZODIAC_SIGNS,
  ZodiacSign,
  getZodiacSign,
  getChineseZodiac,
  getCalculatedPlanetaryAura,
} from "@/data/zodiacSigns";
import { audioEngine } from "@/lib/audioEngine";

const ELEMENT_COLORS: Record<ZodiacSign["element"], { badge: string; border: string; glow: string; text: string }> = {
  Fire: { badge: "bg-red-500/15 text-red-700 dark:text-red-300 border-red-500/30", border: "border-red-500/40", glow: "rgba(239, 68, 68, 0.25)", text: "text-red-600 dark:text-red-400" },
  Water: { badge: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30", border: "border-blue-500/40", glow: "rgba(59, 130, 246, 0.25)", text: "text-blue-600 dark:text-blue-400" },
  Air: { badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30", border: "border-amber-500/40", glow: "rgba(245, 158, 11, 0.25)", text: "text-amber-600 dark:text-amber-400" },
  Earth: { badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30", border: "border-emerald-500/40", glow: "rgba(16, 185, 129, 0.25)", text: "text-emerald-600 dark:text-emerald-400" },
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function ZodiacCalculator() {
  const [birthMonth, setBirthMonth] = useState<number>(3); // March
  const [birthDay, setBirthDay] = useState<number>(21);
  const [birthYear, setBirthYear] = useState<number>(1998);
  const [knowsTime, setKnowsTime] = useState<boolean>(false);
  const [birthHour, setBirthHour] = useState<number>(12); // 12 PM
  const [birthPeriod, setBirthPeriod] = useState<"AM" | "PM">("PM");

  const [activeTab, setActiveTab] = useState<"overview" | "love" | "career" | "tarot">("overview");
  const [isCalculated, setIsCalculated] = useState<boolean>(true);

  // Compute calculated values
  const normalizedHour = knowsTime
    ? birthPeriod === "PM" && birthHour < 12
      ? birthHour + 12
      : birthPeriod === "AM" && birthHour === 12
      ? 0
      : birthHour
    : undefined;

  const birthDateObj = new Date(birthYear, birthMonth - 1, birthDay);
  const aura = getCalculatedPlanetaryAura(birthDateObj, normalizedHour);
  const chineseZodiac = getChineseZodiac(birthYear);
  const sunSign = aura.sunSign;
  const elementTheme = ELEMENT_COLORS[sunSign.element];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playCardSelect();
    audioEngine.playCardFlip();
    setIsCalculated(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
      {/* ================= CALCULATOR INPUT FORM ================= */}
      <div className="rounded-3xl border-2 border-[#C59758]/40 bg-white/90 dark:bg-[#0B121B]/90 shadow-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
        {/* Mystic Aura Background Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C59758]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#B9684D]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C59758] dark:text-[#D5AE63] font-bold">
              ✧ 100% Free Astrological Finder ✧
            </span>
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#221A14] dark:text-[#F5F3EF] mt-1 mb-2">
              Discover Your Cosmic Blueprint
            </h2>
            <p className="text-sm text-[#6A655C] dark:text-[#AAA7A1]">
              Enter your birth date to instantly calculate your Western Sun Sign, Moon Sign, Ascendant / Rising Sign, Elemental Balance, and Chinese Zodiac.
            </p>
          </div>

          <form onSubmit={handleCalculate} className="flex flex-col gap-6">
            {/* Date Picker Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Month */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Birth Month
                </label>
                <select
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(Number(e.target.value))}
                  className="sacred-select w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm font-semibold focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 transition-all cursor-pointer shadow-xs"
                >
                  {MONTHS.map((m, idx) => (
                    <option key={m} value={idx + 1}>
                      {idx + 1} • {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Birth Day
                </label>
                <select
                  value={birthDay}
                  onChange={(e) => setBirthDay(Number(e.target.value))}
                  className="sacred-select w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm font-semibold focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 transition-all cursor-pointer shadow-xs"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Birth Year
                </label>
                <select
                  value={birthYear}
                  onChange={(e) => setBirthYear(Number(e.target.value))}
                  className="sacred-select w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm font-semibold focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 transition-all cursor-pointer shadow-xs"
                >
                  {Array.from({ length: 100 }, (_, i) => 2026 - i).map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Optional Time of Birth Accordion Toggle */}
            <div className="pt-3 border-t border-[#C59758]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={knowsTime}
                  onChange={(e) => setKnowsTime(e.target.checked)}
                  className="w-4 h-4 rounded border-[#C59758] text-[#C59758] focus:ring-[#C59758] cursor-pointer"
                />
                <span className="text-xs sm:text-sm font-medium text-[#221A14] dark:text-[#F5F3EF]">
                  Include Birth Time <span className="text-[#C59758] dark:text-[#D5AE63] text-xs font-semibold">(Calculates Exact Moon & Rising Sign)</span>
                </span>
              </label>

              {knowsTime && (
                <div className="flex items-center gap-2 animate-fade-in">
                  <select
                    value={birthHour}
                    onChange={(e) => setBirthHour(Number(e.target.value))}
                    className="sacred-select px-3.5 py-2 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/40 text-xs font-semibold text-[#221A14] dark:text-[#F5F3EF]"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                      <option key={h} value={h}>
                        {h}:00
                      </option>
                    ))}
                  </select>
                  <select
                    value={birthPeriod}
                    onChange={(e) => setBirthPeriod(e.target.value as "AM" | "PM")}
                    className="sacred-select px-3.5 py-2 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/40 text-xs font-semibold text-[#221A14] dark:text-[#F5F3EF]"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              )}
            </div>

            {/* Calculate Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-linear-to-r from-[#B9684D] via-[#C59758] to-[#D5AE63] hover:opacity-95 text-white dark:text-[#020912] font-serif font-bold text-base shadow-[0_4px_25px_rgba(197,151,88,0.35)] hover:shadow-[0_6px_30px_rgba(197,151,88,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>🔮</span>
                <span>Calculate My Astrological Sign & Chart</span>
                <span>✨</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ================= REVEALED RESULTS DASHBOARD ================= */}
      {isCalculated && (
        <div className="flex flex-col gap-8 animate-fade-in">
          {/* Top 4 Cosmic Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {/* Pillar 1: Sun Sign */}
            <div className="rounded-2xl p-4 sm:p-5 bg-white/95 dark:bg-[#0B121B]/95 border-2 border-[#C59758] shadow-lg flex flex-col items-center text-center relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C59758] dark:text-[#D5AE63] mb-1">
                ☀️ Sun Sign (Identity)
              </span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#C59758]/15 border border-[#C59758]/50 flex items-center justify-center my-2 shadow-inner">
                <span className="text-2xl sm:text-3xl filter drop-shadow-[0_0_8px_#C59758]">
                  {sunSign.glyph}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#221A14] dark:text-[#F5F3EF]">
                {sunSign.name}
              </h3>
              <span className="text-xs text-[#6A655C] dark:text-[#AAA7A1] font-medium">
                {sunSign.dates}
              </span>
              <span className={`mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full border ${elementTheme.badge}`}>
                {sunSign.element} • {sunSign.modality}
              </span>
            </div>

            {/* Pillar 2: Moon Sign */}
            <div className="rounded-2xl p-4 sm:p-5 bg-white/95 dark:bg-[#0B121B]/95 border border-[#C59758]/40 shadow-md flex flex-col items-center text-center relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#6A655C] dark:text-[#AAA7A1] mb-1">
                🌙 Moon Sign (Inner Soul)
              </span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center my-2 shadow-inner">
                <span className="text-2xl sm:text-3xl">
                  {aura.moonSign.glyph}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#221A14] dark:text-[#F5F3EF]">
                {aura.moonSign.name}
              </h3>
              <span className="text-xs text-[#6A655C] dark:text-[#AAA7A1] font-medium">
                Emotional Intuition
              </span>
              <span className="mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-[#C59758]/20">
                {aura.moonSign.element} Element
              </span>
            </div>

            {/* Pillar 3: Rising / Ascendant */}
            <div className="rounded-2xl p-4 sm:p-5 bg-white/95 dark:bg-[#0B121B]/95 border border-[#C59758]/40 shadow-md flex flex-col items-center text-center relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#6A655C] dark:text-[#AAA7A1] mb-1">
                🌅 Rising Sign (Outer Mask)
              </span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center my-2 shadow-inner">
                <span className="text-2xl sm:text-3xl">
                  {aura.risingSign.glyph}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#221A14] dark:text-[#F5F3EF]">
                {aura.risingSign.name}
              </h3>
              <span className="text-xs text-[#6A655C] dark:text-[#AAA7A1] font-medium">
                Life Aura & First Impressions
              </span>
              <span className="mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-[#C59758]/20">
                {aura.risingSign.modality} Modality
              </span>
            </div>

            {/* Pillar 4: Chinese Zodiac */}
            <div className="rounded-2xl p-4 sm:p-5 bg-white/95 dark:bg-[#0B121B]/95 border border-[#C59758]/40 shadow-md flex flex-col items-center text-center relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#6A655C] dark:text-[#AAA7A1] mb-1">
                🐉 Chinese Zodiac
              </span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center my-2 shadow-inner">
                <span className="text-2xl sm:text-3xl">
                  {chineseZodiac.glyph}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#221A14] dark:text-[#F5F3EF]">
                {chineseZodiac.fullName}
              </h3>
              <span className="text-xs text-[#6A655C] dark:text-[#AAA7A1] font-medium">
                Year of {chineseZodiac.year}
              </span>
              <span className="mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-[#C59758]/20">
                {chineseZodiac.element} Animal
              </span>
            </div>
          </div>

          {/* ================= DETAILED TABBED BREAKDOWN ================= */}
          <div className="rounded-3xl border-2 border-[#C59758]/30 bg-white/90 dark:bg-[#0B121B]/90 shadow-xl overflow-hidden backdrop-blur-md">
            {/* Tab Navigation */}
            <div className="flex border-b border-[#C59758]/20 bg-[#FAF7EE]/60 dark:bg-[#070B10]/60 overflow-x-auto">
              {[
                { id: "overview", label: "🌟 Archetype & Traits", icon: "✨" },
                { id: "love", label: "❤️ Love & Compatibility", icon: "💖" },
                { id: "career", label: "💼 Wealth & Career", icon: "👑" },
                { id: "tarot", label: "🃏 Tarot & Crystal Magic", icon: "🔮" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    audioEngine.playCardHover();
                    setActiveTab(tab.id as any);
                  }}
                  className={`flex-1 min-w-[140px] py-3.5 px-4 text-xs sm:text-sm font-serif font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-[#0B121B] text-[#B9684D] dark:text-[#D5AE63] border-b-2 border-[#C59758] shadow-xs"
                      : "text-[#6A655C] dark:text-[#AAA7A1] hover:text-[#221A14] dark:hover:text-[#F5F3EF]"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Panels */}
            <div className="p-6 sm:p-8">
              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#C59758] dark:text-[#D5AE63]">
                      {sunSign.tagline}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#221A14] dark:text-[#F5F3EF] mt-1 mb-3">
                      The Nature of {sunSign.name} ({sunSign.symbol})
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#221A14]/85 dark:text-[#F5F3EF]/85">
                      {sunSign.summary}
                    </p>
                  </div>

                  {/* Strengths & Shadows Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#C59758]/20">
                    <div className="rounded-2xl p-4 bg-emerald-500/5 border border-emerald-500/20">
                      <h4 className="font-serif font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-2.5 flex items-center gap-1.5">
                        <span>✦</span>
                        <span>Cosmic Superpowers & Strengths</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#221A14] dark:text-[#F5F3EF]">
                        {sunSign.strengths.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl p-4 bg-amber-500/5 border border-amber-500/20">
                      <h4 className="font-serif font-bold text-sm text-amber-800 dark:text-amber-300 mb-2.5 flex items-center gap-1.5">
                        <span>✦</span>
                        <span>Shadow Side & Growth Edges</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#221A14] dark:text-[#F5F3EF]">
                        {sunSign.shadows.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-600 dark:text-amber-400 font-bold">⚡</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sacred Mantra */}
                  <div className="rounded-2xl p-4 bg-[#C59758]/10 border border-[#C59758]/30 text-center">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C59758] dark:text-[#D5AE63] block mb-1">
                      ✧ Sacred Daily Mantra ✧
                    </span>
                    <p className="font-serif italic font-semibold text-base sm:text-lg text-[#B9684D] dark:text-[#D5AE63]">
                      &ldquo;{sunSign.mantra}&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: LOVE & COMPATIBILITY */}
              {activeTab === "love" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] mb-2">
                      Romantic Currents & Soulmate Dynamics
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#221A14]/85 dark:text-[#F5F3EF]/85">
                      {sunSign.loveCompatibility.advice}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {/* Best Matches */}
                    <div className="rounded-2xl p-4 bg-rose-500/5 border border-rose-500/20">
                      <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-rose-700 dark:text-rose-300 mb-2 flex items-center gap-1">
                        <span>💖</span>
                        <span>Supreme Soulmates</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {sunSign.loveCompatibility.best.map((m) => (
                          <span
                            key={m}
                            className="px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-800 dark:text-rose-200 border border-rose-500/30 text-xs font-semibold"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Harmonious Matches */}
                    <div className="rounded-2xl p-4 bg-blue-500/5 border border-blue-500/20">
                      <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-1">
                        <span>💫</span>
                        <span>Harmonious Friends</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {sunSign.loveCompatibility.good.map((m) => (
                          <span
                            key={m}
                            className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-800 dark:text-blue-200 border border-blue-500/30 text-xs font-semibold"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Karmic Growth Matches */}
                    <div className="rounded-2xl p-4 bg-purple-500/5 border border-purple-500/20">
                      <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-1">
                        <span>⚡</span>
                        <span>Karmic Catalysts</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {sunSign.loveCompatibility.challenging.map((m) => (
                          <span
                            key={m}
                            className="px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-800 dark:text-purple-200 border border-purple-500/30 text-xs font-semibold"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: CAREER & WEALTH */}
              {activeTab === "career" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#C59758] dark:text-[#D5AE63]">
                      Professional Destiny
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] mt-1 mb-2">
                      {sunSign.career.archetype}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#221A14]/85 dark:text-[#F5F3EF]/85">
                      {sunSign.career.wealthMindset}
                    </p>
                  </div>

                  <div className="pt-2">
                    <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-2.5">
                      Ideal Vocations & Arenas of Mastery:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {sunSign.career.bestFields.map((field) => (
                        <span
                          key={field}
                          className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#121B26] border border-[#C59758]/40 text-xs font-semibold text-[#221A14] dark:text-[#F5F3EF] shadow-xs"
                        >
                          ✦ {field}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: TAROT & ESOTERIC CORRESPONDENCES */}
              {activeTab === "tarot" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl p-4 bg-white dark:bg-[#121B26] border border-[#C59758]/40 shadow-xs">
                      <span className="text-[10px] uppercase font-bold text-[#C59758] dark:text-[#D5AE63] tracking-wider block mb-1">
                        🃏 Associated Tarot Arcana
                      </span>
                      <h4 className="font-serif font-bold text-lg text-[#B9684D] dark:text-[#D5AE63]">
                        {sunSign.tarotCard}
                      </h4>
                      <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] mt-1">
                        The archetypal tarot guide aligned with your solar initiation and life trials.
                      </p>
                    </div>

                    <div className="rounded-2xl p-4 bg-white dark:bg-[#121B26] border border-[#C59758]/40 shadow-xs">
                      <span className="text-[10px] uppercase font-bold text-[#C59758] dark:text-[#D5AE63] tracking-wider block mb-1">
                        💎 Sacred Gemstone & Crystal
                      </span>
                      <h4 className="font-serif font-bold text-lg text-[#221A14] dark:text-[#F5F3EF]">
                        {sunSign.gemstone}
                      </h4>
                      <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] mt-1">
                        Carrying or meditating with this stone amplifies your natural solar radiance.
                      </p>
                    </div>

                    <div className="rounded-2xl p-4 bg-white dark:bg-[#121B26] border border-[#C59758]/40 shadow-xs">
                      <span className="text-[10px] uppercase font-bold text-[#C59758] dark:text-[#D5AE63] tracking-wider block mb-1">
                        🪐 Ruling Cosmic Body
                      </span>
                      <h4 className="font-serif font-bold text-base text-[#221A14] dark:text-[#F5F3EF]">
                        {sunSign.rulingPlanet}
                      </h4>
                      <span className="text-xs text-[#6A655C] dark:text-[#AAA7A1] block mt-0.5">
                        {sunSign.house}
                      </span>
                    </div>

                    <div className="rounded-2xl p-4 bg-white dark:bg-[#121B26] border border-[#C59758]/40 shadow-xs">
                      <span className="text-[10px] uppercase font-bold text-[#C59758] dark:text-[#D5AE63] tracking-wider block mb-1">
                        🎨 Power Color & Lucky Numbers
                      </span>
                      <h4 className="font-serif font-bold text-base text-[#221A14] dark:text-[#F5F3EF]">
                        {sunSign.powerColor}
                      </h4>
                      <span className="text-xs text-[#C59758] dark:text-[#D5AE63] font-semibold block mt-0.5">
                        Lucky Numbers: {sunSign.luckyNumbers.join(", ")} • Power Day: {sunSign.luckyDay}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= CALL TO ACTION CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Free Tarot Oracle CTA */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-[#FAF7EE] to-[#F2EADB] dark:from-[#0B121B] dark:to-[#121B26] border-2 border-[#C59758]/40 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-serif uppercase tracking-wider font-bold text-[#C59758] dark:text-[#D5AE63]">
                  ✧ Free 3-Card Oracle ✧
                </span>
                <h4 className="font-serif font-bold text-xl text-[#221A14] dark:text-[#F5F3EF] mt-1 mb-2">
                  Draw Tarot Cards for {sunSign.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1] mb-4 leading-relaxed">
                  Consult High Astrologer Elena and draw your 3-card spread (Past, Present, Future) tuned to your {sunSign.name} solar aura.
                </p>
              </div>
              <Link
                href="/game"
                className="w-full py-3 rounded-xl bg-[#C59758] hover:bg-[#B9684D] text-white font-serif font-bold text-sm text-center shadow-md transition-all cursor-pointer"
              >
                Launch Free 3-Card Tarot Oracle →
              </Link>
            </div>

            {/* 78-Card Encyclopedia CTA */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-[#FAF7EE] to-[#F2EADB] dark:from-[#0B121B] dark:to-[#121B26] border-2 border-[#C59758]/40 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-serif uppercase tracking-wider font-bold text-[#C59758] dark:text-[#D5AE63]">
                  ✧ Rider-Waite-Smith ✧
                </span>
                <h4 className="font-serif font-bold text-xl text-[#221A14] dark:text-[#F5F3EF] mt-1 mb-2">
                  Explore 78-Card Tarot Deck
                </h4>
                <p className="text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1] mb-4 leading-relaxed">
                  Look up the full astrological decan, Hebrew letter, and Kabbalistic path for {sunSign.tarotCard} and all 78 cards.
                </p>
              </div>
              <Link
                href="/tarot"
                className="w-full py-3 rounded-xl bg-white dark:bg-[#152130] hover:bg-[#C59758]/15 border border-[#C59758] text-[#B9684D] dark:text-[#D5AE63] font-serif font-bold text-sm text-center shadow-md transition-all cursor-pointer"
              >
                Browse 78-Card Encyclopedia →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
