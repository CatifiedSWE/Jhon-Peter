
import React from 'react';
import { motion } from 'framer-motion';

export const Metrics: React.FC = () => {
  const stats = [
    { label: 'Revenue Milestone', value: '₹5+ Crore', detail: 'Portfolio Impact' },
    { label: 'Strategic Closures', value: '800+', detail: 'High-Value Deals' },
    { label: 'Industry Expertise', value: '4+ Years', detail: 'Market Longevity' },
  ];

  return (
    <section className="py-16 sm:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-32">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-accent mb-4 sm:mb-6 font-bold">{stat.label}</div>
            <h3 className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-4 sm:mb-6 group-hover:italic group-hover:scale-105 transition-all duration-700">
              {stat.value}
            </h3>
            <div className="w-8 h-[1px] bg-neutral-800 mx-auto mb-4 group-hover:w-20 transition-all duration-500"></div>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-neutral-600 font-medium">
              {stat.detail}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
    </section>
  );
};