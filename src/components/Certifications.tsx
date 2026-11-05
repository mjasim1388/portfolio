"use client";

import TextAnimation from "@/components/ui/staggerText";
import { motion } from "framer-motion";
import { Award, Cloud, Handshake, BarChart4 } from "lucide-react";

const certifications = [
  {
    icon: BarChart4,
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft · Coursera",
    period: "Completed 2026", // <-- Updated to Completed
    description:
      "Completed comprehensive training in Power BI, covering data visualization, data modeling, DAX formulas, and enterprise reporting to drive business insights.", // <-- Updated description
    skills: ["Power BI", "DAX", "Data Modeling", "Visualization"],
    verifyUrl: null,
    accent: "cyan",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 Fundamentals Specialization",
    issuer: "Microsoft · Coursera",
    period: "Completed September 2026",
    description:
      "Covered Word, Excel, and PowerPoint — building practical proficiency in Microsoft's productivity suite for document management, spreadsheets, and presentations.",
    skills: ["Microsoft 365", "Excel", "Word", "PowerPoint", "Data Import/Export"],
    verifyUrl: null, 
    accent: "violet",
  },
  {
    icon: Handshake,
    title: "Customer Relationship Management (CRM)",
    issuer: "Coursera",
    period: "Completed 2026",
    description:
      "Learned CRM fundamentals, customer lifecycle management, sales pipeline optimization, and data-driven retention strategies to improve business operations.",
    skills: ["CRM", "Customer Retention", "Sales Pipeline", "Data Analysis"],
    verifyUrl: null, 
    accent: "cyan",
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
      className="relative w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >
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
          Verified credentials from Microsoft and Coursera.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map(
          (
            { icon: Icon, title, issuer, period, description, skills, verifyUrl, accent },
            i
          ) => {
            const isViolet = accent === "violet";
            return (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
                className={`group rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-sm p-6 transition-all duration-300 flex flex-col hover:-translate-y-1 ${
                  isViolet ? "hover:border-violet-400/40" : "hover:border-cyan-400/40"
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 ${
                    isViolet ? "bg-violet-500/10" : "bg-cyan-500/10"
                  }`}>
                    <Icon className={`h-6 w-6 ${isViolet ? "text-violet-400" : "text-cyan-400"}`} />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-neutral-800">
                    <Award className="h-3 w-3 text-cyan-400" />
                    <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-medium">
                      Verified
                    </span>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-base leading-tight mb-2">
                  {title}
                </h3>
                <p className="text-neutral-400 text-sm mb-1">{issuer}</p>
                <p className="text-neutral-500 text-xs font-mono mb-4">{period}</p>

                <p className="text-neutral-300 text-sm leading-relaxed mb-4 flex-1">
                  {description}
                </p>

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

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 text-neutral-500 text-xs cursor-default w-fit mt-auto">
                  <Award className="h-3.5 w-3.5" />
                  Available on request
                </span>
              </motion.div>
            );
          }
        )}
      </div>

      <p className="text-center text-neutral-500 text-xs mt-10 max-w-lg mx-auto">
        Original certificates and verification links can be provided upon request.
      </p>
    </section>
  );
}