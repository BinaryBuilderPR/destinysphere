import HeroSection from "@/components/sections/home/HeroSection";
import ReadingsSection from "@/components/sections/home/ReadingsSection";
import ArticlesSection from "@/components/sections/home/ArticlesSection";
import BenefitsSection from "@/components/sections/home/BenefitsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <HeroSection />
      <ReadingsSection />
      <ArticlesSection />
      <BenefitsSection />
    </main>
  );
}