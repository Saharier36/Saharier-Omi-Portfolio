import ProjectCard from "./ProjectCard";
import studynookImg from "@/assets/studynook.png";
import qurbaniImg from "@/assets/Screenshot 2026-05-04 205928.png";
import bookVibeImg from "@/assets/Screenshot 2026-04-03 150554.png";

export default function CaseStudies() {
  const projects = [
    {
      title: "StudyNook — Booking Platform",
      category: "Full Stack Development",
      description:
        "A modern study room booking platform featuring conflict-free booking flows, secure Google OAuth/JWT session handling, and a dynamic Light/Dark mode UI.",
      tech: ["Next.js", "Express.js", "Better Auth", "MongoDB"],
      image: studynookImg,
      liveLink: "https://studynook-zeta.vercel.app/",
      githubLink: "https://github.com/Saharier36/studynook-client",
    },
    {
      title: "Qurbani-Hat — Livestock Shop",
      category: "Full Stack Development",
      description:
        "A digital marketplace for Qurbani animals where buyers can explore listings, check breeds, and list livestock. Features full Better Auth integrations and real-time notifications.",
      tech: ["Next.js", "React", "Better Auth", "MongoDB"],
      image: qurbaniImg,
      liveLink: "https://qurbani-hat-pied.vercel.app/",
      githubLink: "https://github.com/Saharier36/Qurbani-Hat",
    },
    {
      title: "Book Vibe — Discovery Tracker",
      category: "React Web App",
      description:
        "A book discovery and reading journey tracker with interactive reading list, wishlist, Local Storage persistence, and reading progress visualizations.",
      tech: ["React", "Tailwind v4", "DaisyUI", "Recharts", "React Router"],
      image: bookVibeImg,
      liveLink: "https://book-vibe-bookshelf.vercel.app/",
      githubLink: "https://github.com/Saharier36/Book-Vibe",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-8 bg-brand-black/50"
      data-purpose="case-study-section"
    >
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-sm font-bold text-brand-accent tracking-[0.2em] uppercase mb-4">
          Portfolio
        </h2>
        <h3 className="text-5xl md:text-6xl font-black text-white">
          Featured <span className="gradient-text">Projects</span>
        </h3>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
