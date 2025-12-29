
import React from 'react';
import { Heart, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <Heart className="w-6 h-6 text-stone-800" fill="currentColor" />
            <span className="text-2xl font-bold serif tracking-wider text-stone-800">SAM KRASILNIKOV</span>
          </div>

          <div className="flex space-x-12 text-sm uppercase tracking-widest text-stone-500">
            <a href="#portfolio" className="hover:text-amber-600 transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#planner" className="hover:text-amber-600 transition-colors">AI Planner</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
          </div>

          <div className="flex space-x-6 mt-8 md:mt-0">
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-8 text-center">
          <p className="text-stone-400 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Sam Krasilnikov Wedding Production. All rights reserved. 
            <span className="mx-2">|</span> 
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
