
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Presentation } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'PPT Presentation Crafter', href: 'https://chatgpt.com/g/g-3Py9TlUa1-ppt-presentation-crafter' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://aiwebtools.lovable.app/?via=aiwebtools' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6',
      isScrolled ? 'cyber-card bg-cyber-black/80' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyber-blue/30 bg-cyber-dark overflow-hidden transition-all duration-300 group-hover:border-cyber-blue/70">
            <Presentation className="w-6 h-6 text-cyber-blue animate-pulse-glow" />
            <div className="absolute inset-0 bg-cyber-blue/10 group-hover:bg-cyber-blue/20 transition-all duration-300"></div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">PPT Presentation Crafter</h1>
            <p className="text-xs text-cyber-blue">Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:underline">AiWebTools.Ai</a></p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm text-white/80 hover:text-cyber-blue transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white hover:text-cyber-blue"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden cyber-card absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-lg animate-slide-down">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-cyber-blue py-2 px-4 rounded-md hover:bg-white/5 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
