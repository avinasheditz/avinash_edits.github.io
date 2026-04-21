import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Client A",
      role: "Influencer",
      content: "Absolutely amazing editing quality, delivered on time! My audience loved the cinematic feel.",
      stars: 5,
    },
    {
      name: "Client B",
      role: "YouTuber",
      content: "My YouTube channel growth increased significantly after his edits! The pacing is just perfect.",
      stars: 5,
    },
    {
      name: "Rohan Sharma",
      role: "Gaming Creator",
      content: "Best gaming edits I've ever had. The sync between music and kills is insane!",
      stars: 5,
    }
  ];

  return (
    <section className="py-32 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold mb-4 tracking-tighter">CLIENT <span className="text-gradient">TESTIMONIALS</span></h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-brand-accent/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{item.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center font-bold text-brand-accent">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
