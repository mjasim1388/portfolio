'use client';

import React, { useState } from "react";
import { cn } from "@/lib/utils";

// ─── Simple letter badge icons (no brand SVGs needed) ───
const badge = (text: string, color: string) => (
  <div
    className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0"
    style={{
      backgroundColor: `${color}22`,
      color: color,
      border: `1px solid ${color}66`,
    }}
  >
    {text}
  </div>
);

export interface SolarSystemItem {
  id: string;
  label: string;
  color: string;
  svg: React.ReactNode;
}

export interface OrbitConfig {
  id: string;
  name: string;
  radiusClass: string;
  radiusPx: number;
  speed: number;
  items: SolarSystemItem[];
}

export interface SolarSystemProps extends React.HTMLAttributes<HTMLDivElement> {
  centerLogo?: string | React.ReactNode;
  centerLogoAlt?: string;
  orbits?: OrbitConfig[];
  isPaused?: boolean;
  speedMultiplier?: number;
}

const DEFAULT_ORBITS: OrbitConfig[] = [
  {
    id: "inner",
    name: "Core Stack",
    radiusClass: "var(--radius-inner)",
    radiusPx: 175,
    speed: 22,
    items: [
      { id: "python", label: "Python", color: "#3776AB", svg: badge("Py", "#3776AB") },
      { id: "django", label: "Django", color: "#0C4B33", svg: badge("Dj", "#0C4B33") },
      { id: "sql", label: "SQL", color: "#4479A1", svg: badge("SQL", "#4479A1") },
    ],
  },
  {
    id: "mid",
    name: "Data & Frontend",
    radiusClass: "var(--radius-mid)",
    radiusPx: 285,
    speed: 36,
    items: [
      { id: "javascript", label: "JavaScript", color: "#F7DF1E", svg: badge("JS", "#F7DF1E") },
      { id: "html", label: "HTML5", color: "#E34F26", svg: badge("H5", "#E34F26") },
      { id: "css", label: "CSS3", color: "#1572B6", svg: badge("C3", "#1572B6") },
      { id: "postgres", label: "PostgreSQL", color: "#4169E1", svg: badge("Pg", "#4169E1") },
    ],
  },
  {
    id: "outer",
    name: "Tools & Analytics",
    radiusClass: "var(--radius-outer)",
    radiusPx: 395,
    speed: 52,
    items: [
      { id: "excel", label: "Excel", color: "#217346", svg: badge("Xl", "#217346") },
      { id: "powerbi", label: "Power BI", color: "#F2C811", svg: badge("Bi", "#F2C811") },
      { id: "chartjs", label: "Chart.js", color: "#FF6384", svg: badge("Ch", "#FF6384") },
      { id: "bootstrap", label: "Bootstrap", color: "#7952B3", svg: badge("Bs", "#7952B3") },
      { id: "git", label: "Git", color: "#F05032", svg: badge("Gt", "#F05032") },
    ],
  },
];

