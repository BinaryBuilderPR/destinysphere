"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string | number;
  label: string;
}

interface SacredSelectProps {
  value: string | number;
  onChange: (value: string | number) => void;
  options: (SelectOption | string | number)[];
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  menuClassName?: string;
  size?: "sm" | "default";
}

export function SacredSelect({
  value,
  onChange,
  options,
  placeholder = "Select...",
  className,
  triggerClassName,
  menuClassName,
  size = "default",
}: SacredSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Normalize options
  const normalizedOptions: SelectOption[] = options.map((opt) => {
    if (typeof opt === "object" && opt !== null && "value" in opt) {
      return opt as SelectOption;
    }
    return { value: opt, label: String(opt) };
  });

  const selectedOption = normalizedOptions.find((opt) => String(opt.value) === String(value));

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll active item into view when opened
  useEffect(() => {
    if (isOpen && listRef.current) {
      const activeEl = listRef.current.querySelector<HTMLElement>("[data-selected='true']");
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [isOpen]);

  const handleSelect = (optValue: string | number) => {
    onChange(optValue);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative w-full select-none", className)}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between gap-2 rounded-2xl bg-[#FAF7EE] dark:bg-[#121B26] border-2 border-[#C59758]/30 dark:border-[#D5AE63]/30 text-[#221A14] dark:text-[#F5F3EF] font-semibold transition-all duration-200 cursor-pointer shadow-xs",
          isOpen
            ? "border-[#C59758] dark:border-[#D5AE63] ring-2 ring-[#C59758]/25"
            : "hover:border-[#C59758]/60 dark:hover:border-[#D5AE63]/60",
          size === "sm" ? "px-3 py-2 text-xs" : "px-4 py-3.5 text-sm",
          triggerClassName
        )}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-[#C59758] dark:text-[#D5AE63] shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Custom Luxury Dropdown Menu */}
      {isOpen && (
        <div
          ref={listRef}
          className={cn(
            "absolute left-0 right-0 z-[90] mt-1.5 max-h-60 overflow-y-auto rounded-2xl border-2 border-[#C59758] dark:border-[#D5AE63] bg-[#FAF7EE] dark:bg-[#0B121B] shadow-[0_20px_45px_rgba(197,151,88,0.3)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.8)] backdrop-blur-md p-1.5 animate-fade-in",
            menuClassName
          )}
        >
          {normalizedOptions.map((opt) => {
            const isSelected = String(opt.value) === String(value);
            return (
              <div
                key={String(opt.value)}
                data-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                className={cn(
                  "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer mb-0.5 last:mb-0",
                  isSelected
                    ? "bg-[#C59758]/20 dark:bg-[#D5AE63]/25 text-[#B9684D] dark:text-[#D5AE63] font-bold"
                    : "text-[#221A14] dark:text-[#F5F3EF] hover:bg-[#C59758]/12 dark:hover:bg-[#D5AE63]/15 hover:text-[#B9684D] dark:hover:text-[#D5AE63]"
                )}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#C59758] dark:text-[#D5AE63] shrink-0 ml-2" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
