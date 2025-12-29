
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className={`w-6 h-6 ${isScrolled ? 'text-stone-800' : 'text-white'}`} fill="currentColor" />
          <span className={`text-2xl font-bold serif tracking-wider ${isScrolled ? 'text-stone-800' : 'text-white'}`}>SAM KRASILNIKOV</span>
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>
          <a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
          <a href="#planner" className="hover:text-amber-500 transition-colors">AI Planner</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors border-b border-amber-500 pb-1">Book Now</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? 'text-stone-800' : 'text-white'} /> : <Menu className={isScrolled ? 'text-stone-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg p-6 flex flex-col space-y-4 animate-fade-in-up">
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-stone-800 font-medium">Portfolio</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-stone-800 font-medium">Services</a>
          <a href="#planner" onClick={() => setIsMenuOpen(false)} className="text-stone-800 font-medium">AI Planner</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-stone-800 font-bold text-amber-600">Book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
