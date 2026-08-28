// src/components/CertificationsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

interface CertCategory {
  title: string;
  certs: Certification[];
}

const certificationData: CertCategory[] = [
  {
    title: 'AI & MACHINE LEARNING',
    certs: [
      {
        name: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
        issuer: 'Oracle',
        date: '2025',
        link: 'https://credential.oracle.com',
      },
      {
        name: 'AI Engineer Core Track (LLM, RAG, autonomous Agents)',
        issuer: 'Udemy',
        date: '2026',
      },
      {
        name: 'Data Science & Machine Learning Certified',
        issuer: 'Edureka',
        date: '2024',
      },
    ],
  },
  {
    title: 'CLOUD & AI FOUNDATIONS',
    certs: [
      {
        name: 'Oracle Cloud Infrastructure 2025 Foundations Associate',
        issuer: 'Oracle',
        date: '2025',
        link: 'https://credential.oracle.com',
      },
    ],
  },
  {
    title: 'SOFTWARE ENGINEERING & DEVELOPMENT',
    certs: [
      {
        name: 'Infosys Hackathon Winner Certificate',
        issuer: 'Infosys',
        date: '2025',
      },
      {
        name: 'Master of Computer Applications (MCA) Degree Certificate',
        issuer: 'KLE Technological University',
        date: '2026',
      },
      {
        name: 'Bachelor of Computer Applications (BCA) Degree Certificate',
        issuer: 'KLS Gogte College',
        date: '2024',
      },
    ],
  },
  {
    title: 'CYBERSECURITY & JOB SIMULATIONS',
    certs: [
      {
        name: 'Cybersecurity Job Simulation Certificate',
        issuer: 'JPMorgan Chase / Forage',
        date: '2025',
      },
      {
        name: 'Generative AI Foundations & Application Simulation',
        issuer: 'Google Cloud / Forage',
        date: '2025',
      },
    ],
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-screen bg-[#f8fafc] dark:bg-[#070b13] text-slate-800 dark:text-[#E8DFD8] py-24 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/[0.02] dark:bg-[#3b82f6]/[0.02] rounded-full blur-[150px] pointer-events-none" />

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
            05 / CREDENTIALS
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
              CERTIFICATIONS &amp;
            </span>
            <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ACCOMPLISHMENTS.
            </span>
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {certificationData.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="space-y-5"
            >
              <h3 className="text-xs font-mono tracking-[0.25em] text-slate-400 dark:text-blue-400 uppercase">
                // {category.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.certs.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-5 border border-slate-200 dark:border-blue-500/20 bg-white dark:bg-[#0f172a] hover:border-blue-500 dark:hover:border-[#2563eb]/60 rounded-md transition-all duration-300 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-[12.5px] font-bold text-slate-800 dark:text-white uppercase tracking-wide leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-[10px] font-mono text-slate-500 dark:text-slate-300 mt-1.5 uppercase">
                        Issued by: {cert.issuer}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-blue-500/10">
                      <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400">
                        {cert.date}
                      </span>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[9.5px] font-mono uppercase text-slate-400 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white flex items-center space-x-1 cursor-pointer"
                        >
                          <span>Verify</span>
                          <span className="text-[8px]">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
