import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import MotionProvider from "@/components/providers/MotionProvider";
import { site } from "@/lib/site";
import "./globals.css";

/* One refined neo-grotesque for everything, hierarchy comes from weight,
   size and tracking, the way enterprise design systems do it. */
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand}, Home, Online & Offline Tuition in Prayagraj & Varanasi`,
    template: `%s, ${site.brand}`,
  },
  description:
    "Verified, board-experienced tutors for Classes 5-12 (CBSE & ICSE) in Prayagraj and Varanasi. Home tuition, online classes, one-to-one and small groups. Book a free demo class.",
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
    title: `${site.brand}, The right tutor changes everything`,
    description:
      "Verified tutors for Classes 5-12, CBSE & ICSE. Home, online and classroom tuition in Prayagraj & Varanasi. Free demo class.",
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
    <html lang="en" className={`${instrument.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
