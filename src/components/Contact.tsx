import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageCircle, Instagram, Youtube, Send, Phone, X, User, Briefcase, MessageSquare } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Cinematic Edit",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatting the WhatsApp message
    const message = encodeURIComponent(
      `🚀 *NEW ORDER INQUIRY* 🚀\n\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service:* ${formData.projectType}\n\n` +
      `*Project Details:* ${formData.message}`
    );
    
    const whatsappUrl = `https://wa.me/919310491221?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const tabs = [
    { title: "Name", icon: <User className="w-4 h-4" /> },
    { title: "Purpose", icon: <Briefcase className="w-4 h-4" /> },
    { title: "Mail", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <section id="contact" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 inline-block">Available for Projects</span>
            <h2 className="text-5xl font-display font-bold mb-8 tracking-tighter">LET'S CREATE <br /> <span className="text-gradient">SOMETHING EPIC</span></h2>
            
            <p className="text-gray-400 text-lg mb-12">
              Ready to take your content to the next level? Reach out directly 
              through my social channels or send a professional inquiry.
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:avinashpandit1221@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-brand-dark" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-white font-medium">avinashpandit1221@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+919310491221" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Phone className="w-5 h-5 group-hover:text-brand-dark" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Call / WhatsApp</p>
                  <p className="text-white font-medium">+91 9310491221</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: MessageCircle, href: "https://wa.me/919310491221" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-brand-accent transition-colors"
                >
                  <social.Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Button Trigger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-12 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl"
          >
            <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mb-8 animate-pulse">
              <Mail className="w-10 h-10 text-brand-accent" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-center">Ready to Start?</h3>
            <p className="text-gray-400 text-center mb-8">Click the button below to fill out your project details.</p>
            
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-brand-accent text-brand-dark rounded-2xl font-bold text-lg hover-glow transition-all flex items-center gap-3"
            >
              <Send className="w-5 h-5" /> Send Contact
            </motion.button>

            <div className="mt-12 pt-8 border-t border-white/5 w-full text-center">
              <a 
                href="https://wa.me/919310491221" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Quick Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-brand-dark border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-display font-bold">New Inquiry</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Tabs Header */}
                <div className="flex gap-2 p-1 bg-white/5 rounded-2xl mb-8">
                  {tabs.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                        activeTab === i 
                          ? "bg-brand-accent text-brand-dark" 
                          : "text-gray-500 hover:text-white"
                      }`}
                    >
                      {tab.icon} {tab.title}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <form onSubmit={handleSubmit}>
                  <div className="min-h-[200px]">
                    {activeTab === 0 && (
                      <motion.div
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-4"
                      >
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Identity</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="What's your name?" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent/50 focus:outline-hidden transition-colors text-white"
                        />
                        <p className="text-xs text-gray-500 ml-1">Tell me who you are so I can address you properly.</p>
                      </motion.div>
                    )}

                    {activeTab === 1 && (
                      <motion.div
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-4"
                      >
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Project Purpose</label>
                        <select 
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent/50 focus:outline-hidden transition-colors appearance-none text-white"
                        >
                          <option className="bg-brand-dark">Cinematic Edit</option>
                          <option className="bg-brand-dark">YouTube Video</option>
                          <option className="bg-brand-dark">Reels / Shorts</option>
                          <option className="bg-brand-dark">Gaming Edit</option>
                        </select>
                        <p className="text-xs text-gray-500 ml-1">What kind of magic are we creating today?</p>
                      </motion.div>
                    )}

                    {activeTab === 2 && (
                      <motion.div
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-4"
                      >
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Your Email</label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="mail@example.com" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent/50 focus:outline-hidden transition-colors text-white mb-4"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">Brief Details</label>
                          <textarea 
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Share your vision..." 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent/50 focus:outline-hidden transition-colors resize-none text-white"
                          ></textarea>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Navigation / Submit */}
                  <div className="flex gap-4 mt-8">
                    {activeTab > 0 && (
                      <button
                        type="button"
                        onClick={() => setActiveTab(activeTab - 1)}
                        className="flex-1 py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-colors"
                      >
                        Back
                      </button>
                    )}
                    {activeTab < 2 ? (
                      <button
                        type="button"
                        onClick={() => setActiveTab(activeTab + 1)}
                        className="flex-2 py-4 bg-brand-accent text-brand-dark rounded-2xl font-bold hover:bg-white transition-colors"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex-2 py-4 bg-brand-accent text-brand-dark rounded-2xl font-bold hover-glow transition-all flex items-center justify-center gap-2"
                      >
                        Send Inquiry <Send className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
