import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  variable: "--font-space", 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const jetbrainsMono = JetBrains_Mono({ 
  variable: "--font-mono", 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-jasim.vercel.app"),
  title: "Muhammad Jasim — Full-Stack Developer & Data Analyst",
  description: "I turn paperwork into dashboards. Full-stack developer and data analyst based in Peshawar, Pakistan.",
  keywords: ["Muhammad Jasim", "Django Developer", "Data Analyst", "Power BI", "SQL", "Peshawar"],
  authors: [{ name: "Muhammad Jasim" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-jasim.vercel.app",
    siteName: "Muhammad Jasim",
    title: "Muhammad Jasim — Full-Stack Developer & Data Analyst",
    description: "I turn paperwork into dashboards.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-neutral-200 font-sans">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}