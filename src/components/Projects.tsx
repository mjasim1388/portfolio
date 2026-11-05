"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // <-- Added Next.js Image
import TextAnimation from "@/components/ui/staggerText";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Database,
  Shield,
  BarChart3,
  Users,
  Package,
  Bell,
  FileCheck2,
  GraduationCap,
  Lock,
  LineChart,
  Upload,
  Layers,
  Globe,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.66.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1.01 1.72 2.64 1.22 3.28.93.1-.73.4-1.22.72-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .94-.3 3.08 1.16.89-.25 1.85-.37 2.8-.37.95 0 1.91.13 2.8.37 2.14-1.46 3.08-1.16 3.08-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.27-5.14 5.55.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.78.54 4.46-1.49 7.68-5.69 7.68-10.66C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  );
}

// ── Coal Mining ───────────────────────────────────────────────
const coalScreenshots = [
  { src: "/coal-dashboard.png", label: "Dashboard" },
  { src: "/coal-employees.png", label: "Employees" },
  { src: "/coal-production.png", label: "Production" },
  { src: "/coal_payroll.png", label: "Payroll" },
];

const coalFeatures = [
  { icon: Users, text: "Employee Management" },
  { icon: BarChart3, text: "Production Tracking" },
  { icon: FileCheck2, text: "Attendance (Photo)" },
  { icon: Package, text: "Inventory & Sales" },
  { icon: Database, text: "Payroll & Backups" },
  { icon: Bell, text: "Notifications" },
  { icon: Shield, text: "RBAC (4 roles)" },
  { icon: CheckCircle2, text: "Approvals Workflow" },
];

const coalStack = [
  "Django",
  "Python",
  "PostgreSQL",
  "Chart.js",
  "Bootstrap",
  "REST APIs",
  "RBAC",
];

