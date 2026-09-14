import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { articles, Article } from "@/data/articles";
import { ArrowLeft, Clock, Calendar, Sparkles, CheckCircle2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-28 pb-24 transition-colors duration-200">
      <Container className="max-w-4xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <span className="inline-block rounded-md bg-[#FAF0E6] dark:bg-[#251A14] px-3 py-1 text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] mb-4">
            {article.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-6">
            {article.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pb-6 border-b border-[var(--border)]">
            <div className="flex items-center gap-2 font-medium text-foreground">
              <div className="h-7 w-7 rounded-full bg-[#B9684D]/20 text-[#B9684D] dark:text-[#D5AE63] flex items-center justify-center font-bold text-xs">
                {article.author.name[0]}
              </div>
              <div>
                <span className="block font-semibold">{article.author.name}</span>
                <span className="text-[10px] text-muted-foreground">{article.author.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 ml-auto">
              <Calendar className="h-3.5 w-3.5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-10 shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none text-foreground">
          {/* Introduction */}
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-serif italic mb-8 border-l-2 border-[#B9684D] dark:border-[#D5AE63] pl-4">
            {article.content.introduction}
          </p>

          {/* Body Sections */}
          {article.content.sections.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3 mt-6">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/80 mb-4">
                {section.body}
              </p>
              {section.bulletPoints && (
                <ul className="space-y-2 my-4 pl-5 list-disc text-sm sm:text-base text-foreground/85">
                  {section.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Key Takeaways Box */}
          <div className="my-10 rounded-2xl border border-[var(--accent-gold)]/40 bg-[#FAF7EE] dark:bg-[#0B121B] p-6 shadow-xs">
            <div className="flex items-center gap-2 font-serif text-lg font-bold text-foreground mb-4">
              <Sparkles className="h-5 w-5 text-[#B9684D] dark:text-[#D5AE63]" />
              <span>Key Spiritual Takeaways</span>
            </div>
            <ul className="space-y-2.5">
              {article.content.takeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-[#B9684D] dark:text-[#D5AE63] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Consultation CTA Banner */}
        <div className="my-12 rounded-2xl border border-[var(--border)] dark:border-[#D5AE63]/30 bg-gradient-to-r from-[#FAF0E6] to-[#FAF7EE] dark:from-[#0B121B] dark:to-[#151D2A] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1.5">
              Seek Personalized Answers to Your Questions
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Book a 1-on-1 reading with our verified Vedic astrologers and tarot masters.
            </p>
          </div>
          <Link href="/readings" className="shrink-0">
            <Button className="rounded-full bg-[#B9684D] hover:opacity-90 dark:bg-[#D5AE63] dark:hover:opacity-90 dark:text-[#020912] text-white px-6 py-2.5 text-xs sm:text-sm font-semibold cursor-pointer">
              Explore Readings
            </Button>
          </Link>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[var(--border)]">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Related Articles in {article.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/articles/${rel.slug}`}
                  className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-gold)]/60"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif text-sm font-bold text-foreground group-hover:text-[#B9684D] dark:group-hover:text-[#D5AE63] line-clamp-2 mb-1.5">
                      {rel.title}
                    </h4>
                    <span className="text-[10px] text-muted-foreground">{rel.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}

