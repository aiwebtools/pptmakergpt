
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Legal from '@/components/Legal';
import ConsentPopup from '@/components/ConsentPopup';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Create a reusable CTA component
const SectionCTA = () => (
  <div className="py-12 flex justify-center">
    <a 
      href="https://chatgpt.com/g/g-3Py9TlUa1-ppt-presentation-crafter"
      className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-cyber-blue text-cyber-black font-medium transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_15px_rgba(15,239,253,0.5)] opacity-0 animate-slide-up"
    >
      <span>Craft Your PPTx Now</span>
      <ArrowRight className="w-5 h-5" />
    </a>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Intersection Observer to trigger animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe elements with the opacity-0 class
    document.querySelectorAll('.opacity-0').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <SectionCTA />
        <Features />
        <SectionCTA />
        <HowItWorks />
        <SectionCTA />
        <Testimonials />
        <SectionCTA />
        <FAQ />
        <SectionCTA />
        <Legal />
      </main>
      
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
