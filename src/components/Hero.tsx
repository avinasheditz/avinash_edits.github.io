import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Indian Video Editor & Content Creator
          </span>
          
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            TRANSFORMING RAW <br />
            <span className="text-gradient">FOOTAGE INTO STORIES</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            I specialize in cinematic edits, reels, and high-energy gaming content that 
            captures attention and scales your presence across social media.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-dark rounded-full font-bold flex items-center justify-center gap-2 hover-glow transition-all"
            >
              View My Work <Play className="w-4 h-4 fill-current" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Stats Section / Counters */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/5"
        >
          {[
            { label: "Projects Completed", value: "500+" },
            { label: "Happy Clients", value: "150+" },
            { label: "Views Generated", value: "50M+" },
            { label: "Years Experience", value: "4+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
