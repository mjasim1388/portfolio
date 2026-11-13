"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Activity, Database, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Hero() {
  // Simulate live data ticking
  const [tons, setTons] = useState(1420.50);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTons(prev => prev + (Math.random() * 0.5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-12">
      {/* Global keyframes for the button shimmer effect */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ── Left: Text ── */}
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-mono tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              Systems Operational
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              I turn <span className="text-neutral-500 line-through decoration-neutral-700">paperwork</span> into <span className="text-amber-500">dashboards.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed">
              I specialize in building robust <span className="text-white font-medium">POS systems, management software, and data dashboards</span>. By leveraging AI in my workflow, I ship faster and build smarter systems that automate operations and turn raw data into clear business insights.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Primary Button */}
              <a 
                href="#projects" 
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-colors cursor-pointer"
              >
                View Systems <ArrowRight className="h-4 w-4" />
              </a>
              
              {/* ── Animated VengeanceUI-Style Command Button ── */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.dispatchEvent(new Event("open-command-palette"))}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0a0a0a] text-neutral-300 font-medium text-sm border border-neutral-800 hover:border-amber-500/50 hover:text-white transition-all overflow-hidden cursor-pointer shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)]"
              >
                {/* Shimmer Effect Overlay */}
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-amber-500/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />

                <Terminal className="h-4 w-4 text-amber-500 group-hover:animate-pulse transition-colors" /> 
                <span className="relative z-10">Command Menu</span> 
                <kbd className="relative z-10 ml-1 font-mono bg-neutral-900 border border-neutral-700/50 px-1.5 py-0.5 rounded text-[10px] text-neutral-400 group-hover:text-amber-400 group-hover:border-amber-500/50 transition-colors">⌘K</kbd> 
              </motion.button>
            </motion.div>
          </div>

          {/* ── Right: Live Ops Panel ── */}
          <motion.div variants={fadeUp} className="relative">
            {/* Glow behind panel */}
            <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full" />
            
            <div className="relative rounded-xl border border-neutral-800 bg-[#0a0a0a] shadow-2xl overflow-hidden">
              {/* Panel Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-neutral-500 tracking-wider">
                  COAL_MINING_OPS // LIVE
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-6 space-y-6">
                {/* Metric 1 */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                    <span className="flex items-center gap-1.5"><Activity className="h-3 w-3" /> DAILY_PRODUCTION</span>
                    <span className="text-green-400">+2.4%</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white font-mono">{tons.toFixed(2)}</span>
                    <span className="text-sm text-neutral-500 font-mono">TONS</span>
                  </div>
                  {/* Fake Sparkline chart */}
                  <div className="h-10 mt-3 flex items-end gap-1">
                    {[40, 70, 45, 90, 65, 85, 100, 75, 95, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-amber-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Metric 2 */}
                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                    <div className="text-[10px] font-mono text-neutral-500 mb-1 flex items-center gap-1"><Database className="h-3 w-3" /> PAYROLL</div>
                    <div className="text-sm font-semibold text-white">Verified</div>
                  </div>
                  {/* Metric 3 */}
                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                    <div className="text-[10px] font-mono text-neutral-500 mb-1 flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> RBAC_ACCESS</div>
                    <div className="text-sm font-semibold text-white">4 Roles Active</div>
                  </div>
                </div>

                {/* Terminal log */}
                <div className="text-[10px] font-mono text-neutral-500 bg-black p-3 rounded-md border border-neutral-800">
                  <p><span className="text-amber-500">$</span> system.status --all</p>
                  <p className="text-green-400">✓ Attendance synced (142 photos)</p>
                  <p className="text-green-400">✓ Payroll calculated (0 errors)</p>
                  <p className="text-amber-500 animate-pulse">_</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}