"use client";

import { useEffect, useState } from "react";
import { SpotlightNavbar, type NavItem } from "@/components/ui/spotlight-navbar";

const items: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (item: NavItem) => {
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop — appears after scrolling 40px */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled
            ? "bg-[#07070b]/80 backdrop-blur-xl border-b border-neutral-800/60"
            : "bg-transparent"
        }`}
        aria-hidden="true"
      />

      {/* The floating pill */}
      <div className="relative">
        <SpotlightNavbar
          items={items}
          defaultActiveIndex={0}
          onItemClick={handleClick}
        />
      </div>
    </div>
  );
}