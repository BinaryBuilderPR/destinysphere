import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Sparkles, Shield, Award, Heart, Compass, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | DestinySphere Sacred Lineage & Platform",
  description:
    "Discover DestinySphere's heritage: bridging 5,000-year Vedic astrology traditions with authentic 78-card Western Tarot, clairvoyant mastery, and sacred confidentiality.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#020912] text-[#221A14] dark:text-[#F5F3EF] flex flex-col relative overflow-x-hidden selection:bg-[#C59758]/30 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-radial from-[#C59758]/10 via-[#B9684D]/5 to-transparent blur-3xl pointer-events-none" />

      <main className="flex-1 relative pt-12 pb-24">
        <Container className="max-w-4xl relative z-10 space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59758]/15 border border-[#C59758]/40 text-xs font-serif font-bold text-[#B9684D] dark:text-[#D5AE63] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Sacred Lineage & Modern Technology</span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#221A14] dark:text-[#F5F3EF] tracking-tight">
              About DestinySphere
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">
              Illuminating life paths, love connections, and career destiny through timeless astrological wisdom and interactive divination.
            </p>
          </div>

          {/* Mission & Heritage Split */}
          <div className="rounded-3xl border-2 border-[#C59758]/30 bg-white/90 dark:bg-[#0B121B]/90 p-6 sm:p-10 shadow-xl backdrop-blur-md space-y-6">
            <span className="text-xs uppercase font-serif font-bold tracking-widest text-[#C59758] dark:text-[#D5AE63]">
              ✧ Our Sacred Origin ✧
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#221A14] dark:text-[#F5F3EF]">
              Where Ancient Cosmos Meets Modern Clarity
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#221A14]/85 dark:text-[#F5F3EF]/85">
              Founded by master astrologers, tarot initiates, and visionary developers, DestinySphere was created to rescue the sacred arts from superficial fortune-telling. We believe true divination is not about fatalistic prediction, but about empowering your divine sovereignty and conscious choice.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#221A14]/85 dark:text-[#F5F3EF]/85">
              Our platform bridges 5,000 years of Vedic Jyotish astrology with the 78-card Rider-Waite-Smith Hermetic tarot tradition, delivering mathematical precision, authentic planetary ephemerides, and deeply empathetic spiritual guidance.
            </p>
          </div>

          {/* 4 Pillars of Excellence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B121B] border border-[#C59758]/30 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#C59758]/15 border border-[#C59758]/40 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#C59758] dark:text-[#D5AE63]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#221A14] dark:text-[#F5F3EF] mb-2">
                100% Confidential Sanctuary
              </h3>
              <p className="text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">
                Your birth details (DOB, birth time, coordinates, marital status, and personal inquiries) are guarded with 256-bit encryption and strict ethical non-disclosure.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B121B] border border-[#C59758]/30 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#C59758]/15 border border-[#C59758]/40 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#C59758] dark:text-[#D5AE63]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#221A14] dark:text-[#F5F3EF] mb-2">
                Verified Master Lineage
              </h3>
              <p className="text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">
                Every astrologer and tarot master associated with DestinySphere possesses over a decade of verified sacred lineage and proven spiritual mastery.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B121B] border border-[#C59758]/30 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#C59758]/15 border border-[#C59758]/40 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#C59758] dark:text-[#D5AE63]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#221A14] dark:text-[#F5F3EF] mb-2">
                Authentic 78-Card Encyclopedia
              </h3>
              <p className="text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">
                We provide complete Hermetic Order of the Golden Dawn astrological decans, Hebrew letters, Kabbalistic Tree of Life paths, and reader notes for all 78 cards.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#0B121B] border border-[#C59758]/30 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#C59758]/15 border border-[#C59758]/40 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#C59758] dark:text-[#D5AE63]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#221A14] dark:text-[#F5F3EF] mb-2">
                Empowering Free Will
              </h3>
              <p className="text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">
                We never use fear-based tactics. The celestial spheres describe the weather, but you hold the rudder of your destiny.
              </p>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="rounded-3xl p-8 bg-gradient-to-r from-[#C59758]/20 via-[#D5AE63]/15 to-[#B9684D]/20 border border-[#C59758]/50 text-center flex flex-col items-center gap-4">
            <h3 className="font-serif font-bold text-2xl text-[#221A14] dark:text-[#F5F3EF]">
              Begin Your Cosmic Journey
            </h3>
            <p className="text-sm text-[#6A655C] dark:text-[#AAA7A1] max-w-md">
              Draw your free 3-card spread or calculate your complete astrological blueprint in seconds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <Link
                href="/game"
                className="px-6 py-3 rounded-full bg-[#C59758] hover:bg-[#B9684D] text-white font-serif font-bold text-sm shadow-md transition-all"
              >
                Free 3-Card Tarot Oracle →
              </Link>
              <Link
                href="/zodiac"
                className="px-6 py-3 rounded-full bg-white dark:bg-[#121B26] border border-[#C59758] text-[#B9684D] dark:text-[#D5AE63] font-serif font-bold text-sm shadow-md transition-all"
              >
                Free Zodiac Finder →
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

