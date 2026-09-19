"use client";

import TextAnimation from "@/components/ui/staggerText";
import { GlowBorderCard } from "@/components/ui/glow-border-card";
import { Code2, BarChart3, Wrench } from "lucide-react";
import SolarSystem from "@/components/ui/solar-system";
const categories = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    accent: "text-cyan-400",
    skills: ["Python", "Django", "SQL", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    accent: "text-violet-400",
    skills: [
      "Excel",
      "Power BI",
      "PostgreSQL",
      "Data Entry",
      "Reporting",
      "Chart.js",
    ],
  },
  {
    icon: Wrench,
    title: "Frontend & Tools",
    accent: "text-cyan-400",
    skills: [
      "Bootstrap",
      "Responsive Design",
      "REST APIs",
      "Fetch API",
      "Git",
      "RBAC",
    ],
  },
];

const extras = [
  "Office Administration",
  "Scheduling",
  "CCTV / DVR Systems",
  "Power BI",
  "PostgreSQL",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-32"
    >
      <div className="mb-14 text-center">
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
          02 — Skills
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          <TextAnimation divideBy="word" delay={0.1}>
            What I Work With
          </TextAnimation>
        </h2>
        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
          A mix of backend development, data analysis, and the practical tools
          I use to build software that solves real problems.
        </p>
      </div>

      {/* ── Solar system visualization ── */}
<div className="mb-8">
  <SolarSystem centerLogo="/profile.jpeg" centerLogoAlt="Muhammad Jasim" />
</div>

{/* ── "Browse by category" label ── */}
<p className="text-center text-neutral-500 text-xs uppercase tracking-widest mb-8">
  Or browse by category
</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        {categories.map(({ icon: Icon, title, accent, skills }) => (
          <div key={title} className="flex justify-center w-full">
            <GlowBorderCard
              className="overflow-visible bg-transparent dark:bg-transparent"
              width="100%"
              height="400px"
              aspectRatio="auto"
              borderRadius="1.25rem"
              animationDuration={8}
              colorPreset="aurora"
              borderWidth="0.35em"
              blurAmount="0.9em"
              inset="-1.2em"
            >
              {/* Solid dark layer covers the glow inside the card */}
              <div className="relative -m-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] rounded-[1.25rem] bg-[#0b0b12] p-6 flex flex-col text-left">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-neutral-800">
                    <Icon className={`h-5 w-5 ${accent}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-neutral-200 text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowBorderCard>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {extras.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950/80 text-neutral-200 text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-colors backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}