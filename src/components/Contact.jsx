"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const container = useRef();
  const [selectedType, setSelectedType] = useState("Full Stack Web");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = `Portfolio Inquiry: ${selectedType} - ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject Type: ${selectedType}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:gsaharier761@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  useGSAP(() => {
    const inputs = container.current.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input.parentElement, {
          borderColor: "#ff007a",
          duration: 0.3,
        });
      });
      
      input.addEventListener('blur', () => {
        gsap.to(input.parentElement, {
          borderColor: "rgba(255, 255, 255, 0.1)",
          duration: 0.3,
        });
      });
    });
  }, { scope: container });

  const categories = [
    "Full Stack Web", "React/Next.js App", "Backend API", "E-commerce Solution", "Database Design", "UI/UX Optimization"
  ];

  return (
    <section ref={container} id="contact" className="py-32 px-8 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <div className="mb-12">
            <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-4">Contact</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Let's build something <span className="gradient-text">extraordinary</span> together.
            </h3>
            <p className="text-gray-400 mt-8 text-lg max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
            </p>
          </div>

          <div className="space-y-8">
            <a href="mailto:gsaharier761@gmail.com" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-accent transition-all">
                <FaEnvelope className="text-brand-accent text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                <p className="text-white font-bold text-lg">gsaharier761@gmail.com</p>
              </div>
            </a>
            <a href="https://wa.me/8801615647730" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-accent transition-all">
                <FaWhatsapp className="text-green-500 text-2xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">WhatsApp</p>
                <p className="text-white font-bold text-lg">+880 1615 647730</p>
              </div>
            </a>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <FaMapMarkerAlt className="text-brand-purple text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Location</p>
                <p className="text-white font-bold text-lg">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 md:p-16 rounded-[40px] border-white/10 relative">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="relative border-b border-white/10 pb-4 transition-all group">
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-2 group-focus-within:text-brand-accent transition-colors">Full Name</label>
              <input 
                name="name"
                required
                className="w-full bg-transparent border-0 focus:ring-0 px-0 text-white placeholder:text-gray-700 outline-none" 
                placeholder="What's your name?" 
                type="text" 
              />
            </div>
            <div className="relative border-b border-white/10 pb-4 transition-all group">
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-2 group-focus-within:text-brand-accent transition-colors">Email Address</label>
              <input 
                name="email"
                required
                className="w-full bg-transparent border-0 focus:ring-0 px-0 text-white placeholder:text-gray-700 outline-none" 
                placeholder="Where should I reply?" 
                type="email" 
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-6">What's on your mind?*</label>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, index) => (
                  <button 
                    key={index} 
                    onClick={() => setSelectedType(cat)}
                    className={`px-5 py-2 rounded-full border text-[10px] font-bold uppercase tracking-tighter transition-all outline-none ${selectedType === cat ? "border-brand-accent bg-brand-accent text-white" : "border-white/10 text-gray-400 hover:border-brand-accent/50"}`} 
                    type="button"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative border-b border-white/10 pb-4 transition-all group">
              <label className="text-[10px] uppercase font-bold text-gray-500 block mb-2 group-focus-within:text-brand-accent transition-colors">Message</label>
              <textarea 
                name="message"
                required
                className="w-full bg-transparent border-0 focus:ring-0 px-0 text-white placeholder:text-gray-700 outline-none resize-none h-32" 
                placeholder="Tell me about your project details..."
              ></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-2xl btn-gradient font-bold text-white uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-lg shadow-brand-accent/20" 
              type="submit"
            >
              Send Message <FaPaperPlane className="text-[10px]" />
            </motion.button>
          </form>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-full -z-10"></div>
    </section>
  );
}

