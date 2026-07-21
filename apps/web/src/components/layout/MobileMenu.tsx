"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">f
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-80">
          <div className="mt-8">
            <Logo />

            <div className="mt-10">
              <NavLinks mobile />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}