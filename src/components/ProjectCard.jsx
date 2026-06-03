"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Desktop: hover events
  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  // Mobile: tap toggles flip (prevent link clicks from toggling)
  const handleClick = (e) => {
    // If the back face is already showing and user clicks a link, let it through
    if (isFlipped) return;
    e.preventDefault();
    setIsFlipped(true);
  };

  // Tap outside / second tap collapses card on mobile
  const handleBackClick = (e) => {
    // Only collapse if user didn't click a link
    if (e.target.tagName === "A") return;
    setIsFlipped(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="perspective-1000 aspect-[3/4] md:aspect-square w-full relative cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden glass-card border-white/5 shadow-2xl"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <Image
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700"
            src={project.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
            <span className="text-[9px] uppercase font-black tracking-[0.25em] text-brand-accent mb-2">
              {project.category}
            </span>
            <h4 className="text-2xl font-black text-white leading-tight">
              {project.title.split(" — ")[0]}
            </h4>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-4 flex items-center gap-1.5">
              {/* Show different hint for touch vs pointer devices */}
              <span className="hidden md:inline">Hover to flip →</span>
              <span className="inline md:hidden">Tap to flip →</span>
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden glass-card border-white/10 bg-brand-black/95 flex flex-col p-5 md:p-8 justify-between shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          onClick={handleBackClick}
        >
          <div className="space-y-2 md:space-y-4">
            <div className="space-y-1">
              <span className="text-[8px] uppercase font-black tracking-[0.25em] text-brand-accent block">
                {project.category}
              </span>
              <h4 className="text-xl font-black text-white leading-tight">
                {project.title}
              </h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 md:line-clamp-none">
              {project.description}
            </p>
          </div>

          <div className="space-y-3 md:space-y-6">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-[8px] font-bold text-gray-400 uppercase tracking-wider hover:border-brand-accent/30 hover:text-white transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a
                className="flex-grow flex items-center justify-center gap-1.5 py-2.5 bg-white text-black rounded-xl text-[10px] font-bold uppercase transition-all shadow-md hover:bg-brand-accent hover:text-white"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <FaExternalLinkAlt className="text-[8px]" />
              </a>
              <a
                className="flex-grow flex items-center justify-center gap-1.5 py-2.5 border border-white/10 rounded-xl text-[10px] font-bold uppercase transition-all text-white hover:bg-white/5"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code <FaGithub className="text-xs" />
              </a>
            </div>

            {/* Mobile close hint */}
            <p className="text-center text-[8px] text-gray-600 font-bold uppercase tracking-wider md:hidden">
              Tap card to close
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
