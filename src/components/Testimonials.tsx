
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      content: "This tool saved me hours of work. I needed a presentation for an important client meeting with just a day's notice, and PPT Presentation Crafter delivered a professional, data-rich deck that impressed everyone.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "University Professor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      content: "The quality of content and visuals is remarkable. I use this tool to create lecture slides, and my students have noticed the improvement. The AI understands academic concepts and presents them clearly.",
      rating: 5
    },
    {
      name: "Jessica Rivera",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      content: "I've used this for pitch decks and investor presentations. The tool's ability to generate compelling visuals and organize information strategically has directly contributed to our funding success.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-cyber-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyber-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cyber-black to-transparent"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyber-purple/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-xs font-medium text-white mb-4">
            <Star className="w-4 h-4 text-cyber-yellow" />
            <span>Success Stories</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users <span className="text-gradient-blue">Are Saying</span></h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how professionals from various industries are transforming their presentations with our AI-powered tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="cyber-card p-6 rounded-lg relative opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full cyber-card flex items-center justify-center text-cyber-yellow">
                <Quote className="w-4 h-4" />
              </div>
              
              <div className="flex flex-col h-full">
                <p className="text-white/80 mb-6 flex-grow">"{testimonial.content}"</p>
                
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-white/10">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                  
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-cyber-yellow fill-cyber-yellow" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
