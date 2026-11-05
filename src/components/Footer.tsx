"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/mjasim1388",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mjasim1388",
    Icon: FaLinkedinIn,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923000949457",
    Icon: FaWhatsapp,
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=jasimafridi1388@gmail.com",
    Icon: FaEnvelope,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-neutral-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-3">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950/70 text-neutral-300 text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
            >
              <Icon className="h-4 w-4" />
              {name}
            </a>
          ))}
        </div>

        <p className="text-neutral-500 text-xs text-center">
          © {year} Muhammad Jasim · Built with Next.js &amp; VengeanceUI
        </p>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-sm text-neutral-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}