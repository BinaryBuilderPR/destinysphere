import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./global.css"
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Navbar />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}