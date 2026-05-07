import ProjectCard from "./ProjectCard";
import qurbaniImg from "@/assets/Screenshot 2026-05-04 205928.png";
import bookVibeImg from "@/assets/Screenshot 2026-04-03 150554.png";
import digiToolsImg from "@/assets/Screenshot 2026-04-08 172201.png";

export default function CaseStudies() {
  const projects = [
    {
      title: "Qurbani-Hat — Digital Marketplace",
      category: "Full Stack Development",
      description:
        "A digital marketplace for Qurbani animals where buyers can explore listings, check breeds, and get tips. Features full authentication and real-time notifications.",
      tech: ["Next.js 15", "React 19", "HeroUI", "Better Auth", "MongoDB"],
      image: qurbaniImg,
      liveLink: "https://qurbani-hat-pied.vercel.app/",
      githubLink: "https://github.com/Saharier36/Qurbani-Hat",
    },
    {
      title: "Book Vibe — Discovery & Tracking",
      category: "React Web App",
      description:
        "A book discovery and tracking app to manage reading journeys. Includes Read Lists, Wishlists (persisted via Local Storage), and progress visualization.",
      tech: [
        "React 19",
        "Tailwind v4",
        "DaisyUI v5",
        "Recharts",
        "React Router v7",
      ],
      image: bookVibeImg,
      liveLink: "https://book-vibe-bookshelf.vercel.app/",
      githubLink: "https://github.com/Saharier36/Book-Vibe",
      reverse: true,
    },
    {
      title: "DigiTools — Digital Shop",
      category: "Frontend Development",
      description:
        "A digital tools buying platform focusing on state management and component architecture. Features product listing, cart management, and toast feedback.",
      tech: [
        "React 19",
        "Vite",
        "Tailwind CSS v4",
        "DaisyUI v5",
        "React-Toastify",
      ],
      image: digiToolsImg,
      liveLink: "https://digital-tools-shop-woad.vercel.app/",
      githubLink: "https://github.com/Saharier36/Digital-Tools-Shop",
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
      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            project={project}
            reverse={project.reverse}
          />
        ))}
      </div>
    </section>
  );
}
