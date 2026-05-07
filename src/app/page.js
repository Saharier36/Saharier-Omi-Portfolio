import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualifications from "@/components/Qualifications";
import CaseStudies from "@/components/CaseStudies";
import Quotes from "@/components/Quotes";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-black text-white font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Qualifications />
      <CaseStudies />
      <Quotes />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
