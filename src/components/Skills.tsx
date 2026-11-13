"use client";

import TextAnimation from "@/components/ui/staggerText";
import { motion } from "framer-motion";
import { Code2, BarChart3, Briefcase } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Development & Tech",
    accent: "amber",
    skills: [
      { name: "Python", level: 5 },
      { name: "Django", level: 5 },
      { name: "SQL (PostgreSQL)", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "HTML / CSS", level: 4 },
      { name: "Git", level: 4 },
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    accent: "violet",
    skills: [
      { name: "Excel (Formulas/Exports)", level: 5 },
      { name: "Power BI", level: 4 },
      { name: "Data Entry & Accuracy", level: 5 },
      { name: "Logs & Documentation", level: 5 },
      { name: "SQL Reporting", level: 4 },
      { name: "Dashboards", level: 4 },
    ],
  },
  {
    icon: Briefcase,
    title: "Business & Admin",
    accent: "amber",
    skills: [
      { name: "Salesforce CRM Basics", level: 4 },
      { name: "B2B / B2C Sales Process", level: 4 },
      { name: "Accounting Support", level: 3 },
      { name: "Office Administration", level: 5 },
      { name: "Scheduling & Coordinating", level: 5 },
      { name: "CCTV / DVR Monitoring", level: 4 },
    ],
  },
];

const coreSkills = [
  "Python", "Django", "PostgreSQL", "SQL", "Excel", "Power BI", "DAX", 
  "Salesforce", "CRM", "Accounting Support", "JavaScript", "REST APIs", 
  "Git", "Data Entry", "Office Admin"
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function ProficiencyDots({ level, accent }: { level: number; accent: string }) {
  const filled = accent === "violet" ? "bg-violet-400" : "bg-amber-500";
  return (
    <div className="flex items-center gap-1 shrink-0">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`h-1.5 w-1.5 rounded-full ${i <= level ? filled : "bg-neutral-800"}`} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
      <div className="mb-16 text-center">
        <p className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-3">02 — Skills</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          <TextAnimation divideBy="word" delay={0.1}>What I Work With</TextAnimation>
        </h2>
        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
          A mix of backend development, data analysis, and practical administrative tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {categories.map(({ icon: Icon, title, accent, skills }, index) => {
          const isViolet = accent === "violet";
          return (
            <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.1 }} className={`group relative rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 ${isViolet ? "hover:border-violet-500/40" : "hover:border-amber-500/40"}`}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${isViolet ? "bg-violet-500/10 border-violet-500/20" : "bg-amber-500/10 border-amber-500/20"}`}>
                  <Icon className={`h-5 w-5 ${isViolet ? "text-violet-400" : "text-amber-500"}`} />
                </div>
                <h3 className="text-white font-semibold text-base leading-tight">{title}</h3>
              </div>
              <ul className="space-y-3.5">
                {skills.map(({ name, level }) => (
                  <li key={name} className="flex items-center justify-between gap-3">
                    <span className="text-neutral-200 text-sm truncate">{name}</span>
                    <ProficiencyDots level={level} accent={accent} />
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div>
        <p className="text-center text-neutral-500 text-xs uppercase tracking-widest mb-4">Core Competencies</p>
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {coreSkills.map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-neutral-800 bg-[#0a0a0a] text-neutral-300 text-sm hover:border-amber-500/50 hover:text-amber-500 transition-colors">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}