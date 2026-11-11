import dynamic from "next/dynamic";
import Background from "@/components/Background";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Currently = dynamic(() => import("@/components/Currently"));
const About = dynamic(() => import("@/components/About"));
const GitHubStats = dynamic(() => import("@/components/GitHubStats"));
const HowIWork = dynamic(() => import("@/components/HowIWork"));
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Recommendations = dynamic(() => import("@/components/Recommendations")); // <-- Imported
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <CommandPalette />
      <Background />
      
      <div className="relative z-10">
        <Navbar />
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>
        <Currently />
        <About />
        <GitHubStats />
        <HowIWork />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Recommendations /> {/* <-- Added here */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
}