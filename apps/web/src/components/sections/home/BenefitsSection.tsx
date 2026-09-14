import Container from "@/components/layout/Container";

const benefits = [
  {
    title: "Personalized Guidance",
    description: "Readings tailored specifically for you.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-[var(--accent-gold)]" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="14" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="16" cy="12" r="4" />
        <path d="M 9 24 C 9 20 12 18 16 18 C 20 18 23 20 23 24" />
        <circle cx="23" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Ancient Wisdom",
    description: "Traditional methods with divine accuracy.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-[var(--accent-gold)]" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="14" />
        <circle cx="16" cy="16" r="8" strokeDasharray="3 3" />
        <path d="M 16 2 L 16 30 M 2 16 L 30 16" opacity="0.5" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Positive Transformation",
    description: "Empowering you to create a better future.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-[var(--accent-gold)]" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="14" strokeDasharray="2 2" opacity="0.6" />
        <polygon points="16,6 18,13 25,13 19,17 21,24 16,20 11,24 13,17 7,13 14,13" fill="currentColor" fillOpacity="0.2" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Always Accessible",
    description: "Get guidance anytime, anywhere.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-[var(--accent-gold)]" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="14" />
        <ellipse cx="16" cy="16" rx="6" ry="14" />
        <line x1="2" y1="16" x2="30" y2="16" />
        <circle cx="24" cy="9" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white dark:bg-[#020912] py-14 border-t border-[var(--border)] transition-colors duration-200">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 p-2"
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] shadow-2xs">
                {item.icon}
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground font-normal mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

