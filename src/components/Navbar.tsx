"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // <-- Imported Link
import { Menu, X } from "lucide-react";
import HireButton from "@/components/HireButton";

const items = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "work", href: "#projects" },
  { label: "blog", href: "/blog", external: true },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...items.filter((i) => !i.external).map((i) => i.href.replace("#", ""))];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07070b]/85 backdrop-blur-xl border-b border-neutral-800/60"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* ── Left: terminal path ── */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 font-mono text-sm group"
          >
            <span className="text-neutral-500 group-hover:text-neutral-400 transition-colors">~/</span>
            <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors">mjasim</span>
            <span className="inline-block w-[7px] h-4 bg-cyan-400" style={{ animation: "cursorBlink 1.1s steps(2) infinite" }} />
          </a>

          {/* ── Center: nav links ── */}
          <ul className="hidden md:flex items-center gap-1 font-mono text-[11px]">
            {items.map((item) => {
              const isActive = active === item.href.replace("#", "");
              
              // Render Next.js Link for external pages (like /blog)
              if (item.external) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="nav-link relative inline-block px-3 py-2 rounded-md uppercase tracking-[0.15em] transition-all duration-300 ease-out hover:-translate-y-0.5 text-neutral-500 hover:text-white"
                    >
                      <span className="inline-block">{item.label}</span>
                      <span className="pointer-events-none absolute left-1/2 -bottom-0.5 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300 ease-out nav-link-glow" />
                    </Link>
                  </li>
                );
              }

              // Render standard anchor for page sections (#about, #skills)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`nav-link relative inline-block px-3 py-2 rounded-md uppercase tracking-[0.15em] transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 ${
                      isActive ? "text-cyan-400" : "text-neutral-500 hover:text-white"
                    }`}
                  >
                    {isActive && <span className="absolute left-1 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-cyan-400" />}
                    <span className={`inline-block transition-transform duration-300 ${isActive ? "pl-3" : ""}`}>{item.label}</span>
                    <span className={`pointer-events-none absolute left-1/2 -bottom-0.5 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300 ease-out ${isActive ? "w-full" : "group-hover:w-full nav-link-glow"}`} />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── Right: hire_me + mobile ── */}
          <div className="flex items-center gap-2">
            <HireButton />
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile menu overlay ── */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#07070b]/98 backdrop-blur-xl pt-24 px-6">
          <ul className="flex flex-col gap-2 font-mono">
            {items.map((item) => {
              const isActive = active === item.href.replace("#", "");
              
              if (item.external) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm border transition-all duration-300 text-neutral-300 border-transparent hover:bg-neutral-900/50 hover:translate-x-1"
                    >
                      <span className="text-neutral-600">$</span>{item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm border transition-all duration-300 ${
                      isActive ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" : "text-neutral-300 border-transparent hover:bg-neutral-900/50 hover:translate-x-1"
                    }`}
                  >
                    <span className="text-neutral-600">$</span>{item.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-4">
              <button
                onClick={() => {
                  setOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold text-sm"
              >
                hire_me
              </button>
            </li>
          </ul>
        </div>
      )}

      <style jsx global>{`
        @keyframes cursorBlink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        .nav-link:hover { text-shadow: 0 0 12px rgba(34, 211, 238, 0.5); }
        .nav-link:hover .nav-link-glow { width: 100%; transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
        .nav-link .nav-link-glow { transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>
    </>
  );
}