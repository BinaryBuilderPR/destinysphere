"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { articles, ARTICLE_CATEGORIES } from "@/data/articles";

export default function ArticlesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles.slice(0, 8) // Show top 8 on homepage when 'All' is selected
      : articles.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="bg-white dark:bg-[#020912] py-16 md:py-24 border-t border-[var(--border)] transition-colors duration-200">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 md:mb-10">
          <span className="text-sm font-semibold tracking-normal text-[#B9684D] dark:text-[#D5AE63] mb-1.5">
            Article Section (Blog)
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Explore Knowledge. Empower Yourself.
          </h2>
        </div>

        {/* Category Pills Filter (Swipeable on mobile) */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 pb-2 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {ARTICLE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-lg px-4 py-2 text-xs sm:text-[15px] font-medium transition-all duration-200 select-none cursor-pointer whitespace-nowrap shrink-0",
                  isSelected
                    ? "bg-[#B9684D] dark:bg-[#D5AE63] text-white dark:text-[#020912] font-semibold shadow-xs"
                    : "border border-[#EBE6DA] dark:border-[#2A3441] bg-white dark:bg-[#0B121B] text-muted-foreground hover:text-foreground hover:border-[var(--accent-gold)]/50"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#EBE6DA] dark:border-[#1E293B] bg-white dark:bg-[#0B121B] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-gold)]/60 hover:shadow-lg"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full overflow-hidden bg-black/40">
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
                  <span className="inline-block rounded-md bg-[#FAF0E6] dark:bg-[#251A14] px-3 py-1 text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] mb-2.5">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-[19px] sm:text-xl font-bold leading-snug text-foreground group-hover:text-[#B9684D] dark:group-hover:text-[#D5AE63] transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground line-clamp-2 mb-4 font-normal">
                    {article.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="pt-3 border-t border-[var(--border)]/60 flex items-center justify-between text-xs text-muted-foreground">
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
            <Button className="rounded-full bg-[#B9684D] hover:opacity-90 dark:bg-[#D5AE63] dark:hover:opacity-90 dark:text-[#020912] text-white px-9 py-6 text-[15px] sm:text-base font-semibold shadow-xs transition-all duration-200 cursor-pointer">
              View All Articles ({articles.length})
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
