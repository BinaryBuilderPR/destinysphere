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

// Celestial Custom Line-Art Icons for each service
const TarotIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="8" width="20" height="32" rx="3" />
    <circle cx="24" cy="24" r="6" />
    <path d="M 24 14 L 24 16 M 24 32 L 24 34 M 14 24 L 16 24 M 32 24 L 34 24" />
    <path d="M 18 12 L 30 12 M 18 36 L 30 36" strokeWidth="1" strokeDasharray="1 2" />
    <path d="M 8 14 L 14 10 M 40 14 L 34 10" opacity="0.6" />
  </svg>
);

const MoonologyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="16" strokeDasharray="3 3" opacity="0.6" />
    <path d="M 20 12 A 14 14 0 0 0 34 32 A 13 13 0 0 1 20 12 Z" fill="currentColor" fillOpacity="0.12" />
    <circle cx="16" cy="18" r="1" fill="currentColor" />
    <circle cx="36" cy="16" r="1.5" fill="currentColor" />
    <circle cx="14" cy="30" r="1" fill="currentColor" />
  </svg>
);

const KundaliIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="10" width="28" height="28" />
    <line x1="10" y1="10" x2="38" y2="38" />
    <line x1="10" y1="38" x2="38" y2="10" />
    <polygon points="24,10 38,24 24,38 10,24" />
    <circle cx="24" cy="24" r="3" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const NumerologyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="15" />
    <circle cx="24" cy="24" r="6" />
    <line x1="24" y1="5" x2="24" y2="43" strokeDasharray="2 2" />
    <line x1="5" y1="24" x2="43" y2="24" strokeDasharray="2 2" />
    <path d="M 12 12 L 36 36 M 12 36 L 36 12" opacity="0.5" />
    <circle cx="24" cy="9" r="1.5" fill="currentColor" />
    <circle cx="39" cy="24" r="1.5" fill="currentColor" />
    <circle cx="24" cy="39" r="1.5" fill="currentColor" />
    <circle cx="9" cy="24" r="1.5" fill="currentColor" />
  </svg>
);

const CandleWaxIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Candle base */}
    <rect x="18" y="20" width="12" height="20" rx="2" />
    {/* Wick & Flame */}
    <line x1="24" y1="20" x2="24" y2="16" />
    <path d="M 24 6 Q 28 12 24 16 Q 20 12 24 6 Z" fill="currentColor" fillOpacity="0.2" />
    {/* Radiance spark */}
    <path d="M 24 2 L 24 4 M 18 8 L 20 9 M 30 8 L 28 9" opacity="0.7" />
    {/* Drips */}
    <path d="M 21 20 L 21 26 Q 22 28 23 26 L 23 20" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

const KrishnaCardsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Feather / Flute motif */}
    <path d="M 16 38 Q 24 28 32 10 Q 36 14 34 22 Q 32 30 20 38 Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M 20 38 Q 27 22 32 10" />
    <circle cx="32" cy="16" r="3" />
    <circle cx="32" cy="16" r="1" fill="currentColor" />
    <line x1="12" y1="36" x2="22" y2="40" strokeWidth="1" />
    {/* Sacred stars */}
    <circle cx="14" cy="16" r="1.5" fill="currentColor" />
    <circle cx="38" cy="28" r="1.5" fill="currentColor" />
  </svg>
);

const LuckyNumbersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="16" strokeDasharray="2 3" />
    <polygon points="24,12 27,20 36,20 29,25 32,34 24,28 16,34 19,25 12,20 21,20" fill="currentColor" fillOpacity="0.15" />
    <circle cx="24" cy="6" r="1.5" fill="currentColor" />
    <circle cx="42" cy="24" r="1.5" fill="currentColor" />
    <circle cx="24" cy="42" r="1.5" fill="currentColor" />
    <circle cx="6" cy="24" r="1.5" fill="currentColor" />
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
    <section id="readings" className="py-16 md:py-24 transition-colors duration-200">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--accent-gold)] mb-2">
            Our Readings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            Discover Your Path
          </h2>
          {/* Subtle celestial divider */}
          <div className="flex items-center gap-3 mt-4 text-[var(--accent-gold)]">
            <span className="h-px w-8 bg-[var(--border)]" />
            <span className="text-xs">✦</span>
            <span className="h-px w-8 bg-[var(--border)]" />
          </div>
        </div>

        {/* 7-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-3.5">
          {readings.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-gold)]/60 hover:shadow-md"
              >
                <div>
                  {/* Icon Area */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-[var(--accent-gold)] transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="h-9 w-9" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-medium leading-snug text-foreground mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-muted-foreground font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="mt-5 pt-3 border-t border-[var(--border)]/60 flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-brand)] dark:text-[var(--accent-gold)] transition-colors group-hover:gap-2">
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

