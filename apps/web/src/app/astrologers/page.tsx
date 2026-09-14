import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ShieldCheck, Award, Star, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Verified Astrologers & Masters | DestinySphere",
  description:
    "Meet DestinySphere's verified master astrologers, clairvoyant tarot masters, and Vedic Jyotish scholars with 15+ years of verified lineage.",
};

interface AstrologerProfile {
  id: string;
  name: string;
  title: string;
  experience: string;
  lineage: string;
  avatar: string;
  rating: number;
  readingsCount: string;
  specialties: string[];
  bio: string;
  quote: string;
}

const VERIFIED_ASTROLOGERS: AstrologerProfile[] = [
  {
    id: "elena",
    name: "High Astrologer Elena",
    title: "Clairvoyant Tarot Master & Western Ephemeris Seer",
    experience: "15+ Years",
    lineage: "Hermetic Golden Dawn & Greco-Roman Planetary Lineage",
    avatar: "/astrologer-avatar.jpg",
    rating: 4.98,
    readingsCount: "24,000+",
    specialties: [
      "78-Card Rider-Waite-Smith Oracle",
      "Karmic Soul Crossroad Readings",
      "Twin Flame & Synastry Transits",
      "Akashic Timeline Forecasting",
    ],
    bio: "Elena serves as the High Astrologer at DestinySphere. Trained under third-generation Mediterranean clairvoyants and Hermetic masters, Elena channels profound astrological insight to resolve emotional dilemmas, relationship transitions, and life purpose awakenings.",
    quote: "The cards do not seal your destiny; they illuminate the highest path available to your soul.",
  },
  {
    id: "rajesh",
    name: "Pandit Rajesh Shastri",
    title: "Vedic Jyotish Acharya & Vastu Shastra Master",
    experience: "25+ Years",
    lineage: "Varanasi Parampara & Parashara Kundali Tradition",
    avatar: "/astrologer-avatar.jpg",
    rating: 4.99,
    readingsCount: "48,000+",
    specialties: [
      "Vedic Kundali Milan & Matchmaking",
      "Mahadasha & Antardasha Cycles",
      "Auspicious Muhurta Timing",
      "Navagraha Planetary Remedies & Yantras",
    ],
    bio: "Acharya Rajesh Shastri is a revered authority on Vedic Astrology (Jyotish) and Vastu Shastra. Descended from a multi-generational lineage of temple scholars in Varanasi, he provides exact mathematical calculations and potent energetic remedies.",
    quote: "When planetary time aligns with righteous intention, obstacles become bridges.",
  },
  {
    id: "seraphina",
    name: "Lady Seraphina",
    title: "Kabbalistic Tarotist & Ancestral Medium",
    experience: "18+ Years",
    lineage: "Occult Kabbalistic & Celtic Dream Seer Lineage",
    avatar: "/astrologer-avatar.jpg",
    rating: 4.96,
    readingsCount: "19,500+",
    specialties: [
      "Tree of Life 22 Paths Analysis",
      "Shadow Work & Emotional Healing",
      "Ancestral Karma Clearing",
      "Lucid Dream & Symbol Decoding",
    ],
    bio: "Lady Seraphina integrates Kabbalistic Tree of Life paths with deep psychological tarot. Her consultations gently uncover hidden emotional blockages and restore spiritual alignment.",
    quote: "In the quiet depth of your shadow rests the purest gold of your consciousness.",
  },
  {
    id: "kaelen",
    name: "Master Kaelen Vance",
    title: "Hellenistic Astrologer & Numerology Architect",
    experience: "12+ Years",
    lineage: "Alexandrian Hellenistic & Pythagorean Numerology",
    avatar: "/astrologer-avatar.jpg",
    rating: 4.95,
    readingsCount: "14,000+",
    specialties: [
      "Planetary Hour & Solar Return Charts",
      "Pythagorean Core Number Matrix",
      "Career & Sovereign Wealth Timing",
      "Locational Astrocartography",
    ],
    bio: "Master Kaelen Vance combines time-tested Hellenistic planetary techniques with precise Pythagorean numerology to guide entrepreneurs, creatives, and executives during critical crossroads.",
    quote: "Numbers and planets are the sacred geometry through which destiny speaks.",
  },
];

