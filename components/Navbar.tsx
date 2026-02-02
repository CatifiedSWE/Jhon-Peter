
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Brands', href: '#brands' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled 
            ? 'py-3 md:py-4 bg-[#020617]/95 backdrop-blur-3xl border-b border-white/5 shadow-lg' 
            : 'py-4 md:py-6 lg:py-8 bg-transparent'
        }`}
        data-testid="main-navbar"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col group cursor-pointer z-50"
            data-testid="logo-link"
          >
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif tracking-widest uppercase text-white group-hover:text-accent transition-all duration-500">
              J.P.
            </span>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.5em] uppercase text-accent font-bold mt-0.5 sm:mt-1 opacity-80">
              Growth Specialist
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-12 xl:gap-16">
            {navLinks.slice(1, 4).map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] lg:tracking-[0.4em] text-neutral-400 hover:text-white transition-all duration-300 relative group font-semibold"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-accent transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 lg:px-8 xl:px-10 py-2.5 lg:py-3 bg-white text-black text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] font-black hover:bg-accent hover:text-white transition-all duration-500 rounded-full shadow-lg shadow-white/5"
              data-testid="nav-connect-button"
            >
              Connect
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2 sm:gap-3 z-50">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-accent border border-accent/50 px-3 py-1.5 sm:py-2 rounded-full font-black bg-accent/5 hover:bg-accent/10 transition-all duration-300"
              data-testid="mobile-connect-button"
            >
              Connect
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1.5 items-end relative w-7 sm:w-8 h-7 sm:h-8 justify-center"
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              <motion.div 
                animate={mobileMenuOpen ? { rotate: 45, y: 5, width: '24px' } : { rotate: 0, y: 0, width: '24px' }}
                className="h-[2px] bg-white/80 rounded-full origin-center"
              />
              <motion.div 
                animate={mobileMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: '14px' }}
                className="h-[2px] bg-white/80 rounded-full"
              />
              <motion.div 
                animate={mobileMenuOpen ? { rotate: -45, y: -5, width: '24px' } : { rotate: 0, y: 0, width: '18px' }}
                className="h-[2px] bg-white/80 rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#020617]/98 backdrop-blur-2xl z-40 md:hidden"
            data-testid="mobile-menu-overlay"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full px-6"
            >
              {/* Mobile Menu Links */}
              <nav className="flex flex-col items-center gap-6 sm:gap-8 mb-10 sm:mb-12">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="text-xl sm:text-2xl md:text-3xl font-serif text-white hover:text-accent transition-all duration-300 tracking-wide"
                    data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-center"
              >
                <p className="text-xs sm:text-sm text-neutral-500 mb-3 sm:mb-4">Get in touch</p>
                <a 
                  href="mailto:kevinjohnpeter07@gmail.com"
                  className="text-accent hover:text-white transition-colors text-xs sm:text-sm underline"
                  data-testid="mobile-email-link"
                >
                  kevinjohnpeter07@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
