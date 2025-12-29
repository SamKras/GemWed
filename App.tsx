
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import AIPlanner from './components/AIPlanner';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <AIPlanner />
      <BookingForm />
      <Footer />
      
      {/* Scroll to Top helper / Float CTA */}
      <a 
        href="#contact" 
        className="fixed bottom-8 right-8 z-40 bg-amber-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold uppercase tracking-widest text-xs hover:bg-amber-700 transition-all transform hover:scale-110 active:scale-95 flex items-center space-x-2"
      >
        <span>Check Availability</span>
      </a>
    </main>
  );
};

export default App;
