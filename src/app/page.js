import { Navbar, Footer } from "@/components/global";
import {
  Hero,
  Marquee,
  About,
  Skills,
  Qualifications,
  CaseStudies,
  Quotes,
  Stats,
  Contact,
} from "@/components/sections";

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
