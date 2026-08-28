// src/components/AiChatAssistant.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export const AiChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I'm Pooja's AI assistant. Ask me anything about her background, projects, technical skills, or certifications!" },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'Tell me about your SDE internship',
    'What AI/ML models have you trained?',
    'What are your database skills?',
    'How can I get in touch?',
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setInput('');
    setIsTyping(true);

    // AI Reasoning matching Pooja's background
    setTimeout(() => {
      let botResponse = '';
      const query = text.toLowerCase();

      if (query.includes('intern') || query.includes('experience') || query.includes('work') || query.includes('arkashine')) {
        botResponse = "Pooja worked as an SDE Intern at ArkaShine Innovations Pvt. Ltd. (Apr - Jul 2026). She designed end-to-end FastAPI backends with JWT authentication, optimized PostgreSQL queries, and built carbon credit predictors using XGBoost and OCR agriculture extractors.";
      } else if (query.includes('project') || query.includes('build') || query.includes('model') || query.includes('train')) {
        botResponse = "Pooja has built several core AI/ML & computer vision projects, including:\n1. AI Climate Intelligence & Carbon Credit Ecosystem (React Native, FastAPI, XGBoost)\n2. HarvestLenz - Fruit Quality Grading (YOLOv8, CNN, Flutter)\n3. Soil Nutrient Prediction Platform (OCR, FastAPI, Scikit-learn)\n4. Automatic Number Plate Recognition (OpenCV, OCR).";
      } else if (query.includes('skill') || query.includes('languages') || query.includes('stack') || query.includes('database')) {
        botResponse = "Her technology stack includes:\n• Languages: Python, Java, JavaScript, SQL\n• Backends: FastAPI, REST APIs, JWT Auth, Docker\n• AI & ML: YOLOv8, CNN, OpenCV, OCR, Scikit-learn, Pandas\n• Databases: PostgreSQL, MySQL, SQLite, MongoDB Atlas.";
      } else if (query.includes('contact') || query.includes('touch') || query.includes('hire') || query.includes('phone') || query.includes('email')) {
        botResponse = "You can contact Pooja directly via email at poojasattigeri83@gmail.com or by phone at +91-7996146695. She is based in Bengaluru, India. Her LinkedIn is linkedin.com/in/pooja-sattigeri-a86a36373.";
      } else if (query.includes('certification') || query.includes('aws') || query.includes('oracle') || query.includes('study') || query.includes('education') || query.includes('mca')) {
        botResponse = "Pooja holds an MCA from KLE Technological University (CGPA 8.66/10) and a BCA from KLS Gogte College (CGPA 8.42/10). She is an AWS Certified Cloud Practitioner and holds Oracle OCI AI Foundations certifications.";
      } else {
        botResponse = "I can answer questions regarding Pooja's backend development experience (FastAPI), machine learning projects (YOLOv8, XGBoost, OpenCV), certifications (AWS Cloud Practitioner), or contact details. Try asking about her SDE internship!";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-blue-500/50 hover:border-blue-500 dark:hover:border-[#2563eb] text-blue-600 dark:text-cyan-400 rounded-full flex items-center justify-center shadow-lg dark:shadow-black/80 text-lg cursor-pointer focus:outline-none transition-colors duration-300"
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 right-0 w-[330px] sm:w-[360px] h-[450px] border border-slate-200 dark:border-blue-500/40 bg-white dark:bg-[#0b132b] rounded-sm flex flex-col shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden transition-colors duration-500"
          >
            {/* Header */}
            <div className="bg-slate-100 dark:bg-[#0f172a] border-b border-slate-200 dark:border-blue-500/25 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-mono tracking-wider font-semibold text-slate-800 dark:text-white">POOJA_BOT v1.0 //</span>
              </div>
              <span className="text-[9px] font-mono text-slate-400 dark:text-blue-400">AGENT STATUS: ON</span>
            </div>

            {/* Message Buffer */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 flex flex-col">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[82%] p-3 text-[11.5px] font-sans leading-relaxed rounded-sm ${
                    m.sender === 'user'
                      ? 'bg-blue-500 dark:bg-[#1e293b] text-white border border-blue-600 dark:border-blue-500/20 align-self-end self-end'
                      : 'bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-300 border border-slate-250 dark:border-blue-500/10 align-self-start self-start'
                  }`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {m.text}
                </div>
              ))}

              {isTyping && (
                <div className="bg-slate-50 dark:bg-[#0f172a] text-slate-400 dark:text-blue-400 border border-slate-200 dark:border-blue-500/10 self-start max-w-[82%] p-3 text-[11px] font-mono animate-pulse">
                  Querying database weights...
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions Chips */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-slate-200 dark:border-blue-500/15 bg-slate-100 dark:bg-[#080706] flex flex-wrap gap-1.5">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-[9.5px] font-sans border border-slate-200 dark:border-blue-500/30 hover:border-blue-500 dark:hover:border-[#2563eb] px-2.5 py-1 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white rounded-sm transition-colors text-left bg-white dark:bg-black cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t border-slate-200 dark:border-blue-500/25 bg-slate-50 dark:bg-[#0F0D0B] flex items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Pooja's AI..."
                className="flex-1 bg-white dark:bg-black border border-slate-200 dark:border-blue-500/20 focus:border-blue-500 dark:focus:border-[#2563eb] px-3 py-2 text-xs text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-[#3b82f6]/50 outline-none rounded-sm transition-colors font-mono"
              />
              <button
                type="submit"
                className="ml-2 bg-slate-100 dark:bg-[#1e293b] border border-slate-200 dark:border-blue-500/40 text-blue-600 dark:text-cyan-400 px-3.5 py-2 text-xs font-mono uppercase hover:border-blue-500 dark:hover:border-[#2563eb] hover:text-blue-700 dark:hover:text-white transition-colors cursor-pointer"
              >
                Send
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AiChatAssistant;
