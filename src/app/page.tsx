import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Currently from "@/components/Currently";
import About from "@/components/About";
import GitHubStats from "@/components/GitHubStats";
import HowIWork from "@/components/HowIWork";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
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
        <Contact />
        <Footer />
      </div>
    </main>
  );
}