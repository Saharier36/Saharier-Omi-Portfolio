"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const techQuotes = [
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    role: "Co-founder of Apple Inc.",
    accent: "brand-accent",
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    role: "Creator of Linux & Git",
    accent: "brand-purple",
  },
  {
    text: "Software is a great combination of artistry and engineering.",
    author: "Bill Gates",
    role: "Co-founder of Microsoft",
    accent: "brand-blue",
  },
];

export default function Quotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % techQuotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const quote = techQuotes[index];

  return (
    <section
      className="py-32 px-8 bg-brand-black relative overflow-hidden"
      id="quotes"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-4">
            Inspiration
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Tech <span className="gradient-text">Perspectives</span>
          </h3>
        </div>

        <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className="absolute inset-0"
            >
              <div className="glass-card p-12 md:p-16 rounded-[40px] border-white/5 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-30"></div>

                <FaQuoteLeft
                  className={`text-5xl mb-10 opacity-30 ${quote.accent === "brand-accent" ? "text-brand-accent" : quote.accent === "brand-purple" ? "text-brand-purple" : "text-brand-blue"}`}
                />

                <p className="text-2xl md:text-4xl font-medium text-white leading-tight mb-10 italic">
                  "{quote.text}"
                </p>

                <div className="mt-auto">
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {quote.author}
                  </h4>
                  <p className="text-sm text-brand-accent font-bold uppercase tracking-widest">
                    {quote.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {techQuotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${index === i ? "w-12 bg-brand-accent" : "w-2 bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to quote ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[150px] rounded-full"></div>
      </div>
    </section>
  );
}
