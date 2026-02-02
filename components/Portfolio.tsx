
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Watch, Car, ShoppingBag, Leaf } from 'lucide-react';

const projects = [
  {
    title: 'Titan',
    category: 'Luxury Horology',
    metric: '₹2.5Cr+ Portfolio',
    icon: <Watch className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
    description: 'Transforming luxury timepiece sales through consultative negotiation and high-net-worth client relationship management.'
  },
  {
    title: 'Maruti Suzuki',
    category: 'Automotive Strategy',
    metric: 'High-Value Closures',
    icon: <Car className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    description: 'Scaling automotive revenue in competitive markets by optimizing customer lifecycle journeys and enterprise deals.'
  },
  {
    title: 'Lifestyle',
    category: 'Retail Growth',
    metric: 'Scale & Performance',
    icon: <ShoppingBag className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop',
    description: 'Managing massive retail portfolios with a focus on conversion rate optimization and average transaction value (ATV).'
  },
  {
    title: 'Kama Ayurveda',
    category: 'Premium Wellness',
    metric: 'Retention Architect',
    icon: <Leaf className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop',
    description: 'Building sustainable brand equity for Indias leading wellness brand through deep consumer psychological mapping.'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="brands" className="py-20 md:py-40">
      <div className="mb-12 md:mb-32">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs tracking-[0.8em] uppercase text-accent font-bold block mb-4 md:mb-8"
        >
          Brand Impact
        </motion.span>
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif leading-[1] text-white tracking-tighter">
          The <span className="italic text-neutral-500">Portfolio</span> <br className="hidden sm:block" /> 
          of Excellence.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projects.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col sm:flex-row bg-[#0a101f] border border-white/5 overflow-hidden rounded-sm"
          >
            {/* Visual Part */}
            <div className="w-full sm:w-1/2 aspect-[16/9] sm:aspect-auto overflow-hidden relative">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent sm:hidden"></div>
            </div>

            {/* Content Part */}
            <div className="w-full sm:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="text-accent scale-90 sm:scale-100">{item.icon}</div>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-bold">{item.category}</span>
                </div>
                <h4 className="text-3xl sm:text-4xl font-serif text-white mb-3 sm:mb-4 group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light mb-6 opacity-80 line-clamp-3 sm:line-clamp-none">
                  {item.description}
                </p>
              </div>
              
              <div className="flex justify-between items-end border-t border-white/5 pt-4 sm:pt-6 mt-auto">
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-neutral-600 font-bold">Primary Success</span>
                  <span className="text-base sm:text-lg font-serif italic text-accent">{item.metric}</span>
                </div>
                <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};