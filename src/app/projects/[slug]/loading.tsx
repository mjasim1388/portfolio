export default function ProjectLoading() {
  return (
    <main className="min-h-screen bg-[#07070b] pb-24">
      <div className="border-b border-neutral-800 bg-[#07070b]/80 h-16" />
      
      <div className="max-w-4xl mx-auto px-6 pt-16 animate-pulse">
        <div className="h-4 bg-neutral-800 rounded w-32 mb-6" />
        <div className="h-14 bg-neutral-800 rounded w-3/4 mb-6" />
        <div className="h-6 bg-neutral-800 rounded w-5/6 mb-10" />
        
        <div className="h-10 bg-neutral-800 rounded w-48 mb-8" />
        
        <div className="h-12 bg-neutral-900 rounded w-full flex gap-2 mb-16">
           <div className="h-8 bg-neutral-800 rounded-full w-24 mt-2 ml-2" />
           <div className="h-8 bg-neutral-800 rounded-full w-24 mt-2" />
        </div>

        <div className="aspect-video bg-neutral-900 rounded-2xl mb-16" />

        <div className="space-y-12">
           <div className="h-8 bg-neutral-800 rounded w-1/3 mb-4" />
           <div className="h-4 bg-neutral-800 rounded w-full mb-2" />
           <div className="h-4 bg-neutral-800 rounded w-full mb-2" />
           <div className="h-4 bg-neutral-800 rounded w-4/5" />
        </div>

        {/* Terminal Loading Text */}
        <div className="mt-16 text-center">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase animate-pulse">
            {"> fetching_case_study..."}
          </p>
        </div>
      </div>
    </main>
  );
}