import { motion } from "motion/react";
import { CheckCircle2, Award, Zap, Heart } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: <Zap className="w-5 h-5" />, title: "Fast Delivery", desc: "Most projects delivered within 24-48 hours." },
    { icon: <Award className="w-5 h-5" />, title: "Quality Focus", desc: "Pristine color grading and sound design." },
    { icon: <Heart className="w-5 h-5" />, title: "Client Satisfaction", desc: "Unlimited revisions on premium packages." },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: "Pro Workflow", desc: "Industry standard software and techniques." },
  ];

  return (
    <section id="about" className="py-32 bg-white/2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 group">
              <img
                src="https://picsum.photos/seed/editor/800/800"
                alt="Avinash Editz Workspace"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-accent p-6 rounded-2xl text-brand-dark shadow-2xl">
              <div className="text-4xl font-display font-bold">4+</div>
              <div className="text-xs font-bold uppercase tracking-widest">Years of Passion</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 inline-block">My Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tighter">
              BEYOND THE <span className="text-gradient">TIMELINE</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I am Avinash Editz, a passionate Indian video editor specializing in cinematic edits, reels, 
              YouTube videos, gaming content, and social media content creation. I transform raw footage 
              into engaging visual stories that capture attention and boost audience engagement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all">
                  <div className="text-brand-accent">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
