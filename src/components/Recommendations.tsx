"use client";

import TextAnimation from "@/components/ui/staggerText";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const recommendations = [
  {
    text: "During his time at Kohat Cement, Jasim consistently demonstrated exceptional attention to detail. He took the initiative to streamline our manual data entry processes, saving the team hours of repetitive work every week. He is a fast learner and a highly reliable team member.",
    author: "Engr. Ahmed Khan",
    role: "Operations Manager",
    company: "Kohat Cement Factory",
  },
  // You can add a second recommendation here later
  // {
  //   text: "...",
  //   author: "...",
  //   role: "...",
  //   company: "...",
  // }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Recommendations() {
  return (
    <section
      id="recommendations"
      className="relative w-full max-w-4xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <div className="mb-14 text-center">
        <p className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-3">
          05 — Testimonials
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          <TextAnimation divideBy="word" delay={0.1}>
            Recommendations
          </TextAnimation>
        </h2>
      </div>

      <div className="grid gap-6">
        {recommendations.map((rec, i) => (
          <motion.div
            key={rec.author}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-2xl border border-neutral-800 bg-[#0a0a0a] p-8 sm:p-10 transition-all duration-300 hover:border-amber-500/30"
          >
            {/* Giant Quote Icon Background */}
            <Quote className="absolute top-6 right-8 h-20 w-20 text-neutral-800/30 -z-0 rotate-180" />

            <div className="relative z-10">
              <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed mb-8 italic">
                "{rec.text}"
              </p>
              
              <div className="flex items-center gap-4">
                {/* Initials Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-amber-500 font-bold text-lg">
                  {rec.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base">{rec.author}</h4>
                  <p className="text-neutral-500 text-sm">
                    {rec.role} · <span className="text-neutral-400">{rec.company}</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subtle amber top border accent */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}