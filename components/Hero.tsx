
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Background Media */}
      <img 
        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
        alt="Wedding Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <span className="text-white/80 uppercase tracking-[0.4em] text-xs md:text-sm mb-4 block animate-fade-in-up">Crafting Eternal Legacies</span>
        <h1 className="text-5xl md:text-8xl text-white serif mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Capturing the Art of <br /> <span className="italic font-light">True Love</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Sam Krasilnikov is a boutique production studio dedicated to the world's most exquisite celebrations. We don't just film weddings; we create masterpieces.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#contact" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-all transform hover:scale-105">
            Book the Season
          </a>
          <a href="#portfolio" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-medium transition-all">
            View Our Work
          </a>
        </div>
      </div>

      <a href="#portfolio" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
