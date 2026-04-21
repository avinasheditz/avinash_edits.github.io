import { motion } from "motion/react";

export default function Skills() {
  const software = [
    { name: "Premiere Pro", level: 95 },
    { name: "After Effects", level: 85 },
    { name: "CapCut (Advanced)", level: 98 },
    { name: "Photoshop", level: 80 },
    { name: "Davinci Resolve", level: 75 },
  ];

  const expertises = [
    "Cinematic Color Grading",
    "Motion Graphics",
    "Sound Design",
    "Reels/Shorts Strategy",
    "Gaming Highlights",
    "Green Screen Edit",
    "Thumbnail Design",
    "VFX Compositing",
  ];

  return (
    <section className="py-24 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">THE ARSENAL</h2>
          <p className="text-gray-500 font-medium">Tools and skills I utilize to create magic</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Software Skills */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              Software Proficiency
            </h3>
            <div className="space-y-6">
              {software.map((s, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{s.name}</span>
                    <span className="text-brand-accent font-bold">{s.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-linear-to-r from-brand-accent to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertises Tag Cloud */}
          <div className="bg-white/2 p-8 md:p-12 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              Core Expertises
            </h3>
            <div className="flex flex-wrap gap-3">
              {expertises.map((exp, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/10 transition-all cursor-default font-medium"
                >
                  {exp}
                </motion.span>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-brand-accent/5 rounded-2xl border border-brand-accent/20">
              <p className="text-sm text-gray-400 leading-relaxed italic">
                "I don't just cut clips; I craft emotions. Every transition is intentional, every beat is calculated."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
