
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-[#020617]/95 backdrop-blur-3xl border-b border-white/5' : 'py-8 lg:py-14 bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col group cursor-default">
          <span className="text-2xl lg:text-3xl font-serif tracking-widest uppercase text-white group-hover:text-accent transition-all duration-500">J.P.</span>
          <span className="text-[9px] lg:text-[10px] tracking-[0.5em] uppercase text-accent font-bold mt-1.5 opacity-80">Growth Specialist</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 lg:space-x-20 items-center">
          {['Expertise', 'Brands'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[11px] uppercase tracking-[0.5em] text-neutral-400 hover:text-white transition-all duration-300 relative group font-semibold"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-accent transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="mailto:kevinjohnpeter07@gmail.com" 
            className="px-10 py-3.5 bg-white text-black text-[11px] uppercase tracking-[0.5em] font-black hover:bg-accent hover:text-white transition-all duration-500 rounded-full shadow-lg shadow-white/5"
          >
            Connect
          </a>
        </div>
        
        {/* Mobile Mini UI */}
        <div className="md:hidden flex items-center gap-6">
           <a 
            href="mailto:kevinjohnpeter07@gmail.com" 
            className="text-[9px] uppercase tracking-[0.3em] text-accent border border-accent/50 px-5 py-2.5 rounded-full font-black bg-accent/5"
          >
            Connect
          </a>
          <div className="flex flex-col gap-2 items-end">
            <div className="w-7 h-[1px] bg-white/60"></div>
            <div className="w-4 h-[1px] bg-white/60"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
