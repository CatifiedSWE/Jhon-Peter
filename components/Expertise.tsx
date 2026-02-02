
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Globe, BarChart3, Zap } from 'lucide-react';

const skills = [
  {
    title: "High-Ticket Conversion",
    desc: "calibrated negotiation for products exceeding ₹10L unit price.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Strategic Account Mgmt",
    desc: "Managing ultra-high-net-worth relationships with precision.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Market Expansion",
    desc: "Strategic entry into untapped luxury and retail sectors.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Revenue Operations",
    desc: "Full-funnel optimization and growth infrastructure building.",
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12"
          >
            <span className="text-xs tracking-[1em] uppercase text-accent font-bold block mb-8">Methodology</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-none text-white mb-10 tracking-tighter">
              Calibrated <br /> <span className="italic text-neutral-500">Revenue Logic</span>.
            </h2>
            <p className="text-neutral-500 max-w-md text-lg font-light leading-relaxed">
              Every growth milestone is the result of a deliberate system. I bridge the gap between human intuition and data-driven execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {["B2B Strategy", "B2C Growth", "Luxury", "Auto"].map((tag, i) => (
              <div key={i} className="p-6 border border-white/5 bg-white/[0.02] text-center rounded-sm">
                <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-500 font-bold">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 md:p-12 border border-white/5 hover:border-accent/30 bg-[#0a101f]/50 backdrop-blur-sm transition-all duration-500 rounded-sm"
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">{skill.icon}</div>
              <h4 className="text-3xl font-serif text-white mb-4 italic">{skill.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">
                {skill.desc}
              </p>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 md:p-14 bg-accent text-white flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm"
          >
            <div className="text-center md:text-left">
              <span className="text-4xl md:text-6xl font-serif italic font-black block">800+</span>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/70">Strategic Closures</p>
            </div>
            <Zap className="w-10 h-10 animate-pulse text-white/50 hidden md:block" />
            <div className="text-center md:text-right">
              <span className="text-4xl md:text-6xl font-serif italic font-black block">₹5Cr+</span>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/70">Revenue Impact</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
