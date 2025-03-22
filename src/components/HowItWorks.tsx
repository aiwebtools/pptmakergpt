
import React from 'react';
import { 
  ClipboardList, 
  PaintBucket, 
  Image, 
  FileInput, 
  Edit, 
  FileDown,
  Check 
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6 text-cyber-blue" />,
      title: 'Content Outline',
      description: 'The AI creates a detailed content outline with main points for each slide, ensuring a coherent and focused presentation.'
    },
    {
      icon: <PaintBucket className="w-6 h-6 text-cyber-purple" />,
      title: 'Formatting Plan',
      description: 'Clear formatting guidelines for consistency, including layout, colors, fonts, and measurements for a professional look.'
    },
    {
      icon: <Image className="w-6 h-6 text-cyber-yellow" />,
      title: 'Slide Creation',
      description: 'Each slide is crafted individually with written content and AI-generated visualizations optimized for PowerPoint.'
    },
    {
      icon: <FileInput className="w-6 h-6 text-cyber-blue" />,
      title: 'Combine Slides',
      description: 'All slides are compiled into a complete PowerPoint presentation with consistent formatting and flow.'
    },
    {
      icon: <Edit className="w-6 h-6 text-cyber-purple" />,
      title: 'Review & Revise',
      description: 'Make any adjustments to content, formatting, or visuals as needed to perfect your presentation.'
    },
    {
      icon: <FileDown className="w-6 h-6 text-cyber-yellow" />,
      title: 'Final Download',
      description: 'Download your ready-to-use PowerPoint presentation with all content, images, and formatting in place.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-cyber-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-cyber-purple/10 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-cyber-blue/10 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-xs font-medium text-white mb-4">
            <Check className="w-4 h-4 text-cyber-blue" />
            <span>Step-by-Step Process</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">How <span className="text-gradient-purple">PPT Presentation Crafter</span> Works</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our AI follows a systematic approach to create comprehensive, professional presentations that are ready to use or customize.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-[39px] top-12 bottom-12 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-yellow hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start opacity-0 animate-slide-up" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full cyber-card flex items-center justify-center z-10 bg-cyber-dark">
                  {step.icon}
                </div>
                
                <div className="cyber-card p-6 rounded-lg flex-grow">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Step {index + 1}: {step.title}
                  </h4>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
