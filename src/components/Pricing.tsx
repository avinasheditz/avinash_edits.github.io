import { motion } from "motion/react";
import { Check, Zap, Crown } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "BASIC EDITING",
      price: "1,499",
      description: "Perfect for simple social media needs",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      features: [
        "Simple cuts & transitions",
        "Basic color correction",
        "Raw footage up to 10 mins",
        "1 Revision",
        "3-5 Day Delivery"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "STANDARD EDITING",
      price: "3,999",
      description: "The most popular choice for YouTubers",
      icon: <Check className="w-8 h-8 text-brand-accent" />,
      features: [
        "Advanced transitions",
        "Color grading",
        "Sound enhancement",
        "Royalty-free music",
        "2 Revisions",
        "48 Hour Delivery"
      ],
      cta: "Choose Standard",
      highlight: true
    },
    {
      name: "PREMIUM CINEMATIC",
      price: "8,999",
      description: "High-end quality for brands & elites",
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      features: [
        "High-end cinematic editing",
        "Motion graphics",
        "Advanced VFX",
        "Unlimited creativity style",
        "Priority 24h delivery",
        "Unlimited Revisions"
      ],
      cta: "Go Premium",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white/2 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 inline-block">Best Value</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4">FAIR <span className="text-gradient">PRICING</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Choose a plan that fits your vision. Quality guaranteed across all tiers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-500 hover:y-[-8px] ${
                plan.highlight 
                  ? "bg-linear-to-b from-brand-accent/10 to-transparent border-brand-accent/50 hover-glow" 
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}
              
              <div className="mb-6">{plan.icon}</div>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-display font-bold">₹{plan.price}</span>
                <span className="text-gray-500 text-sm">/ project</span>
              </div>
              <p className="text-sm text-gray-400 mb-8">{plan.description}</p>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold transition-colors ${
                  plan.highlight 
                    ? "bg-brand-accent text-brand-dark hover:bg-white" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
