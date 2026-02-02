
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const AnimatedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 110,
      filter: 'blur(12px)',
    },
  };

  return (
    <motion.h1
      style={{ perspective: '1200px' }}
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center lg:justify-end px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-16 lg:pb-24">
      {/* Background Decorative Name */}
      <div className="absolute top-[20%] left-0 w-full overflow-hidden pointer-events-none z-0">
        <motion.h2 
          initial={{ x: '0%' }}
          animate={{ x: '-25%' }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="parallax-text font-serif font-black text-white/[0.02] uppercase whitespace-nowrap"
        >
          GROWTH ARCHITECT • REVENUE ENGINE • GROWTH ARCHITECT • REVENUE ENGINE •
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center lg:items-end relative z-10">
        {/* Hero Content */}
        <div className="lg:col-span-7 pb-4 lg:pb-0 order-1">
          <div className="mb-8">
            <AnimatedText 
              text="John Peter" 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-serif leading-[0.8] text-accent tracking-tighter" 
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-neutral-400 italic mb-10 flex flex-wrap gap-x-4 items-center">
              <span>Driving</span>
              <span className="text-white border-b border-accent/30 pb-1">High-Value</span>
              <span>Growth.</span>
            </h2>

            <div className="max-w-xl mb-14">
              <p className="text-base sm:text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
                Sales & Growth Architect based in Chennai. Engineering multi-crore revenue pipelines and orchestrating brand equity for market leaders like <span className="text-white/90 font-medium">Titan</span> and <span className="text-white/90 font-medium">Maruti Suzuki</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 sm:gap-16">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-2">Portfolio Impact</span>
                <span className="text-2xl md:text-3xl font-serif italic text-white">₹5Cr+ Generated</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-2">Deal Velocity</span>
                <span className="text-2xl md:text-3xl font-serif italic text-white">800+ Closures</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Portrait */}
        <motion.div 
          initial={{ opacity: 0, x: 50, filter: 'grayscale(100%)' }}
          animate={{ opacity: 1, x: 0, filter: 'grayscale(100%)' }}
          whileHover={{ filter: 'grayscale(0%)' }}
          transition={{ duration: 1.8, ease: "circOut" }}
          className="lg:col-span-5 relative group order-2 lg:order-2"
        >
          <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5.5] overflow-hidden rounded-sm bg-slate-900 border border-white/5 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
              alt="John Peter - Sales Specialist" 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-accent/20 hidden lg:block pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border-r border-b border-accent/40 pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Explore Indicator */}
      <div className="hidden lg:flex absolute right-12 bottom-12 flex-col items-center gap-6">
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-neutral-600 [writing-mode:vertical-lr] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};
