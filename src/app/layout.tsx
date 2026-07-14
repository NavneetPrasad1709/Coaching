import type { Metadata } from "next";
import { Spectral, Schibsted_Grotesk, Spline_Sans_Mono } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import MotionProvider from "@/components/providers/MotionProvider";
import { site } from "@/lib/site";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — Home, Online & Offline Tuition in Prayagraj & Varanasi`,
    template: `%s — ${site.brand}`,
  },
  description:
    "Verified, board-experienced tutors for Classes 5–12 (CBSE & ICSE) in Prayagraj and Varanasi. Home tuition, online classes, one-to-one and small groups. Book a free demo class.",
  keywords: [
    "home tuition Prayagraj",
    "home tuition Varanasi",
    "online tuition CBSE",
    "ICSE tutor",
    "tuition teacher Prayagraj",
    "tuition teacher Varanasi",
    "Class 10 tuition",
    "Class 12 tuition",
  ],
  openGraph: {
    title: `${site.brand} — The right tutor changes everything`,
    description:
      "Verified tutors for Classes 5–12, CBSE & ICSE. Home, online and classroom tuition in Prayagraj & Varanasi. Free demo class.",
    url: site.url,
    siteName: site.brand,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${schibsted.variable} ${splineMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-board focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
