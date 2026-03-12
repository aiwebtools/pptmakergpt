
import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Presentation } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navItems = [
    { name: 'PPT Presentation Crafter', href: 'https://chatgpt.com/g/g-3Py9TlUa1-ppt-presentation-crafter' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://aiwebtools.lovable.app/?via=aiwebtools' },
  ];

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:py-4 sm:px-6',
        isScrolled ? 'cyber-card bg-cyber-black/80' : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 group min-w-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-lg border border-cyber-blue/30 bg-cyber-dark overflow-hidden transition-all duration-300 group-hover:border-cyber-blue/70">
              <Presentation className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-blue animate-pulse-glow" />
              <div className="absolute inset-0 bg-cyber-blue/10 group-hover:bg-cyber-blue/20 transition-all duration-300"></div>
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg font-bold text-white truncate">PPT Presentation Crafter</h1>
              <p className="text-[10px] sm:text-xs text-cyber-blue truncate">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:underline" onClick={(e) => e.stopPropagation()}>AiWebTools.Ai</a></p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-sm text-white/80 hover:text-cyber-blue transition-colors duration-150 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-cyber-blue active:scale-95 transition-transform duration-100 p-2 -mr-2 touch-manipulation"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-200',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Nav Menu */}
      <div
        className={cn(
          'fixed top-[56px] sm:top-[72px] left-0 right-0 z-50 md:hidden transition-all duration-200 ease-out',
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        <div className="mx-3 sm:mx-4 cyber-card p-3 sm:p-4 rounded-lg">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-cyber-blue active:text-cyber-blue py-3 px-4 rounded-md hover:bg-white/5 active:bg-white/10 transition-colors duration-100 text-base touch-manipulation"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
