import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';


const bentoCategories = [
  {
    title: 'AI/ML & COMPUTER VISION',
    badge: 'INTELLIGENCE',
    items: ['YOLOv8', 'CNN', 'OCR', 'Scikit-learn', 'Pandas'],
    description: 'Applied computer vision models (YOLOv8, CNN) and Scikit-learn machine learning prediction pipelines for carbon estimation, receipt parsing, and automated fruit quality grading.',
    stat: 'AI & ML',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'BACKEND ENGINEERING',
    badge: 'SCALABLE APIS',
    items: ['FastAPI', 'REST APIs', 'JWT Auth', 'Docker', 'Postman'],
    description: 'Engineered high-performance RESTful APIs using FastAPI, implementing JWT token authentication, clean architecture, and Docker containerization.',
    stat: 'FASTAPI & DOCKER',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'DATA ARCHITECTURES',
    badge: 'PERSISTENCE',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Database Design'],
    description: 'Designing relational databases, normalization schemas, and optimizing complex SQL queries for ESG analytics and soil tracking dashboards.',
    stat: 'SQL & RELATIONAL',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'LANGUAGES & FRAMEWORKS',
    badge: 'CORE TECH',
    items: ['Python', 'Java', 'JavaScript', 'React', 'React Native'],
    description: 'Fluent in object-oriented programming, data structures, and algorithms. Experienced in full-stack web and mobile client development using React and React Native.',
    stat: 'FULL STACK',
    colSpan: 'lg:col-span-7',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-[#f8fafc] dark:bg-[#070b13] text-slate-800 dark:text-[#E8DFD8] font-sans selection:bg-blue-200 dark:selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center transition-colors duration-500"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#2563eb]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#3b82f6]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            03 / TECH MATRIX
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
              ARCHITECTURAL MASTERY.
            </span>
            <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              PRECISION APPLIED.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-slate-200 dark:border-blue-500/35 bg-white dark:bg-[#0f172a]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-blue-500 dark:hover:border-[#2563eb]/80 hover:shadow-md dark:hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] cursor-pointer group`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563eb]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-300 dark:border-cyan-500/40 group-hover:border-blue-500 dark:group-hover:border-[#2563eb] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-300 dark:border-cyan-500/40 group-hover:border-blue-500 dark:group-hover:border-[#2563eb] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-blue-600 dark:text-cyan-400 group-hover:text-blue-700 dark:group-hover:text-[#3b82f6] transition-colors">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-slate-200 dark:border-blue-500/40 text-slate-600 dark:text-slate-200 bg-slate-50 dark:bg-[#1e293b] group-hover:border-blue-500 dark:group-hover:border-[#2563eb]/50 group-hover:text-slate-900 dark:group-hover:text-white transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-[#60a5fa] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-7 max-w-xl group-hover:text-slate-800 dark:group-hover:text-[#D5CBC0] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-blue-500/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-slate-200 dark:border-blue-500/35 bg-slate-50 dark:bg-[#1e293b] text-slate-700 dark:text-[#E8D7C5] group-hover:border-blue-500 dark:group-hover:border-[#2563eb]/50 group-hover:bg-slate-100 dark:group-hover:bg-[#334155] group-hover:text-slate-900 dark:group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;