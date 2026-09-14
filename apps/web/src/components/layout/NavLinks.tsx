"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { navigation } from "@/constants/navigation";
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

  return (
    <nav
      className={cn(
        mobile
          ? "flex flex-col gap-4"
          : "hidden items-center gap-7 lg:flex"
      )}
    >
      {navigation.map((item) => {
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        const hasSubmenu = item.label === "Services";

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "inline-flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200",
              mobile && "py-1 text-base",
              active
                ? "font-bold text-[#B9684D] dark:text-[#D5AE63]"
                : "text-foreground/80 hover:text-foreground"
            )}
          >
            <span>{item.label}</span>
            {hasSubmenu && (
              <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:rotate-180" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}