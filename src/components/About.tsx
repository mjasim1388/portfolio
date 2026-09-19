"use client";

import TextAnimation from "@/components/ui/staggerText";
import { MapPin, Mail, Phone, Languages, GraduationCap } from "lucide-react";

const info = [
  { icon: MapPin, label: "Location", value: "Peshawar, Pakistan" },
  { icon: Mail, label: "Email", value: "jasimafridi1388@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 300 0949457" },
  { icon: Languages, label: "Languages", value: "English · Urdu · Pashto" },
  {
    icon: GraduationCap,
    label: "Degree",
    value: "BS Computer Science — Preston University Kohat (2021–2025)",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full max-w-5xl mx-auto px-6 py-24"
    >
      {/* ── Heading ── */}
      <div className="mb-12">
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
          01 — About
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          <TextAnimation divideBy="word" delay={0.1}>
            About Me
          </TextAnimation>
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-10">
        {/* ── Bio paragraphs ── */}
        <div className="md:col-span-3 space-y-5 text-neutral-300 leading-relaxed">
          <p>
            I&apos;m a Computer Science graduate from Peshawar, Pakistan, with a
            strong foundation in full-stack web development. My work sits at the
            intersection of backend logic, data analysis, and practical software
            that solves real operational problems.
          </p>
          <p>
            My flagship project is a{" "}
            <span className="text-white font-semibold">
              Coal Mining Management System
            </span>{" "}
            — a full-stack Django application built to handle the day-to-day
            operations of a mining company. It covers employees, production,
            attendance with photo verification, payroll, inventory, sales,
            customers, notifications, backups, and an approvals workflow, all
            secured behind Role-Based Access Control.
          </p>
          <p>
            Alongside development, I&apos;ve worked in administrative and
            data-focused roles — from data entry to office assistance at Kohat
            Cement Factory — where I built hands-on experience with Excel,
            Power BI, reporting, scheduling, and working with real business
            data.
          </p>
          <p>
            I&apos;m currently open to roles in{" "}
            <span className="text-cyan-400">Data</span>,{" "}
            <span className="text-violet-400">Development</span>, and{" "}
            <span className="text-cyan-400">Administration</span> — wherever I
            can bring a mix of technical skill and operational understanding.
          </p>
        </div>

        {/* ── Info card ── */}
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 backdrop-blur-sm">
            <h3 className="text-white font-semibold mb-5 text-lg">
              Quick Info
            </h3>
            <ul className="space-y-4">
              {info.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-neutral-800">
                    <Icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-neutral-200 text-sm break-words">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}