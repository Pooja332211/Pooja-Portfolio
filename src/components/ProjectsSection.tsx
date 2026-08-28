import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import soilPreview from '../assets/soil_preview.webp';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  image: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'AI Climate Intelligence & Carbon Credit Ecosystem',
    category: 'AI / CLIMATE-TECH PLATFORM',
    description:
      'A full-stack Climate Intelligence platform combining React Native/Expo, TypeScript, and a FastAPI backend to estimate carbon credits and ESG scores. Features an ML prediction pipeline using Scikit-learn and XGBoost for carbon-credit estimation, rule-based ESG scoring, Weather API integration, and automated PDF analytics reporting.',
    githubUrl: 'https://github.com/Pooja332211/Carbon-Credit-App',
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'FastAPI',
      'Python',
      'SQLite',
      'Scikit-learn',
      'XGBoost',
      'OpenWeatherMap API',
      'Docker',
      'REST APIs',
    ],
    metrics: [
      { label: 'MODEL', value: 'Scikit-learn / XGBoost' },
      { label: 'FRONTEND', value: 'React Native / Expo' },
      { label: 'BACKEND', value: 'FastAPI + PostgreSQL' },
    ],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=400&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'HarvestLenz — AI Fruit Quality Grading System',
    category: 'COMPUTER VISION / MOBILE SYSTEM',
    description:
      'An end-to-end computer vision grading pipeline integrating a Flutter mobile client with a FastAPI backend. Utilizes YOLOv8 for multi-fruit detection (specifically Mango, Grapes, Pineapple, and Pomegranate) and custom CNN architectures for per-fruit quality classification, complete with JWT authentication, a digital fruit-passport report flow, and automated PDF/JSON reporting.',
    githubUrl: 'https://github.com/Pooja332211/HarvestLenz',
    tech: [
      'FastAPI',
      'Flutter',
      'YOLOv8',
      'CNN',
      'JWT',
      'OpenCV',
      'Object Detection',
      'Image Processing',
    ],
    metrics: [
      { label: 'DETECTION', value: 'YOLOv8 & OpenCV' },
      { label: 'MOBILE', value: 'Flutter / Dart' },
      { label: 'PIPELINE', value: 'Auto PDF & Passport' },
    ],
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=400&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'AI Soil Intelligence & Nutrient Prediction',
    category: 'PRECISION AGRICULTURE PLATFORM',
    description:
      'A dual-service precision agriculture platform. SoilENZ utilizes OCR to parse soil test reports, generating comprehensive soil-health scores and crop-specific fertilizer recommendations. The Soil Nutrient Prediction companion service uses distance-based ML algorithms to predict nutrient values from spectral sensor readings.',
    githubUrl: 'https://github.com/Pooja332211/SoilENZ-AI-Soil-Health-Report-System-',
    tech: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'Pydantic',
      'PostgreSQL',
      'Scikit-learn',
      'Docker',
      'REST APIs',
      'OCR',
    ],
    metrics: [
      { label: 'PARSING', value: 'OCR & Pydantic' },
      { label: 'ENGINE', value: 'Scikit-learn Predictor' },
      { label: 'DATABASE', value: 'PostgreSQL / SQLite' },
    ],
    image: soilPreview,
  },
  {
    number: '04',
    title: 'Automatic Number Plate Recognition (ANPR)',
    category: 'COMPUTER VISION / UTILITY',
    description:
      'An automated vehicle surveillance system built with Python and OpenCV. Implements image processing filters, edge detection, and OCR algorithms to locate vehicle license plates, extract alphanumeric plate numbers, and log vehicle entry-exit events in real-time.',
    githubUrl: 'https://github.com/Pooja332211',
    tech: [
      'Python',
      'OpenCV',
      'OCR',
      'Image Processing',
      'Object Detection',
      'Log Engine',
    ],
    metrics: [
      { label: 'ENGINE', value: 'OpenCV Processing' },
      { label: 'EXTRACTION', value: 'OCR Recognition' },
      { label: 'LOGGING', value: 'Automated Entry-Exit' },
    ],
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&auto=format&fit=crop',
  },
];

