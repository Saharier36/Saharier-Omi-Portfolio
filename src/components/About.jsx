"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
} from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef();

  useGSAP(
    () => {
      // Mask reveal for heading
      gsap.fromTo(
        ".mask-text",
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 50 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          y: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".mask-text",
            start: "top 85%",
          },
        },
      );

      // Staggered cards reveal
      gsap.fromTo(
        ".pillar-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pillar-grid",
            start: "top 80%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-32 px-8 bg-brand-black relative"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-brand-accent"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
              The Purpose
            </span>
          </div>
          <h2 className="mask-text text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1]">
            Precision in every <span className="gradient-text">pixel</span>.<br />
            Logic in every <span className="gradient-text">line.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Narrative */}
          <div className="space-y-8 text-xl text-gray-400 leading-relaxed font-medium">
            <p className="pillar-card">
              I am Saharier Omi, a MERN Stack Developer based in Dhaka. I build
              high-performance web applications that bridge the gap between
              complex logic and seamless user experience.
            </p>
            <p className="pillar-card text-white">
              My philosophy is simple: write code that is as beautiful as the
              interface it powers.
            </p>
          </div>

          {/* Pillar Grid */}
          <div className="pillar-grid grid sm:grid-cols-2 gap-6">
            <div className="pillar-card glass-card p-8 rounded-3xl border-white/5 hover:border-brand-accent/30 transition-all duration-500 group">
              <HiOutlineCode className="text-3xl text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold text-lg mb-2">
                Architecture
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Scalable, maintainable, and modular code structures.
              </p>
            </div>
            <div className="pillar-card glass-card p-8 rounded-3xl border-white/5 hover:border-brand-purple/30 transition-all duration-500 group">
              <HiOutlineLightningBolt className="text-3xl text-brand-purple mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold text-lg mb-2">Speed</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Lightning-fast performance and optimized delivery.
              </p>
            </div>
            <div className="pillar-card glass-card p-8 rounded-3xl border-white/5 hover:border-brand-accent/30 transition-all duration-500 group sm:col-span-2">
              <div className="flex items-center gap-6">
                <HiOutlineShieldCheck className="text-3xl text-brand-accent group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">
                    Quality Assurance
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Ensuring every line of code meets modern industry standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
