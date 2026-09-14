"use client";

import React, { useState } from "react";
import Container from "@/components/layout/Container";
import { Mail, MessageSquare, ShieldCheck, Clock, Send, Sparkles } from "lucide-react";
import { audioEngine } from "@/lib/audioEngine";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playCardSelect();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#020912] text-[#221A14] dark:text-[#F5F3EF] flex flex-col relative overflow-x-hidden selection:bg-[#C59758]/30 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-radial from-[#C59758]/10 via-[#B9684D]/5 to-transparent blur-3xl pointer-events-none" />

      <main className="flex-1 relative pt-12 pb-24">
        <Container className="max-w-4xl relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59758]/15 border border-[#C59758]/40 text-xs font-serif font-bold text-[#B9684D] dark:text-[#D5AE63] mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Dedicated Seeker Support Sanctuary</span>
            </div>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#221A14] dark:text-[#F5F3EF] tracking-tight">
              Contact Support
            </h1>
            <p className="mt-3 text-base text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">
              Have questions about your astrological calculations, tarot readings, or platform privacy? Our support sanctuary responds within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Contact Info Cards */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#0B121B]/90 border border-[#C59758]/30 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#C59758]/15 border border-[#C59758]/40 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 text-[#C59758] dark:text-[#D5AE63]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#221A14] dark:text-[#F5F3EF]">
                  Direct Email Support
                </h3>
                <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] mt-1 mb-2">
                  For general questions, oracle assistance, and feedback:
                </p>
                <a
                  href="mailto:support@destinysphere.com"
                  className="text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] hover:underline"
                >
                  support@destinysphere.com
                </a>
              </div>

              <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#0B121B]/90 border border-[#C59758]/30 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#C59758]/15 border border-[#C59758]/40 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#C59758] dark:text-[#D5AE63]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#221A14] dark:text-[#F5F3EF]">
                  Privacy & Data Rights Office
                </h3>
                <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] mt-1 mb-2">
                  For data erasure or birth coordinate record requests:
                </p>
                <a
                  href="mailto:privacy@destinysphere.com"
                  className="text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] hover:underline"
                >
                  privacy@destinysphere.com
                </a>
              </div>

              <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#0B121B]/90 border border-[#C59758]/30 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#C59758]/15 border border-[#C59758]/40 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-[#C59758] dark:text-[#D5AE63]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#221A14] dark:text-[#F5F3EF]">
                  Sanctuary Hours
                </h3>
                <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] mt-1">
                  Monday – Sunday: 24/7 Astrological Channel
                </p>
                <p className="text-[11px] text-[#C59758] dark:text-[#D5AE63] font-semibold mt-1">
                  Guaranteed response within 24 hours
                </p>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="md:col-span-7 rounded-3xl border-2 border-[#C59758]/40 bg-white/95 dark:bg-[#0B121B]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 flex items-center justify-center mx-auto text-2xl">
                    ✨
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#221A14] dark:text-[#F5F3EF]">
                    Message Received by Our Sanctuary
                  </h3>
                  <p className="text-sm text-[#6A655C] dark:text-[#AAA7A1] max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || "divine seeker"}. Our support team has logged your message and will respond to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#C59758] hover:bg-[#B9684D] text-white font-serif font-bold text-xs shadow transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif font-bold text-xl text-[#221A14] dark:text-[#F5F3EF] mb-2">
                    Send a Sacred Inquiry
                  </h3>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Evelyn Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="sacred-select w-full px-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm font-medium focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 transition-all cursor-pointer"
                    >
                      <option value="Consultation Inquiry">Consultation / Reading Inquiry</option>
                      <option value="Order Status & Delivery">Order Status & Delivery</option>
                      <option value="Billing & Refund">Billing & Sacred Token Questions</option>
                      <option value="Astrologer Partnership">Join Astrologer Council</option>
                      <option value="General Feedback">General Feedback & Blessings</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your question or context..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#C59758] via-[#D5AE63] to-[#B9684D] text-white font-serif font-bold text-sm shadow-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Sacred Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