// ── Other projects ────────────────────────────────────────────
const otherProjects = [
  {
    id: "schoolpulse",
    monogram: "SP",
    gradient: "from-violet-500/30 via-fuchsia-500/20 to-purple-500/10",
    accent: "#a855f7",
    title: "SchoolPulse",
    subtitle: "School Management SaaS",
    description:
      "A modern school management platform that centralizes student records, attendance, staff, and analytics into one friendly, animated dashboard for admins, teachers, and parents.",
    screenshots: [
      { src: "/schoolpulse-login.png", label: "Login" },
      { src: "/schoolpulse-dashboard.png", label: "Dashboard" },
      { src: "/schoolpulse-analytics.png", label: "Analytics" },
    ],
    features: [
      { icon: GraduationCap, text: "Role-based dashboards (4 roles)" },
      { icon: LineChart, text: "Real-time Plotly analytics" },
      { icon: Lock, text: "bcrypt-secured authentication" },
      { icon: Layers, text: "Cloud PostgreSQL via Supabase" },
    ],
    stack: ["Python", "Streamlit", "Supabase", "PostgreSQL", "SQLAlchemy", "Plotly"],
    github: "https://github.com/mjasim1388/schoolpulse",
    live: null,
  },
  {
    id: "ecommerce-analytics",
    monogram: "EA",
    gradient: "from-cyan-500/30 via-blue-500/20 to-teal-500/10",
    accent: "#22d3ee",
    title: "E-commerce Sales Analytics",
    subtitle: "End-to-End Data Platform",
    description:
      "An analytics platform processing 100K+ orders (~450K rows) from the Brazilian Olist dataset, turning raw data into business insights through an interactive dashboard with custom CSV upload support.",
    screenshots: [
      { src: "/ecommerce-dashboard.png", label: "Dashboard" },
      { src: "/ecommerce-sql.png", label: "SQL Analysis" },
      { src: "/ecommerce-upload.png", label: "CSV Upload" },
    ],
    features: [
      { icon: Database, text: "6 production-grade SQL analyses" },
      { icon: BarChart3, text: "Interactive Plotly dashboards" },
      { icon: Upload, text: "Custom CSV upload + auto-mapping" },
      { icon: Globe, text: "Live on Streamlit Cloud" },
    ],
    stack: ["Python", "PostgreSQL", "Streamlit", "Plotly", "pandas", "SQLAlchemy"],
    github: "https://github.com/mjasim1388/ecommerce-analytics",
    live: "https://ecommerce-analytics-mjasim.streamlit.app/",
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

// ── Screenshot gallery (main image + thumbnail strip) ─────────
function Gallery({
  screenshots,
  active,
  onSelect,
  accent,
}: {
  screenshots: { src: string; label: string }[];
  active: number;
  onSelect: (i: number) => void;
  accent: string;
}) {
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-black aspect-video mb-3">
        <Image
          src={screenshots[active].src}
          alt={screenshots[active].label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {screenshots.length > 1 && (
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${screenshots.length}, minmax(0, 1fr))` }}
        >
          {screenshots.map((s, i) => (
            <button
              key={s.src}
              onClick={() => onSelect(i)}
              className={`relative rounded-lg overflow-hidden border-2 aspect-video transition-all ${
                active === i
                  ? "opacity-100"
                  : "border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-700"
              }`}
              style={{ borderColor: active === i ? accent : undefined }}
              aria-label={`Show ${s.label} screenshot`}
            >
              <Image
                src={s.src}
                alt={s.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 150px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Small project card (SchoolPulse, E-commerce) ─────────────
function OtherProjectCard({
  project,
  index,
}: {
  project: (typeof otherProjects)[number];
  index: number;
}) {
  const [active, setActive] = useState(0);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5 flex flex-col hover:border-neutral-700 transition-colors"
    >
      {/* Gallery */}
      <div className="mb-5">
        <Gallery
          screenshots={project.screenshots}
          active={active}
          onSelect={setActive}
          accent={project.accent}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="mb-4">
<h3 className="text-white font-semibold text-lg leading-tight mb-1 hover:text-cyan-400 transition-colors">
  <Link href={`/projects/${project.id}`}>{project.title}</Link>
</h3>
          <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider">
            {project.subtitle}
          </p>
        </div>

        <p className="text-neutral-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className="space-y-2 mb-5">
          {project.features.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-2 text-neutral-300 text-xs"
            >
              <Icon
                className="h-3.5 w-3.5 shrink-0 mt-0.5"
                style={{ color: project.accent }}
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-neutral-800 text-neutral-200 text-xs font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              View Code
            </a>
          )}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-neutral-800 text-neutral-500 text-xs cursor-default">
              <ExternalLink className="h-3.5 w-3.5" />
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────
export default function Projects() {
  const [coalActive, setCoalActive] = useState(0);

  return (
    <section
      id="projects"
      className="relative w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <div className="mb-14 text-center">
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
          04 — Projects
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          <TextAnimation divideBy="word" delay={0.1}>
            Featured Work
          </TextAnimation>
        </h2>
        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
          Three end-to-end projects — from Django operations systems to
          Streamlit data platforms, all built solo.
        </p>
      </div>

      {/* ═══ FLAGSHIP — Coal Mining ═══ */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="rounded-2xl border border-neutral-800 bg-neutral-950/70 overflow-hidden mb-10"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-neutral-800">
            <Gallery
              screenshots={coalScreenshots}
              active={coalActive}
              onSelect={setCoalActive}
              accent="#22d3ee"
            />
          </div>

          <div className="p-6 lg:p-8 flex flex-col">
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
                  ⭐ Flagship
                </span>
                <span className="px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-medium">
                  Full-Stack
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800/60 border border-neutral-700 text-neutral-400 text-xs font-medium">
                  Solo
                </span>
              </div>
<h3 className="text-white font-bold text-2xl mb-2 hover:text-cyan-400 transition-colors">
  <Link href="/projects/coal-mining">Coal Mining Management System</Link>
</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                A full-stack Django web application designed to digitize mining
                operations — from employee records to production tracking,
                payroll, inventory, and approvals, all behind role-based access
                control.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {coalFeatures.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-neutral-300 text-xs"
                >
                  <Icon className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {coalStack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-300 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              <a
                href="https://github.com/mjasim1388/coal-mining-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <GithubIcon className="h-4 w-4" />
                View Code
              </a>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 text-neutral-400 text-sm cursor-default">
                <ExternalLink className="h-4 w-4" />
                Demo on request
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ Other projects ═══ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherProjects.map((project, i) => (
          <OtherProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <p className="text-center text-neutral-500 text-xs mt-10 max-w-lg mx-auto">
        Coal Mining is not publicly deployed — screenshots show it running
        locally. The other two projects link to their live demos and source
        code.
      </p>
    </section>
  );
}