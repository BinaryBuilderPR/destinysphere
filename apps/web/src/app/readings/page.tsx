import React, { Suspense } from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { ReadingBookingFlow } from "@/components/readings/ReadingBookingFlow";

export const metadata: Metadata = {
  title: "Book Sacred Reading & Astrological Consultation | DestinySphere",
  description:
    "Enter your birth details and secure private consultations for Tarot Card Readings, Vedic Kundali, Moonology, Numerology, Candle Wax, and Lucky Numbers.",
};

export default function ReadingsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#020912] text-[#221A14] dark:text-[#F5F3EF] flex flex-col relative overflow-x-hidden selection:bg-[#C59758]/30 transition-colors duration-500">
      {/* Mystic Background Visual Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-radial from-[#C59758]/10 via-[#B9684D]/5 to-transparent blur-3xl opacity-70" />
      </div>

      <main className="flex-1 relative pt-12 pb-24">
        <Container className="relative z-10">
          <Suspense
            fallback={
              <div className="text-center py-20 animate-pulse text-[#C59758] font-serif text-lg">
                <span>✦ Loading Sacred Consultation Portal... ✦</span>
              </div>
            }
          >
            <ReadingBookingFlow />
          </Suspense>
        </Container>
      </main>
    </div>
  );
}

