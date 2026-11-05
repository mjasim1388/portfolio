import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
      <div className="border-b border-neutral-800 bg-[#07070b]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link href="/blog" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-cyan-400 transition-colors font-mono">
            <ArrowLeft className="h-4 w-4" />
            cd ../blog
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pt-16">
        <div className="mb-12 border-b border-neutral-800 pb-8">
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 mb-4">
            <span className="text-cyan-400">{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Markdown Renderer with custom styling */}
        <div className="prose prose-invert prose-cyan max-w-none">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-8 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="text-neutral-300 leading-relaxed mb-6 text-lg" {...props} />,
              li: ({node, ...props}) => <li className="text-neutral-300 mb-2" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6" {...props} />,
              strong: ({node, ...props}) => <strong className="text-cyan-400 font-semibold" {...props} />,
              code: ({node, ...props}) => <code className="bg-neutral-900 text-cyan-300 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}