"use client";

import TextAnimation from "@/components/ui/staggerText";
import { motion } from "framer-motion";
import { Rocket, FileText, MessageSquare } from "lucide-react";

const principles = [
  {
    icon: Rocket,
    title: "I ship working software",
    body: "Clean code matters, but a feature in users' hands beats a perfect branch that never ships. I aim for pragmatic, deliverable progress.",
    accent: "cyan",
  },
  {
    icon: FileText,
    title: "I document what I build",
    body: "Readable commit messages, clear READMEs, inline comments where the logic isn't obvious. Future-me and future-teammates both thank present-me.",
    accent: "violet",
  },
  {
    icon: MessageSquare,
    title: "I ask questions early",
    body: "Clarity beats guessing. I'd rather spend 10 minutes aligning on requirements than 3 days building the wrong thing.",
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

export default function HowIWork() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <div className="mb-12 text-center">
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
          Principles
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          <TextAnimation divideBy="word" delay={0.1}>
            How I Work
          </TextAnimation>
        </h2>
        <p className="text-neutral-400 mt-3 max-w-xl mx-auto text-sm">
          Three things I try to bring to every project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map(({ icon: Icon, title, body, accent }, i) => {
          const isViolet = accent === "violet";
          return (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 transition-all duration-300 hover:-translate-y-1 ${
                isViolet
                  ? "hover:border-violet-500/40"
                  : "hover:border-cyan-500/40"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-lg mb-5 border ${
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

              <h3 className="text-white font-semibold text-base mb-3">
                {title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{body}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}