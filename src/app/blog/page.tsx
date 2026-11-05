import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/posts";

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-[#07070b] text-neutral-200 pb-24">
      <div className="border-b border-neutral-800 bg-[#07070b]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-cyan-400 transition-colors font-mono">
            <ArrowLeft className="h-4 w-4" />
            cd ../home
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-16">
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Dev Log</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-12">Thoughts & Tutorials</h1>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-2xl border border-neutral-800 bg-neutral-950/60 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-neutral-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400">
                Read Post <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}