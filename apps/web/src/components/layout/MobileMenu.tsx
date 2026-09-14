"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="h-9 w-9 rounded-full border border-[var(--border)] bg-background/50 hover:bg-muted"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </Button>
          }
        />

        <SheetContent side="left" className="w-80 border-r border-[var(--border)] bg-background p-6">
          <SheetHeader className="p-0 text-left">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Logo />
          </SheetHeader>

          <div className="mt-8 flex flex-col gap-6">
            <NavLinks mobile onItemClick={() => setOpen(false)} />

            <div className="pt-6 border-t border-[var(--border)] flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2">
                <span className="text-sm font-medium text-muted-foreground">Appearance</span>
                <ThemeToggle />
              </div>

              <Link href="/readings" onClick={() => setOpen(false)}>
                <Button className="w-full rounded-full bg-[var(--primary)] hover:opacity-90 text-primary-foreground py-2.5 font-medium shadow-sm transition-all">
                  Get Reading
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}