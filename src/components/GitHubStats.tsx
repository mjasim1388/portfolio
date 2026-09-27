"use client";

import TextAnimation from "@/components/ui/staggerText";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const USERNAME = "mjasim1388";

const statsUrl = `https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&hide_border=true&count_private=true&include_all_commits=true&bg_color=0b0b12&title_color=22d3ee&icon_color=a855f7&text_color=d4d4d8&rank_icon=github`;

const languagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&hide_border=true&langs_count=6&bg_color=0b0b12&title_color=22d3ee&text_color=d4d4d8`;

export default function GitHubStats() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
      {/* ── Heading ── */}
      <div className="mb-12 text-center">
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
          Open Source
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          <TextAnimation divideBy="word" delay={0.1}>
            Activity on GitHub
          </TextAnimation>
        </h2>
        <p className="text-neutral-400 mt-3 max-w-xl mx-auto text-sm">
          Live stats from my public repositories and commit history.
        </p>
      </div>

      {/* ── Stats cards ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={statsUrl}
            alt="Muhammad Jasim's GitHub stats"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={languagesUrl}
            alt="Most used languages on GitHub"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* ── Visit profile CTA ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex justify-center"
      >
        <a
          href="https://github.com/mjasim1388"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-950/60 text-neutral-200 text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
        >
          <Code2 className="h-4 w-4" />
          Visit my GitHub profile
        </a>
      </motion.div>

      {/* ── Note ── */}
      <p className="text-center text-neutral-600 text-xs mt-6">
        Stats refresh every few hours. Powered by{" "}
        <span className="text-neutral-500">github-readme-stats</span>.
      </p>
    </section>
  );
}