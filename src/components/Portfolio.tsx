import { motion } from "motion/react";
import { ExternalLink, PlayCircle } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Cinematic Travel Edit",
    category: "Cinematic Edits",
    image: "https://picsum.photos/seed/travel/800/600",
    videoUrl: "#"
  },
  {
    id: 2,
    title: "Gaming Highlight Reel",
    category: "Gaming Edits",
    image: "https://picsum.photos/seed/gaming/800/600",
    videoUrl: "#"
  },
  {
    id: 3,
    title: "Viral Instagram Reel",
    category: "Reels",
    image: "https://picsum.photos/seed/reel/800/600",
    videoUrl: "#"
  },
  {
    id: 4,
    title: "Before/After: Color Grade",
    category: "Before/After",
    image: "https://picsum.photos/seed/grading/800/600",
    videoUrl: "#"
  },
  {
    id: 5,
    title: "YouTube Tech Review",
    category: "YouTube Videos",
    image: "https://picsum.photos/seed/tech/800/600",
    videoUrl: "#"
  },
  {
    id: 6,
    title: "Commercial Promo",
    category: "Cinematic Edits",
    image: "https://picsum.photos/seed/promo/800/600",
    videoUrl: "#"
  }
];

const categories = ["All", "Cinematic Edits", "Reels", "YouTube Videos", "Before/After", "Gaming Edits"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 inline-block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">PORTFOLIO <span className="text-gradient">SHOWCASE</span></h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat 
                    ? "bg-brand-accent text-brand-dark" 
                    : "bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-video rounded-3xl overflow-hidden border border-white/5 hover:border-brand-accent/50 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex gap-4">
                  <a href={project.videoUrl} className="p-3 bg-brand-accent text-brand-dark rounded-full hover:scale-110 transition-transform">
                    <PlayCircle className="w-5 h-5" />
                  </a>
                  <a href={project.videoUrl} className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
