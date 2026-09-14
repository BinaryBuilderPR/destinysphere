import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

interface ReadingItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: (props: { className?: string }) => React.ReactNode;
}

// Highly Detailed Large Celestial Icons for 7 Reading Cards
const TarotIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {/* Background Tilted Card */}
    <rect x="14" y="10" width="28" height="44" rx="3" transform="rotate(-6 14 10)" opacity="0.6" strokeDasharray="3 2" />
    {/* Foreground Card */}
    <rect x="22" y="10" width="28" height="44" rx="3" />
    <rect x="25" y="13" width="22" height="38" rx="2" strokeWidth="0.8" opacity="0.7" />
    {/* Sun Motif */}
    <circle cx="36" cy="28" r="6" />
    <circle cx="36" cy="28" r="3" fill="currentColor" fillOpacity="0.2" />
    <path d="M 36 17 L 36 19 M 36 37 L 36 39 M 25 28 L 27 28 M 45 28 L 47 28" />
    <path d="M 28 20 L 30 22 M 42 34 L 44 36 M 28 36 L 30 34 M 42 20 L 44 22" strokeWidth="0.9" />
    {/* Card Bottom Label */}
    <line x1="28" y1="46" x2="44" y2="46" strokeWidth="1" />
  </svg>
);

const MoonologyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer Constellation Ring */}
    <circle cx="32" cy="32" r="24" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="32" cy="32" r="20" strokeWidth="0.8" opacity="0.4" />
    {/* Crescent Moon */}
    <path d="M 26 16 A 18 18 0 0 0 44 42 A 16 16 0 0 1 26 16 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="1.6" />
    {/* Constellation Stars */}
    <path d="M 22 24 L 22 28 M 20 26 L 24 26" strokeWidth="1" />
    <path d="M 46 20 L 46 26 M 43 23 L 49 23" strokeWidth="1" />
    <circle cx="20" cy="38" r="1.5" fill="currentColor" />
    <circle cx="42" cy="46" r="1.5" fill="currentColor" />
    <circle cx="16" cy="22" r="1" fill="currentColor" />
  </svg>
);

const KundaliIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {/* Vedic Square Chart */}
    <rect x="12" y="12" width="40" height="40" strokeWidth="1.6" />
    {/* Diagonals */}
    <line x1="12" y1="12" x2="52" y2="52" />
    <line x1="12" y1="52" x2="52" y2="12" />
    {/* Inner Diamond */}
    <polygon points="32,12 52,32 32,52 12,32" strokeWidth="1.4" fill="currentColor" fillOpacity="0.08" />
    {/* Center Sun / Bindu */}
    <circle cx="32" cy="32" r="4" fill="currentColor" fillOpacity="0.25" />
    <circle cx="32" cy="32" r="1.5" fill="currentColor" />
  </svg>
);

const NumerologyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {/* Sacred Geometry Dial */}
    <circle cx="32" cy="32" r="24" strokeWidth="1.6" />
    <circle cx="32" cy="32" r="17" strokeDasharray="3 2" opacity="0.6" />
    <circle cx="32" cy="32" r="8" fill="currentColor" fillOpacity="0.12" />
    {/* Coordinate Axes */}
    <line x1="32" y1="8" x2="32" y2="56" strokeDasharray="2 2" />
    <line x1="8" y1="32" x2="56" y2="32" strokeDasharray="2 2" />
    <line x1="15" y1="15" x2="49" y2="49" opacity="0.5" />
    <line x1="15" y1="49" x2="49" y2="15" opacity="0.5" />
    {/* Cardinal Planet Nodes */}
    <circle cx="32" cy="12" r="2" fill="currentColor" />
    <circle cx="52" cy="32" r="2" fill="currentColor" />
    <circle cx="32" cy="52" r="2" fill="currentColor" />
    <circle cx="12" cy="32" r="2" fill="currentColor" />
  </svg>
);

const CandleWaxIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {/* Candle Holder Plate */}
    <path d="M 18 52 C 18 48 46 48 46 52 Z" fill="currentColor" fillOpacity="0.15" />
    <line x1="14" y1="52" x2="50" y2="52" strokeWidth="1.8" />
    {/* Pillar Candle */}
    <rect x="25" y="26" width="14" height="24" rx="2" strokeWidth="1.5" />
    {/* Wax Drips */}
    <path d="M 28 26 L 28 34 Q 30 36 31 34 L 31 26" fill="currentColor" fillOpacity="0.2" />
    {/* Wick & Radiant Flame */}
    <line x1="32" y1="26" x2="32" y2="21" strokeWidth="1.5" />
    <path d="M 32 8 Q 38 16 32 21 Q 26 16 32 8 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.6" />
    {/* Aura Sparkles */}
    <path d="M 32 3 L 32 6 M 23 11 L 26 13 M 41 11 L 38 13" opacity="0.75" />
  </svg>
);

const KrishnaCardsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {/* Sacred Peacock Feather */}
    <path d="M 20 54 Q 32 40 44 14 Q 50 20 46 32 Q 42 44 26 54 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="1.5" />
    <path d="M 26 54 Q 36 32 44 14" strokeWidth="1.5" />
    {/* Feather Eye */}
    <circle cx="43" cy="24" r="5" strokeWidth="1.2" />
    <circle cx="43" cy="24" r="2.5" fill="currentColor" />
    {/* Divine Flute Line */}
    <line x1="14" y1="50" x2="28" y2="56" strokeWidth="2" />
    {/* Aura Stars */}
    <circle cx="18" cy="22" r="2" fill="currentColor" />
    <circle cx="52" cy="38" r="1.8" fill="currentColor" />
    <circle cx="28" cy="14" r="1.5" fill="currentColor" />
  </svg>
);

const LuckyNumbersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer Constellation Orbit */}
    <circle cx="32" cy="32" r="23" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="32" cy="32" r="15" strokeWidth="0.8" opacity="0.5" />
    {/* Star Matrix */}
    <polygon points="32,14 36,26 48,26 38,33 42,46 32,38 22,46 26,33 16,26 28,26" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" />
    {/* Lucky Number Orbit Nodes */}
    <circle cx="32" cy="9" r="2.2" fill="currentColor" />
    <circle cx="55" cy="32" r="2.2" fill="currentColor" />
    <circle cx="32" cy="55" r="2.2" fill="currentColor" />
    <circle cx="9" cy="32" r="2.2" fill="currentColor" />
  </svg>
);

const readings: ReadingItem[] = [
  {
    id: "tarot",
    title: "Tarot Card Reading",
    description: "Unlock insights into your past, present, and future through tarot.",
    href: "/readings?type=tarot",
    icon: TarotIcon,
  },
  {
    id: "moonology",
    title: "Moonology Reading",
    description: "Harness the power of the moon to understand your emotions and journey.",
    href: "/readings?type=moonology",
    icon: MoonologyIcon,
  },
  {
    id: "kundali",
    title: "Kundali Analysis",
    description: "Detailed birth chart reading to know your destiny and doshas.",
    href: "/readings?type=kundali",
    icon: KundaliIcon,
  },
  {
    id: "numerology",
    title: "Numerology Reading",
    description: "Decode numbers that shape your life and personality.",
    href: "/readings?type=numerology",
    icon: NumerologyIcon,
  },
  {
    id: "candle-wax",
    title: "Candle Wax Reading",
    description: "Uncover hidden truths through the ancient art of candle wax.",
    href: "/readings?type=candle-wax",
    icon: CandleWaxIcon,
  },
  {
    id: "krishna-cards",
    title: "Krishna Cards",
    description: "Receive divine guidance and messages from Krishna cards.",
    href: "/readings?type=krishna-cards",
    icon: KrishnaCardsIcon,
  },
  {
    id: "lucky-numbers",
    title: "Lucky Numbers",
    description: "Find your lucky numbers for success, wealth, and prosperity.",
    href: "/readings?type=lucky-numbers",
    icon: LuckyNumbersIcon,
  },
];

export default function ReadingsSection() {
  return (
    <section id="readings" className="pt-6 pb-16 md:pt-10 md:pb-24 transition-colors duration-200">
      <Container>
        {/* Section Header Matching Desired Reference */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span className="text-sm font-semibold tracking-normal text-[#B9684D] dark:text-[#D5AE63] mb-1.5">
            Our Readings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground tracking-tight">
            Discover Your Path
          </h2>
          {/* Subtle celestial divider with golden star */}
          <div className="flex items-center justify-center gap-3 mt-3 text-[#C59758] dark:text-[#D5AE63]">
            <span className="h-px w-12 bg-[#E5DFC9] dark:bg-[#D5AE63]/30" />
            <span className="text-xs">✦</span>
            <span className="h-px w-12 bg-[#E5DFC9] dark:bg-[#D5AE63]/30" />
          </div>
        </div>

        {/* 7-Card Responsive Grid with Large Icons and Bold Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-3.5">
          {readings.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative flex flex-col justify-between items-center text-center rounded-2xl border border-[var(--border)] dark:border-[#D5AE63]/20 bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-gold)]/70 hover:shadow-md"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Large Prominent Celestial Icon */}
                  <div className="mb-5 flex h-18 w-18 items-center justify-center text-[var(--accent-gold)] transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-16 w-16" />
                  </div>

                  {/* Bold Card Heading */}
                  <h3 className="font-serif text-lg font-bold leading-snug text-foreground mb-2.5">
                    {item.title}
                  </h3>

                  {/* Centered Description */}
                  <p className="text-[11.5px] leading-relaxed text-muted-foreground font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Centered CTA Link */}
                <div className="mt-5 pt-3 border-t border-[var(--border)]/60 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] transition-all group-hover:gap-2">
                  <span>Get Reading</span>
                  <ArrowRight className="h-3 w-3 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
