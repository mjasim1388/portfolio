import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/SmoothScroll"; // <-- Imported
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-jasim.vercel.app"),
  title: "Muhammad Jasim — Full-Stack Developer & Data Analyst",
  description: "Portfolio of Muhammad Jasim. Building full-stack web applications and turning data into business decisions.",
  keywords: ["Muhammad Jasim", "Django Developer", "Python Developer", "Full-Stack Developer", "Data Analyst", "Power BI", "SQL", "Peshawar", "Pakistan"],
  authors: [{ name: "Muhammad Jasim" }],
  creator: "Muhammad Jasim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-jasim.vercel.app",
    siteName: "Muhammad Jasim — Portfolio",
    title: "Muhammad Jasim — Full-Stack Developer & Data Analyst",
    description: "Full-stack projects, data analytics, and certifications. Open to Data, Dev & Admin roles.",
  },
  twitter: { card: "summary", title: "Muhammad Jasim", description: "Full-stack projects and data analytics." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07070b] text-neutral-100">
        <SmoothScroll>{children}</SmoothScroll> {/* <-- Wrapped */}
        <Analytics />
      </body>
    </html>
  );
}