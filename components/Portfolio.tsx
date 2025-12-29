
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'LeroMovie', 'Personal'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  const openVideo = (videoId?: string) => {
    if (videoId) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl serif mb-4">Our Gallery</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest transition-all ${filter === cat ? 'text-amber-600 font-bold border-b-2 border-amber-600' : 'text-stone-400 hover:text-stone-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              onClick={() => openVideo(item.videoId)}
              className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/5] cursor-pointer"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Play fill="currentColor" size={24} />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] mb-2 text-amber-400">{item.category}</span>
                <h3 className="text-3xl serif mb-1">{item.title}</h3>
                <p className="text-sm font-light italic">{item.location}</p>
                <button className="mt-6 px-6 py-2 border border-white/40 hover:bg-white hover:text-stone-800 transition-colors rounded-full text-xs uppercase tracking-widest">
                  Watch Film
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
