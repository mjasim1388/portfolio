"use client";

import { Sparkles, BookOpen } from "lucide-react";

export default function Currently() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 -mt-6 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Currently */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-neutral-800">
            <Sparkles className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
              Currently
            </p>
            <p className="text-neutral-200 text-sm">
              Building data analytics dashboards and open to Data, Dev &amp;
              Admin roles.
            </p>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-neutral-800">
            <BookOpen className="h-5 w-5 text-violet-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
              Currently Learning 
            </p>
            <p className="text-neutral-200 text-sm">
  Pursuing professional data analytics training to expand my skill set and strengthen my career in data-driven roles.
</p>
          </div>
        </div>
      </div>
    </section>
  );
}