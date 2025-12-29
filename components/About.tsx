
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-50 rounded-full -z-10" />
            <img 
              src="https://github.com/SamKras/Wedding-website/blob/main/477319052_565477909856619_5447899648582230528_n.jpg?raw=true" 
              alt="Sam Krasilnikov - Lead Videographer" 
              className="rounded-2xl shadow-2xl z-10 relative w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-8 rounded-2xl hidden md:block">
              <p className="serif text-3xl italic">"10+ Years"</p>
              <p className="text-xs uppercase tracking-widest text-amber-500">Of Storytelling</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-amber-600 uppercase tracking-widest text-xs font-bold mb-4 block">The Director</span>
            <h2 className="text-4xl md:text-5xl serif mb-6">Hi, I'm Sam.</h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed mb-6">
              I believe that every wedding is a unique cinematic universe. My goal isn't just to record events, but to capture the invisible threads of emotion between people. 
            </p>
            <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
              When you watch your film 20 years from now, I want you to feel the same excitement, the same scent of flowers, and the same tears of joy as you did on that day. We don't just make videos; we preserve your legacy.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase mb-2">My Approach</h4>
                <p className="text-stone-500 text-sm">Invisible presence, authentic moments, editorial style.</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase mb-2">Location</h4>
                <p className="text-stone-500 text-sm">Based in Europe & USA, traveling anywhere love takes us.</p>
              </div>
            </div>
            <a href="#contact" className="inline-block border-b-2 border-amber-600 pb-1 font-bold text-stone-800 hover:text-amber-600 transition-colors uppercase tracking-widest text-xs">
              Let's Create Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
