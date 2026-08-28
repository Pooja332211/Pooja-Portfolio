import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';
import aboutImg from '../assets/pooja_full.png';
import { useTheme } from './ThemeContext';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'TERMINAL', href: '#terminal' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'AI LAB', href: '#ailab' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { theme, toggleTheme } = useTheme();

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[#f8fafc] dark:bg-[#070b13] text-slate-800 dark:text-[#E8DFD8] font-sans selection:bg-blue-200 dark:selection:bg-[#cbb59d] selection:text-black cursor-none transition-colors duration-500">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#2563eb]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. FIXED BACKGROUND LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        {/* Ambient warm gold glow in the center-right */}
        <div className="absolute right-1/4 top-1/4 w-[40rem] h-[40rem] bg-[#2563eb]/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute right-10 bottom-10 w-[30rem] h-[30rem] bg-[#3b82f6]/5 rounded-full blur-[160px] pointer-events-none" />

        {/* ================= 3. ANIMATED WATERMARK EMBLEM ================= */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-black/85 rounded-full blur-xl" />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Insignia"
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-slate-900 dark:text-white transition-all duration-300 hover:opacity-85 flex items-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">POOJA SATTIGERI</span>
            <span className="text-cyan-500 font-extrabold animate-pulse">.</span>
          </a>

          {/* Navigation Links - Cyber Glass Pill Menu */}
          <nav
            className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[10px] tracking-[0.22em] font-medium uppercase px-6 py-2 border border-slate-200/50 dark:border-blue-900/35 bg-white/40 dark:bg-[#070b13]/60 backdrop-blur-md rounded-full absolute left-1/2 -translate-x-1/2 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 text-slate-650 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 group-hover:w-8" />
              </a>
            ))}
          </nav>

          {/* Right Action + Theme Toggle */}
          <div className="flex items-center space-x-3 ml-auto md:ml-0">
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-slate-400/40 dark:border-blue-500/50 hover:border-blue-500 dark:hover:border-[#2563eb] text-slate-800 dark:text-[#93c5fd] transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                ↗
              </span>
            </a>

            <button
              onClick={toggleTheme}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="p-2 border border-slate-400/40 dark:border-cyan-500/45 rounded-full hover:border-cyan-500 dark:hover:border-cyan-400 text-slate-800 dark:text-[#93c5fd] hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 w-8 h-8 flex items-center justify-center cursor-pointer focus:outline-none bg-slate-100/30 dark:bg-slate-900/40 shadow-sm"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15a5 5 0 110-10 5 5 0 010 10zM10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3.515 4.929a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm11.314 11.314a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM4.929 16.485a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zm11.314-11.314a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: I BUILD */}
                <span className="block text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-slate-200 dark:to-slate-400 dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I BUILD
                </span>

                {/* Line 2: INTELLIGENT */}
                <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  INTELLIGENT
                </span>

                {/* Line 3: SYSTEMS */}
                <span className="block text-indigo-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-indigo-400 dark:to-blue-500 dark:drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  SYSTEMS
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-slate-600 dark:text-slate-200"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                SOFTWARE DEVELOPMENT ENGINEER <span className="text-[#3b82f6] mx-1">•</span> BACKEND DEVELOPER <span className="text-[#3b82f6] mx-1">•</span> AI/ML ENTHUSIAST
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-slate-600 dark:text-slate-300 leading-[1.8] tracking-wide max-w-lg mb-6 space-y-2.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                I am a Software Development Engineer specializing in building highly scalable backend architectures, secure REST APIs, and custom computer vision and prediction workflows.
              </p>
              <p className="text-blue-600 dark:text-cyan-400 font-medium">
                FastAPI // PostgreSQL // PyTorch // Docker // Scikit-Learn // React Native
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-slate-300 dark:border-blue-500 bg-white dark:bg-[#0f172a]/80 hover:border-blue-500 dark:hover:border-[#2563eb] text-slate-800 dark:text-[#93c5fd] hover:text-blue-600 dark:hover:text-[#ffffff] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-sm dark:shadow-[0_0_25px_rgba(212,175,55,0.18)] cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-slate-300 dark:border-blue-500/40 hover:border-slate-500 dark:hover:border-[#3b82f6] text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-[#93c5fd] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 cursor-pointer"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Elegant Portrait Frame & Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-center pointer-events-auto pr-12 xl:pr-24 z-20 select-none space-y-6"
          >
            {/* 3D Holographic Main Card Container */}
            <div 
              onMouseEnter={() => setIsHeroHovered(true)}
              onMouseLeave={() => setIsHeroHovered(false)}
              className="relative p-2.5 border border-blue-500/35 rounded-sm bg-[#0f172a]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] w-[290px] xl:w-[325px] group transition-all duration-500 hover:border-blue-500"
            >
              {/* Corner Accent Brackets */}
              <div>
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 shadow-[0_0_6px_rgba(37,99,235,0.4)] transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500 shadow-[0_0_6px_rgba(37,99,235,0.4)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500 shadow-[0_0_6px_rgba(37,99,235,0.4)] transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500 shadow-[0_0_6px_rgba(37,99,235,0.4)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </div>

              {/* Portrait Image Canvas */}
              <div className="relative overflow-hidden w-full aspect-[5/8] bg-[#070b13] dark:bg-black rounded-sm shadow-inner">
                {/* Main Full-Body Portrait with Idle & Hover Float Simulation */}
                <motion.img
                  src={aboutImg}
                  alt="Pooja Sattigeri"
                  animate={isHeroHovered ? {
                    y: [0, -6, 0, -6, 0],
                    scale: 1.04,
                  } : {
                    y: [0, -2, 0, -2, 0],
                    scale: 1,
                  }}
                  transition={isHeroHovered ? {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full object-cover object-top filter brightness-[0.94] contrast-[1.06] saturate-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Quote, Statement, Signature */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xl text-[#C99E5D] leading-none font-serif mb-1">“</span>
              <div 
                className="text-[8.5px] font-medium tracking-[0.18em] uppercase text-[#E0D3C5] space-y-1 mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <p>IF I NEED IT, I BUILD IT.</p>
                <p>IF IT'S NEW, I EXPLORE IT.</p>
              </div>
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />
              <div 
                className="text-[2.2rem] text-[#D8AB64] font-normal leading-none"
                style={{ 
                  fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                  letterSpacing: '0.04em',
                }}
              >
                Pooja
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;