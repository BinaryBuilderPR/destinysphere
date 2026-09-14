"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TarotCard } from "@/data/tarotCards";
import { audioEngine } from "@/lib/audioEngine";

interface AstrologerChatProps {
  pastCard: TarotCard;
  presentCard: TarotCard;
  futureCard: TarotCard;
  onReset: () => void;
  deckMode?: "78-full" | "22-major";
}

interface Message {
  id: string;
  sender: "astrologer" | "user";
  text: string;
  time: string;
  badge?: string;
  cta?: boolean;
  lockedTeaser?: {
    title: string;
    description: string;
  };
  showTeaserNow?: boolean;
}

/**
 * Format markdown **bold** and *italic* into beautiful, styled JSX elements.
 */
function renderFormattedText(text: string) {
  const paragraphs = text.split("\n\n");

  return paragraphs.map((para, pIdx) => {
    const parts = para.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

    return (
      <p key={pIdx} className="leading-relaxed text-sm sm:text-[15px] mb-2.5 last:mb-0">
        {parts.map((part, idx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            const inner = part.slice(2, -2);
            return (
              <strong
                key={idx}
                className="font-bold text-[#B9684D] dark:text-[#D5AE63]"
              >
                {inner}
              </strong>
            );
          }
          if (part.startsWith("*") && part.endsWith("*")) {
            const inner = part.slice(1, -1);
            return (
              <em
                key={idx}
                className="italic font-medium text-[#C59758] dark:text-[#D5AE63]"
              >
                {inner}
              </em>
            );
          }
          return part;
        })}
      </p>
    );
  });
}

