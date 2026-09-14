"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-200",
              mobile && "py-1 text-base",
              active
                ? "font-semibold text-[var(--accent-brand)] dark:text-[var(--accent-gold)]"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}