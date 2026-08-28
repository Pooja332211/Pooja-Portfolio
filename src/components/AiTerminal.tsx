import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export const AiTerminal: React.FC = () => {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState('');
  const [booting, setBooting] = useState(true);
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const availableCommands = [
    { cmd: 'whoami', desc: 'Display active agent profile signature' },
    { cmd: 'about', desc: 'Show developer background summary' },
    { cmd: 'skills', desc: 'List specialized technical stack items' },
    { cmd: 'projects', desc: 'Query active AI/ML & backend repository logs' },
    { cmd: 'certifications', desc: 'Verify cloud & academic credentials' },
    { cmd: 'experience', desc: 'Trace internship & education milestones' },
    { cmd: 'contact', desc: 'Establish direct communication coordinates' },
    { cmd: 'resume', desc: 'Initiate secure PDF resume payload retrieval' },
    { cmd: 'help', desc: 'Display all available command vectors' },
    { cmd: 'clear', desc: 'Flush terminal buffer logs' },
  ];

  useEffect(() => {
    if (booting) {
      const logs = [
        'INITIALIZING NEURAL TRANSLATION PROTOCOL...',
        'CONNECTING SYSTEM NODE: SECURE_AGY_V8...',
        'CHECKING HARDWARE ACCELERATION: CUDA ENABLED...',
        'LOADING POOJA_SATTIGERI_BRAIN_MATRIX.db...',
        'ESTABLISHING ENCRYPTED SHELL GATEWAY...',
        'STATUS: SECURE DISPATCH ACTIVE AND ONLINE.',
      ];
      let delay = 0;
      logs.forEach((log, index) => {
        setTimeout(() => {
          setBootLogs((prev) => [...prev, log]);
          if (index === logs.length - 1) {
            setTimeout(() => setBooting(false), 600);
          }
        }, delay);
        delay += 300;
      });
    }
  }, [booting]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, bootLogs, booting]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let response: React.ReactNode;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1.5 text-slate-400 dark:text-slate-300 font-mono mt-1">
            <p className="text-[#2563eb] font-semibold">// AVAILABLE DIRECTIVES:</p>
            {availableCommands.map((c) => (
              <div key={c.cmd} className="grid grid-cols-4 gap-4 pl-4 text-xs">
                <span className="text-white font-bold">{c.cmd}</span>
                <span className="col-span-3 text-slate-600 dark:text-slate-300">{c.desc}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="space-y-2 mt-1">
            <p className="text-white font-bold">POOJA SATTIGERI</p>
            <p className="text-xs text-slate-600 dark:text-slate-300">Software Development Engineer | Backend Developer | AI/ML Enthusiast</p>
            <p className="text-xs text-[#2563eb]">// STATUS: Seeking Software Engineer or AI/ML Engineer Role.</p>
          </div>
        );
        break;

      case 'about':
        response = (
          <p className="text-slate-400 dark:text-slate-300 text-xs leading-relaxed mt-1">
            MCA graduate and Software Development Engineer Intern with hands-on experience building scalable backend services, full-stack applications, REST APIs, and machine learning pipelines. Specialized in FastAPI, Python, PostgreSQL, Docker, and OpenCV.
          </p>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 mt-1">
            <div>
              <span className="text-[#2563eb] font-bold">Languages:</span>
              <span className="text-white ml-2 text-xs">Python, Java, JavaScript, SQL</span>
            </div>
            <div>
              <span className="text-[#2563eb] font-bold">Backend:</span>
              <span className="text-white ml-2 text-xs">FastAPI, REST APIs, JWT Auth, API Development</span>
            </div>
            <div>
              <span className="text-[#2563eb] font-bold">AI/ML & CV:</span>
              <span className="text-white ml-2 text-xs">YOLOv8, CNN, OCR, Scikit-learn, Pandas</span>
            </div>
            <div>
              <span className="text-[#2563eb] font-bold">Databases:</span>
              <span className="text-white ml-2 text-xs">PostgreSQL, MySQL, SQLite, MongoDB</span>
            </div>
            <div>
              <span className="text-[#2563eb] font-bold">Tools:</span>
              <span className="text-white ml-2 text-xs">Docker, Git/GitHub, Linux, Postman</span>
            </div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-3 mt-1 text-xs">
            <div>
              <p className="text-white font-bold uppercase">01 // Climate Intelligence & Carbon Credit Ecosystem</p>
              <p className="text-slate-600 dark:text-slate-300 pl-4">Full-stack prediction platform using React Native, FastAPI, Scikit-learn, and XGBoost.</p>
            </div>
            <div>
              <p className="text-white font-bold uppercase">02 // HarvestLenz — AI Fruit Quality Grading System</p>
              <p className="text-slate-600 dark:text-slate-300 pl-4">Computer vision grading app incorporating YOLOv8 and CNNs with a Flutter client.</p>
            </div>
            <div>
              <p className="text-white font-bold uppercase">03 // AI Soil Intelligence & Nutrient Prediction</p>
              <p className="text-slate-600 dark:text-slate-300 pl-4">Precision agriculture platforms built using FastAPI, Pydantic, and OCR processing.</p>
            </div>
            <div>
              <p className="text-white font-bold uppercase">04 // Automatic Number Plate Recognition (ANPR)</p>
              <p className="text-slate-600 dark:text-slate-300 pl-4">Vehicle surveillance pipeline built with OpenCV and OCR license plate extraction.</p>
            </div>
          </div>
        );
        break;

      case 'certifications':
        response = (
          <div className="space-y-1 text-xs mt-1 text-slate-400 dark:text-slate-300">
            <p>• <span className="text-white">Oracle Cloud Infrastructure 2025 AI Foundations</span> Associate</p>
            <p>• <span className="text-white">AI Engineer Core Track:</span> LLM Engineering, RAG, QLoRA, Agents</p>
            <p>• <span className="text-white">Data Science & ML Certification</span> — Edureka</p>
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="space-y-3 mt-1 text-xs">
            <div>
              <p className="text-white font-bold">SOFTWARE DEVELOPMENT ENGINEER INTERN</p>
              <p className="text-[#2563eb]">ArkaShine Innovations Pvt. Ltd. | Apr 2026 – Jul 2026</p>
              <p className="text-slate-600 dark:text-slate-300 pl-2">• Built FastAPI services, JWT APIs, and XGBoost carbon estimation pipelines.</p>
            </div>
            <div>
              <p className="text-white font-bold">MASTER OF COMPUTER APPLICATIONS (MCA)</p>
              <p className="text-[#2563eb]">KLE Technological University | 2024 – 2026</p>
              <p className="text-slate-600 dark:text-slate-300 pl-2">• Focus: Data Structures, Algorithms, DBMS, System Design | CGPA: 8.66</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs mt-1 text-slate-400 dark:text-slate-300">
            <p><span className="text-[#2563eb]">Email:</span> poojasattigeri83@gmail.com</p>
            <p><span className="text-[#2563eb]">Phone:</span> +91 7996146695</p>
            <p><span className="text-[#2563eb]">Location:</span> Bengaluru, India</p>
            <p><span className="text-[#2563eb]">LinkedIn:</span> linkedin.com/in/pooja-sattigeri-a86a36373</p>
            <p><span className="text-[#2563eb]">GitHub:</span> github.com/Pooja332211</p>
          </div>
        );
        break;

      case 'resume':
        response = (
          <div className="mt-1">
            <p className="text-[#2563eb]">// RETRIEVING PAYLOAD...</p>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white underline hover:text-[#60a5fa] text-xs block mt-1"
            >
              [Click here to open and download resume.pdf]
            </a>
          </div>
        );
        break;

      default:
        response = <p className="text-red-500 mt-1">// COMMAND NOT RECOGNIZED. TYPE 'help' FOR DIRECTIONS.</p>;
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, response }]);
    setInput('');
  };



  return (
    <section 
      id="terminal" 
      className="relative w-screen min-h-screen bg-[#f8fafc] dark:bg-[#070b13] text-slate-800 dark:text-[#E8DFD8] py-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#2563eb]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / NEURAL TERMINAL
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#2563eb]/80 via-[#3b82f6]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-slate-200 dark:to-slate-400 dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              INTERACTIVE INTERFACE.
            </span>
            <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              DIRECT CORE QUERY.
            </span>
          </h2>
        </motion.div>

        {/* Terminal Box */}
        <div className="w-full h-[500px] border border-slate-300 dark:border-blue-500/35 rounded-sm bg-[#0f172a] dark:bg-[#020617] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.95)] relative group transition-colors duration-500 hover:border-blue-500 dark:hover:border-[#2563eb]/60">
          
          {/* Top Title Bar */}
          <div className="w-full bg-[#1e293b] dark:bg-[#0f172a] border-b border-slate-700 dark:border-blue-500/25 px-4 py-2.5 flex items-center justify-between font-mono text-[10px] tracking-wider text-slate-300 dark:text-slate-300">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
              <span className="pl-2">pooja@agent-shell:~</span>
            </div>
            <span className="text-[#3b82f6]">STATUS: ENCRYPTED_SHELL</span>
          </div>

          {/* Terminal Console Buffer */}
          <div className="flex-1 overflow-y-auto p-6 font-mono text-xs text-[#E8DFD8] space-y-4 select-text selection:bg-[#2563eb]/30">
            {booting ? (
              <div className="space-y-1 text-[#3b82f6]">
                {bootLogs.map((log, idx) => (
                  <p key={idx}>{log}</p>
                ))}
                <span className="inline-block w-2.5 h-4 bg-[#2563eb] animate-pulse" />
              </div>
            ) : (
              <>
                <div className="text-[#3b82f6] text-[11px] leading-relaxed">
                  <p>Welcome to Pooja Sattigeri's Interactive Core Shell v2.1.0.</p>
                  <p>Type <span className="text-[#2563eb] font-semibold">help</span> to view available instructions, or query about/skills/projects/experience.</p>
                </div>

                {/* History */}
                {history.map((h, i) => (
                  <div key={i} className="space-y-1 border-t border-[#3b82f6]/10 pt-2">
                    <div className="flex items-center text-[#2563eb]">
                      <span className="text-white/60 mr-1.5">➜</span>
                      <span className="font-bold">{h.command}</span>
                    </div>
                    <div>{h.response}</div>
                  </div>
                ))}

                {/* Input Prompt */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommand(input);
                  }}
                  className="flex items-center text-white"
                >
                  <span className="text-[#2563eb] mr-1.5 font-bold">➜</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="query terminal..."
                    className="flex-1 bg-transparent outline-none border-none text-white text-xs font-mono caret-[#2563eb]"
                    autoFocus
                  />
                </form>
              </>
            )}
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTerminal;
