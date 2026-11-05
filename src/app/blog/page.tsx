import Link from "next/link";
import { ArrowLeft, ArrowRight, PenLine } from "lucide-react";
import { blogPosts } from "@/data/posts";

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-[#07070b] text-neutral-200 pb-24">
      {/* Top Navigation */}
      <div className="border-b border-neutral-800 bg-[#07070b]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-cyan-400 transition-colors font-mono">
            <ArrowLeft className="h-4 w-4" />
            cd ../home
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-16">
        {/* Hero Section */}
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            Dev Log
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Thoughts & Tutorials
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            Hi, I'm Jasim. I write about building full-stack web applications with Django, 
            extracting insights with SQL and Power BI, and navigating the journey of a 
            junior developer. No fluff, just real engineering experiences.
          </p>
        </div>

        {/* Blog List */}
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-950/60 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.15)]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-4">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {post.category}
                </span>
                <span className="text-neutral-500">{post.date}</span>
                <span className="text-neutral-700">•</span>
                <span className="text-neutral-500">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                {post.title}
              </h2>
              
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400">
                Read Post <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State / Call to action */}
        <div className="mt-20 text-center border-t border-neutral-800 pt-10">
          <PenLine className="h-6 w-6 text-neutral-600 mx-auto mb-3" />
          <p className="text-neutral-500 text-sm">
            More thoughts coming soon. Building in public, one commit at a time.
          </p>
        </div>
      </div>
    </main>
  );
}