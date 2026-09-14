import Container from "@/components/layout/Container";

const PersonalizedGuidanceIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className="h-9 w-9 sm:h-10 sm:w-10 text-[#C59758] dark:text-[#D5AE63]"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Spiritual Halo Arc */}
    <path d="M14 11 A 6 6 0 0 1 26 11" strokeDasharray="1.5 1.5" opacity="0.8" />
    {/* Meditative Head */}
    <circle cx="20" cy="12" r="3.2" strokeWidth="1.4" />
    {/* Third eye / bindi dot */}
    <circle cx="20" cy="11.5" r="0.6" fill="currentColor" />
    {/* Shoulders & Lotus Posture */}
    <path d="M13 25 C13 18 16 17 20 17 C24 17 27 18 27 25" />
    {/* Lotus Folded Legs Base */}
    <path d="M8 28 C11 25 15 26 20 26 C25 26 29 25 32 28 C30 30 25 31 20 31 C15 31 10 30 8 28 Z" fill="currentColor" fillOpacity="0.12" strokeWidth="1.3" />
    {/* Mudra hands center */}
    <path d="M17 24 C19 25 21 25 23 24" strokeWidth="1.2" />
  </svg>
);

const AncientWisdomIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className="h-9 w-9 sm:h-10 sm:w-10 text-[#C59758] dark:text-[#D5AE63]"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Outer Celestial Dharmachakra / Astrolabe Wheel */}
    <circle cx="20" cy="20" r="14" strokeWidth="1.3" strokeDasharray="3 2" opacity="0.7" />
    <circle cx="20" cy="20" r="11" strokeWidth="1.2" />
    {/* 8 Sacred Cardinal & Diagonal Spokes */}
    <line x1="20" y1="9" x2="20" y2="31" strokeWidth="1.2" />
    <line x1="9" y1="20" x2="31" y2="20" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="28" y2="28" strokeWidth="1" opacity="0.6" />
    <line x1="12" y1="28" x2="28" y2="12" strokeWidth="1" opacity="0.6" />
    {/* Outer Spoke Accent Points */}
    <circle cx="20" cy="5" r="1.2" fill="currentColor" />
    <circle cx="35" cy="20" r="1.2" fill="currentColor" />
    <circle cx="20" cy="35" r="1.2" fill="currentColor" />
    <circle cx="5" cy="20" r="1.2" fill="currentColor" />
    {/* Inner Wisdom Hub */}
    <circle cx="20" cy="20" r="3.5" fill="currentColor" fillOpacity="0.2" strokeWidth="1.4" />
    <circle cx="20" cy="20" r="1" fill="currentColor" />
  </svg>
);

const PositiveTransformationIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className="h-9 w-9 sm:h-10 sm:w-10 text-[#C59758] dark:text-[#D5AE63]"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Outer Halo Orbit */}
    <circle cx="20" cy="20" r="15" strokeDasharray="2 2.5" opacity="0.5" />
    {/* Radiant 8-Point Sacred Sunburst */}
    <polygon
      points="20,6 23,16 34,20 23,24 20,34 17,24 6,20 17,16"
      fill="currentColor"
      fillOpacity="0.18"
      strokeWidth="1.4"
    />
    {/* Diagonal Rays */}
    <line x1="10" y1="10" x2="30" y2="30" strokeWidth="1" opacity="0.7" />
    <line x1="10" y1="30" x2="30" y2="10" strokeWidth="1" opacity="0.7" />
    {/* Center Core Spark */}
    <circle cx="20" cy="20" r="2.2" fill="currentColor" />
    <circle cx="20" cy="20" r="4.5" strokeWidth="0.8" opacity="0.7" />
  </svg>
);

const AlwaysAccessibleIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className="h-9 w-9 sm:h-10 sm:w-10 text-[#C59758] dark:text-[#D5AE63]"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Celestial Orbit Spheres */}
    <circle cx="20" cy="20" r="14" strokeWidth="1.3" />
    {/* Longitudinal Ellipse */}
    <ellipse cx="20" cy="20" rx="7" ry="14" strokeWidth="1.2" />
    {/* Latitudinal Orbit Line */}
    <line x1="6" y1="20" x2="34" y2="20" strokeWidth="1.2" strokeDasharray="3 2" />
    {/* Sacred Infinity Node Arc */}
    <path
      d="M12 16 Q20 8 28 16 Q20 24 12 16"
      strokeWidth="1"
      opacity="0.6"
      fill="currentColor"
      fillOpacity="0.12"
    />
    {/* Global Presence Star Points */}
    <circle cx="28" cy="11" r="1.3" fill="currentColor" />
    <circle cx="12" cy="29" r="1.3" fill="currentColor" />
    <circle cx="20" cy="20" r="1.8" fill="currentColor" />
  </svg>
);

const benefits = [
  {
    title: "Personalized Guidance",
    description: "Readings tailored specifically for you.",
    icon: PersonalizedGuidanceIcon,
  },
  {
    title: "Ancient Wisdom",
    description: "Traditional methods with divine accuracy.",
    icon: AncientWisdomIcon,
  },
  {
    title: "Positive Transformation",
    description: "Empowering you to create a better future.",
    icon: PositiveTransformationIcon,
  },
  {
    title: "Always Accessible",
    description: "Get guidance anytime, anywhere.",
    icon: AlwaysAccessibleIcon,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white dark:bg-[#020912] py-10 sm:py-16 border-t border-[var(--border)] transition-colors duration-200">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex items-center gap-3.5 sm:gap-4 p-2 select-none"
              >
                {/* Circular Golden Emblem Container */}
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#FAF4EA] dark:bg-[#151D2A] border border-[#EBE6DA] dark:border-[#D5AE63]/25 shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <Icon />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h4 className="font-sans font-bold text-sm sm:text-[16px] text-foreground leading-snug tracking-tight group-hover:text-[#B9684D] dark:group-hover:text-[#D5AE63] transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-normal leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
