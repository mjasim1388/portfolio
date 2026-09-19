"use client";

import ParticleName from "@/components/ParticleName";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full pt-32">
      {/* ── Particle name ── */}
<div className="relative w-full h-[160px] sm:h-[200px] md:h-[240px]">
  <ParticleName text="Muhammad Jasim" color="#ffffff" className="h-full w-full" />
</div>

      {/* ── Subtitle + headline + CTAs + stats ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20 text-center">
        <p className="text-cyan-400 font-mono text-sm sm:text-base mb-3 tracking-widest uppercase">
          CS Graduate · Django & Python Developer
        </p>

        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Excel · Power BI · SQL · Full-Stack Web
        </h2>

        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Built a full-stack Coal Mining Management System with Django,
          PostgreSQL, and Chart.js. Open to Data, Dev, and Admin roles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:opacity-90 transition-opacity"
          >
            View My Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 rounded-full border border-neutral-700 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            Contact Me
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div>
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              1+
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Full-Stack Project
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              2+
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Years Experience
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              2
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Certifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}