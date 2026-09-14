import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { FileText, ShieldAlert, CheckCircle2, Sparkles, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | DestinySphere Sacred Platform",
  description:
    "Review the terms, conditions, spiritual disclaimers, and user agreements for using DestinySphere's interactive oracle and astrological services.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "September 14, 2026";

  return (
    <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#020912] text-[#221A14] dark:text-[#F5F3EF] flex flex-col relative overflow-x-hidden selection:bg-[#C59758]/30 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-radial from-[#C59758]/10 via-[#B9684D]/5 to-transparent blur-3xl pointer-events-none" />

      <main className="flex-1 relative pt-12 pb-24">
        <Container className="max-w-4xl relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59758]/15 border border-[#C59758]/40 text-xs font-serif font-bold text-[#B9684D] dark:text-[#D5AE63] mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>Platform Agreement & Ethical Standards</span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#221A14] dark:text-[#F5F3EF] tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-[#6A655C] dark:text-[#AAA7A1]">
              Effective Date: {lastUpdated} • Version 2.4
            </p>
          </div>

          {/* Core Spiritual & Advisory Disclaimer Banner */}
          <div className="rounded-3xl border-2 border-amber-500/40 bg-amber-500/10 p-6 sm:p-8 shadow-md mb-10">
            <div className="flex items-start gap-3.5">
              <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-amber-900 dark:text-amber-200 mb-1.5">
                  Spiritual Guidance & Entertainment Disclaimer
                </h3>
                <p className="text-xs sm:text-sm text-amber-950/80 dark:text-amber-100/80 leading-relaxed">
                  DestinySphere provides astrological analyses, tarot readings, and metaphysical consultations for spiritual illumination, self-reflection, and entertainment. Astrological interpretations are not substitutes for professional medical, psychiatric, legal, or licensed financial advice. You remain solely responsible for all personal decisions and actions taken in your life.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-10 text-sm sm:text-[15px] leading-relaxed text-[#221A14]/90 dark:text-[#F5F3EF]/90">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the DestinySphere platform (including our Free 3-Card Tarot Oracle, 78-Card Encyclopedia, Zodiac Calculator, and spiritual articles), you confirm that you are at least 18 years of age and agree to be bound by these Terms of Service and our <Link href="/privacy" className="text-[#B9684D] dark:text-[#D5AE63] font-bold underline">Privacy Policy</Link>.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                2. User Accuracy & Birth Coordinate Submissions
              </h2>
              <p>
                To receive accurate astrological readings and personalized transits, users are encouraged to submit truthful birth information (Date of Birth, Time of Birth, Place of Birth, and Relationship/Marital context). DestinySphere does not verify the historical accuracy of user-submitted birth times and calculates planetary charts based strictly on the data supplied.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                3. Intellectual Property Rights
              </h2>
              <p>
                All proprietary algorithms, 78-card Hermetic Golden Dawn astrological decan correspondences, procedural Web Audio sound synthesis engines, bespoke card back guilloche artwork, and platform texts are the exclusive intellectual property of DestinySphere Inc. Unauthorized scraping, reproduction, or commercial duplication is strictly prohibited.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                4. Free Oracle Availability & Future Consultation Offerings
              </h2>
              <p>
                DestinySphere currently provides the 3-Card Tarot Oracle, 78-Card Rider-Waite-Smith Encyclopedia, and Zodiac Sign Calculator 100% free of charge. Private 1-on-1 consultations with verified astrologers will become available in the near future under clearly defined session terms.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                5. Prohibited Conduct
              </h2>
              <p>Users agree not to:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1]">
                <li>Use the platform for any unlawful, harassing, defamatory, or abusive purpose.</li>
                <li>Attempt to bypass security measures or access unauthorized server data.</li>
                <li>Submit intentionally fraudulent partner data for non-consensual tracking.</li>
                <li>Interfere with the procedural Web Audio synthesis engine or server latency.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, DestinySphere and its verified astrologers shall not be liable for any indirect, incidental, special, or consequential damages resulting from user interpretation or decisions made following any tarot draw or astrological consultation.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                7. Contact Us Regarding Terms
              </h2>
              <p>
                If you have questions concerning these terms or wish to submit formal legal inquiries, please contact <a href="mailto:legal@destinysphere.com" className="text-[#B9684D] dark:text-[#D5AE63] font-semibold underline">legal@destinysphere.com</a> or visit our <Link href="/contact" className="text-[#B9684D] dark:text-[#D5AE63] font-semibold underline">Contact Support Sanctuary</Link>.
              </p>
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}

