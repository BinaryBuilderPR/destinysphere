import Link from "next/link";
import { Sparkles, ShieldCheck, Clock, Award, Lock } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import HeroArtwork from "./HeroArtwork";

const trustIndicators = [
  {
    icon: ShieldCheck,
    label: "100% Confidential",
  },
  {
    icon: Clock,
    label: "Accurate Readings",
  },
  {
    icon: Award,
    label: "Experienced Experts",
  },
  {
    icon: Lock,
    label: "Secure Platform",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-14 md:pb-16">
      <Container>
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Pill Badge */}
            <Link href="/game" className="group inline-flex items-center gap-2 rounded-full border border-[#C59758]/40 dark:border-[#D5AE63]/40 bg-[var(--card)]/80 hover:bg-[#C59758]/10 px-4 py-2 text-sm font-semibold text-muted-foreground shadow-2xs backdrop-blur-xs mb-6 transition-all">
              <Sparkles className="h-4 w-4 text-[var(--accent-gold)] group-hover:scale-110 transition-transform" />
              <span>Free 3-Card Tarot Oracle • Live Reading</span>
              <span className="text-xs text-[#C59758] dark:text-[#D5AE63] font-bold">Try Now →</span>
            </Link>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] font-normal leading-[1.1] tracking-tight text-foreground text-balance">
              Find Clarity. Embrace <br className="hidden sm:inline" />
              Your <span className="text-[var(--accent-brand)] dark:text-[var(--accent-gold)] font-medium">Destiny.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl font-normal leading-relaxed">
              Personalized readings and interactive oracle spreads to guide your path and illuminate your future with divine wisdom.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link href="/game" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-full bg-[#B9684D] hover:bg-[#A8583E] dark:bg-[#D5AE63] dark:hover:bg-[#C49E53] dark:text-[#020912] text-white px-7 py-3.5 text-[15px] sm:text-base font-semibold shadow-xs transition-all duration-200 cursor-pointer flex items-center justify-center gap-2">
                  <span>Free Tarot Oracle</span>
                  <span>🔮</span>
                </Button>
              </Link>

              <Link href="/zodiac" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-full border-2 border-[#C59758]/50 hover:border-[#C59758] bg-transparent text-foreground hover:bg-[#C59758]/10 px-7 py-3.5 text-[15px] sm:text-base font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Free Zodiac Finder</span>
                  <span>✨</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column Artwork */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <HeroArtwork />
          </div>
        </div>

        {/* Unified Trust Indicators Pill Bar (Responsive scroll/wrap on mobile) */}
        <div className="mt-8 sm:mt-12 flex justify-start overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-4 sm:gap-6 rounded-full border border-[var(--border)] dark:border-[#D5AE63]/35 bg-[var(--card)]/80 backdrop-blur-xs px-5 sm:px-7 py-2.5 sm:py-3 shadow-2xs shrink-0">
            {trustIndicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-[15px] font-medium text-foreground/90">
                    <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[var(--accent-gold)] shrink-0" />
                    <span className="tracking-normal whitespace-nowrap">{item.label}</span>
                  </div>
                  {index < trustIndicators.length - 1 && (
                    <span className="inline-block h-3 sm:h-4 w-px bg-[var(--border)] dark:bg-[#D5AE63]/25" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
