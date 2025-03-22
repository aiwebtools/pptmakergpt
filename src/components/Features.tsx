
import React from 'react';
import { 
  Search, 
  Code, 
  LineChart, 
  ImageIcon, 
  FileText, 
  Download, 
  CheckCircle, 
  Zap 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-cyber-blue" />,
      title: 'Web Search',
      description: 'Access the latest information by searching the web to create data-rich, up-to-date presentations.'
    },
    {
      icon: <Code className="w-6 h-6 text-cyber-purple" />,
      title: 'Python Code',
      description: 'Generate custom graphs, charts, and diagrams using Python for professional data visualization.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-cyber-yellow" />,
      title: 'Data Analysis',
      description: 'Transform complex data into clear insights with built-in analysis capabilities.'
    },
    {
      icon: <ImageIcon className="w-6 h-6 text-cyber-blue" />,
      title: 'JPEG Images',
      description: 'Create stunning, presentation-ready images perfectly formatted for PowerPoint slides.'
    },
    {
      icon: <FileText className="w-6 h-6 text-cyber-purple" />,
      title: 'Complete Content',
      description: 'Generate comprehensive slide text with perfectly structured outlines and formatting.'
    },
    {
      icon: <Download className="w-6 h-6 text-cyber-yellow" />,
      title: 'Download Ready',
      description: 'Download presentation-ready PPTX files that are immediately usable in Microsoft PowerPoint.'
    },
  ];

  return (
    <section className="py-24 bg-cyber-dark bg-grid-large relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyber-blue/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-xs font-medium text-white mb-4">
            <Zap className="w-4 h-4 text-cyber-blue" />
            <span>Powerful Features</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need For <span className="text-gradient-blue">Perfect Presentations</span></h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            PPT Presentation Crafter combines powerful AI capabilities to build comprehensive presentations from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-card p-6 rounded-lg hover:shadow-[0_0_15px_rgba(15,239,253,0.2)] transition-all duration-300 group h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-cyber-blue/30 transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-300">{feature.title}</h4>
              <p className="text-white/70 flex-grow">{feature.description}</p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center">
                <CheckCircle className="w-4 h-4 text-cyber-blue mr-2" />
                <span className="text-sm text-white/50">Included in all presentations</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
