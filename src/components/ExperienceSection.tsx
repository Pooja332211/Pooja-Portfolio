// src/components/ExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const milestones: RouteStop[] = [
  {
    id: '01',
    year: 'JULY 2026',
    title: 'AI ENGINEER CORE TRACK CERTIFICATION',
    organization: 'UDEMY',
    description: 'Completed comprehensive training in LLM Engineering, Retrieval-Augmented Generation (RAG), QLoRA, and autonomous AI Agents.',
  },
  {
    id: '02',
    year: '2025',
    title: 'INFOSYS HACKATHON WINNER',
    organization: 'INFOSYS (HUBLI)',
    description: 'Built an E-Waste Management solution promoting circular economy practices; applied design thinking and rapid prototyping in a collaborative team environment.',
  },
  {
    id: '03',
    year: '2024 - 2026',
    title: 'MASTER OF COMPUTER APPLICATIONS (MCA)',
    organization: 'KLE TECHNOLOGICAL UNIVERSITY',
    description: 'Deepened knowledge in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and System Design with a 8.66/10 CGPA.',
  },
  {
    id: '04',
    year: '2021 - 2024',
    title: 'BACHELOR OF COMPUTER APPLICATIONS (BCA)',
    organization: 'KLS GOGTE COLLEGE',
    description: 'Built a strong foundation in Object-Oriented Programming, database architectures, and software engineering with a 8.42/10 CGPA.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const builtPipelines = [
    {
      title: 'API DEVELOPMENT',
      steps: ['FastAPI', 'REST APIs', 'JWT Authentication'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'DATA LAYER',
      steps: ['FastAPI', 'PostgreSQL / MySQL', 'Data Management'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'INTELLIGENT DOCUMENT PROCESSING',
      steps: ['Documents', 'OCR Engine', 'Structured Data Extraction'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'AUTOMATION',
      steps: ['Weather API', 'Data Processing', 'Automated PDF Reports'],
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'DEVELOPMENT WORKFLOW',
      steps: ['Git/GitHub', 'Docker', 'Postman', 'Deployment Ready'],
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const highlights = [
    { title: 'Backend API Development', desc: 'Designed high-concurrency routes using FastAPI and Python.' },
    { title: 'Authentication and Authorization', desc: 'Secure endpoints with JSON Web Tokens (JWT) and cookies.' },
    { title: 'Database Design', desc: 'Optimized schema relations, indexes, and migrations in PostgreSQL/MySQL.' },
    { title: 'OCR and Document Processing', desc: 'Extracted raw documents to structured JSON payloads using OCR.' },
    { title: 'Third-Party API Integration', desc: 'Connected external weather, location, and data endpoints seamlessly.' },
    { title: 'Automated Report Generation', desc: 'Programmatically created high-fidelity PDF analytics reports.' },
    { title: 'Docker and Containerization', desc: 'Ensured deployment-ready consistency using Docker environments.' },
    { title: 'API Testing', desc: 'Validated routes, rate-limits, and responses using Postman testing suites.' },
    { title: 'Version Control', desc: 'Maintained production branches and codebase integrity with Git/GitHub.' },
  ];

  const growthItems = [
    { title: 'Maintainable Backend APIs', desc: 'Structuring clean route handlers and scalable backend architectures.' },
    { title: 'Enterprise-grade Auth', desc: 'Implementing standard JWT tokens, route protection, and CORS policies.' },
    { title: 'Advanced DB Schemas', desc: 'Moving from simple tables to optimized, normalized database architectures.' },
    { title: 'Automation & Integration', desc: 'Building cron tasks, automated report dispatchers, and external API workers.' },
    { title: 'Industry Tools', desc: 'Working with Docker containers, Postman API testing, and Git version control workflows.' },
    { title: 'Production Readiness', desc: 'Understanding testing, security, and packaging for real-world deployments.' },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[#f8fafc] dark:bg-[#070b13] text-slate-800 dark:text-[#E8DFD8] font-sans selection:bg-blue-200 dark:selection:bg-[#cbb59d] selection:text-black py-24 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/[0.02] dark:bg-[#2563eb]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-blue-600 dark:text-cyan-400"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-blue-500 dark:from-blue-600/80 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-slate-200 dark:to-slate-400 dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              PROFESSIONAL
            </span>
            <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              EXPERIENCE.
            </span>
          </h2>
        </motion.div>

        {/* ==================== PART 1: THE INTERNSHIP SHOWCASE ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-2xl border border-slate-200 dark:border-blue-500/35 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-lg p-8 sm:p-12 shadow-sm dark:shadow-[0_25px_75px_rgba(0,0,0,0.95)] group overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(59,130,246,0.06)] dark:hover:shadow-[0_20px_70px_rgba(34,211,238,0.12)] mb-16 relative"
        >
          {/* Top Border Light Flare */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 dark:via-cyan-400/80 to-transparent" />
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-350 dark:border-cyan-500/40 group-hover:border-cyan-400 transition-colors" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-350 dark:border-cyan-500/40 group-hover:border-cyan-400 transition-colors" />

          {/* Internship Meta */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-slate-150 dark:border-blue-900/30">
            <div>
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-cyan-400 tracking-[0.2em] uppercase">
                  // INDUSTRY EXPERIENCE INTERNSHIP
                </span>
              </div>
              <h3 
                className="text-3xl sm:text-4.5xl font-normal tracking-wide text-slate-800 dark:text-white uppercase leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Software Development Engineer Intern
              </h3>
              <p className="text-[12.5px] font-medium text-slate-500 dark:text-slate-300 mt-1.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                ArkaShine Innovations Pvt. Ltd. <span className="text-blue-500 dark:text-cyan-400 mx-2">•</span> Bengaluru, India
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right shrink-0">
              <span className="inline-block px-3.5 py-1.5 text-[9.5px] font-mono tracking-widest text-slate-700 dark:text-cyan-300 bg-slate-100 dark:bg-[#020617]/50 border border-slate-200 dark:border-blue-900/40 rounded-sm">
                APR 2026 - JUL 2026
              </span>
            </div>
          </div>

          {/* WHAT I BUILT - Engineering Pipelines */}
          <div className="mb-12">
            <h4 className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-400 dark:text-blue-400 mb-6">
              // WHAT I BUILT (ARCHITECTURE PIPELINES)
            </h4>
            
            <div className="space-y-3.5">
              {builtPipelines.map((pipeline) => (
                <div 
                  key={pipeline.title} 
                  className="p-4 rounded-sm bg-slate-50/70 dark:bg-[#020617]/40 border border-slate-200 dark:border-blue-900/20 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:border-blue-500 dark:hover:border-cyan-450/40 hover:bg-white dark:hover:bg-[#070b13]/60 shadow-inner"
                >
                  <span className="text-[10px] font-bold tracking-[0.15em] text-slate-700 dark:text-slate-200 md:w-56 shrink-0 uppercase font-mono">
                    {pipeline.title}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10.5px] font-mono">
                    {pipeline.steps.map((step, sIdx) => (
                      <React.Fragment key={step}>
                        {sIdx > 0 && <span className="text-blue-500 dark:text-cyan-400/80 mx-2 font-bold select-none animate-pulse">➔</span>}
                        <span className="px-2.5 py-1 rounded-sm bg-slate-100/80 dark:bg-[#1e293b] text-slate-800 dark:text-[#E8D7C5] border border-slate-200 dark:border-blue-900/30">
                          {step}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERNSHIP ENGINEERING HIGHLIGHTS */}
          <div className="mb-12">
            <h4 className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-400 dark:text-blue-400 mb-6">
              // INTERNSHIP ENGINEERING HIGHLIGHTS
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
              {highlights.map((item) => (
                <div 
                  key={item.title} 
                  className="p-5 rounded-sm border border-slate-200 dark:border-blue-900/25 bg-slate-50/60 dark:bg-[#020617]/30 hover:border-cyan-500/50 dark:hover:border-[#2563eb]/50 hover:bg-white dark:hover:bg-[#070b13]/50 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(6,182,212,0.04)] transition-all duration-300"
                >
                  <h5 className="text-[11.5px] font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                    {item.title}
                  </h5>
                  <p className="text-[11.5px] text-slate-600 dark:text-slate-350 leading-relaxed font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT I LEARNED IN INDUSTRY */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-400 dark:text-blue-400 mb-5">
              // FROM BUILDING PROJECTS TO REAL-WORLD SOFTWARE WORKFLOWS
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {growthItems.map((item) => (
                <div key={item.title} className="flex items-start space-x-3.5 p-3 rounded-sm border border-transparent hover:border-slate-100 dark:hover:border-blue-900/10 hover:bg-slate-50/40 dark:hover:bg-slate-950/20 transition-all duration-300">
                  <span className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-blue-100 dark:bg-cyan-950/80 border border-blue-500/20 dark:border-cyan-500/30 text-blue-600 dark:text-cyan-400 flex items-center justify-center text-[9px] font-bold mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-850 dark:text-slate-200 tracking-wider uppercase mb-0.5">
                      {item.title}
                    </h5>
                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ==================== PART 2: GENERAL JOURNEY TIMELINE ==================== */}
        <div className="mt-16">
          <h4 className="text-xs font-mono tracking-[0.25em] uppercase text-blue-600 dark:text-cyan-400 mb-10 text-center">
            // EDUCATION & OTHER ACADEMIC MILESTONES
          </h4>
          
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Background Track */}
            <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-slate-200 dark:bg-[#3b82f6]/20" />
            
            {/* Animated Track */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 dark:from-blue-600 dark:via-[#C99E5D] dark:to-blue-500/10 shadow-[0_0_10px_#2563eb] origin-top"
            />

            <div className="space-y-12">
              {milestones.map((stop, idx) => (
                <motion.div
                  key={stop.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.08 }}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Desktop Year */}
                  <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-[#2563eb] transition-colors">
                      {stop.year}
                    </span>
                  </div>

                  {/* Route Node */}
                  <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                    <div className="absolute w-6 h-6 rounded-full border border-blue-500/0 dark:border-cyan-500/0 group-hover:border-blue-500 dark:group-hover:border-[#2563eb]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-100 dark:bg-[#0f172a] border border-slate-300 dark:border-blue-500 group-hover:bg-blue-600 dark:group-hover:bg-[#2563eb] group-hover:border-blue-600 dark:group-hover:border-[#2563eb] group-hover:shadow-[0_0_12px_#2563eb] transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="ml-14 md:ml-12 pl-2">
                    {/* Mobile Year */}
                    <div className="md:hidden mb-1.5">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-blue-600 dark:text-cyan-400">
                        {stop.year}
                      </span>
                    </div>

                    <h3
                      className="text-3xl sm:text-4xl tracking-wide text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#60a5fa] transition-colors mb-1 leading-none uppercase"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {stop.title}
                    </h3>
                    
                    <span 
                      className="block text-[10px] font-medium tracking-[0.2em] uppercase text-slate-500 dark:text-blue-400 mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.organization}
                    </span>
                    
                    <p 
                      className="text-xs sm:text-[13px] font-light text-slate-600 dark:text-slate-300 leading-[1.7] max-w-lg group-hover:text-slate-800 dark:group-hover:text-[#D5CBC0] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;