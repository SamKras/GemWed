
import React, { useState } from 'react';
import { Calendar, Users, MapPin, Send } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '100-200',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our creative director will reach out within 24 hours.");
  };

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl serif mb-8">Secure Your Date</h2>
            <p className="text-stone-600 mb-12 text-lg font-light leading-relaxed">
              We only accept a limited number of weddings per year to ensure absolute perfection for every client. Fill out the form or reach out directly to start your journey with Sam Krasilnikov.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">Global Studio</h4>
                  <p className="text-stone-500 text-sm">Paris • Dubai • Lake Como</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">Availability</h4>
                  <p className="text-stone-500 text-sm">Booking now for 2026 & 2027</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-stone-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  placeholder="Jane & John"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-stone-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  placeholder="hello@example.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-stone-400 mb-2">Event Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-stone-400 mb-2">Guest Count</label>
                <select 
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  <option>Under 50</option>
                  <option>50 - 150</option>
                  <option>150 - 300</option>
                  <option>300+</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs uppercase tracking-widest font-bold text-stone-400 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="Tell us about your vision..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button className="w-full py-4 bg-stone-800 hover:bg-amber-600 text-white rounded-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2">
              <Send size={18} />
              <span>Send Inquiry</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
