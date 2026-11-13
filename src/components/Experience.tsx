"use client";

import TextAnimation from "@/components/ui/staggerText";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

const jobs = [
  {
    role: "Office Assistant",
    company: "Kohat Cement Factory",
    period: "Jul 2025 – Aug 2026",
    description: "Provided clerical support to multiple departments, including filing, correspondence, and document handling. Coordinated staff schedules, prepared meeting materials, and helped create presentations for client engagement.",
    tags: ["Administration", "Scheduling", "Correspondence"],
  },
  {
    role: "Data Entry Operator",
    company: "Kohat Cement Factory",
    period: "May 2024 – Jun 2025",
    description: "Processed large volumes of operational data with high accuracy. Maintained digital records, improving access to information, and produced accurate data reports for office operations.",
    tags: ["Data Entry", "Excel", "Reporting"],
  },
  {
    role: "CCTV Operator / Surveillance Assistant",
    company: "Salman Bakers",
    period: "Aug 2023 – Dec 2023",
    description: "Monitored live CCTV/DVR feeds, logged incidents, and supported on-site security operations.",
    tags: ["CCTV / DVR", "Monitoring", "Reporting"],
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "BS Computer Science",
    org: "Preston University Kohat",
    period: "2021 – 2025",
    note: "Focus on software engineering, databases, and web development.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
      <div className="mb-14 text-center">
        <p className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-3">03 — Experience</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white"><TextAnimation divideBy="word" delay={0.1}>Where I&apos;ve Worked</TextAnimation></h2>
      </div>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-6"><Briefcase className="h-5 w-5 text-amber-500" /> Work Experience</h3>
          <div className="relative pl-6 border-l border-neutral-800 space-y-8">
            {jobs.map((job, i) => (
              <motion.div key={job.role + job.company} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.08 }} className="relative">
                {/* Fixed line below: bg-linear-to-br */}
<div className="absolute -left-8 top-2 h-3 w-3 rounded-full bg-linear-to-br from-amber-500 to-amber-700 ring-4 ring-[#0a0a0a]" />
                <div className="rounded-xl border border-neutral-800 bg-[#0a0a0a] p-5 hover:border-amber-500/40 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-white font-semibold text-base">{job.role}</h4>
                    <span className="text-xs text-neutral-500 font-mono">{job.period}</span>
                  </div>
                  <p className="flex items-center gap-2 text-amber-500 text-sm mb-3"><Building2 className="h-3.5 w-3.5" />{job.company}</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 text-xs">{tag}</span>))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-6"><GraduationCap className="h-5 w-5 text-violet-400" /> Education</h3>
          <div className="space-y-4">
            {education.map((e) => {
              const Icon = e.icon;
              return (
                <motion.div key={e.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="rounded-xl border border-neutral-800 bg-[#0a0a0a] p-5 hover:border-violet-400/40 transition-colors">
                  <div className="flex items-start gap-3">
                    {/* Fixed line below: bg-linear-to-br */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-violet-500/20 to-violet-500/10 border border-neutral-800 shrink-0"><Icon className="h-4 w-4 text-violet-400" /></div>
                    <div className="min-w-0">
                      <h4 className="text-white font-semibold text-sm">{e.title}</h4>
                      <p className="text-neutral-400 text-xs mt-0.5">{e.org} · {e.period}</p>
                      <p className="text-neutral-500 text-xs mt-2 leading-relaxed">{e.note}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}