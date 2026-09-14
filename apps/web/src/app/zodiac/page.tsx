import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { ZodiacCalculator } from "@/components/zodiac/ZodiacCalculator";
import { ZodiacGrid } from "@/components/zodiac/ZodiacGrid";

export const metadata: Metadata = {
  title: "Free Zodiac Sign & Astrological Chart Finder | DestinySphere",
  description:
    "Calculate your Western Sun Sign, Moon Sign, Ascendant / Rising Sign, Elemental Balance, and Chinese Zodiac with DestinySphere's 100% Free Astrological Finder.",
};

export default function ZodiacPage() {
  return (
    <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#020912] text-[#221A14] dark:text-[#F5F3EF] flex flex-col relative overflow-x-hidden selection:bg-[#C59758]/30 transition-colors duration-500">
      {/* Mystic Background Visual Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-radial from-[#C59758]/10 via-[#B9684D]/5 to-transparent blur-3xl opacity-70" />
      </div>

      <main className="flex-1 relative pt-12 pb-20">
        <Container className="relative z-10 flex flex-col gap-16">
          {/* Main Interactive Zodiac & Astrological Calculator */}
          <section>
            <ZodiacCalculator />
          </section>

          {/* 12 Zodiac Signs Full Encyclopedia Grid */}
          <section className="pt-8 border-t border-[#C59758]/25">
            <ZodiacGrid />
          </section>
        </Container>
      </main>
    </div>
  );
}
