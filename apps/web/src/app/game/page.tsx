"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { AstrologerBackdrop } from "@/components/game/AstrologerBackdrop";
import { TarotCard3D } from "@/components/game/TarotCard3D";
import { DeckFan } from "@/components/game/DeckFan";
import { AstrologerChat } from "@/components/game/AstrologerChat";
import { TarotCard } from "@/data/tarotCards";
import { audioEngine } from "@/lib/audioEngine";

export default function TarotGamePage() {
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);
  const [stage, setStage] = useState<"drawing" | "revealing" | "reading">("drawing");
  const [deckMode, setDeckMode] = useState<"78-full" | "22-major">("78-full");
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [soundStarted, setSoundStarted] = useState<boolean>(false);
  const chatSectionRef = useRef<HTMLDivElement>(null);

  // Stop sound when navigating to another page or when tab/screen is switched off
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioEngine.stopAmbientTone();
      } else if (soundStarted && !isMuted) {
        audioEngine.startAmbientTone();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audioEngine.stopAmbientTone();
    };
  }, [soundStarted, isMuted]);

  // Start sound on first user interaction
  const initAudio = () => {
    if (!soundStarted) {
      audioEngine.startAmbientTone();
      setSoundStarted(true);
    }
  };

  const handleToggleSound = () => {
    initAudio();
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
  };

  const handleCardPick = (card: TarotCard) => {
    initAudio();
    if (selectedCards.length >= 3) return;

    const nextPicks = [...selectedCards, card];
    setSelectedCards(nextPicks);

    // If 3 cards picked, initiate the grand reveal sequence
    if (nextPicks.length === 3) {
      setStage("revealing");

      // Sequentially flip Past -> Present -> Future
      setTimeout(() => {
        audioEngine.playCardFlip();
        setFlippedCards([true, false, false]);
      }, 700);

      setTimeout(() => {
        audioEngine.playCardFlip();
        setFlippedCards([true, true, false]);
      }, 1600);

      setTimeout(() => {
        audioEngine.playCardFlip();
        setFlippedCards([true, true, true]);
        setStage("reading");
      }, 2500);

      setTimeout(() => {
        chatSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 3000);
    }
  };

  const handleReset = () => {
    setSelectedCards([]);
    setFlippedCards([false, false, false]);
    setStage("drawing");
  };

  const remaining = 3 - selectedCards.length;

  return (
    <div
      onClick={initAudio}
      className="min-h-screen bg-[#FAF7EE] dark:bg-[#020912] text-[#221A14] dark:text-[#F5F3EF] flex flex-col relative overflow-x-hidden selection:bg-[#C59758]/30 transition-colors duration-500"
    >
      <main className="flex-1 relative pt-10 pb-16 overflow-hidden">
        {/* Mystic Background Visuals with Seer Presence */}
        <AstrologerBackdrop
          currentStage={stage === "drawing" ? "drawing" : stage === "revealing" ? "revealed" : "chat"}
        />

        <Container className="relative z-10">
          {/* ================= TOP CONTROLS & TEMPLE TITLE ================= */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 mb-6 border-b border-[#C59758]/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl animate-spin-slow">🔮</span>
              <div>
                <h1 className="font-serif font-bold text-lg sm:text-xl text-[#221A14] dark:text-[#F5F3EF]">
                  Temple of the Three Moirai
                </h1>
                <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1]">
                  Free 3-Card Oracle • {deckMode === "78-full" ? "Complete 78-Card RWS Deck" : "22 Major Arcana Deck"}
                </p>
              </div>
            </div>

            {/* Audio & Reset Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleSound}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#0B121B]/80 border border-[#C59758]/40 hover:border-[#C59758] text-xs font-semibold shadow-sm transition-all text-[#221A14] dark:text-[#F5F3EF] cursor-pointer"
                title="Toggle Celestial Temple Music"
              >
                <span>{isMuted ? "🔇 Music Muted" : "🎵 Celestial Harp Active"}</span>
              </button>

              {selectedCards.length > 0 && (
                <button
                  onClick={handleReset}
                  className="px-3.5 py-1.5 rounded-full bg-[#C59758]/15 hover:bg-[#C59758]/25 border border-[#C59758]/40 text-xs font-semibold text-[#B9684D] dark:text-[#D5AE63] transition-all cursor-pointer"
                >
                  Reset Cards
                </button>
              )}
            </div>
          </div>

          {/* ================= LADY ASTROLOGER HEADER PRESENCE ================= */}
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#221A14] dark:text-[#F5F3EF] mb-2 tracking-tight">
              Consult the Celestial Arcana
            </h2>
            <p className="text-sm sm:text-base text-[#6A655C] dark:text-[#AAA7A1] max-w-xl mx-auto leading-relaxed mb-4">
              Quiet your thoughts. Formulate your question in your heart, then let your intuition guide your hand across the cards below.
            </p>

            {/* Deck Mode Toggle Pill & Visual Breakdown */}
            {stage === "drawing" && selectedCards.length === 0 && (
              <div className="flex flex-col items-center gap-3">
                <div className="inline-flex items-center p-1 rounded-full bg-white/90 dark:bg-[#0B121B]/90 border border-[#C59758]/50 shadow-md backdrop-blur-md">
                  <button
                    onClick={() => setDeckMode("78-full")}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${deckMode === "78-full"
                      ? "bg-[#C59758] text-white shadow-lg scale-102"
                      : "text-[#6A655C] dark:text-[#AAA7A1] hover:text-[#221A14] dark:hover:text-[#F5F3EF]"
                      }`}
                  >
                    <span>🌟</span>
                    <span>Full 78-Card Deck (RWS)</span>
                  </button>
                  <button
                    onClick={() => setDeckMode("22-major")}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${deckMode === "22-major"
                      ? "bg-[#C59758] text-white shadow-lg scale-102"
                      : "text-[#6A655C] dark:text-[#AAA7A1] hover:text-[#221A14] dark:hover:text-[#F5F3EF]"
                      }`}
                  >
                    <span>🔮</span>
                    <span>22 Major Arcana Only</span>
                  </button>
                </div>

                {/* Dynamic Deck Explanation & Elemental Badges */}
                {deckMode === "78-full" ? (
                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 animate-fade-in text-[11px] text-[#6A655C] dark:text-[#AAA7A1]">
                    <span className="font-semibold text-[#B9684D] dark:text-[#D5AE63]">In Deck (78):</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-medium">🔮 22 Major</span>
                    <span className="px-2 py-0.5 rounded-md bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/20 font-medium">🔥 14 Wands</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 font-medium">🌊 14 Cups</span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-medium">💨 14 Swords</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-medium">🌱 14 Pentacles</span>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-in text-[11px] text-[#6A655C] dark:text-[#AAA7A1]">
                    <span className="font-semibold text-[#B9684D] dark:text-[#D5AE63]">In Deck (22):</span>
                    <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/30 font-semibold">
                      🔮 0 The Fool → XXI The World (Karmic & Soul Crossroads)
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ================= 3-CARD SLOTS PREVIEW ================= */}
          <div className="grid grid-cols-3 gap-1.5 xs:gap-2.5 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-10">
            {/* Slot 1: The Past */}
            <div className="flex flex-col items-center">
              {selectedCards[0] ? (
                <TarotCard3D
                  card={selectedCards[0]}
                  isFlipped={flippedCards[0]}
                  positionLabel="1 • The Past"
                  highlight={flippedCards[0]}
                  deckMode={deckMode}
                />
              ) : (
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 w-full">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#C59758] dark:text-[#D5AE63] text-center truncate">
                    1 • The Past
                  </span>
                  <div className="w-full max-w-[108px] h-[175px] xs:max-w-[125px] xs:h-[200px] sm:max-w-[175px] sm:h-[280px] md:max-w-[200px] md:h-[315px] rounded-xl sm:rounded-2xl border-2 border-dashed border-[#C59758]/40 bg-[#FAF7EE]/50 dark:bg-[#0B121B]/50 flex flex-col items-center justify-center p-2 sm:p-3 text-center shadow-inner">
                    <span className="text-xl sm:text-3xl text-[#C59758]/60 mb-1">⏳</span>
                    <span className="text-[9px] sm:text-xs text-[#6A655C] dark:text-[#AAA7A1] font-medium leading-tight">
                      Awaiting 1st Pick
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Slot 2: The Present */}
            <div className="flex flex-col items-center">
              {selectedCards[1] ? (
                <TarotCard3D
                  card={selectedCards[1]}
                  isFlipped={flippedCards[1]}
                  positionLabel="2 • The Present"
                  highlight={flippedCards[1]}
                  deckMode={deckMode}
                />
              ) : (
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 w-full">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#C59758] dark:text-[#D5AE63] text-center truncate">
                    2 • Present
                  </span>
                  <div className="w-full max-w-[108px] h-[175px] xs:max-w-[125px] xs:h-[200px] sm:max-w-[175px] sm:h-[280px] md:max-w-[200px] md:h-[315px] rounded-xl sm:rounded-2xl border-2 border-dashed border-[#C59758]/40 bg-[#FAF7EE]/50 dark:bg-[#0B121B]/50 flex flex-col items-center justify-center p-2 sm:p-3 text-center shadow-inner">
                    <span className="text-xl sm:text-3xl text-[#C59758]/60 mb-1">⚡</span>
                    <span className="text-[9px] sm:text-xs text-[#6A655C] dark:text-[#AAA7A1] font-medium leading-tight">
                      Awaiting 2nd Pick
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Slot 3: The Future */}
            <div className="flex flex-col items-center">
              {selectedCards[2] ? (
                <TarotCard3D
                  card={selectedCards[2]}
                  isFlipped={flippedCards[2]}
                  positionLabel="3 • The Future"
                  highlight={flippedCards[2]}
                  deckMode={deckMode}
                />
              ) : (
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 w-full">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#C59758] dark:text-[#D5AE63] text-center truncate">
                    3 • The Future
                  </span>
                  <div className="w-full max-w-[108px] h-[175px] xs:max-w-[125px] xs:h-[200px] sm:max-w-[175px] sm:h-[280px] md:max-w-[200px] md:h-[315px] rounded-xl sm:rounded-2xl border-2 border-dashed border-[#C59758]/40 bg-[#FAF7EE]/50 dark:bg-[#0B121B]/50 flex flex-col items-center justify-center p-2 sm:p-3 text-center shadow-inner">
                    <span className="text-xl sm:text-3xl text-[#C59758]/60 mb-1">🔮</span>
                    <span className="text-[9px] sm:text-xs text-[#6A655C] dark:text-[#AAA7A1] font-medium leading-tight">
                      Awaiting 3rd Pick
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= FANNED DECK WITH MAGICAL HAND (During Drawing Stage) ================= */}
          {stage === "drawing" && (
            <div className="mt-4 animate-fade-in">
              <DeckFan
                onCardSelect={handleCardPick}
                remainingPicks={remaining}
                disabled={remaining <= 0}
                deckMode={deckMode}
              />
            </div>
          )}

          {/* ================= REVEALING NOTIFICATION ================= */}
          {stage === "revealing" && (
            <div className="text-center py-6 animate-pulse">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C59758]/15 border border-[#C59758] text-sm font-semibold text-[#B9684D] dark:text-[#D5AE63]">
                <span className="animate-spin">✦</span>
                <span>The Lady Astrologer is unveiling your divine timeline...</span>
              </div>
            </div>
          )}

          {/* ================= CONVERSATIONAL LADY ASTROLOGER CHAT ================= */}
          {selectedCards.length === 3 && (
            <div ref={chatSectionRef} className="mt-12 pt-8 border-t border-[#C59758]/30">
              <div className="text-center mb-8">
                <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#C59758] dark:text-[#D5AE63] font-bold">
                  ✧ Sacred Interpretation ✧
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#221A14] dark:text-[#F5F3EF] mt-1">
                  Live Consultation with High Astrologer Elena
                </h3>
              </div>

              <AstrologerChat
                pastCard={selectedCards[0]}
                presentCard={selectedCards[1]}
                futureCard={selectedCards[2]}
                onReset={handleReset}
                deckMode={deckMode}
              />
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}
