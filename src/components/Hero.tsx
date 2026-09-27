"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const techStack = [
  { name: "Python", color: "#3776AB" },
  { name: "Django", color: "#0C4B33" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Power BI", color: "#F2C811" },
  { name: "Git", color: "#F05032" },
];

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-neutral-300 text-xs font-medium">{name}</span>
    </div>
  );
}

function smoothScroll(href: string) {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 min-h-screen flex items-center">
      {/* ── Subtle corner accents ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-8 w-px h-32 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
        <div className="absolute top-24 right-8 w-px h-32 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
        <div className="absolute bottom-32 left-8 w-px h-24 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
        <div className="absolute bottom-32 right-8 w-px h-24 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl mx-auto px-6 text-center w-full"
      >
        {/* ── Availability + Location badges ── */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-neutral-300 text-xs font-medium tracking-wide">
              Available for work
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
            <MapPin className="h-3 w-3 text-cyan-400" />
            <span className="text-neutral-300 text-xs font-medium tracking-wide">
              Peshawar, Pakistan
            </span>
          </div>
        </motion.div>

        {/* ── Avatar with gradient halo + status ring ── */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 blur-xl opacity-40" />
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpeg"
                alt="Muhammad Jasim"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-neutral-800 ring-4 ring-neutral-900/60"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="absolute bottom-1 right-1 flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 animate-ping" />
                <span className="relative inline-flex h-5 w-5 rounded-full bg-emerald-400 border-2 border-[#07070b]" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Name ── */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-4"
        >
          <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Muhammad
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Jasim
          </span>
        </motion.h1>

        {/* ── Role ── */}
        <motion.p
          variants={fadeUp}
          className="text-cyan-400 font-mono text-sm sm:text-base tracking-widest uppercase mb-6"
        >
          CS Graduate · Django &amp; Python Developer
        </motion.p>

        {/* ── Tagline ── */}
        <motion.p
          variants={fadeUp}
          className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build full-stack web applications and turn data into decisions.
          Currently open to Data, Development, and Administration roles.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#projects");
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#contact");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-950/60 text-neutral-200 font-semibold text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
        </motion.div>

        {/* ── Tech stack strip ── */}
        <motion.div variants={fadeUp} className="mb-14">
          <p className="text-neutral-600 text-[10px] uppercase tracking-[0.2em] mb-4">
            Built with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} color={tech.color} />
            ))}
          </div>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-10 border-t border-neutral-800/60"
        >
          {[
            { value: "3", label: "Projects" },
            { value: "2+", label: "Years Experience" },
            { value: "2", label: "Certifications" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-neutral-500 text-xs sm:text-sm mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-neutral-600">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}