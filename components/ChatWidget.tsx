import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { chatWithResume } from '../services/geminiService';
import { ChatMessage } from '../types';

const createMessage = (role: ChatMessage['role'], text: string): ChatMessage => ({
  role,
  text,
  timestamp: new Date(),
});

const getAvatarClassName = (role: ChatMessage['role']) => (
  role === 'user'
    ? 'bg-amber-200 text-stone-950'
    : 'bg-stone-800 text-stone-100'
);

const getBubbleClassName = (role: ChatMessage['role']) => (
  role === 'user'
    ? 'bg-amber-200 text-stone-950 rounded-br-none'
    : 'bg-stone-950 text-stone-100 rounded-bl-none border border-stone-800'
);

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    createMessage('model', 'Ask about projects, skills, or research.'),
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = createMessage('user', inputValue);
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await chatWithResume(userMsg.text);
      const modelMsg = createMessage('model', responseText);

      setMessages(prev => [...prev, modelMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] bg-[#111111] border border-stone-700 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-stone-950 p-4 border-b border-stone-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400" />
              <span className="font-semibold text-white">Project Q&A</span>
              <span className="text-xs text-stone-400 border border-stone-700 px-2 py-0.5">resume-based</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#151515]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${getAvatarClassName(msg.role)}`}>
                  {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${getBubbleClassName(msg.role)}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                 <div className="w-8 h-8 bg-stone-800 flex items-center justify-center flex-shrink-0">
                  <Bot size={14} />
                </div>
                <div className="bg-stone-950 border border-stone-800 px-4 py-3 rounded-2xl rounded-bl-none">
                  <Loader2 className="w-4 h-4 animate-spin text-stone-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#111111] border-t border-stone-800">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about a project..."
                className="w-full bg-stone-950 text-stone-100 placeholder-stone-500 pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200/40 border border-stone-700"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-2 p-1.5 bg-amber-200 text-stone-950 hover:bg-amber-100 disabled:opacity-50 disabled:hover:bg-amber-200 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-12 h-12 bg-stone-950 border border-stone-700 text-amber-200 shadow-lg shadow-black/30 transition-all duration-300 hover:border-amber-200 active:scale-95"
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageSquare className="text-white" size={24} />
        )}
        
        {/* Tooltip hint if closed */}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-stone-900 px-3 py-1.5 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask projects
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
