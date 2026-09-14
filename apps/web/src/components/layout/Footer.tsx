import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-background/50 pt-12 pb-8 transition-colors duration-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="text-xs text-muted-foreground max-w-sm font-normal leading-relaxed mt-1">
              DestinySphere is a premium spiritual guidance platform combining time-honored mystical traditions with personalized insights to help you find clarity and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
            <h5 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
              Readings
            </h5>
            <Link href="/readings?type=tarot" className="hover:text-foreground transition-colors">Tarot Readings</Link>
            <Link href="/readings?type=moonology" className="hover:text-foreground transition-colors">Moonology</Link>
            <Link href="/readings?type=kundali" className="hover:text-foreground transition-colors">Kundali Analysis</Link>
            <Link href="/readings?type=numerology" className="hover:text-foreground transition-colors">Numerology</Link>
          </div>

          {/* Legal / Company */}
          <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
            <h5 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
              Platform
            </h5>
            <Link href="/articles" className="hover:text-foreground transition-colors">Articles & Guides</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About DestinySphere</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact Support</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy & Terms</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[var(--border)]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground">
          <p>© {new Date().getFullYear()} DestinySphere. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>100% Confidential & Secure</span>
            <span>✦</span>
            <span>Ancient Wisdom Modern Clarity</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

