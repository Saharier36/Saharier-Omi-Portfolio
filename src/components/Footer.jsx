import {
  FaFacebookF,
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/Saharier36",
      icon: FaFacebookF,
    },
    { name: "GitHub", href: "https://github.com/Saharier36", icon: FaGithub },
    { name: "Twitter", href: "https://x.com/Saharier36", icon: FaXTwitter },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/saharier-omi",
      icon: FaLinkedinIn,
    },
  ];

  return (
    <footer
      className="py-20 bg-brand-black border-t border-white/5 px-8"
      id="footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-black tracking-tighter text-white">
              SAHARIER <span className="text-brand-accent">OMI</span>
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              MERN Stack Developer based in Dhaka.
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all duration-300 group"
                aria-label={social.name}
              >
                <social.icon className="text-lg group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-600">
            © {currentYear} Personal Portfolio. Built with Passion.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-600">
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
