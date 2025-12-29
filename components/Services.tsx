
import { Camera, Image as ImageIcon, Film, Star, Sparkles } from 'lucide-react';
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Camera': return <Camera className="w-10 h-10" />;
      case 'Image': return <ImageIcon className="w-10 h-10" />;
      case 'Film': return <Film className="w-10 h-10" />;
      default: return <Star className="w-10 h-10" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-amber-500 uppercase tracking-widest text-xs font-bold mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl serif mb-6">Unrivaled Production Quality</h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            We blend cinematic technology with artistic vision to document your story with the depth and elegance it deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`group relative p-10 bg-white/5 border rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                service.id === 'max' 
                  ? 'border-amber-500/50 bg-white/10 shadow-[0_0_30px_rgba(217,119,6,0.15)]' 
                  : 'border-white/10 hover:bg-white/10'
              }`}
            >
              {service.id === 'max' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-900 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] z-10 whitespace-nowrap flex items-center shadow-lg">
                  <Sparkles className="w-3 h-3 mr-1" />
                  SDE Feature Included
                </div>
              )}
              
              <div className="text-amber-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                {getIcon(service.icon)}
              </div>
              
              <h3 className="text-2xl serif mb-4 flex items-center">
                {service.title}
                {service.id === 'max' && <span className="ml-2 inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse" />}
              </h3>
              
              <p className="text-white/60 font-light mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm font-medium text-amber-500/80">{service.priceRange}</span>
                <a href="#contact" className="text-xs uppercase tracking-widest hover:text-amber-500 transition-colors font-bold">Details →</a>
              </div>

              {service.id === 'max' && (
                <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <p className="text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-1">Exclusive Bonus</p>
                  <p className="text-xs text-white/80 font-light italic">"The Same Day Edit is the heart of our VIP experience, letting you relive your morning during the dinner reception."</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
