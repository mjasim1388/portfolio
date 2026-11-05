"use client";

import TextAnimation from "@/components/ui/staggerText";
import { motion } from "framer-motion";
import { Code2, BarChart3, Wrench } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    accent: "cyan",
    skills: [
      { name: "Python", level: 5 },
      { name: "Django", level: 5 },
      { name: "SQL", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "HTML5", level: 4 },
      { name: "CSS3", level: 4 },
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Business",
    accent: "violet",
    skills: [
      { name: "Excel", level: 5 },
      { name: "Power BI & DAX", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "CRM Systems", level: 4 },
      { name: "Data Entry", level: 5 },
      { name: "Reporting", level: 5 },
    ],
  },
  {
    icon: Wrench,
    title: "Frontend & Tools",
    accent: "cyan",
    skills: [
      { name: "Bootstrap", level: 4 },
      { name: "Responsive Design", level: 4 },
      { name: "REST APIs", level: 4 },
      { name: "Fetch API", level: 4 },
      { name: "Git", level: 4 },
      { name: "Chart.js", level: 4 },
    ],
  },
];

const coreSkills = [
  "Python",
  "Django",
  "PostgreSQL",
  "SQL",
  "Excel",
  "Power BI",
  "DAX",
  "CRM",
  "JavaScript",
  "REST APIs",
  "Git",
  "Data Entry",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function ProficiencyDots({ level, accent }: { level: number; accent: string }) {
  const filled = accent === "violet" ? "bg-violet-400" : "bg-cyan-400";
  return (
    <div className="flex items-center gap-1 shrink-0">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i <= level ? filled : "bg-neutral-800"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <div className="mb-16 text-center">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {categories.map(
          ({ icon: Icon, title, accent, skills }, index) => {
            const isViolet = accent === "violet";
            return (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isViolet
                    ? "hover:border-violet-500/40 hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.35)]"
                    : "hover:border-cyan-500/40 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]"
                }`}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
                      isViolet
                        ? "bg-violet-500/10 border-violet-500/20"
                        : "bg-cyan-500/10 border-cyan-500/20"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isViolet ? "text-violet-400" : "text-cyan-400"
                      }`}
                    />
                  </div>
                  <h3 className="text-white font-semibold text-base leading-tight">
                    {title}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {skills.map(({ name, level }) => (
                    <li
                      key={name}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="text-neutral-200 text-sm truncate">
                        {name}
                      </span>
                      <ProficiencyDots level={level} accent={accent} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          }
        )}
      </div>

      <div>
        <p className="text-center text-neutral-500 text-xs uppercase tracking-widest mb-4">
          Core Competencies
        </p>
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {coreSkills.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950/60 text-neutral-300 text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}