export default function AstrologersPage() {
  return (
    <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#020912] text-[#221A14] dark:text-[#F5F3EF] flex flex-col relative overflow-x-hidden selection:bg-[#C59758]/30 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-radial from-[#C59758]/10 via-[#B9684D]/5 to-transparent blur-3xl pointer-events-none" />

      <main className="flex-1 relative pt-12 pb-24">
        <Container className="max-w-5xl relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59758]/15 border border-[#C59758]/40 text-xs font-serif font-bold text-[#B9684D] dark:text-[#D5AE63] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strict Vetting & Verified Lineage Standards</span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#221A14] dark:text-[#F5F3EF] tracking-tight">
              Verified Master Astrologers
            </h1>
            <p className="mt-4 text-base text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">
              Every practitioner at DestinySphere undergoes rigorous vetting, credential verification, and adheres to our sacred confidentiality code.
            </p>
          </div>

          {/* Astrologers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {VERIFIED_ASTROLOGERS.map((astro) => (
              <div
                key={astro.id}
                className="rounded-3xl border-2 border-[#C59758]/30 hover:border-[#C59758] bg-white/95 dark:bg-[#0B121B]/95 p-6 sm:p-8 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Profile Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#C59758] shadow-md relative shrink-0">
                      <Image
                        src={astro.avatar}
                        alt={astro.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-[#221A14] dark:text-[#F5F3EF]">
                          {astro.name}
                        </h3>
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm" title="Verified Lineage">
                          ✓
                        </span>
                      </div>
                      <p className="text-xs text-[#B9684D] dark:text-[#D5AE63] font-semibold leading-tight">
                        {astro.title}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-[#6A655C] dark:text-[#AAA7A1]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C59758]" />
                          <span>{astro.experience}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          <span>{astro.rating} ({astro.readingsCount})</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lineage & Bio */}
                  <div className="mb-4">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#C59758] dark:text-[#D5AE63] block mb-1">
                      Sacred Lineage: {astro.lineage}
                    </span>
                    <p className="text-xs sm:text-sm text-[#221A14]/85 dark:text-[#F5F3EF]/85 leading-relaxed">
                      {astro.bio}
                    </p>
                  </div>

                  {/* Specialties Pills */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-bold text-[#6A655C] dark:text-[#AAA7A1] block mb-1.5">
                      Core Areas of Mastery:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {astro.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="px-2.5 py-1 rounded-full bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/30 text-[11px] font-semibold text-[#221A14] dark:text-[#F5F3EF]"
                        >
                          ✦ {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="p-3 rounded-xl bg-[#C59758]/10 border border-[#C59758]/20 italic text-xs text-[#B9684D] dark:text-[#D5AE63]">
                    &ldquo;{astro.quote}&rdquo;
                  </div>
                </div>

                {/* Bottom Status Card */}
                <div className="mt-6 pt-4 border-t border-[#C59758]/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#6A655C] dark:text-[#AAA7A1]">
                    Private 1-on-1 Sessions:
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-[#C59758]/30 text-[11px] font-serif font-bold text-[#C59758] dark:text-[#D5AE63]">
                    ✧ Opening in Near Future ✧
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Game Link */}
          <div className="rounded-3xl p-8 bg-gradient-to-r from-[#C59758]/20 via-[#D5AE63]/15 to-[#B9684D]/20 border border-[#C59758]/50 text-center flex flex-col items-center gap-3">
            <h3 className="font-serif font-bold text-2xl text-[#221A14] dark:text-[#F5F3EF]">
              Experience an Interactive Reading with High Astrologer Elena
            </h3>
            <p className="text-sm text-[#6A655C] dark:text-[#AAA7A1] max-w-lg">
              Draw your free 3-card spread now and receive live procedural interpretations directly from Elena.
            </p>
            <Link
              href="/game"
              className="mt-2 px-8 py-3 rounded-full bg-[#C59758] hover:bg-[#B9684D] text-white font-serif font-bold text-sm shadow-lg transition-all"
            >
              Consult High Astrologer Elena (100% Free) →
            </Link>
          </div>
        </Container>
      </main>
    </div>
  );
}

