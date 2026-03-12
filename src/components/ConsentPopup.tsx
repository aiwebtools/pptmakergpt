
import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('ppt-crafter-consent');
    
    if (!hasConsented) {
      // Small delay for better user experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('ppt-crafter-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="cyber-card max-w-md w-full p-6 rounded-lg animate-slide-up">
        <div className="flex items-start mb-4">
          <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center mr-4">
            <ShieldCheck className="w-5 h-5 text-cyber-blue" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Consent Required</h2>
            <p className="text-white/70 text-sm">Please review and agree to the following before using our service:</p>
          </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-md p-4 mb-6">
          <p className="text-sm text-white/80 leading-relaxed">
            By using PPT Presentation Crafter, you agree to our <a href="https://openai.com/policies/privacy-policy/" className="text-cyber-blue hover:underline">Privacy Policy</a> and <a href="https://aiwebtools.lovable.app/disclaimers" className="text-cyber-blue hover:underline">Terms of Service</a>. 
            The tool uses AI to generate content and may process your inputs to create presentations. 
            You are responsible for reviewing all generated content before use in professional or commercial contexts.
          </p>
        </div>
        
        <button 
          onClick={handleConsent} 
          className="w-full py-3 px-4 bg-cyber-blue text-cyber-black font-medium rounded-md hover:brightness-110 transition-all duration-300"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default ConsentPopup;
