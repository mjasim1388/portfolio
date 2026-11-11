"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none bg-[#0a0a0a]">
      {/* Subtle industrial grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial vignette to fade the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a_100%)]" />
    </div>
  );
}