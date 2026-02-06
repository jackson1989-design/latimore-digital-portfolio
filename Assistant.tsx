
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Loader2, User, Bot, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AssistantProps {
  onClose: () => void;
  userData: any;
}

const Assistant: React.FC<AssistantProps> = ({ userData }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Welcome. I'm Jackson's Legacy Advisor. How can I assist you with life insurance or asset protection today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        You are the "Legacy Advisor," a professional, highly responsive AI assistant for Latimore Life & Legacy LLC.
        
        Brand Context:
        - Owner: Jackson M. Latimore Sr.
        - Slogan: "Protecting Today. Securing Tomorrow."
        - Hashtag: #TheBeatGoesOn
        - Focus: Life Insurance, Asset Protection, Final Expense, Term, and Whole Life.

        User Query: ${userMessage}

        Instructions:
        - Maintain a dignified, professional, and compassionate tone.
        - Provide brief, helpful insights into insurance concepts.
        - Encourage users to "Schedule a Review" with Jackson via his Calendly link for personalized advice.
        - Keep responses concise (under 60 words).
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-flash-lite-latest',
        contents: prompt,
      });

      const aiText = response.text || "I'm having a connection issue. Please use the contact buttons on the main screen to reach Jackson directly.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm experiencing a technical delay. Please contact Jackson directly using the 'Email' or 'Schedule' buttons." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
              msg.role === 'user' 
                ? 'bg-[#1D3A5F] text-white rounded-tr-none' 
                : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
            }`}>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-50">
                {msg.role === 'user' ? 'Client' : 'Advisor'}
              </div>
              <div className="text-sm leading-relaxed">{msg.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none flex items-center space-x-3 shadow-sm">
              <Sparkles size={14} className="text-[#C29D6F] animate-pulse" />
              <span className="text-xs text-slate-400 font-medium italic">Consulting legacy resources...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5 border-t bg-white">
        <div className="flex space-x-2 bg-slate-100 p-2 rounded-2xl">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about protection..."
            className="flex-1 bg-transparent border-none px-4 py-2 text-sm focus:outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-3 bg-[#1D3A5F] text-white rounded-xl hover:bg-[#C29D6F] transition-all disabled:opacity-50 shadow-md"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
