import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "@/data/posts";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07070b] text-neutral-200 pb-24">
      {/* Top Bar */}
      <div className="border-b border-neutral-800 bg-[#07070b]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link href="/blog" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-cyan-400 transition-colors font-mono">
            <ArrowLeft className="h-4 w-4" />
            cd ../blog
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pt-16">
        {/* Article Header */}
        <div className="mb-12 border-b border-neutral-800 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-6">
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-neutral-500">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="text-neutral-500">{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.15] mb-4">
            {post.title}
          </h1>
        </div>

        {/* Markdown Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white mt-12 mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-10 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="text-neutral-300 leading-relaxed mb-6 text-[17px]" {...props} />,
              li: ({node, ...props}) => <li className="text-neutral-300 mb-2 text-[17px]" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
              strong: ({node, ...props}) => <strong className="text-cyan-400 font-semibold" {...props} />,
              code: ({node, ...props}) => <code className="bg-neutral-900 border border-neutral-800 text-cyan-300 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* About the Author Footer */}
        <div className="mt-20 pt-10 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl bg-neutral-950/60 border border-neutral-800">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-800 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpeg" alt="Muhammad Jasim" className="object-cover w-full h-full" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Written by Muhammad Jasim</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                CS Graduate and Full-Stack Developer based in Peshawar, Pakistan. I specialize in building Django applications and extracting business insights with SQL and Power BI.
              </p>
              <Link href="/#contact" className="text-cyan-400 text-sm font-semibold hover:underline">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}