const projectDetailsMap: Record<string, { problem: string; solution: string; goal: string; points: string[] }> = {
  'AI Climate Intelligence & Carbon Credit Ecosystem': {
    problem: 'Smallholder farmers in India lack transparent, accessible tools to estimate and verify carbon credit potential. Implementing sustainable agroforestry requires complex and expensive manual site inspections.',
    solution: 'Built an end-to-end forecasting pipeline that utilizes XGBoost regression models trained on soil parameters, temperature data, and land cover coordinates to estimate carbon offsets.',
    goal: 'Empower farmers to monetize eco-friendly practices (targeting earnings up to Rs. 50,000/year under Indian carbon credit frameworks) and export verifiable PDF ESG reports.',
    points: [
      'XGBoost ML estimation based on environmental inputs.',
      'Rule-based ESG sustainability grade classifier.',
      'React Native mobile interface with FastAPI backend.',
      'Automated PDF report compiler for compliance filings.'
    ]
  },
  'HarvestLenz — AI Fruit Quality Grading System': {
    problem: 'Manual agricultural sorting is slow, subjective, and leads to significant post-harvest food waste due to undetected decay or shelf-life limitations.',
    solution: 'Designed a real-time computer vision grading model. Utilizes YOLOv8 for multi-fruit localization and a custom Convolutional Neural Network (CNN) to grade quality.',
    goal: 'Automate warehouse sorting pipelines specifically for Mango, Grapes, Pineapple, and Pomegranate crops, generating secure digital passport reports.',
    points: [
      'YOLOv8 bounding box location coordinates.',
      'CNN classification for fresh vs. damaged fruits.',
      'Active classes: Mango, Grapes, Pineapple, Pomegranate.',
      'Digital passport logs with JWT-protected database records.'
    ]
  },
  'AI Soil Intelligence & Nutrient Prediction': {
    problem: 'Small farmers struggle to read complex soil lab test sheets, resulting in suboptimal crop choices and incorrect chemical fertilizer ratios.',
    solution: 'Created a dual-service precision farming hub. Integrates Tesseract OCR to parse physical test papers, combined with a distance-based ML prediction pipeline for spectral readings.',
    goal: 'Provide instant, plain-text crop fertilizer suggestions, NPK nutrient analysis, and soil health ratings directly to farmers.',
    points: [
      'OCR tabular parsing to structural JSON payloads.',
      'Spectral sensor distance-based ML nutrient estimators.',
      'Crop-specific fertilizer optimizer and health scoring.',
      'SQLAlchemy database mapping for historic logs.'
    ]
  },
  'Automatic Number Plate Recognition (ANPR)': {
    problem: 'Manual tracking of vehicle entry and exit logs at secure gates is slow, vulnerable to human error, and lacks auditable logs.',
    solution: 'Constructed an image processing helper utility. Uses OpenCV filters (Canny edge, contour matching) to segment license plates and Tesseract OCR to read character arrays.',
    goal: 'Log vehicle licenses dynamically in a local database with timestamps to streamline gate entries automatically.',
    points: [
      'OpenCV contour detection and adaptive thresholding.',
      'Tesseract OCR character segmenter.',
      'Automated gate entry logs written to SQLite tables.',
      'Real-time video frame diagnostic analyzer.'
    ]
  }
};

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative w-full bg-[#f8fafc] dark:bg-[#070b13] text-slate-800 dark:text-[#E8DFD8] font-sans selection:bg-blue-200 dark:selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20 transition-colors duration-500"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#2563eb]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#3b82f6]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#2563eb]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#2563eb]/80 via-[#3b82f6]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-slate-200 dark:to-slate-400 dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-slate-600 dark:text-slate-300 max-w-md mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            A showcase of full-stack engineering implementations, combining computer vision models, scalable backends, and predictive machine learning architectures to solve practical domain challenges.
          </p>
        </motion.div>

        {/* Responsive, Stable Vertical Card Stack (Resolves Scroll Overlaps) */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="relative w-full rounded-2xl border border-slate-200 dark:border-blue-500/40 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-lg p-8 sm:p-12 shadow-sm dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] group overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(34,211,238,0.06)]"
            >
              {/* Top Blue Border Light Flare */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563eb]/80 to-transparent" />

              {/* Corner Minimal L-Brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-300 dark:border-cyan-500/60 group-hover:border-blue-500 dark:group-hover:border-cyan-400 transition-colors" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-300 dark:border-cyan-500/60 group-hover:border-blue-500 dark:group-hover:border-cyan-400 transition-colors" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-300 dark:border-cyan-500/60 group-hover:border-blue-500 dark:group-hover:border-cyan-400 transition-colors" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-300 dark:border-cyan-500/60 group-hover:border-blue-500 dark:group-hover:border-cyan-400 transition-colors" />

              {/* Big Background Watermark Number */}
              <span
                className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-slate-200/40 dark:text-[#93c5fd]/5 select-none pointer-events-none leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {project.number}
              </span>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Left Column (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                        {project.number} //
                      </span>
                      <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-slate-500 dark:text-slate-300">
                        {project.category}
                      </span>
                    </div>

                    <h3
                      className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-[#60a5fa] transition-colors uppercase leading-[0.9]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-xs sm:text-sm md:text-[14px] font-light text-slate-600 dark:text-slate-300 leading-[1.85] tracking-wide mb-8 max-w-2xl"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-blue-500/25">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-slate-200 dark:border-blue-500/40 bg-slate-100 dark:bg-[#1e293b] text-slate-700 dark:text-[#E8D7C5] group-hover:border-blue-500 dark:group-hover:border-cyan-400/50 transition-all duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-slate-200 dark:lg:border-[#3b82f6]/25">
                  {/* Project Mockup Preview */}
                  <div className="relative overflow-hidden w-full aspect-[16/10] rounded-sm border border-slate-200 dark:border-blue-900/30 bg-slate-100 dark:bg-slate-950/80 flex items-center justify-center shadow-inner group-hover:border-blue-500 dark:group-hover:border-cyan-500/50 transition-all duration-500 mb-2">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none opacity-60" />
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] saturate-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 text-[8px] font-mono bg-blue-950/85 border border-cyan-500/35 text-cyan-400 px-1.5 py-0.5 rounded-sm tracking-wider uppercase">
                      Active Simulation
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-slate-400 dark:text-blue-400 block mb-2">
                      // ARCHITECTURE METRICS
                    </span>
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3.5 rounded-sm border border-slate-200 dark:border-blue-500/25 bg-slate-50 dark:bg-[#020617] flex items-center justify-between"
                      >
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-350">
                          {m.label}
                        </span>
                        <span className="text-[11px] font-mono font-medium text-slate-800 dark:text-[#60a5fa]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3.5 border border-slate-300 dark:border-blue-500 bg-slate-100 dark:bg-[#1e293b] hover:border-blue-500 dark:hover:border-cyan-400 hover:bg-blue-600 dark:hover:bg-cyan-500/10 text-slate-800 dark:text-[#93c5fd] hover:text-white dark:hover:text-cyan-455 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-sm cursor-pointer rounded-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>GITHUB ↗</span>
                    </a>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3.5 border border-slate-300 dark:border-blue-500/40 bg-slate-50 dark:bg-[#0f172a] hover:border-blue-500 dark:hover:border-cyan-450 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-sm cursor-pointer rounded-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW SPECS</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* High-Tech Blueprint Modal Overlay */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl rounded-sm border border-slate-200 dark:border-blue-500/40 bg-white dark:bg-[#0b132b] p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto overflow-x-hidden relative z-10"
            >
              {/* Top Cyan Accent Horizon Line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              
              {/* Corner Technical Crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-350 dark:border-cyan-500/50" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-350 dark:border-cyan-500/50" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-350 dark:border-cyan-500/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-350 dark:border-cyan-500/50" />

              {/* Close Button */}
              <button 
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 text-[9px] font-mono tracking-widest text-slate-450 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-colors uppercase border border-slate-200 dark:border-blue-900/30 px-3 py-1 bg-slate-50 dark:bg-slate-950/40 cursor-pointer rounded-sm"
              >
                // CLOSE [X]
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2.5 mb-1">
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
                      {activeModalProject.number} // PROJECT SPECIFICATIONS
                    </span>
                  </div>
                  <h3 
                    className="text-4.5xl font-normal tracking-wide text-slate-800 dark:text-white uppercase leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {activeModalProject.title}
                  </h3>
                  <span className="block text-[8.5px] font-mono text-slate-450 dark:text-blue-450 mt-1 uppercase tracking-[0.18em]">
                    github://Pooja332211/{activeModalProject.title === 'AI Soil Intelligence & Nutrient Prediction' ? 'SoilENZ-AI-Soil-Health-Report-System-' : activeModalProject.title === 'AI Climate Intelligence & Carbon Credit Ecosystem' ? 'Carbon-Credit-App' : activeModalProject.title === 'HarvestLenz — AI Fruit Quality Grading System' ? 'HarvestLenz' : 'ANPR'}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-slate-100 dark:bg-blue-900/20" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-650 dark:text-slate-300 leading-relaxed font-light font-sans">
                  <div>
                    <span className="font-mono text-[9px] font-bold text-slate-455 dark:text-cyan-400 block tracking-wider mb-1.5 uppercase">// THE PROBLEM:</span>
                    <p>{projectDetailsMap[activeModalProject.title]?.problem}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold text-slate-455 dark:text-cyan-400 block tracking-wider mb-1.5 uppercase">// THE SOLUTION:</span>
                    <p>{projectDetailsMap[activeModalProject.title]?.solution}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold text-slate-455 dark:text-cyan-400 block tracking-wider mb-1.5 uppercase">// END GOAL:</span>
                    <p>{projectDetailsMap[activeModalProject.title]?.goal}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-blue-900/15">
                  <span className="font-mono text-[9px] font-bold text-slate-400 dark:text-blue-400 block tracking-wider mb-3 uppercase">// SYSTEM ATTRIBUTES (VERIFIED ON GITHUB):</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 font-mono text-[10.5px]">
                    {projectDetailsMap[activeModalProject.title]?.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2 text-slate-500 dark:text-slate-455">
                        <span className="text-blue-500 dark:text-cyan-400 font-bold select-none">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;