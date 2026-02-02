
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Portfolio } from './components/Portfolio';
import { Expertise } from './components/Expertise';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simple reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-black scroll-smooth">
      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Metrics />
          <Expertise />
          <Portfolio />
        </div>

        <Contact />
      </main>

      {/* Atmospheric Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[180px]"></div>
      </div>

      <footer className="py-20 border-t border-white/5 bg-[#030303] text-center text-neutral-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
             <span className="text-sm font-serif italic text-neutral-400 block mb-1">John Peter</span>
             <span className="text-[10px] tracking-[0.4em] uppercase">Sales & Growth Consulting</span>
          </div>
          
          <div className="text-[9px] tracking-[0.5em] uppercase text-neutral-700">
            &copy; {new Date().getFullYear()} — All Rights Reserved
          </div>

          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
