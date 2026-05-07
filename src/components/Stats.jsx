import { FaProjectDiagram, FaCode, FaClock, FaLayerGroup } from "react-icons/fa";

export default function Stats() {
  const stats = [
    { value: "10+", label: "Projects Completed", icon: FaProjectDiagram, color: "text-brand-accent" },
    { value: "05+", label: "Months Experience", icon: FaClock, color: "text-brand-purple" },
    { value: "1.2K+", label: "GitHub Commits", icon: FaCode, color: "text-brand-blue" },
    { value: "08+", label: "Tech Mastered", icon: FaLayerGroup, color: "text-yellow-400" }
  ];

  return (
    <section className="py-24 bg-brand-black" data-purpose="stats-grid">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-10 rounded-[32px] border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 group text-center relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${stat.color === 'text-brand-accent' ? 'from-brand-accent' : stat.color === 'text-brand-purple' ? 'from-brand-purple' : 'from-brand-blue'} to-transparent opacity-50`}></div>
              
              <div className="flex justify-center mb-6">
                <stat.icon className={`text-3xl ${stat.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              </div>
              
              <div className="text-5xl font-black text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

