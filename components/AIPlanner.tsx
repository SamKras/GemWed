
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { Message } from '../types';

const AIPlanner: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome. I am Sam\'s AI Concierge. How can I assist you in crafting your dream wedding production today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const responseText = await getChatResponse(messages, input);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  return (
    <section id="planner" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-50 rounded-full text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Experience</span>
          </div>
          <h2 className="text-4xl serif mb-4">Your AI Wedding Concierge</h2>
          <p className="text-stone-500 max-w-xl mx-auto">Ask about Sam's style, brainstorm cinematic shots, or get planning tips instantly.</p>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px] border border-stone-100">
          {/* Chat Header */}
          <div className="p-4 bg-stone-50 border-b border-stone-100 flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white">
              <Bot size={24} />
            </div>
            <div>
              <p className="font-semibold text-stone-800">Sam's Assistant</p>
              <p className="text-xs text-green-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                Online & Ready
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl flex space-x-3 ${msg.role === 'user' ? 'bg-amber-600 text-white rounded-br-none' : 'bg-white shadow-sm border border-stone-100 text-stone-800 rounded-bl-none'}`}>
                  <div className="mt-1">
                    {msg.role === 'user' ? <User size={18} /> : <Bot size={18} className="text-amber-600" />}
                  </div>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 space-x-2 flex">
                  <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Sam's cinematography styles..."
                className="flex-1 px-4 py-3 bg-stone-50 border border-stone-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="w-12 h-12 bg-stone-800 hover:bg-amber-600 disabled:bg-stone-300 text-white rounded-full flex items-center justify-center transition-all"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;
