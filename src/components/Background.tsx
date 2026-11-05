"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[#07070b]" />

      {/* Animated gradient orbs */}
      <div className="orb orb-cyan" />
      <div className="orb orb-violet" />
      <div className="orb orb-fuchsia" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)",
        }}
      />

      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070b]" />

      <style jsx>{`
        .orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.35;
          will-change: transform;
          transform: translateZ(0); /* Forces GPU acceleration */
        }
        .orb-cyan {
          top: -15%;
          left: -10%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, #22d3ee 0%, transparent 70%);
          animation: float-a 22s ease-in-out infinite;
        }
        .orb-violet {
          top: 30%;
          right: -15%;
          width: 340px;
          height: 340px;
          background: radial-gradient(circle, #7c5cff 0%, transparent 70%);
          animation: float-b 28s ease-in-out infinite;
        }
        .orb-fuchsia {
          bottom: -20%;
          left: 30%;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, #e879f9 0%, transparent 70%);
          opacity: 0.25;
          animation: float-c 34s ease-in-out infinite;
        }
        @keyframes float-a {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(60px, 40px, 0) scale(1.1); }
        }
        @keyframes float-b {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(-50px, 50px, 0) scale(0.92); }
        }
        @keyframes float-c {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(40px, -60px, 0) scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .orb { animation: none; }
        }
      `}</style>
    </div>
  );
}