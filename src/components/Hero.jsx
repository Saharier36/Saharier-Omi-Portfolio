"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import heroImg from "@/assets/file_00000000f074720bb70468b1c4a5bc61.png";
import { HiOutlineChatAlt2, HiOutlineDownload } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef();
  const headingRef = useRef();
  const photoRef = useRef();
  const lenis = useLenis();

  const techStack = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Better Auth", icon: FaShieldAlt, color: "#FF007A" },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.5,
        },
      );

      gsap.fromTo(
        photoRef.current,
        { scale: 0.95, opacity: 0, x: 50 },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.3,
        },
      );

      // Location card parallax
      gsap.to(".location-card", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".location-card",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax background
      const moveBackground = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 50;
        const yPos = (clientY / window.innerHeight - 0.5) * 50;
        gsap.to(".bg-parallax", {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", moveBackground);
      return () => window.removeEventListener("mousemove", moveBackground);
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen flex items-center pt-34 pb-20 px-8 bg-brand-black overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="bg-parallax absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 blur-[180px] rounded-full -z-10 animate-pulse"></div>
      <div className="bg-parallax absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/5 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-12">
          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-max">
            <span className="w-2 h-2 shrink-0 rounded-full bg-brand-accent animate-ping"></span>
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 whitespace-nowrap">
              Available for Opportunities
            </span>
          </div>

          <div ref={headingRef}>
            <h1 className="hero-reveal text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              Crafting <span className="gradient-text">Digital</span>
              <br />
              Excellence.
            </h1>
            <p className="hero-reveal text-xl md:text-2xl text-gray-400 mt-8 max-w-xl leading-relaxed">
              I am <span className="text-white font-bold">Saharier Omi</span>, a
              specialized MERN Stack Developer building high-performance,
              scalable web applications with precision and modern architecture.
            </p>
          </div>

          <div className="hero-reveal flex flex-wrap gap-6 pt-4">
            <button
              onClick={() => {
                if (lenis) lenis.scrollTo("#contact", { duration: 2 });
                else window.location.hash = "#contact";
              }}
              onMouseMove={(e) => {
                const { clientX, clientY, currentTarget } = e;
                const { left, top, width, height } =
                  currentTarget.getBoundingClientRect();
                const x = (clientX - (left + width / 2)) * 0.2;
                const y = (clientY - (top + height / 2)) * 0.2;
                gsap.to(currentTarget, { x, y, duration: 0.3 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  x: 0,
                  y: 0,
                  duration: 0.5,
                  ease: "elastic.out(1, 0.3)",
                });
              }}
              className="group relative px-10 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-all shadow-2xl flex items-center gap-2"
            >
              <HiOutlineChatAlt2 className="text-lg pointer-events-none group-hover:scale-110 transition-transform" />
              <span className="relative z-10 pointer-events-none">
                Let's Collaborate
              </span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                →
              </span>
            </button>
            <a
              href="/Golam_Saharier_Omi_Resume.pdf"
              download="Golam_Saharier_Omi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => {
                const { clientX, clientY, currentTarget } = e;
                const { left, top, width, height } =
                  currentTarget.getBoundingClientRect();
                const x = (clientX - (left + width / 2)) * 0.2;
                const y = (clientY - (top + height / 2)) * 0.2;
                gsap.to(currentTarget, { x, y, duration: 0.3 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  x: 0,
                  y: 0,
                  duration: 0.5,
                  ease: "elastic.out(1, 0.3)",
                });
              }}
              className="px-10 py-5 rounded-2xl border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <HiOutlineDownload className="text-lg group-hover:scale-110 transition-transform" />
              Download CV
            </a>
          </div>

          {/* Tech Stack Subtle */}
          <div className="hero-reveal pt-10">
            <p className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-600 mb-6">
              Expertise in
            </p>
            <div className="flex flex-wrap gap-5">
              {techStack.map((tech, i) => (
                <div key={i} className="group relative" title={tech.name}>
                  <tech.icon className="w-7 h-7 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-accent group-hover:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div ref={photoRef} className="relative z-10 group">
            <div className="relative glass-card p-4 rounded-[48px] border-white/10 shadow-2xl overflow-hidden">
              <div className="aspect-[4/5] relative rounded-[36px] overflow-hidden bg-gray-900 shadow-inner">
                <Image
                  alt="Saharier Omi"
                  className="object-cover w-full h-full scale-105 group-hover:scale-110 transition duration-1000"
                  src={heroImg}
                  priority
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-10 right-10 glass-card px-6 py-3 rounded-2xl backdrop-blur-3xl border-white/10">
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase font-bold text-brand-accent tracking-widest mb-1">
                    Status
                  </span>
                  <span className="text-xs font-black text-white">
                    Full-Stack Dev
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Detail */}
            <div className="location-card absolute -bottom-6 -left-6 glass-card p-8 rounded-[32px] border-white/10 backdrop-blur-3xl hidden md:block">
              <p className="text-[10px] uppercase font-bold text-brand-accent mb-1 tracking-widest">
                Currently Based
              </p>
              <p className="text-sm font-black text-white">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css if not already there
// @keyframes bounce-slow {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
// }
