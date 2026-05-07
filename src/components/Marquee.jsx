export default function Marquee() {
  const items = [
    "FULL STACK DEVELOPMENT", "MERN STACK", "REACT.JS", "NEXT.JS", "NODE.JS", "SCALABLE ARCHITECTURE", "AVAILABLE FOR HIRE", "LET'S BUILD SOMETHING GREAT"
  ];

  return (
    <div className="bg-brand-accent py-4 overflow-hidden -rotate-2 relative z-20">
      <div className="animate-marquee flex gap-12 items-center text-white font-black text-xl uppercase italic">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index}>✦ {item}</span>
        ))}
      </div>
    </div>
  );
}
