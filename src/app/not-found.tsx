import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#07070b] px-6 overflow-hidden">
      {/* Orbs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-md text-center">
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
          404 — Not Found
        </p>
        <h1 className="text-6xl sm:text-7xl font-black bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent mb-4">
          Lost in space
        </h1>
        <p className="text-neutral-400 mb-10 leading-relaxed">
          The page you're looking for doesn't exist. It may have been moved or
          deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
        >
          ← Back to portfolio
        </Link>
      </div>
    </main>
  );
}