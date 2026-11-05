export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-[#07070b] pb-24">
      <div className="border-b border-neutral-800 bg-[#07070b]/80 h-16" />
      
      <div className="max-w-4xl mx-auto px-6 pt-16 animate-pulse">
        {/* Fake Label & Title */}
        <div className="h-4 bg-neutral-800 rounded w-24 mb-4" />
        <div className="h-12 bg-neutral-800 rounded w-2/3 mb-12" />

        {/* Fake Post Cards */}
        <div className="grid gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/60">
              <div className="flex gap-4 mb-4">
                <div className="h-3 bg-neutral-800 rounded w-24" />
                <div className="h-3 bg-neutral-800 rounded w-16" />
              </div>
              <div className="h-8 bg-neutral-800 rounded w-3/4 mb-4" />
              <div className="h-4 bg-neutral-800 rounded w-full mb-2" />
              <div className="h-4 bg-neutral-800 rounded w-5/6 mb-6" />
              <div className="h-4 bg-cyan-900/50 rounded w-32" />
            </div>
          ))}
        </div>

        {/* Terminal Loading Text */}
        <div className="mt-16 text-center">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase animate-pulse">
            {"> compiling_dev_log..."}
          </p>
        </div>
      </div>
    </main>
  );
}