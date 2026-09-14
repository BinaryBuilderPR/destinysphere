import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./global.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/ui/ScrollButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DestinySphere",
    template: "%s | DestinySphere",
  },
  description:
    "Premium AI-powered spiritual guidance platform featuring Tarot, Numerology, Kundali, Moonology, Compatibility and personalized readings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <ScrollButton />
        </ThemeProvider>
      </body>
    </html>
  );
}