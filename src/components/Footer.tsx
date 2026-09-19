"use client";

import { Mail, Phone, ArrowUp } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.66.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1.01 1.72 2.64 1.22 3.28.93.1-.73.4-1.22.72-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .94-.3 3.08 1.16.89-.25 1.85-.37 2.8-.37.95 0 1.91.13 2.8.37 2.14-1.46 3.08-1.16 3.08-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.27-5.14 5.55.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.78.54 4.46-1.49 7.68-5.69 7.68-10.66C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/mjasim1388",
    Icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mjasim1388",
    Icon: LinkedinIcon,
  },
  {
    name: "Email",
    href: "mailto:jasimafridi1388@gmail.com",
    Icon: Mail,
  },
  {
    name: "Call",
    href: "tel:+923000949457",
    Icon: Phone,
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
        {/* Social buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950/70 text-neutral-300 text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
            >
              <Icon className="h-4 w-4" />
              {name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-neutral-500 text-xs text-center">
          © {year} Muhammad Jasim · Built with Next.js &amp; VengeanceUI
        </p>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-sm text-neutral-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}