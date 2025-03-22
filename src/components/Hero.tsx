
import React, { useEffect, useRef } from 'react';
import { Presentation, ArrowRight, FileDown, Search, Code, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate position as percentage
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      
      // Apply the transform
      orbRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-cyber-black bg-grid">
      {/* Decorative orbs */}
      <div 
        ref={orbRef}
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-cyber-blue/5 blur-[100px] pointer-events-none" 
      />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyber-purple/5 blur-[80px] pointer-events-none" />
      
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-cyber-blue/10 border border-cyber-blue/20">
              <Presentation className="w-4 h-4 text-cyber-blue" />
              <span className="text-xs font-medium text-white">AI-Powered Presentation Builder</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-gradient-blue text-glow">PPT Presentation Crafter</span>
              <br />
              <span className="text-white">Create Stunning Slideshows</span>
            </h1>
            
            <p className="text-lg text-white/80">
              Turn your ideas into professional, detailed presentations in minutes. Our AI assistant builds complete slideshows with organized content, data visualization, and beautiful visuals created with DALL-E image generation, all through the ChatGPT interface.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://chatgpt.com/g/g-3Py9TlUa1-ppt-presentation-crafter" 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-cyber-blue text-cyber-black font-medium transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_15px_rgba(15,239,253,0.5)]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a 
                href="#how-it-works" 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
          
          {/* 3D Presentation Illustration - Fixed to prevent image from being cut off */}
          <div className="relative animate-float animate-delay-200">
            <div className="cyber-card rounded-lg overflow-hidden relative p-1">
              <div className="relative w-full h-full aspect-[4/3] rounded-md overflow-hidden bg-cyber-dark border border-white/10">
                <img 
                  src="https://ideogram.ai/assets/image/lossless/response/RY7nJyyMR_yUNcBsrt3oRg"
                  alt="PPT Presentation Crafter Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg cyber-card flex items-center justify-center animate-float animate-delay-400">
                <Search className="w-6 h-6 text-cyber-blue" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-lg cyber-card flex items-center justify-center animate-float animate-delay-600">
                <Code className="w-6 h-6 text-cyber-purple" />
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 rounded-lg cyber-card flex items-center justify-center animate-float">
                <Bot className="w-5 h-5 text-cyber-yellow" />
              </div>
              <div className="absolute bottom-16 -right-4 w-12 h-12 rounded-lg cyber-card flex items-center justify-center animate-float animate-delay-200">
                <FileDown className="w-5 h-5 text-cyber-blue" />
              </div>
            </div>
            
            {/* Glowing effect behind the card */}
            <div className="absolute inset-0 -z-10 translate-y-4 blur-2xl opacity-20 bg-cyber-blue rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
