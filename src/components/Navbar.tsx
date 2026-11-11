"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ArrowUpRight } from "lucide-react";

const items = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Blog", href: "/blog", external: true },
  { label: "Contact", href: "#contact" },
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
        { rootMargin: "-20% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const triggerSearch = () => {
    document.dispatchEvent(new Event("open-command-palette"));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-neutral-800/50 py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
          >
            <span className="text-white font-semibold text-lg tracking-tight hover:text-neutral-300 transition-colors">
              Muhammad Jasim
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          </a>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-400">
            {items.map((item) => {
              const isActive = active === item.href.replace("#", "");
              
              if (item.external) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.label}
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
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`relative transition-colors hover:text-white ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={triggerSearch}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800 bg-neutral-900/50 text-neutral-400 text-xs font-medium hover:border-neutral-700 hover:text-white transition-all group"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search</span>
              <kbd className="ml-1 bg-neutral-800 text-[10px] px-1.5 py-0.5 rounded text-neutral-500 group-hover:text-neutral-300 font-mono">
                ⌘K
              </kbd>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex h-9 w-9 items-center justify-center text-neutral-300 hover:text-white transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl pt-24 px-6 flex flex-col">
          <ul className="flex flex-col gap-6 text-lg font-medium text-neutral-300">
            {items.map((item) => {
              if (item.external) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setOpen(false)} className="hover:text-white transition-colors">
                      {item.label}
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
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col gap-4">
             <button
              onClick={() => {
                setOpen(false);
                triggerSearch();
              }}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-300"
            >
              <span className="flex items-center gap-2"><Search className="h-4 w-4" /> Search</span>
              <kbd className="font-mono text-xs text-neutral-500">⌘K</kbd>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-amber-500 text-black font-semibold"
            >
              Let's Talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}