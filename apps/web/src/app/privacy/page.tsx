import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Shield, Lock, Eye, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | DestinySphere Sacred Sanctuary",
  description:
    "Learn how DestinySphere collects, encrypts, and protects your personal, astrological, birth, and relational data with 256-bit encryption and strict confidentiality.",
};

export default function PrivacyPolicyPage() {
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
              <Shield className="w-3.5 h-3.5" />
              <span>Sacred Privacy & Data Protection Commitment</span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#221A14] dark:text-[#F5F3EF] tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-[#6A655C] dark:text-[#AAA7A1]">
              Last Updated: {lastUpdated} • Version 2.4
            </p>
          </div>

          {/* Quick Summary Highlights */}
          <div className="rounded-3xl border-2 border-[#C59758]/40 bg-white/90 dark:bg-[#0B121B]/90 p-6 sm:p-8 shadow-xl backdrop-blur-md mb-12">
            <h3 className="font-serif font-bold text-lg text-[#221A14] dark:text-[#F5F3EF] mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#C59758] dark:text-[#D5AE63]" />
              <span>Our Sacred Confidentiality Guarantee at a Glance</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/20">
                <span className="font-bold text-[#B9684D] dark:text-[#D5AE63] block mb-1">
                  1. Zero Data Selling
                </span>
                We never sell, rent, or monetize your personal or astrological data to third-party advertisers.
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/20">
                <span className="font-bold text-[#B9684D] dark:text-[#D5AE63] block mb-1">
                  2. 256-Bit SSL Encryption
                </span>
                All birth chart ephemeris coordinates and consultation logs are encrypted at rest and in transit.
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/20">
                <span className="font-bold text-[#B9684D] dark:text-[#D5AE63] block mb-1">
                  3. Total Data Autonomy
                </span>
                You retain full right to request complete deletion of your birth profiles and consultation logs at any time.
              </div>
            </div>
          </div>

          {/* Full Policy Body */}
          <div className="space-y-10 text-sm sm:text-[15px] leading-relaxed text-[#221A14]/90 dark:text-[#F5F3EF]/90">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                1. Information and Data We Collect
              </h2>
              <p>
                To calculate precise astrological ephemerides, cast authentic Vedic Kundali charts, determine Western decan rulers, and provide personalized tarot readings, DestinySphere collects specific categories of user-provided information:
              </p>

              <div className="space-y-3 mt-3">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#121B26] border border-[#C59758]/30">
                  <h4 className="font-bold text-[#B9684D] dark:text-[#D5AE63] text-sm mb-1.5 flex items-center gap-1.5">
                    <span className="text-base">📅</span>
                    <span>Astrological Natal Coordinates & Birth Details</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1]">
                    <li><strong>Date of Birth (DOB):</strong> Essential for calculating Sun sign, planetary decans, and dasha cycles.</li>
                    <li><strong>Exact Time of Birth (Hour & Minute):</strong> Required for pinpointing the Ascendant / Rising sign, Moon sign, and house cusps.</li>
                    <li><strong>Place / Location of Birth (City, State, Country, Geo-Coordinates):</strong> Necessary for calculating local sidereal and tropical astronomical ephemeris.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#121B26] border border-[#C59758]/30">
                  <h4 className="font-bold text-[#B9684D] dark:text-[#D5AE63] text-sm mb-1.5 flex items-center gap-1.5">
                    <span className="text-base">👤</span>
                    <span>Personal Identity & Profile Information</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1]">
                    <li><strong>Full Name or Preferred Spiritual Alias:</strong> Used to personalize natal charts and sacred reports.</li>
                    <li><strong>Gender & Preferred Pronouns:</strong> Used for classical energetic polarity and astrological archetype attunement.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#121B26] border border-[#C59758]/30">
                  <h4 className="font-bold text-[#B9684D] dark:text-[#D5AE63] text-sm mb-1.5 flex items-center gap-1.5">
                    <span className="text-base">💍</span>
                    <span>Relationship & Marital Status</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1]">
                    <li><strong>Marital & Relationship Status:</strong> (e.g., Single, In Union, Married, Divorced, Seeking Soulmate) for 7th House sacred union compatibility, Synastry, and Kundali Milan analysis.</li>
                    <li><strong>Partner Birth Information (if voluntarily provided):</strong> Exclusively for calculating dual-chart synastry and love compatibility.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#121B26] border border-[#C59758]/30">
                  <h4 className="font-bold text-[#B9684D] dark:text-[#D5AE63] text-sm mb-1.5 flex items-center gap-1.5">
                    <span className="text-base">💼</span>
                    <span>Financial, Career & Vocational Inquiry Data</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1]">
                    <li><strong>Employment Stage & Industry:</strong> Context for 2nd House (Earned Wealth), 6th House (Daily Vocation), 10th House (Public Prestige), and 11th House (Financial Gains) transit forecasts.</li>
                    <li><strong>Inquiry Category:</strong> Business venture timing, career change questions, or wealth Muhurta requests.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#121B26] border border-[#C59758]/30">
                  <h4 className="font-bold text-[#B9684D] dark:text-[#D5AE63] text-sm mb-1.5 flex items-center gap-1.5">
                    <span className="text-base">📧</span>
                    <span>Communication & Contact Details</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1]">
                    <li><strong>Email Address:</strong> For sending requested horoscope summaries, newsletter transits, and reading archives.</li>
                    <li><strong>Phone Number / WhatsApp Contact:</strong> For optional SMS transit alerts or customer service inquiries.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#121B26] border border-[#C59758]/30">
                  <h4 className="font-bold text-[#B9684D] dark:text-[#D5AE63] text-sm mb-1.5 flex items-center gap-1.5">
                    <span className="text-base">🔮</span>
                    <span>Divination & Oracle Logs</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1]">
                    <li><strong>Tarot Cards Drawn & Spread Results:</strong> Generated dynamically during your interactive 3-card oracle sessions.</li>
                    <li><strong>User Questions Submitted to Astrologers:</strong> Stored securely to generate relevant conversational responses.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                2. How We Use Your Sacred Data
              </h2>
              <p>We use your information strictly for the following spiritual, technical, and operational purposes:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Calculating astronomical degrees of the Sun, Moon, Ascendant, and 10 celestial planets.</li>
                <li>Synthesizing personalized 3-Card Tarot Oracle interpretations and astrological guidance.</li>
                <li>Delivering requested weekly celestial insights, planetary transit alerts, and lunar forecasts.</li>
                <li>Maintaining the stability, responsiveness, and procedural Web Audio engine of the platform.</li>
                <li>Providing prompt customer support for platform inquiries.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                3. Confidentiality & Verified Astrologer Ethics
              </h2>
              <p>
                All astrologers and practitioners associated with DestinySphere adhere to a strict <strong>Sacred Non-Disclosure Code</strong>. Any personal life details shared in reading sessions (such as family dynamics, marital disputes, health concerns, or financial goals) remain strictly confidential between the seeker and the practitioner.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                4. Data Retention and Deletion Rights
              </h2>
              <p>
                In compliance with global data protection standards (including GDPR and CCPA), you hold absolute authority over your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><strong>Right to Access:</strong> You may request a complete export of all birth and reading records stored under your profile.</li>
                <li><strong>Right to Rectification:</strong> You may update or correct your birth time, date, or contact coordinates at any time.</li>
                <li><strong>Right to Erasure (Forget Me):</strong> You may request permanent deletion of your profile, birth charts, and reading history by contacting our support sanctuary at <Link href="/contact" className="text-[#B9684D] dark:text-[#D5AE63] font-bold underline">privacy@destinysphere.com</Link>.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#221A14] dark:text-[#F5F3EF] border-b border-[#C59758]/20 pb-2">
                5. Contact the Privacy Sanctuary
              </h2>
              <p>
                For questions regarding this policy, data protection inquiries, or to exercise your privacy rights, please reach out to our team:
              </p>
              <div className="p-4 rounded-2xl bg-[#FAF7EE] dark:bg-[#0B121B] border border-[#C59758]/40">
                <p className="font-serif font-bold text-sm text-[#221A14] dark:text-[#F5F3EF]">
                  DestinySphere Privacy & Data Protection Office
                </p>
                <p className="text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1] mt-1">
                  Email: <a href="mailto:privacy@destinysphere.com" className="text-[#B9684D] dark:text-[#D5AE63] font-semibold">privacy@destinysphere.com</a>
                </p>
                <p className="text-xs sm:text-sm text-[#6A655C] dark:text-[#AAA7A1]">
                  Online Portal: <Link href="/contact" className="text-[#B9684D] dark:text-[#D5AE63] font-semibold underline">Contact Support Sanctuary</Link>
                </p>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}

