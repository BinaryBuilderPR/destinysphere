"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { articles, ARTICLE_CATEGORIES } from "@/data/articles";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <main className="min-h-screen pt-28 pb-24 transition-colors duration-200">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 text-sm font-bold text-[#B9684D] dark:text-[#D5AE63] mb-2">
            <Sparkles className="h-4 w-4" />
            <span>Spiritual Knowledge Hub</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
            Articles & Ancient Wisdom
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-muted-foreground">
            Explore authentic guidance across Career, Finance, Love, Property, Court Cases, Health, and Spirituality to illuminate your journey.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-12 pb-2">
          {ARTICLE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All"
                ? articles.length
                : articles.filter((a) => a.category.toLowerCase() === cat.toLowerCase()).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-lg px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 select-none cursor-pointer flex items-center gap-2",
                  isSelected
                    ? "bg-[#B9684D] dark:bg-[#D5AE63] text-white dark:text-[#020912] font-semibold shadow-xs"
                    : "border border-[var(--border)] dark:border-[#2A3441] bg-[var(--card)] text-muted-foreground hover:text-foreground hover:border-[var(--accent-gold)]/50"
                )}
              >
                <span>{cat}</span>
                <span className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full",
                  isSelected
                    ? "bg-white/20 dark:bg-black/20"
                    : "bg-[var(--border)] text-muted-foreground"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Articles Grid (20+ items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] dark:border-[#1E293B] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-gold)]/60 hover:shadow-lg"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-black/40">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  {/* Category Pill Tag Badge */}
                  <span className="inline-block rounded-md bg-[#FAF0E6] dark:bg-[#251A14] px-2.5 py-0.5 text-xs font-semibold text-[#B9684D] dark:text-[#D5AE63] mb-2.5">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-serif text-lg font-bold leading-snug text-foreground group-hover:text-[#B9684D] dark:group-hover:text-[#D5AE63] transition-colors mb-2.5">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3 mb-4 font-normal">
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
      </Container>
    </main>
  );
}

