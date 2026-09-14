"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Sparkles } from "lucide-react";

import { navigation, NavigationItem } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export default function NavLinks({
  mobile = false,
  onItemClick,
}: NavLinksProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(null);
  }, [pathname]);

  return (
    <nav
      ref={dropdownRef}
      className={cn(
        mobile
          ? "flex flex-col gap-3"
          : "hidden items-center gap-6 xl:gap-8 lg:flex"
      )}
    >
      {navigation.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isChildActive = hasChildren && item.children?.some(
          (child) => pathname === child.href || (child.href !== "/" && pathname.startsWith(child.href))
        );
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href)) ||
          isChildActive;

        if (hasChildren) {
          const isOpen = dropdownOpen === item.label;

          return (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(item.label)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(isOpen ? null : item.label)}
                className={cn(
                  "inline-flex items-center gap-1.5 text-[15px] xl:text-base font-semibold tracking-normal whitespace-nowrap transition-colors duration-200 cursor-pointer py-2",
                  active
                    ? "font-bold text-[#B9684D] dark:text-[#D5AE63]"
                    : "text-foreground/85 hover:text-foreground"
                )}
              >
                <span>{item.label}</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded-full bg-[#C59758]/15 text-[#B9684D] dark:text-[#D5AE63] border border-[#C59758]/30">
                  Free
                </span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 opacity-70 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Luxury Dropdown Menu */}
              {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-fade-in w-72">
                  <div className="rounded-2xl border-2 border-[#C59758]/40 bg-[#FAF7EE] dark:bg-[#0B121B] p-2.5 shadow-2xl backdrop-blur-md">
                    <div className="flex flex-col gap-1">
                      {item.children?.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => {
                              setDropdownOpen(null);
                              onItemClick?.();
                            }}
                            className={cn(
                              "flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200",
                              isSubActive
                                ? "bg-[#C59758]/20 text-[#B9684D] dark:text-[#D5AE63]"
                                : "hover:bg-black/5 dark:hover:bg-white/5 text-foreground"
                            )}
                          >
                            <span className="text-xl shrink-0 mt-0.5">{sub.icon || "✦"}</span>
                            <div className="flex flex-col">
                              <div className="flex items-center gap-1.5">
                                <span className="font-serif font-bold text-sm leading-tight text-[#221A14] dark:text-[#F5F3EF]">
                                  {sub.label}
                                </span>
                                {sub.badge && (
                                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              {sub.description && (
                                <span className="text-[11px] text-[#6A655C] dark:text-[#AAA7A1] leading-tight mt-0.5">
                                  {sub.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "inline-flex items-center gap-1.5 text-[15px] xl:text-base font-semibold tracking-normal whitespace-nowrap transition-colors duration-200",
              mobile && "py-1.5 text-lg",
              active
                ? "font-bold text-[#B9684D] dark:text-[#D5AE63]"
                : "text-foreground/85 hover:text-foreground"
            )}
          >
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}