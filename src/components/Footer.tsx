
import React from 'react';
import { Presentation, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'PPT Presentation Crafter', href: 'https://chatgpt.com/g/g-3Py9TlUa1-ppt-presentation-crafter' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: 'https://openai.com/policies/privacy-policy/' },
    { name: 'Terms of Service', href: 'https://aiwebtools.lovable.app/disclaimers' },
  ];

  return (
    <footer className="bg-cyber-black border-t border-cyber-blue/20 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-cyber-blue/30 bg-cyber-dark">
                <Presentation className="w-6 h-6 text-cyber-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">PPT Presentation Crafter</h3>
                <p className="text-xs text-cyber-blue">Presented by <a href="https://www.aiwebtools.ai" className="hover:underline">AiWebTools.Ai</a></p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Create stunning, professional presentations in minutes with our AI-powered presentation crafter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-white/70 hover:text-cyber-blue transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="flex items-center space-x-2 text-sm text-white/70 hover:text-cyber-blue transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="flex items-center space-x-2 text-sm text-white/70 hover:text-cyber-blue transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="text-center mb-8 py-4 border border-cyber-blue/20 rounded-lg bg-cyber-blue/5">
          <p className="text-xs text-white/60">
            This tool is for informational, educational, and research purposes only.
          </p>
        </div>

        {/* Legal and Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs text-white/50 hover:text-cyber-blue transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <a href="https://www.aiwebtools.ai" className="text-xs text-white/50 hover:text-cyber-blue">
            © {currentYear} AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>

        {/* More AI Tools Button - Updated with solid background */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://www.aiwebtools.ai" 
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-cyber-blue hover:brightness-110 transition-all duration-300 shadow-lg"
          >
            More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
