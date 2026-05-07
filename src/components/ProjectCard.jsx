"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index, reverse }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-24 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Number */}
      <div className={`absolute -top-10 ${reverse ? "-left-10" : "-right-10"} text-[200px] font-black text-white/[0.03] select-none pointer-events-none hidden lg:block`}>
        0{index + 1}
      </div>

      <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        {/* Image Side */}
        <div className={`relative ${reverse ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
            <div className="aspect-video relative overflow-hidden">
              <Image 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110" 
                src={project.image} 
                fill
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-brand-accent/20 blur-[60px] rounded-[60px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Content Side */}
        <div className={`${reverse ? "lg:order-1" : "lg:order-2"} space-y-8`}>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-brand-accent transition-all duration-500 group-hover:w-20"></span>
              <span className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-accent">
                {project.category}
              </span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 transition-colors duration-500 group-hover:text-brand-accent">
              {project.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, i) => (
              <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-wider transition-colors duration-300 hover:border-brand-accent hover:text-white">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <motion.a 
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-sm font-bold uppercase transition-all shadow-xl hover:shadow-white/20" 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Project 
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover/btn:rotate-45">
                <FaExternalLinkAlt className="text-[10px]" />
              </div>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, borderColor: "#ffffff" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full text-sm font-bold uppercase transition-all text-white hover:bg-white/5" 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code <FaGithub className="text-lg transition-transform group-hover:rotate-12" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
