"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Career",
  "Finance",
  "Love",
  "Property",
  "Court Case",
  "Health",
  "Spirituality",
];

const articles = [
  {
    id: "tarot-career-decisions",
    category: "Career",
    title: "How Tarot Can Guide Your Career Decisions",
    description: "Discover how tarot cards reveal hidden opportunities and guide you towards the right career path.",
    date: "May 20, 2025",
    readTime: "5 min read",
    imageType: "tarot",
  },
  {
    id: "numerology-financial-success",
    category: "Finance",
    title: "Numerology Secrets for Financial Success",
    description: "Learn how numbers influence your financial life and how to attract abundance.",
    date: "May 18, 2025",
    readTime: "4 min read",
    imageType: "numerology",
  },
  {
    id: "moon-phases-love-life",
    category: "Love",
    title: "Moon Phases & Your Love Life",
    description: "Understand how lunar cycles impact your relationships and emotions.",
    date: "May 16, 2025",
    readTime: "6 min read",
    imageType: "moon",
  },
  {
    id: "candle-wax-health-insights",
    category: "Health",
    title: "Candle Wax Reading for Health Insights",
    description: "Ancient wax reading techniques that can uncover health-related energies.",
    date: "May 14, 2025",
    readTime: "4 min read",
    imageType: "candle",
  },
];

// Aesthetic Thumbnail Illustrations for article cards matching editorial look
const ArticleVisual = ({ type }: { type: string }) => {
  if (type === "tarot") {
    return (
      <div className="relative h-44 w-full overflow-hidden bg-[#1A1815] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        {/* Visual elements representing Tarot spread */}
        <div className="flex items-center gap-3 scale-90 opacity-90">
          <div className="h-28 w-18 rounded border border-[#C59758]/60 bg-[#25201A] rotate-[-8deg] shadow-lg flex items-center justify-center">
            <span className="text-lg text-[#C59758]">✦</span>
          </div>
          <div className="h-32 w-20 rounded border border-[#C59758] bg-[#2D2620] shadow-xl z-10 flex flex-col items-center justify-center p-1">
            <div className="w-full h-full border border-[#C59758]/40 rounded flex flex-col items-center justify-center">
              <span className="text-xl text-[#C59758]">☾</span>
              <span className="text-[8px] uppercase tracking-widest text-[#C59758] mt-1">Wisdom</span>
            </div>
          </div>
          <div className="h-28 w-18 rounded border border-[#C59758]/60 bg-[#25201A] rotate-[8deg] shadow-lg flex items-center justify-center">
            <span className="text-lg text-[#C59758]">✧</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "numerology") {
    return (
      <div className="relative h-44 w-full overflow-hidden bg-[#1B1917] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        {/* Sacred geometry & numeric crystals */}
        <div className="relative flex items-center justify-center">
          <div className="h-28 w-28 rounded-full border border-[#C59758]/40 flex items-center justify-center animate-spin-slow">
            <div className="h-20 w-20 rotate-45 border border-[#C59758]/60 flex items-center justify-center" />
          </div>
          <span className="absolute font-serif text-2xl font-bold text-[#C59758] tracking-widest">
            3 • 7 • 9
          </span>
        </div>
      </div>
    );
  }

  if (type === "moon") {
    return (
      <div className="relative h-44 w-full overflow-hidden bg-[#0F141E] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        {/* Luminous Glowing Moon */}
        <div className="relative flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-[#9BA3AF] to-[#E5E7EB] shadow-[0_0_35px_rgba(213,174,99,0.35)] flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-[#0F141E]/30 backdrop-blur-2xs" />
          </div>
          <div className="absolute -top-2 -right-4 text-xs text-[#D5AE63]">✧</div>
          <div className="absolute -bottom-3 -left-3 text-xs text-[#D5AE63]">✦</div>
        </div>
      </div>
    );
  }

  // Candle
  return (
    <div className="relative h-44 w-full overflow-hidden bg-[#1D1714] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
      {/* Mystical Candle Glow */}
      <div className="relative flex flex-col items-center justify-end h-28">
        <div className="h-6 w-3 rounded-full bg-gradient-to-t from-[#B9684D] via-[#D5AE63] to-[#FFF5DB] shadow-[0_0_20px_#D5AE63] mb-1 animate-pulse" />
        <div className="h-16 w-12 rounded-t-md bg-[#382E28] border-t-2 border-[#C59758]/60 shadow-lg" />
      </div>
    </div>
  );
};

export default function ArticlesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="py-16 md:py-24 border-t border-[var(--border)] transition-colors duration-200">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 md:mb-10">
          <span className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--accent-gold)] mb-2">
            Article Section (Blog)
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            Explore Knowledge. Empower Yourself.
          </h2>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10 pb-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 select-none",
                  isSelected
                    ? "bg-[var(--accent-brand)] dark:bg-[var(--accent-gold)] text-white dark:text-[#020912] shadow-xs"
                    : "border border-[var(--border)] bg-[var(--card)] text-muted-foreground hover:text-foreground hover:border-[var(--accent-gold)]/50"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-gold)]/60 hover:shadow-md"
            >
              {/* Card Image */}
              <ArticleVisual type={article.imageType} />

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  {/* Category Pill Tag */}
                  <span className="inline-block text-[11px] font-semibold tracking-wider text-[var(--accent-brand)] dark:text-[var(--accent-gold)] uppercase mb-2">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-medium leading-snug text-foreground group-hover:text-[var(--accent-brand)] dark:group-hover:text-[var(--accent-gold)] transition-colors mb-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 mb-4 font-normal">
                    {article.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="pt-3 border-t border-[var(--border)]/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="mt-12 flex justify-center">
          <Link href="/articles">
            <Button className="rounded-full bg-[var(--accent-brand)] hover:opacity-90 dark:bg-[var(--accent-gold)] dark:hover:opacity-90 dark:text-[#020912] text-white px-8 py-3 text-sm font-semibold shadow-xs transition-all duration-200">
              View All Articles
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

