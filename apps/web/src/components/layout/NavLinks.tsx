"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  mobile?: boolean;
}

export default function NavLinks({
  mobile = false,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        mobile
          ? "flex flex-col gap-5"
          : "hidden items-center gap-8 lg:flex"
      )}
    >
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-amber-500",
              active
                ? "font-semibold text-amber-500"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}