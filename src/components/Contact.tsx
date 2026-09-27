"use client";

import { useState } from "react";
import TextAnimation from "@/components/ui/staggerText";
import SocialFlipButton, {
  type SocialItem,
} from "@/components/ui/social-flip-button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "jasimafridi1388@gmail.com",
    href: "mailto:jasimafridi1388@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 0949457",
    href: "tel:+923000949457",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Peshawar, Pakistan",
    href: "https://maps.google.com/?q=Peshawar,Pakistan",
    copyable: false,
  },
];

const socials: SocialItem[] = [
  {
    letter: "G",
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/mjasim1388",
  },
  {
    letter: "L",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/mjasim1388",
  },
  {
    letter: "E",
    icon: <FaEnvelope />,
    label: "Email",
    href: "mailto:jasimafridi1388@gmail.com",
  },
  {
    letter: "C",
    icon: <FaPhoneAlt />,
    label: "Call",
    href: "tel:+923000949457",
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

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-5xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <div className="mb-14 text-center">
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
          06 — Contact
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          <TextAnimation divideBy="word" delay={0.1}>
            Let&apos;s Work Together
          </TextAnimation>
        </h2>
        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
          Open to Data, Development, and Administration roles. The fastest way
          to reach me is email — I usually reply within a day.
        </p>
      </div>

      {/* ── Contact cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactItems.map(({ icon: Icon, label, value, href, copyable }, i) => (
          <motion.div
            key={label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950/70  p-6 hover:border-cyan-400/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-neutral-800">
                <Icon className="h-5 w-5 text-cyan-400" />
              </div>
              {copyable && (
                <button
                  onClick={() => handleCopy(value)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-neutral-900 text-neutral-400 hover:text-cyan-400"
                  aria-label={`Copy ${label}`}
                >
                  {copied === value ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
              {label}
            </p>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-neutral-200 text-sm break-all hover:text-cyan-400 transition-colors"
            >
              {value}
            </a>
          </motion.div>
        ))}
      </div>

      {/* ── Social flip buttons ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-12"
      >
        <p className="text-center text-neutral-500 text-xs uppercase tracking-widest mb-4">
          Or find me on
        </p>
        <SocialFlipButton
          items={socials}
          className="!p-0"
          frontClassName="!bg-neutral-950 !text-cyan-400 !border !border-neutral-800"
          backClassName="!bg-gradient-to-br !from-cyan-400 !to-violet-500 !text-black"
        />
      </motion.div>

      {/* ── Big CTA ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center"
      >
        <a
          href="mailto:jasimafridi1388@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:opacity-90 transition-opacity"
        >
          <Send className="h-4 w-4" />
          Send me an email
        </a>
      </motion.div>
    </section>
  );
}