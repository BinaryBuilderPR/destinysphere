"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  READING_SERVICES,
  ReadingService,
  ReadingTier,
} from "@/data/readingServices";
import { audioEngine } from "@/lib/audioEngine";
import {
  Shield,
  Lock,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Heart,
  Briefcase,
  User,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  Star,
} from "lucide-react";

export function ReadingBookingFlow() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "tarot";

  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    READING_SERVICES[initialType] ? initialType : "tarot"
  );

  const activeService: ReadingService =
    READING_SERVICES[selectedServiceId] || READING_SERVICES["tarot"];

  const [selectedTier, setSelectedTier] = useState<ReadingTier>(
    activeService.tiers[1] || activeService.tiers[0]
  );

  // Steps: 1 = Service & Tier, 2 = Data Entry, 3 = Payment & Confirmation, 4 = Success Receipt
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form Data State
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "Female",
    birthMonth: 3,
    birthDay: 21,
    birthYear: 1998,
    knowsTime: true,
    birthHour: 10,
    birthMinute: 30,
    birthPeriod: "AM",
    birthCity: "",
    birthCountry: "United States",
    maritalStatus: "Single",
    financialStatus: "Employed / Career Growth",
    email: "",
    phone: "",
    specificQuestion: "",
  });

  // Payment Method State
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "paypal">("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [upiId, setUpiId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState("");

  // Sync when search param changes
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && READING_SERVICES[type]) {
      setSelectedServiceId(type);
      setSelectedTier(READING_SERVICES[type].tiers[1] || READING_SERVICES[type].tiers[0]);
    }
  }, [searchParams]);

  // Update selected tier if service changes
  const handleServiceChange = (id: string) => {
    audioEngine.playCardHover();
    setSelectedServiceId(id);
    const s = READING_SERVICES[id];
    if (s) {
      setSelectedTier(s.tiers[1] || s.tiers[0]);
    }
  };

  const handleNextToDataEntry = () => {
    audioEngine.playCardSelect();
    setCurrentStep(2);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playCardSelect();
    setCurrentStep(3);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const handleCompletePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    audioEngine.playCardSelect();

    setTimeout(() => {
      setIsProcessing(false);
      audioEngine.playMessageDing();
      audioEngine.playCardFlip();
      setOrderId(`DS-${Math.floor(10000 + Math.random() * 90000)}-${activeService.id.toUpperCase()}`);
      setCurrentStep(4);
      window.scrollTo({ top: 80, behavior: "smooth" });
    }, 1800);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
      {/* ================= STEP PROGRESS BAR ================= */}
      <div className="flex items-center justify-between max-w-2xl mx-auto w-full px-4">
        {[
          { step: 1, label: "1. Select Reading" },
          { step: 2, label: "2. Sacred Data Entry" },
          { step: 3, label: "3. Sacred Payment" },
          { step: 4, label: "4. Confirmation" },
        ].map((item) => {
          const isCurrent = currentStep === item.step;
          const isCompleted = currentStep > item.step;

          return (
            <div key={item.step} className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-serif font-bold text-xs sm:text-sm transition-all ${isCompleted
                    ? "bg-[#C59758] text-white shadow-md scale-105"
                    : isCurrent
                      ? "bg-[#B9684D] dark:bg-[#D5AE63] text-white dark:text-[#020912] ring-4 ring-[#C59758]/20 shadow-lg scale-110"
                      : "bg-black/5 dark:bg-white/10 text-[#6A655C] dark:text-[#AAA7A1]"
                  }`}
              >
                {isCompleted ? "✓" : item.step}
              </div>
              <span
                className={`text-[10px] sm:text-xs font-semibold whitespace-nowrap ${isCurrent || isCompleted
                    ? "text-[#221A14] dark:text-[#F5F3EF] font-bold"
                    : "text-[#6A655C] dark:text-[#AAA7A1]"
                  }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* ================= STEP 1: SERVICE & TIER SELECTION ================= */}
      {currentStep === 1 && (
        <div className="space-y-8 animate-fade-in">
          {/* 7 Services Horizontal Selector */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {Object.values(READING_SERVICES).map((srv) => {
              const isSelected = srv.id === selectedServiceId;
              return (
                <button
                  key={srv.id}
                  onClick={() => handleServiceChange(srv.id)}
                  className={`px-4 py-2.5 rounded-2xl border text-xs sm:text-sm font-serif font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 ${isSelected
                      ? "bg-[#C59758] text-white border-[#C59758] shadow-lg scale-102"
                      : "bg-white/90 dark:bg-[#0B121B]/90 text-[#6A655C] dark:text-[#AAA7A1] border-[#C59758]/30 hover:border-[#C59758] hover:text-[#221A14] dark:hover:text-[#F5F3EF]"
                    }`}
                >
                  <span className="text-base">{srv.glyph}</span>
                  <span>{srv.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Hero Banner */}
          <div className="rounded-3xl border-2 border-[#C59758]/40 bg-white/95 dark:bg-[#0B121B]/95 p-6 sm:p-8 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#C59758]/15 border border-[#C59758]/30 text-xs font-serif font-bold text-[#B9684D] dark:text-[#D5AE63]">
                  <span>{activeService.glyph}</span>
                  <span>{activeService.tradition}</span>
                </div>
                <h2 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#221A14] dark:text-[#F5F3EF]">
                  {activeService.title}
                </h2>
                <p className="text-sm text-[#6A655C] dark:text-[#AAA7A1] leading-relaxed">
                  {activeService.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {activeService.highlightPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#221A14] dark:text-[#F5F3EF]">
                      <span className="text-[#C59758] font-bold">✦</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Master Astrologer Card */}
              <div className="p-4 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/40 shadow-sm flex items-center gap-4 shrink-0 w-full md:w-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C59758] relative shrink-0">
                  <Image
                    src={activeService.masterAvatar}
                    alt={activeService.assignedMaster}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#6A655C] dark:text-[#AAA7A1] block">
                    Assigned Master
                  </span>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#221A14] dark:text-[#F5F3EF]">
                    {activeService.assignedMaster}
                  </h4>
                  <span className="text-[11px] text-[#B9684D] dark:text-[#D5AE63] font-semibold block">
                    {activeService.masterRole}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Reading Tiers */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#221A14] dark:text-[#F5F3EF]">
              Select Your Consultation Depth
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {activeService.tiers.map((tier) => {
                const isSelected = selectedTier.id === tier.id;

                return (
                  <div
                    key={tier.id}
                    onClick={() => {
                      audioEngine.playCardHover();
                      setSelectedTier(tier);
                    }}
                    className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer ${isSelected
                        ? "border-2 border-[#C59758] bg-white dark:bg-[#0B121B] shadow-2xl scale-102 ring-4 ring-[#C59758]/20"
                        : "border border-[#C59758]/30 bg-white/80 dark:bg-[#0B121B]/80 hover:border-[#C59758] shadow-md"
                      }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#C59758] to-[#B9684D] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                        Most Popular
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-serif font-bold text-lg text-[#221A14] dark:text-[#F5F3EF]">
                          {tier.name}
                        </h4>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected
                              ? "border-[#C59758] bg-[#C59758] text-white"
                              : "border-[#C59758]/40"
                            }`}
                        >
                          {isSelected && <span className="text-xs">✓</span>}
                        </div>
                      </div>

                      <div className="flex items-baseline gap-1 mb-3">
                        <span className="font-serif font-extrabold text-3xl text-[#B9684D] dark:text-[#D5AE63]">
                          ₹{tier.priceINR.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-[#6A655C] dark:text-[#AAA7A1]">
                          (INR)
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-[#C59758] dark:text-[#D5AE63] mb-4">
                        ⏱ {tier.duration}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-[#C59758]/20 text-xs text-[#221A14]/90 dark:text-[#F5F3EF]/90">
                        {tier.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`mt-6 w-full py-2.5 rounded-xl font-serif font-bold text-xs tracking-wider transition-all cursor-pointer ${isSelected
                          ? "bg-[#C59758] hover:bg-[#B9684D] text-white shadow-md"
                          : "bg-[#FAF7EE] dark:bg-[#121B26] text-[#221A14] dark:text-[#F5F3EF] border border-[#C59758]/40 hover:border-[#C59758]"
                        }`}
                    >
                      {isSelected ? "Selected Tier ✓" : "Choose Tier"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Proceed Button */}
          <div className="flex justify-end pt-4">
            <button
              onClick={handleNextToDataEntry}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#C59758] via-[#D5AE63] to-[#B9684D] hover:brightness-110 text-white font-serif font-bold text-base shadow-xl transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Continue to Sacred Data Entry</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 2: SACRED DATA ENTRY FORM ================= */}
      {currentStep === 2 && (
        <form onSubmit={handleNextToPayment} className="space-y-8 animate-fade-in">
          <div className="rounded-3xl border-2 border-[#C59758]/40 bg-white/95 dark:bg-[#0B121B]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#C59758]/20">
              <div>
                <span className="text-xs uppercase font-serif font-bold tracking-widest text-[#C59758] dark:text-[#D5AE63]">
                  Step 2 of 4
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#221A14] dark:text-[#F5F3EF]">
                  Enter Your Sacred Astrological Details
                </h3>
              </div>
              <div className="px-3.5 py-1 rounded-full bg-[#C59758]/15 border border-[#C59758]/30 text-xs font-semibold text-[#B9684D] dark:text-[#D5AE63]">
                {activeService.title} • ₹{selectedTier.priceINR.toLocaleString("en-IN")}
              </div>
            </div>

            {/* Row 1: Name & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Full Name (or Spiritual Alias) *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C59758]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Evelyn Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/40 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Gender / Energetic Polarity *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="sacred-select w-full px-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 cursor-pointer"
                >
                  <option value="Female">Female (Yin / Receptive)</option>
                  <option value="Male">Male (Yang / Active)</option>
                  <option value="Non-Binary">Non-Binary / Dual Balance</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Row 2: Date of Birth */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                Date of Birth (DOB) *
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <select
                  value={formData.birthMonth}
                  onChange={(e) => setFormData({ ...formData, birthMonth: Number(e.target.value) })}
                  className="sacred-select w-full px-3 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-xs sm:text-sm font-semibold text-[#221A14] dark:text-[#F5F3EF] focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 cursor-pointer"
                >
                  {[
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                  ].map((m, idx) => (
                    <option key={m} value={idx + 1}>
                      {idx + 1} - {m}
                    </option>
                  ))}
                </select>

                <select
                  value={formData.birthDay}
                  onChange={(e) => setFormData({ ...formData, birthDay: Number(e.target.value) })}
                  className="sacred-select w-full px-3 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-xs sm:text-sm font-semibold text-[#221A14] dark:text-[#F5F3EF] focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 cursor-pointer"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>
                      Day {d}
                    </option>
                  ))}
                </select>

                <select
                  value={formData.birthYear}
                  onChange={(e) => setFormData({ ...formData, birthYear: Number(e.target.value) })}
                  className="sacred-select w-full px-3 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-xs sm:text-sm font-semibold text-[#221A14] dark:text-[#F5F3EF] focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 cursor-pointer"
                >
                  {Array.from({ length: 90 }, (_, i) => 2026 - i).map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Time & Place of Birth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1]">
                    Exact Time of Birth *
                  </label>
                  <label className="text-xs flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!formData.knowsTime}
                      onChange={(e) => setFormData({ ...formData, knowsTime: !e.target.checked })}
                      className="rounded border-[#C59758] accent-[#C59758]"
                    />
                    <span className="text-[11px] text-[#6A655C] dark:text-[#AAA7A1]">Time Unknown</span>
                  </label>
                </div>

                {formData.knowsTime ? (
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      value={formData.birthHour}
                      onChange={(e) => setFormData({ ...formData, birthHour: Number(e.target.value) })}
                      className="sacred-select px-2 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-xs sm:text-sm text-[#221A14] dark:text-[#F5F3EF] focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63]"
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                        <option key={h} value={h}>
                          {h} hr
                        </option>
                      ))}
                    </select>

                    <select
                      value={formData.birthMinute}
                      onChange={(e) => setFormData({ ...formData, birthMinute: Number(e.target.value) })}
                      className="sacred-select px-2 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-xs sm:text-sm text-[#221A14] dark:text-[#F5F3EF] focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63]"
                    >
                      {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                        <option key={m} value={m}>
                          {m < 10 ? `0${m}` : m} min
                        </option>
                      ))}
                    </select>

                    <select
                      value={formData.birthPeriod}
                      onChange={(e) => setFormData({ ...formData, birthPeriod: e.target.value })}
                      className="sacred-select px-2 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-xs sm:text-sm font-bold text-[#221A14] dark:text-[#F5F3EF] focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63]"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                ) : (
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-200">
                    Solar noon chart (12:00 PM) will be used for calculation.
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Place of Birth (City & Country) *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C59758]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. New York, USA or Mumbai, India"
                    value={formData.birthCity}
                    onChange={(e) => setFormData({ ...formData, birthCity: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20"
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Relationship & Financial Context */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Relationship / Marital Status *
                </label>
                <div className="relative">
                  <Heart className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-500" />
                  <select
                    value={formData.maritalStatus}
                    onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                    className="sacred-select w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 cursor-pointer"
                  >
                    <option value="Single">Single (Seeking Alignment)</option>
                    <option value="In Relationship">In a Relationship / Dating</option>
                    <option value="Married">Married / Sacred Union</option>
                    <option value="Divorced / Separated">Divorced / Separated</option>
                    <option value="Complicated">It's Complicated / Twin Flame</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Career & Financial Focus *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C59758]" />
                  <select
                    value={formData.financialStatus}
                    onChange={(e) => setFormData({ ...formData, financialStatus: e.target.value })}
                    className="sacred-select w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 cursor-pointer"
                  >
                    <option value="Employed / Career Growth">Employed (Career Growth Focus)</option>
                    <option value="Entrepreneur / Business">Business Owner / Venture Expansion</option>
                    <option value="Seeking Breakthrough">Seeking Financial & Career Breakthrough</option>
                    <option value="Student / Transition">Student / Life Transition</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 5: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Email Address (for Sacred Report & Link) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                  Phone / WhatsApp Number (with Country Code) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20"
                />
              </div>
            </div>

            {/* Row 6: Sacred Question */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6A655C] dark:text-[#AAA7A1] mb-1.5">
                Your Specific Question or Focus for {activeService.assignedMaster} *
              </label>
              <textarea
                rows={3}
                required
                placeholder="e.g. When will I transition into my soul-aligned career? What karmic lesson is currently active in my romantic partnership?"
                value={formData.specificQuestion}
                onChange={(e) => setFormData({ ...formData, specificQuestion: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C59758] dark:focus:border-[#D5AE63] focus:ring-2 focus:ring-[#C59758]/20 resize-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="px-6 py-3 rounded-2xl border border-[#C59758]/40 hover:bg-black/5 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold text-[#221A14] dark:text-[#F5F3EF] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </button>

            <button
              type="submit"
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#C59758] via-[#D5AE63] to-[#B9684D] hover:brightness-110 text-white font-serif font-bold text-base shadow-xl transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Review Summary & Pay</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      )}

      {/* ================= STEP 3: SACRED SUMMARY & PAYMENT OPTIONS ================= */}
      {currentStep === 3 && (
        <form onSubmit={handleCompletePayment} className="space-y-8 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Summary Review of Entered Data */}
            <div className="lg:col-span-7 rounded-3xl border-2 border-[#C59758]/40 bg-white/95 dark:bg-[#0B121B]/95 p-6 sm:p-8 shadow-xl backdrop-blur-md space-y-5">
              <div className="pb-3 border-b border-[#C59758]/20 flex items-center justify-between">
                <h3 className="font-serif font-bold text-xl text-[#221A14] dark:text-[#F5F3EF]">
                  Review Your Sacred Submission
                </h3>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-xs font-bold text-[#B9684D] dark:text-[#D5AE63] hover:underline cursor-pointer"
                >
                  Edit Details
                </button>
              </div>

              {/* Data Summary Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/20">
                  <span className="text-[#6A655C] dark:text-[#AAA7A1] block">Seeker Name:</span>
                  <span className="font-bold text-[#221A14] dark:text-[#F5F3EF] text-sm block mt-0.5">
                    {formData.fullName} ({formData.gender})
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/20">
                  <span className="text-[#6A655C] dark:text-[#AAA7A1] block">Birth Date & Time:</span>
                  <span className="font-bold text-[#221A14] dark:text-[#F5F3EF] text-sm block mt-0.5">
                    {formData.birthMonth}/{formData.birthDay}/{formData.birthYear}{" "}
                    {formData.knowsTime ? `• ${formData.birthHour}:${formData.birthMinute < 10 ? `0${formData.birthMinute}` : formData.birthMinute} ${formData.birthPeriod}` : "• (Solar Noon)"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/20">
                  <span className="text-[#6A655C] dark:text-[#AAA7A1] block">Birth Location:</span>
                  <span className="font-bold text-[#221A14] dark:text-[#F5F3EF] text-sm block mt-0.5">
                    {formData.birthCity || "Not specified"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/20">
                  <span className="text-[#6A655C] dark:text-[#AAA7A1] block">Marital & Career Status:</span>
                  <span className="font-bold text-[#221A14] dark:text-[#F5F3EF] text-sm block mt-0.5 truncate">
                    {formData.maritalStatus} • {formData.financialStatus}
                  </span>
                </div>
              </div>

              {/* Inquiry Preview */}
              <div className="p-3.5 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/20">
                <span className="text-[11px] uppercase font-bold text-[#C59758] dark:text-[#D5AE63] block mb-1">
                  Sacred Question for {activeService.assignedMaster}:
                </span>
                <p className="text-xs sm:text-sm text-[#221A14] dark:text-[#F5F3EF] italic">
                  &ldquo;{formData.specificQuestion}&rdquo;
                </p>
              </div>

              {/* Privacy Badge */}
              <div className="flex items-center gap-2 text-xs text-[#6A655C] dark:text-[#AAA7A1] pt-2">
                <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Encrypted with 256-Bit SSL • 100% Confidential Guarantee</span>
              </div>
            </div>

            {/* Right: Payment Option Box */}
            <div className="lg:col-span-5 rounded-3xl border-2 border-[#C59758] bg-white dark:bg-[#0B121B] p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
              <div>
                <span className="text-xs uppercase font-serif font-bold tracking-widest text-[#C59758] dark:text-[#D5AE63]">
                  Sacred Checkout
                </span>
                <h3 className="font-serif font-bold text-xl text-[#221A14] dark:text-[#F5F3EF] mt-0.5">
                  Select Payment Method
                </h3>
              </div>

              {/* Payment Method Selector Tabs */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "card", label: "Card", icon: "💳" },
                  { id: "upi", label: "UPI / Net", icon: "⚡" },
                  { id: "paypal", label: "PayPal", icon: "🅿️" },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-1 cursor-pointer ${paymentMethod === m.id
                        ? "bg-[#C59758] text-white border-[#C59758] shadow-md"
                        : "bg-[#FAF7EE] dark:bg-[#121B26] text-[#6A655C] dark:text-[#AAA7A1] border-[#C59758]/30"
                      }`}
                  >
                    <span className="text-sm">{m.icon}</span>
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>

              {/* Card Inputs */}
              {paymentMethod === "card" && (
                <div className="space-y-3 animate-fade-in text-xs">
                  <div>
                    <label className="block font-bold text-[#6A655C] dark:text-[#AAA7A1] mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="4000 1234 5678 9010"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/40 text-[#221A14] dark:text-[#F5F3EF]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold text-[#6A655C] dark:text-[#AAA7A1] mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/40 text-[#221A14] dark:text-[#F5F3EF]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#6A655C] dark:text-[#AAA7A1] mb-1">
                        Security CVC
                      </label>
                      <input
                        type="password"
                        placeholder="123"
                        maxLength={4}
                        value={cardDetails.cvc}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/40 text-[#221A14] dark:text-[#F5F3EF]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "upi" && (
                <div className="space-y-3 animate-fade-in text-xs">
                  <div>
                    <label className="block font-bold text-[#6A655C] dark:text-[#AAA7A1] mb-1">
                      UPI ID / Virtual Payment Address
                    </label>
                    <input
                      type="text"
                      placeholder="yourname@okhdfcbank or @paytm"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/40 text-[#221A14] dark:text-[#F5F3EF]"
                    />
                  </div>
                  <p className="text-[11px] text-[#6A655C] dark:text-[#AAA7A1]">
                    Supports Google Pay, PhonePe, Paytm, BHIM, and all Indian Net Banking banks.
                  </p>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="p-4 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/30 text-center text-xs space-y-2 animate-fade-in">
                  <p className="text-[#221A14] dark:text-[#F5F3EF] font-semibold">
                    You will be directed to PayPal to complete your sacred transaction securely.
                  </p>
                </div>
              )}

              {/* Order Breakdown */}
              <div className="space-y-1.5 pt-3 border-t border-[#C59758]/20 text-xs">
                <div className="flex justify-between text-[#6A655C] dark:text-[#AAA7A1]">
                  <span>{activeService.title} ({selectedTier.name})</span>
                  <span className="font-semibold text-[#221A14] dark:text-[#F5F3EF]">₹{selectedTier.priceINR.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-[#6A655C] dark:text-[#AAA7A1]">
                  <span>Sacred Ephemeris Calculation Fee</span>
                  <span className="text-emerald-600 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between font-serif font-bold text-base text-[#221A14] dark:text-[#F5F3EF] pt-2 border-t border-[#C59758]/30">
                  <span>Total Investment:</span>
                  <span className="text-[#B9684D] dark:text-[#D5AE63] text-lg font-bold">
                    ₹{selectedTier.priceINR.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Pay Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#C59758] via-[#D5AE63] to-[#B9684D] hover:brightness-110 text-white font-serif font-bold text-base shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <span className="animate-spin">🔮</span>
                    <span>Transmitting to Sacred Gateway...</span>
                  </>
                ) : (
                  <>
                    <span>Complete Sacred Payment</span>
                    <span>✦</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* ================= STEP 4: CONFIRMATION RECEIPT ================= */}
      {currentStep === 4 && (
        <div className="rounded-3xl border-2 border-[#C59758] bg-white dark:bg-[#0B121B] p-8 sm:p-12 shadow-2xl backdrop-blur-md text-center space-y-6 animate-fade-in max-w-2xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500/50 flex items-center justify-center mx-auto text-3xl shadow-inner animate-bounce">
            ✨
          </div>

          <div>
            <span className="text-xs uppercase font-serif font-bold tracking-widest text-[#C59758] dark:text-[#D5AE63]">
              Sacred Booking Confirmed
            </span>
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#221A14] dark:text-[#F5F3EF] mt-1">
              Your Astrological Channel is Open
            </h2>
            <p className="text-sm text-[#6A655C] dark:text-[#AAA7A1] mt-2">
              Order Reference Code: <strong className="text-[#B9684D] dark:text-[#D5AE63] font-mono">{orderId}</strong>
            </p>
          </div>

          {/* Receipt Card */}
          <div className="p-5 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border border-[#C59758]/30 text-left space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between border-b border-[#C59758]/20 pb-2">
              <span className="text-[#6A655C] dark:text-[#AAA7A1]">Service:</span>
              <strong className="text-[#221A14] dark:text-[#F5F3EF]">{activeService.title} ({selectedTier.name})</strong>
            </div>
            <div className="flex justify-between border-b border-[#C59758]/20 pb-2">
              <span className="text-[#6A655C] dark:text-[#AAA7A1]">Assigned Practitioner:</span>
              <strong className="text-[#B9684D] dark:text-[#D5AE63]">{activeService.assignedMaster}</strong>
            </div>
            <div className="flex justify-between border-b border-[#C59758]/20 pb-2">
              <span className="text-[#6A655C] dark:text-[#AAA7A1]">Seeker Email:</span>
              <span className="text-[#221A14] dark:text-[#F5F3EF] font-semibold">{formData.email}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-[#6A655C] dark:text-[#AAA7A1]">Estimated Delivery / Muhurta:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Within 24 Hours</span>
            </div>
          </div>

          <p className="text-xs text-[#6A655C] dark:text-[#AAA7A1] max-w-md mx-auto leading-relaxed">
            A confirmation receipt and calendar invitation have been transmitted to <strong>{formData.email}</strong>. While our masters cast your chart, explore our free interactive tools below:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/game"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C59758] hover:bg-[#B9684D] text-white font-serif font-bold text-sm shadow-md transition-all"
            >
              Draw Free 3-Card Tarot Spread →
            </Link>
            <Link
              href="/zodiac"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white dark:bg-[#121B26] border border-[#C59758] text-[#B9684D] dark:text-[#D5AE63] font-serif font-bold text-sm shadow transition-all"
            >
              Explore Free Zodiac Finder →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