export function AstrologerChat({
  pastCard,
  presentCard,
  futureCard,
  onReset,
  deckMode = "78-full",
}: AstrologerChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [typingText, setTypingText] = useState<string>("Elena is reading your cosmic aura");
  const [step, setStep] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");
  const chatFeedRef = useRef<HTMLDivElement>(null);

  // Scroll ONLY the internal chat container, never the window
  const scrollFeedToBottom = () => {
    if (chatFeedRef.current) {
      chatFeedRef.current.scrollTo({
        top: chatFeedRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollFeedToBottom();
  }, [messages, isTyping]);

  // Progressive message stream from Lady Astrologer with natural human reading pauses
  useEffect(() => {
    const is78 = deckMode === "78-full";
    const welcomeText = is78
      ? `Welcome, divine seeker. I have consecrated and shuffled all **78 portals of the Rider-Waite-Smith Tarot Deck** (Major & Minor Arcana) for your inquiry. Your spirit has drawn a potent trio: **${pastCard.name}**, **${presentCard.name}**, and **${futureCard.name}**. Take a deep breath as I open the elemental channel for you...`
      : `Welcome, divine seeker. We consult the sacred **22 Major Arcana—the grand archetypal crossroads of the soul**. Your spirit has drawn a potent destiny triad: **${pastCard.name}**, **${presentCard.name}**, and **${futureCard.name}**. Take a deep breath as I open the akashic channel for you...`;

    const streamSequence = [
      {
        delay: 1500,
        typingStatus: is78 ? "Elena is reading your 78-Card Elemental Mandala..." : "Elena is attuning to your 22 Archetypal Frequencies...",
        badge: is78 ? "✨ 78-Card Elemental Attunement" : "✨ 22 Major Arcana Attunement",
        text: welcomeText,
      },
      {
        delay: 5500, // Generous pause so user reads welcome
        typingStatus: "Elena is channeling your Past Karmic Roots...",
        badge: "1. The Past • Karmic Foundation",
        text: `In your past position rests **${pastCard.name}** (${pastCard.element} Element).\n\n${pastCard.interpretations.past}\n\n*Key takeaway:* This karmic cycle shaped your emotional resilience and prepared your aura for the shifts happening right now.`,
      },
      {
        delay: 7000, // Generous pause so user reads past card
        typingStatus: "Elena is tuning into your Present Crossroads...",
        badge: "2. The Present • Cosmic Catalyst",
        text: `At the center of your reading stands **${presentCard.name}** (${presentCard.element} Element).\n\n${presentCard.interpretations.present}\n\n*Elena's Intuition:* You are currently standing at a decisive threshold. Do not rush; honor the subtle signs and synchronicities appearing in your daily life.`,
      },
      {
        delay: 7500, // Generous pause so user reads present card
        typingStatus: "Elena is gazing into your Ascendant Future...",
        badge: "3. The Future • Looming Horizon",
        text: `Leading you into tomorrow is **${futureCard.name}** (${futureCard.element} Element).\n\n${futureCard.interpretations.future}\n\n*Cosmic Advice:* "${futureCard.advice}"\n\nWhen your inner clarity aligns with disciplined action, obstacles dissolve effortlessly.`,
      },
      {
        delay: 8000, // Generous pause so user reads future card
        typingStatus: "Elena is synthesizing your Master Destiny timeline...",
        badge: "🔮 Master Astrologer's Synthesis",
        text: `Together, these three cards reveal a powerful transition from deep karmic learning into empowered conscious creation. The foundational energies are clear, but your personal planetary timeline holds the exact keys.`,
        lockedTeaser: {
          title: "Personal Natal Transits & Deep Chart Analysis",
          description: "Private 1-on-1 deep chart consultations will open in the near future. Continue exploring all free Tarot Oracle and Zodiac features.",
        },
      },
    ];

    let timerId: NodeJS.Timeout;

    const runStream = (idx: number) => {
      if (idx >= streamSequence.length) {
        setIsTyping(false);
        return;
      }

      setIsTyping(true);
      setTypingText(streamSequence[idx].typingStatus);

      timerId = setTimeout(() => {
        const item = streamSequence[idx];
        const msgId = `msg-${Date.now()}-${idx}`;
        audioEngine.playMessageDing();

        setMessages((prev) => [
          ...prev,
          {
            id: msgId,
            sender: "astrologer",
            badge: item.badge,
            text: item.text,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            lockedTeaser: item.lockedTeaser,
            showTeaserNow: false, // Initially hidden
          },
        ]);

        // If message has locked teaser, reveal the preview card after a thoughtful 3.5s pause
        if (item.lockedTeaser) {
          setTimeout(() => {
            setMessages((prev) =>
              prev.map((m) => (m.id === msgId ? { ...m, showTeaserNow: true } : m))
            );
          }, 3500);
        }

        setStep(idx + 1);
        runStream(idx + 1);
      }, streamSequence[idx].delay);
    };

    runStream(0);

    return () => clearTimeout(timerId);
  }, [pastCard, presentCard, futureCard, deckMode]);

  const handleQuickQuestion = (question: string) => {
    audioEngine.playCardSelect();
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: question,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setTypingText("Elena is consulting your natal chart...");

    // Thoughtful human typing delay (4.0s)
    setTimeout(() => {
      let reply = "";
      let lockedInfo = {
        title: "Deeper Astrological Channel (Opening Soon)",
        description: "Private consultations will open in the near future. Enjoy unlimited free oracle and zodiac guidance.",
      };

      if (question.includes("Love") || question.includes("Relationship")) {
        reply = `Looking into your energetic field regarding love: **${presentCard.name}** encourages transparency and emotional honesty. The upcoming influence of **${futureCard.name}** signals that clearing past emotional baggage will attract an authentic, soul-aligned connection.`;
        lockedInfo = {
          title: "3 Key Soulmate Transit Dates & Synastry",
          description: "Private synastry consultations will open in the near future. Keep tuning into your daily celestial signs.",
        };
      } else if (question.includes("Career") || question.includes("Wealth")) {
        reply = `In matters of career and finance: **${pastCard.name}** laid the technical foundation. Your present card reveals strategic timing is everything. Expect significant financial movement as your energetic alignment stabilizes.`;
        lockedInfo = {
          title: "Financial Muhurta & Career Breakthrough Window",
          description: "Comprehensive planetary career timing charts will open in the near future.",
        };
      } else if (question.includes("Remedies") || question.includes("Rituals")) {
        reply = `*Initial Remedy:* Light a sandalwood incense or white candle on Friday evening. Meditate for 10 minutes visualizing a golden sphere of protective light surrounding your aura.`;
        lockedInfo = {
          title: "Personalized Gemstone, Yantra & Mantra Prescription",
          description: "Personalized birth-chart remedies will open in the near future.",
        };
      } else {
        reply = `The celestial current for your question is vibrant. **${futureCard.name}** promises that trusting your instincts and taking measured steps will yield the highest divine outcome.`;
        lockedInfo = {
          title: "Detailed Akashic Reading & Timelines",
          description: "Personal 1-on-1 consultations with High Astrologer Elena will open in the near future.",
        };
      }

      const replyId = `astro-reply-${Date.now()}`;
      audioEngine.playMessageDing();
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: replyId,
          sender: "astrologer",
          badge: "🌟 Elena's Direct Channel",
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          lockedTeaser: lockedInfo,
          showTeaserNow: false, // Initially hidden
        },
      ]);

      // Delay showing the locked book card by 3 seconds so user reads reply first
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) => (m.id === replyId ? { ...m, showTeaserNow: true } : m))
        );
      }, 3000);
    }, 4000);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const text = userInput.trim();
    setUserInput("");
    handleQuickQuestion(text);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[#FAF7EE]/95 dark:bg-[#0B121B]/95 border-2 border-[#C59758]/50 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col h-[650px]">
      {/* ================= CHAT HEADER ================= */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FAF7EE] via-[#F3ECD8] to-[#FAF7EE] dark:from-[#0B121B] dark:via-[#121B26] dark:to-[#0B121B] border-b border-[#C59758]/30 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C59758] shadow-md relative">
              <Image
                src="/astrologer-avatar.jpg"
                alt="High Astrologer Elena"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#FAF7EE] dark:border-[#0B121B] animate-pulse" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h3 className="font-serif font-bold text-sm sm:text-base md:text-lg text-[#221A14] dark:text-[#F5F3EF]">
                High Astrologer Elena
              </h3>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#C59758]/20 text-[#B9684D] dark:text-[#D5AE63] border border-[#C59758]/30">
                Live Oracle
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[#C59758] dark:text-[#D5AE63] border border-[#C59758]/20">
                {deckMode === "78-full" ? "🌟 78 RWS Deck" : "🔮 22 Major Arcana"}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#6A655C] dark:text-[#AAA7A1]">
              Clairvoyant Tarot Master • 15+ Yrs Sacred Lineage
            </p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-[#C59758]/40 hover:bg-[#C59758]/10 text-[#221A14] dark:text-[#F5F3EF] transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <span>🔄</span>
          <span className="hidden sm:inline">Draw Again</span>
        </button>
      </div>

      {/* ================= MESSAGE FEED ================= */}
      <div
        ref={chatFeedRef}
        className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 text-sm sm:text-base scroll-smooth"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"
              }`}
          >
            {msg.badge && (
              <span className="text-[11px] font-bold tracking-wider text-[#C59758] dark:text-[#D5AE63] mb-1 px-2.5 py-0.5 rounded-full bg-[#C59758]/10 dark:bg-[#D5AE63]/10 border border-[#C59758]/20">
                {msg.badge}
              </span>
            )}

            <div
              className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-4 sm:p-5 shadow-md ${msg.sender === "user"
                  ? "bg-[#C59758] text-white rounded-tr-none"
                  : "bg-white dark:bg-[#121B26] text-[#221A14] dark:text-[#F5F3EF] border border-[#C59758]/30 rounded-tl-none"
                }`}
            >
              {/* Unlocked / Visible message from Elena */}
              {renderFormattedText(msg.text)}

              {/* Delayed Reveal of Locked Teaser Box & Booking CTA */}
              {msg.lockedTeaser && msg.showTeaserNow && (
                <div className="mt-4 pt-3.5 border-t border-[#C59758]/30 animate-fade-in transition-all duration-700">
                  <div className="relative rounded-xl border border-[#D5AE63]/60 bg-gradient-to-br from-[#121B26]/90 to-[#070B10]/95 p-4 overflow-hidden shadow-lg">
                    {/* Blurred background teaser text */}
                    <div className="filter blur-[4px] select-none opacity-40 text-xs sm:text-[13px] leading-relaxed text-[#F5F3EF] space-y-1.5 pointer-events-none">
                      <p>
                        ✦ Planetary transit on the 14th directly aspects your 7th House of Sacred Union, dissolving karmic obstacles from past cycles.
                      </p>
                      <p>
                        ✦ Exact Auspicious Muhurta & Planetary Alignment: 3 key dates in the upcoming lunar cycle for major breakthrough.
                      </p>
                      <p>
                        ✦ High-energy crystal remedy and personalized birth-chart mantra for rapid activation.
                      </p>
                    </div>

                    {/* Floating Centered Lock & Informational Badge */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 backdrop-blur-[2px] p-4 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D5AE63]/20 border border-[#D5AE63]/50 text-[#D5AE63] text-xs font-bold mb-1.5 shadow">
                        <span>🔒</span>
                        <span>{msg.lockedTeaser.title}</span>
                      </div>
                      <p className="text-[11px] text-white/90 max-w-sm font-medium mb-3 leading-snug">
                        {msg.lockedTeaser.description}
                      </p>
                      <div className="px-4 py-1.5 rounded-full bg-white/10 border border-[#D5AE63]/50 text-[#D5AE63] font-serif font-bold text-xs tracking-wider shadow backdrop-blur-xs flex items-center gap-1.5">
                        <span>✧ Opening in Near Future ✧</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <span className="text-[10px] text-[#6A655C] dark:text-[#AAA7A1] mt-1 px-1">
              {msg.time}
            </span>
          </div>
        ))}

        {/* Typing indicator with contextual text */}
        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-[#C59758] dark:text-[#D5AE63] bg-white/80 dark:bg-[#121B26]/80 px-4 py-2.5 rounded-2xl border border-[#C59758]/30 w-fit shadow-sm">
            <span className="animate-spin text-sm">🔮</span>
            <span className="font-serif italic">{typingText}</span>
            <span className="flex gap-1 ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59758] animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59758] animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59758] animate-bounce" style={{ animationDelay: "300ms" }} />
            </span>
          </div>
        )}
      </div>

      {/* ================= QUICK INQUIRY CHIPS ================= */}
      <div className="px-4 py-2.5 bg-[#F3ECD8]/50 dark:bg-[#070B10]/60 border-t border-[#C59758]/20 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-xs font-semibold text-[#6A655C] dark:text-[#AAA7A1] shrink-0">
          Ask Elena:
        </span>
        <button
          onClick={() => handleQuickQuestion("Tell me about my Love & Relationships with these cards ❤️")}
          className="shrink-0 text-xs px-3 py-1 rounded-full bg-white dark:bg-[#121B26] border border-[#C59758]/30 hover:border-[#C59758] text-[#221A14] dark:text-[#F5F3EF] transition-colors shadow-sm cursor-pointer"
        >
          ❤️ Love & Soulmate
        </button>
        <button
          onClick={() => handleQuickQuestion("How will this impact my Career & Wealth? 💼")}
          className="shrink-0 text-xs px-3 py-1 rounded-full bg-white dark:bg-[#121B26] border border-[#C59758]/30 hover:border-[#C59758] text-[#221A14] dark:text-[#F5F3EF] transition-colors shadow-sm cursor-pointer"
        >
          💼 Career & Wealth
        </button>
        <button
          onClick={() => handleQuickQuestion("What spiritual remedies or mantras should I practice? 🧘")}
          className="shrink-0 text-xs px-3 py-1 rounded-full bg-white dark:bg-[#121B26] border border-[#C59758]/30 hover:border-[#C59758] text-[#221A14] dark:text-[#F5F3EF] transition-colors shadow-sm cursor-pointer"
        >
          🧘 Sacred Remedies
        </button>
      </div>

      {/* ================= CHAT INPUT BOX ================= */}
      <form
        onSubmit={handleSendCustom}
        className="p-3 sm:p-4 bg-white dark:bg-[#0B121B] border-t border-[#C59758]/30 flex items-center gap-2"
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask Elena anything about your cards or destiny..."
          className="flex-1 px-4 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/30 focus:border-[#C59758] focus:outline-none text-sm text-[#221A14] dark:text-[#F5F3EF] placeholder:text-[#6A655C]/60 dark:placeholder:text-[#AAA7A1]/60"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-[#C59758] hover:bg-[#B9684D] text-white font-semibold text-sm transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
        >
          <span>Send</span>
          <span>✦</span>
        </button>
      </form>
    </div>
  );
}
