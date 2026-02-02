
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
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16"
      data-testid="hero-section"
    >
      {/* Background Decorative Name */}
      <div className="absolute top-[15%] sm:top-[20%] left-0 w-full overflow-hidden pointer-events-none z-0">
        <motion.h2 
          initial={{ x: '0%' }}
          animate={{ x: '-25%' }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="parallax-text font-serif font-black text-white/[0.02] uppercase whitespace-nowrap"
        >
          GROWTH ARCHITECT • REVENUE ENGINE • GROWTH ARCHITECT • REVENUE ENGINE •
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center relative z-10 max-w-[1600px] mx-auto w-full">
        
        {/* Professional Portrait - Mobile First (Top on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="lg:col-span-5 xl:col-span-4 relative group order-1 lg:order-2 w-full"
          data-testid="hero-portrait"
        >
          <div className="aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-none mx-auto overflow-hidden rounded-sm bg-slate-900 border border-white/5 shadow-2xl">
            <motion.img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
              alt="John Peter - Sales Specialist" 
              className="w-full h-full object-cover transform transition-all duration-1000 group-hover:scale-105"
              initial={{ filter: 'grayscale(100%)' }}
              animate={{ filter: 'grayscale(100%)' }}
              whileHover={{ filter: 'grayscale(0%)' }}
            />
          </div>
          <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-l border-t border-accent/20 hidden sm:block pointer-events-none"></div>
          <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 border-r border-b border-accent/40 pointer-events-none"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <AnimatedText 
              text="John Peter" 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-serif leading-[0.9] sm:leading-[0.85] text-accent tracking-tighter" 
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-neutral-400 italic mb-5 sm:mb-6 lg:mb-8 flex flex-wrap gap-x-2 sm:gap-x-2.5 lg:gap-x-3 items-center justify-center lg:justify-start">
              <span>Driving</span>
              <span className="text-white border-b border-accent/30 pb-0.5">High-Value</span>
              <span>Growth.</span>
            </h2>

            <div className="max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-500 font-light leading-relaxed px-2 sm:px-0">
                Sales & Growth Architect based in Chennai. Engineering multi-crore revenue pipelines and orchestrating brand equity for market leaders like <span className="text-white/90 font-medium">Titan</span> and <span className="text-white/90 font-medium">Maruti Suzuki</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-accent font-bold mb-1 sm:mb-1.5">Portfolio Impact</span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-white">₹5Cr+ Generated</span>
              </div>
              <div className="w-12 sm:w-[1px] h-[1px] sm:h-10 lg:h-12 bg-white/10"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-accent font-bold mb-1 sm:mb-1.5">Deal Velocity</span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-white">800+ Closures</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Explore Indicator - Hidden on Mobile */}
      <div className="hidden lg:flex absolute right-6 xl:right-10 bottom-6 xl:bottom-10 flex-col items-center gap-4">
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.5em] lg:tracking-[0.6em] text-neutral-600 [writing-mode:vertical-lr] font-bold">Scroll</span>
          <div className="w-[1px] h-10 lg:h-12 bg-gradient-to-b from-accent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};