export const SolarSystem = React.forwardRef<HTMLDivElement, SolarSystemProps>(
  (
    {
      centerLogo,
      centerLogoAlt = "Core",
      orbits = DEFAULT_ORBITS,
      isPaused = false,
      speedMultiplier = 1,
      className,
      ...props
    },
    ref
  ) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const dustItems = [
      { delay: "-4s", radius: "165px", color: "#22d3ee" },
      { delay: "-11s", radius: "260px", color: "#a855f7" },
      { delay: "-19s", radius: "340px", color: "#22d3ee" },
      { delay: "-28s", radius: "395px", color: "#e879f9" },
      { delay: "-7s", radius: "200px", color: "#7c5cff" },
      { delay: "-15s", radius: "365px", color: "#22d3ee" },
      { delay: "-23s", radius: "430px", color: "#a855f7" },
    ];

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-center justify-center w-full max-w-[940px] mx-auto h-[320px] md:h-[450px] perspective-[1200px] select-none overflow-visible",
          className
        )}
        {...props}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --radius-inner: 175px;
            --radius-mid: 285px;
            --radius-outer: 395px;
          }
          @media (max-width: 768px) {
            :root {
              --radius-inner: 100px;
              --radius-mid: 165px;
              --radius-outer: 230px;
            }
          }
          @media (max-width: 480px) {
            :root {
              --radius-inner: 70px;
              --radius-mid: 115px;
              --radius-outer: 160px;
            }
          }
          @keyframes custom-orbitMove {
            0%   { transform: translate(-50%, -50%) rotateZ(0deg) translateX(var(--orbit-radius)); }
            100% { transform: translate(-50%, -50%) rotateZ(-360deg) translateX(var(--orbit-radius)); }
          }
          @keyframes custom-billboardCancel {
            0%   { transform: translate(-50%, -50%) rotateZ(0deg) rotateY(10deg) rotateX(-65deg); }
            100% { transform: translate(-50%, -50%) rotateZ(360deg) rotateY(10deg) rotateX(-65deg); }
          }
          @keyframes custom-sun-pulse {
            0%   { transform: scale(0.9); opacity: 0.7; }
            100% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes custom-spin-clockwise {
            0%   { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
            100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(360deg); }
          }
          @keyframes custom-spin-counter {
            0%   { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
            100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(-360deg); }
          }
          .animate-custom-orbit {
            animation: custom-orbitMove var(--orbit-duration) linear infinite;
            animation-play-state: var(--orbit-play-state);
          }
          .animate-custom-billboard {
            animation: custom-billboardCancel var(--orbit-duration) linear infinite;
            animation-play-state: var(--orbit-play-state);
          }
          .animate-custom-sun-pulse { animation: custom-sun-pulse 4s ease-in-out infinite alternate; }
          .animate-custom-spin-cw  { animation: custom-spin-clockwise 20s linear infinite; }
          .animate-custom-spin-ccw { animation: custom-spin-counter 30s linear infinite; }

          .orbit-logo-card {
            position: absolute;
            left: 50%;
            top: 50%;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0.45rem 0.95rem;
            background: rgba(10, 10, 12, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 100px;
            font-weight: 600;
            color: #ffffff;
            white-space: nowrap;
            user-select: none;
            cursor: pointer;
            pointer-events: auto;
            transition: border-color 0.3s, color 0.3s, background 0.3s, box-shadow 0.3s, scale 0.3s;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          }
        `}} />

        {/* Tiltable orbit container */}
        <div
          className="absolute w-[360px] h-[360px] md:w-[940px] md:h-[940px] flex items-center justify-center"
          style={{
            transform: "rotateX(65deg) rotateY(-10deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Center core */}
          <div
            className="absolute w-[100px] h-[100px] md:w-[130px] md:h-[130px] flex items-center justify-center z-20 pointer-events-none"
            style={{
              transform: "rotateY(10deg) rotateX(-65deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full filter blur-md animate-custom-sun-pulse z-10 bg-cyan-500/25" />

            {centerLogo ? (
              typeof centerLogo === "string" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.35)] z-20 bg-zinc-950 object-cover relative"
                  src={centerLogo}
                  alt={centerLogoAlt}
                />
              ) : (
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.35)] z-20 bg-zinc-950 flex items-center justify-center relative">
                  {centerLogo}
                </div>
              )
            ) : (
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.35)] z-20 bg-zinc-950 flex items-center justify-center relative">
                <span className="text-2xl md:text-3xl font-black bg-gradient-to-br from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  MJ
                </span>
              </div>
            )}

            <div className="absolute w-[110px] h-[110px] md:w-[140px] md:h-[140px] rounded-full border border-dashed border-cyan-500/20 animate-custom-spin-cw pointer-events-none" />
            <div className="absolute w-[150px] h-[150px] md:w-[185px] md:h-[185px] rounded-full border border-dashed border-cyan-500/10 animate-custom-spin-ccw pointer-events-none" />
          </div>

          {/* Cosmic dust */}
          {dustItems.map((dust, idx) => (
            <div
              key={idx}
              className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full opacity-40 pointer-events-none animate-custom-orbit"
              style={{
                background: dust.color,
                boxShadow: `0 0 6px ${dust.color}`,
                animationDelay: dust.delay,
                animationPlayState: isPaused ? "paused" : "running",
                animationDuration: `${24 / speedMultiplier}s`,
                ["--orbit-radius" as never]: dust.radius,
                ["--orbit-duration" as never]: `${24 / speedMultiplier}s`,
                ["--orbit-play-state" as never]: isPaused ? "paused" : "running",
              }}
            />
          ))}

          {/* Orbits */}
          {orbits.map((orbit) => (
            <React.Fragment key={orbit.id}>
              <div
                className="absolute rounded-full border border-dashed border-zinc-700/60 pointer-events-none"
                style={{
                  width: `calc(2 * ${orbit.radiusClass})`,
                  height: `calc(2 * ${orbit.radiusClass})`,
                  boxShadow:
                    "inset 0 0 25px rgba(255, 255, 255, 0.01), 0 0 25px rgba(255, 255, 255, 0.01)",
                  ["--orbit-radius" as never]: orbit.radiusClass,
                }}
              />

              {orbit.items.map((item, idx, arr) => {
                const delayValue = -(orbit.speed / arr.length) * idx;
                const durationValue = orbit.speed / speedMultiplier;
                const isHovered = hoveredId === item.id;

                return (
                  <div
                    key={item.id}
                    className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none animate-custom-orbit"
                    style={{
                      animationDelay: `${delayValue}s`,
                      animationDuration: `${durationValue}s`,
                      animationPlayState: isPaused ? "paused" : "running",
                      ["--orbit-radius" as never]: orbit.radiusClass,
                      ["--orbit-duration" as never]: `${durationValue}s`,
                      ["--orbit-play-state" as never]: isPaused ? "paused" : "running",
                      zIndex: isHovered ? 30 : 10,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className="absolute right-0 top-1/2 h-[1.5px] origin-right -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-0"
                      style={{
                        width: orbit.radiusClass,
                        opacity: isHovered ? 1 : 0,
                        background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.15) 20%, ${item.color} 80%, ${item.color} 100%)`,
                        boxShadow: `0 0 8px ${item.color}, 0 0 16px ${item.color}40`,
                      }}
                    />

                    <div
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="orbit-logo-card animate-custom-billboard"
                      style={{
                        animationDelay: `${delayValue}s`,
                        animationDuration: `${durationValue}s`,
                        animationPlayState: isPaused ? "paused" : "running",
                        borderColor: isHovered ? item.color : undefined,
                        boxShadow: isHovered
                          ? `0 0 20px rgba(0, 0, 0, 0.6), 0 0 15px ${item.color}35`
                          : undefined,
                        scale: isHovered ? 1.05 : 1,
                        ["--orbit-duration" as never]: `${durationValue}s`,
                        ["--orbit-play-state" as never]: isPaused ? "paused" : "running",
                      }}
                    >
                      <div
                        className="transition-transform duration-300"
                        style={{
                          transform: isHovered ? "scale(1.1)" : "scale(1)",
                          color: item.color,
                        }}
                      >
                        {item.svg}
                      </div>
                      <span className="text-[11px] md:text-[13px] tracking-tight">
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
);

SolarSystem.displayName = "SolarSystem";

export default SolarSystem;