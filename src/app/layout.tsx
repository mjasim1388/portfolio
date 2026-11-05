import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-jasim.vercel.app"),
  title: {
    default: "Muhammad Jasim — CS Graduate & Django Developer",
    template: "%s | Muhammad Jasim",
  },
  description:
    "Portfolio of Muhammad Jasim — CS graduate from Peshawar, Pakistan. Django, Python, SQL, Excel, Power BI. Built a full-stack Coal Mining Management System.",
  keywords: [
    "Muhammad Jasim",
    "Django Developer",
    "Python Developer",
    "Full-Stack Developer",
    "Data Analyst",
    "Power BI",
    "SQL",
    "Peshawar",
    "Pakistan",
    "CS Graduate",
  ],
  authors: [{ name: "Muhammad Jasim" }],
  creator: "Muhammad Jasim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-jasim.vercel.app",
    siteName: "Muhammad Jasim — Portfolio",
    title: "Muhammad Jasim — CS Graduate & Django Developer",
    description:
      "Full-stack projects, data analytics, and certifications. Open to Data, Dev & Admin roles.",
  },
  twitter: {
    card: "summary",
    title: "Muhammad Jasim — CS Graduate & Django Developer",
    description: "Full-stack projects, data analytics, and certifications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07070b] text-neutral-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}