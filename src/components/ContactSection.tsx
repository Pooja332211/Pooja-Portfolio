// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://formsubmit.co/ajax/poojasattigeri83@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New Portfolio Message from ${formData.name}`
      })
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          setSent(true);
        } else {
          alert("Transmission failed. Please email poojasattigeri83@gmail.com directly.");
        }
      })
      .catch(() => {
        setLoading(false);
        alert("Transmission error. Please email poojasattigeri83@gmail.com directly.");
      });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#f8fafc] dark:bg-[#070b13] text-slate-800 dark:text-[#E8DFD8] font-sans selection:bg-blue-200 dark:selection:bg-[#cbb59d] selection:text-black pt-24 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Background Glow Orb */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: INFO & STATUS (5 Cols) ================= */}
          <div className="lg:col-span-5 space-y-10 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-blue-600 dark:text-cyan-400"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-blue-500 dark:from-blue-600/80 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7.5xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-slate-200 dark:to-slate-400 dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET'S BUILD
                  </span>
                  <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    SOMETHING
                  </span>
                  <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    MEANINGFUL.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-slate-600 dark:text-slate-300 leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an idea, a challenge, or an opportunity in mind? Let's turn it into something real.
              </p>

              {/* Compact Information Rows */}
              <div 
                className="pt-4 space-y-3.5 text-xs font-mono"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-350 py-2 border-b border-slate-100 dark:border-blue-900/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 shadow-[0_0_8px_#00ffff]" />
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-450 uppercase w-20">// LOCATION:</span>
                  <span className="text-slate-800 dark:text-white font-sans text-xs">Bengaluru, India</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-350 py-2 border-b border-slate-100 dark:border-blue-900/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 shadow-[0_0_8px_#00ffff]" />
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-455 uppercase w-20">// EMAIL:</span>
                  <a href="mailto:poojasattigeri83@gmail.com" className="text-slate-850 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-sans text-xs">
                    poojasattigeri83@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-350 py-2 border-b border-slate-100 dark:border-blue-900/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 shadow-[0_0_8px_#00ffff]" />
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-455 uppercase w-20">// PHONE:</span>
                  <a href="tel:+917996146695" className="text-slate-850 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-sans text-xs">
                    +91 7996146695
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-350 py-2 border-b border-slate-100 dark:border-blue-900/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 shadow-[0_0_8px_#00ffff]" />
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-455 uppercase w-20">// WHATSAPP:</span>
                  <a href="https://wa.me/917996146695" target="_blank" rel="noopener noreferrer" className="text-slate-850 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-sans text-xs flex items-center space-x-1.5">
                    <span>+91 7996146695</span>
                    <span className="inline-block px-1.5 py-0.5 text-[8px] font-bold text-emerald-650 dark:text-emerald-450 bg-emerald-100/60 dark:bg-emerald-950/40 border border-emerald-500/20 rounded-sm">MESSAGE</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability & Status Panel */}
            <div className="p-4 border border-slate-200 dark:border-blue-500/15 rounded-sm bg-slate-50/50 dark:bg-[#020617]/50 backdrop-blur-md max-w-sm space-y-2.5 shadow-sm">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_6px_#22c55e]"></span>
                </span>
                <span className="text-[8.5px] font-mono tracking-widest text-slate-400 dark:text-cyan-400 uppercase font-bold">
                  // CURRENT STATUS
                </span>
              </div>
              <h4 className="text-[10px] font-bold tracking-wider text-slate-800 dark:text-white uppercase font-mono">
                ● OPEN TO OPPORTUNITIES
              </h4>
              <p className="text-[11px] font-light leading-relaxed text-slate-500 dark:text-slate-300 font-sans">
                Available for software engineering, backend developer, AI/ML, and interesting collaborations.
              </p>
            </div>

            {/* Interactive Social Cards */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <a
                  href="https://github.com/Pooja332211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 px-4.5 py-2.5 border border-slate-200 dark:border-blue-900/30 bg-slate-100/50 dark:bg-slate-950/40 rounded-sm hover:-translate-y-0.5 hover:border-blue-500 dark:hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.12)] transition-all duration-300 text-[10px] font-mono font-medium tracking-widest text-slate-650 dark:text-slate-300 uppercase"
                >
                  <span>GITHUB</span>
                  <span className="text-blue-500 dark:text-cyan-400 text-[10px]">↗</span>
                </a>
                <a
                  href="https://linkedin.com/in/pooja-sattigeri-a86a36373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 px-4.5 py-2.5 border border-slate-200 dark:border-blue-900/30 bg-slate-100/50 dark:bg-slate-955/40 rounded-sm hover:-translate-y-0.5 hover:border-blue-500 dark:hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.12)] transition-all duration-300 text-[10px] font-mono font-medium tracking-widest text-slate-650 dark:text-slate-300 uppercase"
                >
                  <span>LINKEDIN</span>
                  <span className="text-blue-500 dark:text-cyan-400 text-[10px]">↗</span>
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[9px] font-mono text-slate-450 dark:text-slate-505">
                <span className="uppercase tracking-wider">// RESPONSE TIME:</span>
                <span>Usually within 24 hours</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM (7 Cols) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-slate-200 dark:border-blue-500/40 bg-white dark:bg-[#0b132b] p-8 sm:p-10 shadow-sm dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500"
          >
            {/* Top Blue Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563eb]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-300 dark:border-cyan-500/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-300 dark:border-cyan-500/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-300 dark:border-cyan-500/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-300 dark:border-cyan-500/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 text-sm">
                  ✓
                </div>
                <h3 className="text-3xl text-slate-800 dark:text-white font-normal uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION SECURED
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-300 font-light max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Thank you for reaching out. Your transmission payload has been successfully authenticated and registered in the system. I will review the dispatch and respond to your channel shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-slate-400 dark:text-blue-400 mb-2">
                      // YOUR IDENTITY
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-blue-500/30 focus:border-blue-500 dark:focus:border-cyan-500/80 text-xs text-slate-800 dark:text-white placeholder-slate-450 dark:placeholder-blue-300/40 px-4 py-3 outline-none rounded-sm transition-all focus:shadow-[0_0_15px_rgba(0,162,255,0.08)] dark:focus:shadow-[0_0_15px_rgba(34,211,238,0.08)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-slate-400 dark:text-blue-400 mb-2">
                      // CONTACT CHANNEL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-blue-500/30 focus:border-blue-500 dark:focus:border-cyan-500/80 text-xs text-slate-800 dark:text-white placeholder-slate-450 dark:placeholder-blue-300/40 px-4 py-3 outline-none rounded-sm transition-all focus:shadow-[0_0_15px_rgba(0,162,255,0.08)] dark:focus:shadow-[0_0_15px_rgba(34,211,238,0.08)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="relative">
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-slate-400 dark:text-blue-400 mb-2">
                    // YOUR MESSAGE
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me what you're building..."
                    className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-blue-500/30 focus:border-blue-500 dark:focus:border-cyan-500/80 text-xs text-slate-800 dark:text-white placeholder-slate-450 dark:placeholder-blue-300/40 p-4 outline-none rounded-sm transition-all focus:shadow-[0_0_15px_rgba(0,162,255,0.08)] dark:focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                  <span className="absolute bottom-3.5 right-3.5 text-[8.5px] font-mono text-cyan-500/40 animate-pulse select-none">
                    CMD_CURSOR_▋
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="relative group w-full py-4 border border-slate-300 dark:border-blue-500/50 bg-slate-100 dark:bg-[#1e293b] hover:border-blue-500 dark:hover:border-cyan-400 hover:bg-slate-200 dark:hover:bg-[#111827] text-slate-800 dark:text-[#E8DFD8] hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.18)] cursor-pointer rounded-sm overflow-hidden flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {loading ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                      <span>LOGGING DISPATCH...</span>
                    </span>
                  ) : (
                    <>
                      <span>INITIALIZE CONNECTION</span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-xs font-bold">↗</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* Subtle Animated Blue Divider Line */}
        <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 dark:via-cyan-500/25 to-transparent mt-24 mb-8 overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#00ffff]"
          />
        </div>

        {/* ================= FOOTER SUB-DECK ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 pb-2">
          {/* Left info */}
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-800 dark:text-white uppercase">
              POOJA SATTIGERI
            </span>
            <span className="text-[8.5px] font-mono tracking-widest text-slate-400 dark:text-blue-400 uppercase mt-0.5">
              SOFTWARE ENGINEER / AI EXPLORER
            </span>
          </div>

          {/* Center Quote */}
          <div className="hidden lg:block text-center font-mono text-[8.5px] text-slate-500 dark:text-slate-400 tracking-[0.16em]">
            "IF I NEED IT, I BUILD IT. IF IT'S NEW, I EXPLORE IT."
          </div>

          {/* Right copyright */}
          <div className="flex flex-col md:items-end">
            <span className="text-[10px] font-mono tracking-widest text-slate-850 dark:text-white">
              © 2026 POOJA SATTIGERI
            </span>
            <span className="text-[8.5px] font-mono tracking-widest text-slate-450 dark:text-blue-400 mt-0.5 uppercase">
              BUILT WITH CURIOSITY + CODE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;