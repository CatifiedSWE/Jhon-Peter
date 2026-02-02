
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 md:py-60 relative overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.6em] sm:tracking-[1em] uppercase text-neutral-400 font-bold mb-8 md:mb-12 block">
            The Consultation
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.9] mb-12 md:mb-24 tracking-tighter">
            Architect <br />
            <span className="italic text-neutral-400">The Future.</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center md:items-start justify-between gap-12 lg:gap-24">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
              <a 
                href="mailto:kevinjohnpeter07@gmail.com" 
                className="group relative flex items-center gap-4 sm:gap-6 px-8 sm:px-10 py-5 sm:py-6 bg-black text-white rounded-full text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold hover:scale-105 transition-all duration-500 w-full sm:w-auto justify-center"
              >
                Direct Message <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold hover:text-accent transition-colors"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" /> LinkedIn <ArrowUpRight className="w-2 h-2 sm:w-3 sm:h-3" />
              </a>
            </div>

            <div className="max-w-sm text-center lg:text-right">
              <p className="text-neutral-500 font-serif italic text-lg sm:text-xl md:text-3xl leading-snug">
                "Growth is not an accident. It's a design. Let's start the design process for your brand."
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Large Decorative Name */}
      <div className="absolute top-0 right-0 h-full w-full opacity-[0.03] pointer-events-none select-none overflow-hidden flex items-center">
        <h3 className="text-[50vw] sm:text-[40vw] font-serif font-black leading-none uppercase rotate-[-90deg] translate-x-[40%] sm:translate-x-[30%]">
          PETER
        </h3>
      </div>
    </section>
  );
};