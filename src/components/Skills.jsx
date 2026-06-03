"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  SiReact, SiNextdotjs, SiMongodb, SiExpress, 
  SiTailwindcss, SiNodedotjs, SiJavascript,
  SiGit, SiFigma, SiVercel, SiNetlify, SiGithub
} from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend Mastery",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Better Auth", icon: FaShieldAlt, color: "#FF007A" },
    ]
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ]
  }
];

export default function Skills() {
  const container = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".skill-category-card");
    
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );

      const items = card.querySelectorAll(".skill-item");
      gsap.fromTo(items,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-8 bg-brand-black relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-4 text-center lg:text-left">Expertise</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white text-center lg:text-left">
            Technologies & <span className="gradient-text">Skills</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">
                {category.title}
              </h4>
              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item flex flex-col items-center gap-3 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 transition-all duration-300">
                      <skill.icon 
                        className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[150px] rounded-full"></div>
      </div>
    </section>
  );
}
