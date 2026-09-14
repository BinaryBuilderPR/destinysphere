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
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] dark:border-[#D5AE63]/40 bg-[var(--card)]/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-2xs backdrop-blur-xs mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
              <span>Trusted Guidance, Divine Clarity</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-foreground text-balance">
              Find Clarity. Embrace <br className="hidden sm:inline" />
              Your <span className="text-[var(--accent-brand)] dark:text-[var(--accent-gold)] font-medium">Destiny.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl font-normal leading-relaxed">
              Personalized readings to guide your path and illuminate your future with divine wisdom.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/readings">
                <Button className="rounded-full bg-[#B9684D] hover:bg-[#A8583E] dark:bg-[#D5AE63] dark:hover:bg-[#C49E53] dark:text-[#020912] text-white px-7 py-3 text-sm font-semibold shadow-xs transition-all duration-200">
                  Explore Readings
                </Button>
              </Link>

              <Link href="/articles">
                <Button
                  variant="outline"
                  className="rounded-full border border-[var(--border)] dark:border-[#D5AE63]/50 bg-transparent text-foreground hover:bg-[var(--card)] px-7 py-3 text-sm font-semibold transition-all duration-200"
                >
                  Read Articles
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column Artwork */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <HeroArtwork />
          </div>
        </div>

        {/* Unified Trust Indicators Pill Bar (Matching Reference Mockup) */}
        <div className="mt-12 flex justify-start">
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 rounded-full border border-[var(--border)] dark:border-[#D5AE63]/35 bg-[var(--card)]/80 backdrop-blur-xs px-6 py-2.5 shadow-2xs">
            {trustIndicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/85">
                    <Icon className="h-4 w-4 text-[var(--accent-gold)] shrink-0" />
                    <span className="tracking-normal whitespace-nowrap">{item.label}</span>
                  </div>
                  {index < trustIndicators.length - 1 && (
                    <span className="hidden sm:inline-block h-3.5 w-px bg-[var(--border)] dark:bg-[#D5AE63]/25" />
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
