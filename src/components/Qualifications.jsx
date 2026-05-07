"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    title: "B.A (Honors) in Islamic History and Culture",
    institution: "Dhaka Central University",
    duration: "2024 — Present (2nd Year)",
    description: "Focus: Cultural heritage, historical analysis, and academic research.",
    current: true
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Ispahani Degree College",
    duration: "2022 — 2023",
    description: "Group: Humanities. Successfully completed higher secondary education with a focus on core subjects.",
    current: false
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Pulia High School",
    duration: "2012 — 2021",
    description: "A decade-long foundational journey from primary to secondary education, concluding with the SSC examination.",
    current: false
  }
];

export default function Qualifications() {
  const container = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(".edu-item");
    
    items.forEach((item, i) => {
      gsap.fromTo(item, 
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-8 bg-brand-black relative overflow-hidden" id="qualifications">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-sm font-bold text-brand-purple tracking-[0.2em] uppercase mb-4">Journey</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white">
            Educational <span className="gradient-text">Qualifications</span>
          </h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 lg:ml-8 space-y-12 pb-8">
          {education.map((edu, idx) => (
            <div key={idx} className="edu-item relative pl-12 group">
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-brand-black flex items-center justify-center transition-all duration-300 ${edu.current ? 'bg-brand-accent scale-125 shadow-[0_0_15px_rgba(255,0,122,0.5)]' : 'bg-gray-700'}`}>
                {edu.current && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>}
              </div>

              <div className="glass-card p-8 rounded-[32px] border-white/5 group-hover:border-white/10 transition-all duration-500 hover:translate-x-2">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FaGraduationCap className="text-brand-accent text-xl" />
                      <span className="text-brand-accent font-bold text-sm uppercase tracking-widest">{edu.duration}</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-brand-accent transition-colors duration-300">
                      {edu.title}
                    </h4>
                    <p className="text-lg font-medium text-gray-300">{edu.institution}</p>
                  </div>
                  {edu.current && (
                    <span className="px-4 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent text-xs font-bold uppercase tracking-tighter">
                      In Progress
                    </span>
                  )}
                </div>
                <p className="text-gray-400 leading-relaxed max-w-3xl">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}
