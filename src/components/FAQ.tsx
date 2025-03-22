
import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does PPT Presentation Crafter create presentations?",
      answer: "PPT Presentation Crafter uses advanced AI to create presentations through a systematic step-by-step process. It develops a detailed content outline, establishes formatting guidelines, creates each slide with written content and visuals, combines all slides, allows for revisions, and provides the final downloadable PowerPoint file."
    },
    {
      question: "What kinds of visuals can the AI create for my presentations?",
      answer: "The AI can create a wide range of visuals including custom diagrams, charts, graphs using Python, and high-quality images using DALL-E. All visuals are formatted as JPEGs to ensure compatibility with PowerPoint. The tool adapts the visual style to match your presentation theme and content requirements."
    },
    {
      question: "Do I need any technical knowledge to use this tool?",
      answer: "No technical knowledge is required. The AI handles all technical aspects including coding, data visualization, and image generation. You simply provide your topic and requirements, and the AI guides you through the process with clear instructions and prompts for feedback."
    },
    {
      question: "Can I edit the presentations after they're created?",
      answer: "Yes! The presentations are delivered as standard PowerPoint (.pptx) files that you can open and edit in Microsoft PowerPoint or any compatible presentation software. You have full control to make any adjustments to text, images, formatting, or structure after receiving the file."
    },
    {
      question: "How many slides can the AI create for a single presentation?",
      answer: "The AI can create presentations of any length based on your requirements. You can specify the number of slides you need, and the AI will structure the content accordingly. For complex topics, it can create comprehensive presentations with dozens of slides."
    },
    {
      question: "Can the AI incorporate my brand colors and style guidelines?",
      answer: "Yes, the AI can incorporate your brand colors, fonts, and style guidelines. During the formatting outline phase, you can specify your brand requirements, and the AI will ensure all slides follow these guidelines consistently throughout the presentation."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-cyber-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-cyber-blue/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-xs font-medium text-white mb-4">
            <HelpCircle className="w-4 h-4 text-cyber-blue" />
            <span>Frequently Asked Questions</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Got <span className="text-gradient-blue">Questions?</span></h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Find answers to the most common questions about PPT Presentation Crafter.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="cyber-card rounded-lg border-none opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-cyber-blue transition-colors duration-200 text-left">
                <span>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
