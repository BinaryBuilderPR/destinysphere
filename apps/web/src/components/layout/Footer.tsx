"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { ArrowRight, Mail, Sparkles, Shield, Lock, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-[#EBE6DA] dark:border-[#D5AE63]/20 bg-white dark:bg-[#020912] pt-16 pb-12 transition-colors duration-200">
      <Container>
        {/* Newsletter / Cosmic Insights Box */}
        <div className="relative overflow-hidden rounded-3xl border border-[#EBE6DA] dark:border-[#D5AE63]/25 bg-gradient-to-br from-[#FAF7EE] via-[#FAF4EA] to-[#F5EFE6] dark:from-[#0B121B] dark:via-[#111A26] dark:to-[#0B121B] p-6 sm:p-10 mb-10 sm:mb-16 shadow-xs">
          {/* Subtle Celestial Star Background Accents */}
          <div className="absolute top-4 right-8 text-2xl text-[#C59758]/30 dark:text-[#D5AE63]/20 select-none">✦</div>
          <div className="absolute bottom-4 left-8 text-xl text-[#C59758]/25 dark:text-[#D5AE63]/15 select-none">✧</div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#B9684D]/10 dark:bg-[#D5AE63]/15 px-3.5 py-1 text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Weekly Celestial Insights</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Receive Cosmic Guidance in Your Inbox
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                Join 50,000+ seekers receiving weekly horoscope forecasts, planetary transit alerts, and free monthly tarot draws.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-2.5 rounded-2xl bg-[#FAF7EE] dark:bg-[#020912] border border-[#C59758]/40 p-4 text-sm font-semibold text-foreground">
                  <Sparkles className="h-4 w-4 text-[#C59758] dark:text-[#D5AE63]" />
                  <span>Welcome to DestinySphere! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5">
                  <div className="relative w-full">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 rounded-full border border-[#EBE6DA] dark:border-[#2A3441] bg-white dark:bg-[#020912] pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-[#B9684D] dark:focus:border-[#D5AE63] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto h-12 px-7 rounded-full bg-[#B9684D] hover:bg-[#A8583E] dark:bg-[#D5AE63] dark:hover:bg-[#C49E53] dark:text-[#020912] text-white text-sm font-semibold whitespace-nowrap transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4-Column Structured Footer Links (2 cols on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 sm:pb-14 border-b border-[#EBE6DA] dark:border-[#D5AE63]/15">
          {/* Col 1: Brand & Philosophy (2 cols on mobile, 5 on desktop) */}
          <div className="col-span-2 lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              DestinySphere bridges timeless Vedic astrology and Western tarot traditions with intuitive guidance to illuminate your life path, love connections, and career destiny.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                <Shield className="h-4 w-4 text-[#C59758] dark:text-[#D5AE63]" />
                <span>100% Confidential</span>
              </div>
              <span className="text-[#C59758]">•</span>
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                <Lock className="h-4 w-4 text-[#C59758] dark:text-[#D5AE63]" />
                <span>256-Bit Encrypted</span>
              </div>
            </div>
          </div>

          {/* Col 2: Sacred Readings (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h4 className="font-serif text-base font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <span className="text-xs text-[#C59758] dark:text-[#D5AE63]">✦</span>
              <span>Sacred Readings</span>
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <Link href="/readings?type=tarot" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Tarot Card Spread</Link>
              <Link href="/readings?type=moonology" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Moonology Reading</Link>
              <Link href="/readings?type=kundali" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Kundali Birth Chart</Link>
              <Link href="/readings?type=numerology" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Numerology Blueprint</Link>
              <Link href="/readings?type=candle-wax" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Candle Wax Reading</Link>
              <Link href="/readings?type=krishna-cards" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Krishna Oracle Cards</Link>
              <Link href="/readings?type=lucky-numbers" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Lucky Number Matrix</Link>
            </div>
          </div>

          {/* Col 3: Wisdom Hub (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <h4 className="font-serif text-base font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <span className="text-xs text-[#C59758] dark:text-[#D5AE63]">✦</span>
              <span>Wisdom & Tools</span>
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <Link href="/articles" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">All Articles (21)</Link>
              <Link href="/articles?category=Career" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Career Astrology</Link>
              <Link href="/articles?category=Finance" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Wealth & Numbers</Link>
              <Link href="/articles?category=Love" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Twin Flames & Love</Link>
              <Link href="/articles?category=Property" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Vastu Shastra</Link>
              <Link href="/game" className="text-[#B9684D] dark:text-[#D5AE63] font-semibold hover:opacity-80 transition-opacity">Free Tarot Game ✧</Link>
            </div>
          </div>

          {/* Col 4: Platform & Support (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <h4 className="font-serif text-base font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <span className="text-xs text-[#C59758] dark:text-[#D5AE63]">✦</span>
              <span>Platform</span>
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">About Us</Link>
              <Link href="/practitioners" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Verified Astrologers</Link>
              <Link href="/contact" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Contact Support</Link>
              <Link href="/privacy" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DestinySphere Inc. All rights reserved.</p>

          <div className="flex items-center gap-3 text-[#C59758] dark:text-[#D5AE63] font-serif text-sm">
            <span>—</span>
            <span>✦</span>
            <span className="text-muted-foreground font-sans text-xs">Illuminating paths with divine accuracy</span>
            <span>✦</span>
            <span>—</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Privacy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Terms</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#B9684D] dark:hover:text-[#D5AE63] transition-colors duration-200">Support</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
