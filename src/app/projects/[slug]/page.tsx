import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import { projectCaseStudies } from "@/data/projects";

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 15, params must be awaited
  const { slug } = await params;
  const project = projectCaseStudies.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07070b] text-neutral-200 pb-24">
      {/* Top Bar */}
      <div className="border-b border-neutral-800 bg-[#07070b]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/#projects" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-cyan-400 transition-colors font-mono">
            <ArrowLeft className="h-4 w-4" />
            cd ../projects
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pt-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            Case Study
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mb-8">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors">
              <Code className="h-4 w-4" />
              View Source Code
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-mono text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 mb-16">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-lg">01.</span> The Challenge
            </h2>
            <p className="text-neutral-300 leading-relaxed text-lg">{project.challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-lg">02.</span> The Solution
            </h2>
            <p className="text-neutral-300 leading-relaxed text-lg">{project.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-lg">03.</span> The Impact
            </h2>
            <p className="text-neutral-300 leading-relaxed text-lg">{project.impact}</p>
          </section>
        </div>
      </article>
    </main>
  );
}