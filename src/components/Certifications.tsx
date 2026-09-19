"use client";

import TextAnimation from "@/components/ui/staggerText";
import { motion } from "framer-motion";
import { Award, ExternalLink, Cloud, HardHat } from "lucide-react";

const certifications = [
  {
    icon: Cloud,
    title: "Microsoft 365 Fundamentals Specialization",
    issuer: "Microsoft · Coursera",
    period: "Completed September 2026",
    description:
      "Covered Word, Excel, and PowerPoint — building practical proficiency in Microsoft's productivity suite for document management, spreadsheets, and presentations.",
    skills: ["Microsoft 365", "Excel", "Word", "PowerPoint", "Data Import/Export"],
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/specialization/CHZVN3Z34BG1",
    accent: "cyan",
  },
  {
    icon: HardHat,
    title: "Rigger Level 3",
    issuer: "Qanmos College, Peshawar",
    period: "Completed 2026",
    description:
      "Advanced safety and technical training in rigging operations — load calculations, equipment inspection, and site safety protocols.",
    skills: ["Rigging Operations", "Safety Protocols", "Load Calculations"],
    verifyUrl: null,
    accent: "violet",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative w-full max-w-5xl mx-auto px-6 py-24 scroll-mt-24"
    >
      {/* ── Heading ── */}
      <div className="mb-14 text-center">
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
          05 — Certifications
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          <TextAnimation divideBy="word" delay={0.1}>
            Certifications
          </TextAnimation>
        </h2>
        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
          Verified credentials from Microsoft and technical training programs.
        </p>
      </div>

      {/* ── Certificate cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map(
          (
            { icon: Icon, title, issuer, period, description, skills, verifyUrl, accent },
            i
          ) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className={`group rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-sm p-6 hover:border-${accent}-400/40 transition-colors`}
            >
              {/* Icon + Award badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-neutral-800">
                  <Icon className={`h-6 w-6 text-${accent}-400`} />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-neutral-800">
                  <Award className="h-3 w-3 text-cyan-400" />
                  <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-medium">
                    Verified
                  </span>
                </div>
              </div>

              {/* Title + issuer */}
              <h3 className="text-white font-semibold text-lg leading-tight mb-2">
                {title}
              </h3>
              <p className="text-neutral-400 text-sm mb-1">{issuer}</p>
              <p className="text-neutral-500 text-xs font-mono mb-4">{period}</p>

              {/* Description */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                {description}
              </p>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 text-[11px]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Verify button (only if URL exists) */}
              {verifyUrl ? (
                <a
                  href={verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Verify Certificate
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 text-neutral-500 text-sm cursor-default">
                  <Award className="h-3.5 w-3.5" />
                  Certificate available on request
                </span>
              )}
            </motion.div>
          )
        )}
      </div>

      {/* ── Note ── */}
      <p className="text-center text-neutral-500 text-xs mt-10 max-w-lg mx-auto">
        Click &ldquo;Verify Certificate&rdquo; to view the official credential on
        Coursera&rsquo;s website.
      </p>
    </section>
  );
}