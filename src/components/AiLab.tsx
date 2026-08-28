// src/components/AiLab.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModelCardInfo {
  name: string;
  problem: string;
  dataset: string;
  tech: string;
  accuracy: string;
  speed: string;
  precision: string;
  recall: string;
}

export const AiLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'playground' | 'cards' | 'architecture'>('playground');
  const [selectedDemo, setSelectedDemo] = useState<'fruit' | 'anpr' | 'soil' | 'carbon'>('fruit');
  const [demoState, setDemoState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [demoLogs, setDemoLogs] = useState<string[]>([]);
  const [sampleIdx, setSampleIdx] = useState<number>(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Playground Demos
  const fruitSamples = [
    {
      name: 'Sample 1 - Fresh Mango',
      img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80',
      detections: [
        { label: 'Mango (Fresh)', box: 'top-[15%] left-[20%] w-[60%] h-[70%]', score: '81%' },
      ],
      summary: 'YOLOv8 detected 1 item. CNN classified it as Fresh Mango. Recommended destination: Premium Retail Market.',
    },
    {
      name: 'Sample 2 - Ripe Pineapple',
      img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=400&q=80',
      detections: [
        { label: 'Pineapple (Fresh)', box: 'top-[10%] left-[25%] w-[50%] h-[80%]', score: '82%' },
      ],
      summary: 'YOLOv8 detected 1 item. CNN classified it as Fresh Pineapple. Recommended destination: Sorting / Juice extraction.',
    },
  ];

  const anprSamples = [
    {
      name: 'Sample 1 - Front Plate',
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80',
      detections: [
        { label: 'License Plate (KA-03-ME-1234)', box: 'top-[50%] left-[25%] w-[50%] h-[15%]', score: '76%' },
      ],
      summary: 'OpenCV filters located plate coordinates. OCR pipeline parsed characters successfully: KA-03-ME-1234. Entry log registered.',
    },
  ];

  const soilSamples = [
    {
      name: 'Sample Report 1',
      img: 'https://images.unsplash.com/photo-1589923188900-85dae440342b?auto=format&fit=crop&w=400&q=80',
      detections: [
        { label: 'Nitrogen (Deficient)', box: 'top-[20%] left-[15%] w-[70%] h-[20%]', score: '79%' },
        { label: 'Phosphorus (Optimal)', box: 'top-[50%] left-[15%] w-[70%] h-[20%]', score: '81%' },
      ],
      summary: 'OCR parsed Nitrogen: 12mg/kg (Deficient), Phosphorus: 35mg/kg (Optimal). Recommendation: Add organic compost & Nitrogen fertilizer.',
    },
  ];

  const carbonSamples = [
    {
      name: 'Sample 1 - Agroforestry Region A',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
      detections: [
        { label: 'Carbon Offset (Est. 245 MtCO2e/yr)', box: 'top-[15%] left-[10%] w-[80%] h-[30%]', score: '78%' },
        { label: 'ESG Assessment: Grade A', box: 'top-[50%] left-[10%] w-[80%] h-[20%]', score: '80%' },
      ],
      summary: 'XGBoost regression estimated carbon credit offset: 245.4 MtCO2e/year. Weather API indicators aligned. ESG score output: Grade A (Highly Sustainable). Automated PDF report generated.',
    },
    {
      name: 'Sample 2 - Monoculture Region B',
      img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80',
      detections: [
        { label: 'Carbon Offset (Est. 110 MtCO2e/yr)', box: 'top-[15%] left-[10%] w-[80%] h-[30%]', score: '73%' },
        { label: 'ESG Assessment: Grade B', box: 'top-[50%] left-[10%] w-[80%] h-[20%]', score: '72%' },
      ],
      summary: 'XGBoost regression estimated carbon credit offset: 110.2 MtCO2e/year. Monoculture soil depletion offset detected. ESG score output: Grade B (Moderate). Automated PDF report generated.',
    },
  ];

  const runModel = () => {
    setDemoState('running');
    setDemoLogs([]);
    
    const isCarbon = selectedDemo === 'carbon';
    const logs = isCarbon ? [
      'Initializing ESG carbon prediction protocol...',
      'Connecting to OpenWeatherMap API for live data...',
      'Running XGBoost prediction model...',
      'Extracting land cover and forestry density indicators...',
      'Generating rule-based ESG scores...',
      'Compiling automated PDF analytics report...',
      'Process complete. Output payload generated.'
    ] : [
      'Loading model weights and initializing network...',
      'Streaming input payload into preprocessing layers...',
      'Executing feature extraction and tensor analysis...',
      'Drawing bounding box boundaries...',
      'Running CNN classifier on cropped regions...',
      'Process complete. Output payload generated.',
    ];

    let delay = 0;
    logs.forEach((log, index) => {
      setTimeout(() => {
        setDemoLogs((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setTimeout(() => setDemoState('completed'), 500);
        }
      }, delay);
      delay += 550;
    });
  };

  const currentSamples = selectedDemo === 'fruit' ? fruitSamples : selectedDemo === 'carbon' ? carbonSamples : selectedDemo === 'soil' ? soilSamples : anprSamples;
  const sample = currentSamples[sampleIdx] || currentSamples[0];

  // Model Cards Data
  const modelCardsMap: Record<'fruit' | 'carbon' | 'soil' | 'anpr', ModelCardInfo> = {
    fruit: {
      name: 'YOLOv8 & Custom CNN Classifier',
      problem: 'Real-time multi-fruit detection and health/shelf-life classification from mobile images.',
      dataset: '1,500+ annotated fruit images (custom bounding box annotation).',
      tech: 'FastAPI, YOLOv8, CNN (TensorFlow), OpenCV',
      accuracy: '82.4%',
      speed: '42ms inference latency',
      precision: '81.0%',
      recall: '83.2%',
    },
    carbon: {
      name: 'XGBoost Carbon Estimator',
      problem: 'Carbon credit forecasting and ESG score assessment using historical soil and environmental factors.',
      dataset: 'ESG analytics historical profiles combined with local OpenWeather data streams.',
      tech: 'Python, FastAPI, Scikit-learn, XGBoost',
      accuracy: '79.5%',
      speed: '12ms inference latency',
      precision: '78.2%',
      recall: '80.1%',
    },
    soil: {
      name: 'OCR & Pydantic Document Parser (SoilENZ)',
      problem: 'Automated extraction of structured tabular soil-nutrient values from raw document scans.',
      dataset: 'Agricultural soil-testing laboratory PDF documents.',
      tech: 'Python, FastAPI, Tesseract OCR, Pydantic, Regular Expressions',
      accuracy: '84.1% Text Extraction accuracy',
      speed: '210ms parsing latency',
      precision: '83.5%',
      recall: '84.8%',
    },
    anpr: {
      name: 'ANPR Character Locator & Reader',
      problem: 'Real-time vehicle license plate localization and character recognition for security access logs.',
      dataset: 'Standard vehicle license plate images under variable lighting conditions.',
      tech: 'Python, OpenCV, Haar Cascades, Tesseract OCR, SQLite',
      accuracy: '75.2% Plate Recognition accuracy',
      speed: '180ms inference latency',
      precision: '74.8%',
      recall: '75.9%',
    },
  };

  const architectureFlows: Record<'fruit' | 'carbon' | 'soil' | 'anpr', { step: string; title: string; desc: string }[]> = {
    fruit: [
      { step: '01 / CAPTURE', title: 'Image Upload', desc: 'Accepts mobile camera raw photos of fruit clusters.' },
      { step: '02 / DETECT', title: 'YOLOv8 Engine', desc: 'Predicts bounding box coordinates for each fruit.' },
      { step: '03 / CROP & SCALE', title: 'Image Slicer', desc: 'Crops detected regions and normalizes tensors.' },
      { step: '04 / CLASSIFY', title: 'CNN Classifier', desc: 'Categorizes individual fruits as fresh or damaged.' },
      { step: '05 / STRATEGY', title: 'Decision Node', desc: 'Grades overall batch quality and recommends market routes.' }
    ],
    carbon: [
      { step: '01 / LOCATION', title: 'Geo Inputs', desc: 'Retrieves GPS coordinates from React Native/Expo client.' },
      { step: '02 / TELEMETRY', title: 'Weather API', desc: 'Queries OpenWeatherMap for local precipitation & temperature.' },
      { step: '03 / MODEL RUN', title: 'XGBoost Predictor', desc: 'Estimates yearly carbon sequestration potential.' },
      { step: '04 / REGULATORY', title: 'ESG Engine', desc: 'Evaluates regional sustainability compliance and ESG grades.' },
      { step: '05 / ANALYTICS', title: 'Automated PDF Report', desc: 'FastAPI generates and signs printable carbon certificates.' }
    ],
    soil: [
      { step: '01 / INGESTION', title: 'Report Ingestion', desc: 'Ingests PDF or JPEG image of agricultural soil test reports.' },
      { step: '02 / DEREGISTER', title: 'OpenCV Preprocessor', desc: 'Applies thresholding and deskewing to optimize text readability.' },
      { step: '03 / EXTRACTION', title: 'Tesseract OCR', desc: 'Performs optical character recognition on tabular data grids.' },
      { step: '04 / MODEL PARSE', title: 'Pydantic Validator', desc: 'Regex parsers structure text into typed nutrient models.' },
      { step: '05 / PRESCRIPTION', title: 'Agronomic Rules', desc: 'Calculates N-P-K deficiency and recommends organic fertilizer.' }
    ],
    anpr: [
      { step: '01 / STREAM', title: 'Video Ingestion', desc: 'Captures raw frames from static camera feed.' },
      { step: '02 / SEGMENT', title: 'Haar Cascade', desc: 'Isolates high-contrast horizontal license plate shapes.' },
      { step: '03 / CLEANUP', title: 'OpenCV Filters', desc: 'Applies binarization and morphological noise-reduction.' },
      { step: '04 / PARSING', title: 'Tesseract Segmenter', desc: 'Translates cropped plate pixels into alphanumeric text.' },
      { step: '05 / RECORD', title: 'SQLite Logger', desc: 'Compares plate to database whitelist and logs gate open triggers.' }
    ]
  };

  return (
    <section
      id="ailab"
      className="relative w-screen bg-[#f8fafc] dark:bg-[#070b13] text-slate-800 dark:text-[#E8DFD8] py-24 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500"
    >
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
            04 / AI LAB &amp; RESEARCH
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#2563eb]/80 via-[#3b82f6]/40 to-transparent" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-slate-200 dark:to-slate-400 dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              AI MODEL LABORATORY.
            </span>
            <span className="block text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              EXPERIMENTAL INSIGHTS.
            </span>
          </h2>

          {/* Mode Switcher Tab Buttons */}
          <div className="flex space-x-2 border-b border-slate-200 dark:border-blue-500/25 pb-1 font-mono text-[10.5px] tracking-wider uppercase">
            {(['playground', 'cards', 'architecture'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setDemoState('idle');
                }}
                className={`px-4 py-2 border-t-2 transition-all cursor-pointer ${
                  activeTab === tab 
                    ? 'border-blue-500 dark:border-cyan-500 text-slate-900 dark:text-white bg-slate-100 dark:bg-[#1e293b]/55 font-bold' 
                    : 'border-transparent text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab === 'playground' ? 'Playground Demo' : tab === 'cards' ? 'Model Cards' : 'Agent Architecture'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Box */}
        <div className="w-full min-h-[500px] border border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#0b132b]/90 p-8 rounded-sm shadow-sm dark:shadow-[0_20px_60px_rgba(0,0,0,0.98)] transition-colors duration-500">
          <AnimatePresence mode="wait">
            
            {/* 1. PLAYGROUND TAB */}
            {activeTab === 'playground' && (
              <motion.div
                key="playground"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10"
              >
                {/* Left controls */}
                <div className="lg:col-span-4 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 dark:text-blue-400 block mb-3">// CHOOSE NEURAL WORKLOAD</span>
                    <div className="flex flex-col space-y-2.5">
                      {[
                        { id: 'fruit', label: 'YOLOv8 Fruit Grading' },
                        { id: 'carbon', label: 'Carbon Credit & ESG (XGBoost)' },
                        { id: 'soil', label: 'Soil Health AI (SoilENZ)' },
                        { id: 'anpr', label: 'ANPR Vehicle Entry' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedDemo(item.id as any);
                            setSampleIdx(0);
                            setDemoState('idle');
                          }}
                          className={`w-full text-left px-4 py-3.5 border transition-all text-xs font-mono tracking-wider cursor-pointer ${
                            selectedDemo === item.id
                              ? 'border-blue-500 dark:border-blue-500 bg-slate-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-200 font-bold'
                              : 'border-slate-200 dark:border-blue-900/20 hover:border-slate-300 dark:hover:border-blue-800/40 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-blue-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 dark:text-blue-400 block mb-3">// LOAD SAMPLE TARGET</span>
                    <div className="flex space-x-2">
                      {currentSamples.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSampleIdx(idx);
                            setDemoState('idle');
                          }}
                          className={`px-3 py-1.5 border text-[11px] font-mono transition-all cursor-pointer ${
                            sampleIdx === idx
                              ? 'border-slate-800 dark:border-white text-slate-900 dark:text-white font-bold bg-slate-100 dark:bg-[#1e293b]'
                              : 'border-slate-200 dark:border-blue-500/20 text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white'
                          }`}
                        >
                          Sample {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={runModel}
                    disabled={demoState === 'running'}
                    className="w-full py-4 border border-slate-300 dark:border-blue-500 bg-slate-100 dark:bg-[#14110E] hover:bg-slate-200 dark:hover:bg-[#201A15] hover:border-blue-500 dark:hover:border-[#2563eb] text-slate-800 dark:text-white text-[11px] font-mono tracking-[0.25em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm dark:shadow-[0_4px_15px_rgba(212,175,55,0.05)] cursor-pointer"
                  >
                    {demoState === 'running' ? 'EXECUTING PIPELINE...' : 'RUN INFERENCE ENGINE ⚡'}
                  </button>
                </div>                 {/* Right Viewer Canvas */}
                <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
                  <div className="relative border border-slate-200 dark:border-blue-900/40 bg-slate-100 dark:bg-slate-950 rounded-sm aspect-video max-w-2xl overflow-hidden flex items-center justify-center transition-colors">
                    
                    {/* Simulated Output overlay tag */}
                    <span className="absolute top-3 left-3 bg-blue-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 z-20 shadow-md">
                      INTERACTIVE DEMO SIMULATION
                    </span>

                    {/* Image Canvas with Offline Fallback */}
                    {!imgErrors[sample.img] ? (
                      <img
                        src={sample.img}
                        alt="Sample input"
                        onError={() => setImgErrors(prev => ({ ...prev, [sample.img]: true }))}
                        className="w-full h-full object-cover filter brightness-[0.88] transition-all"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-200 dark:bg-slate-900 flex flex-col items-center justify-center p-6 text-center select-none">
                        <span className="text-3xl mb-2">📷</span>
                        <span className="text-xs font-mono text-slate-500 dark:text-blue-400 uppercase tracking-widest">// OFFLINE FEED SIMULATOR //</span>
                        <p className="text-[10px] text-slate-600 dark:text-slate-400 max-w-xs mt-2 leading-relaxed">
                          Using local synthetic camera buffer because remote Unsplash asset is unavailable.
                        </p>
                      </div>
                    )}

                    {/* Bounding box overlays */}
                    {demoState === 'completed' &&
                      sample.detections.map((d, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.25, duration: 0.4 }}
                          className={`absolute border-2 border-blue-500 dark:border-cyan-400 bg-blue-500/10 dark:bg-cyan-500/10 flex flex-col justify-start z-10 ${d.box}`}
                        >
                          <span className="bg-blue-600 dark:bg-cyan-400 text-white dark:text-black font-bold font-mono text-[9px] px-1 py-0.5 select-none leading-none w-fit">
                            {d.label} // {d.score}
                          </span>
                        </motion.div>
                      ))}

                    {/* Scan Loading Overlay */}
                    {demoState === 'running' && (
                      <div className="absolute inset-0 bg-slate-900/90 dark:bg-black/90 flex flex-col items-center justify-center p-6 text-left z-20">
                        <div className="w-[80%] max-w-md h-1.5 bg-blue-900/20 rounded-full overflow-hidden relative mb-4">
                          <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-blue-500 dark:bg-cyan-400"
                          />
                        </div>
                        <div className="text-[10.5px] font-mono text-blue-400 dark:text-cyan-400 w-[80%] max-w-md space-y-1">
                          {demoLogs.map((l, index) => (
                            <p key={index} className="opacity-90">{l}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Summary Footer text */}
                  <div className="p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-blue-900/20 font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="text-blue-600 dark:text-cyan-400 font-semibold block mb-1">OUTPUT COGNITION LOG //</span>
                    {demoState === 'completed' ? (
                      <p className="text-slate-800 dark:text-white">{sample.summary}</p>
                    ) : demoState === 'running' ? (
                      <p className="animate-pulse">Model is analyzing tensor nodes...</p>
                    ) : (
                      <p>Pipeline is idle. Load a sample and execute inference above.</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. MODEL CARDS TAB */}
            {activeTab === 'cards' && (
              <motion.div
                key="cards"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-3xl mx-auto w-full"
              >
                <div className="p-8 border border-slate-200 dark:border-blue-500/25 bg-slate-50 dark:bg-[#0b132b] rounded-sm shadow-md transition-colors duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 dark:border-blue-500/15 pb-5 mb-6 gap-4">
                    <div>
                      <span className="text-[9.5px] font-mono text-blue-600 dark:text-cyan-400 tracking-widest block mb-2">// ACTIVE WORKLOAD MODEL CARDS</span>
                      <h4 className="text-2xl font-bold text-slate-800 dark:text-white uppercase leading-tight font-serif">
                        {modelCardsMap[selectedDemo].name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-sm h-fit">
                      ACTIVE PIPELINE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Specifications */}
                    <div className="space-y-4 text-xs font-mono text-slate-600 dark:text-slate-350">
                      <div>
                        <span className="text-slate-800 dark:text-white block font-semibold mb-1">PROBLEM SPACE:</span>
                        <span className="font-sans leading-relaxed text-slate-500 dark:text-slate-300">{modelCardsMap[selectedDemo].problem}</span>
                      </div>
                      <div>
                        <span className="text-slate-800 dark:text-white block font-semibold mb-1">DATASET SOURCE:</span>
                        <span className="font-sans leading-relaxed text-slate-500 dark:text-slate-300">{modelCardsMap[selectedDemo].dataset}</span>
                      </div>
                      <div>
                        <span className="text-slate-800 dark:text-white block font-semibold mb-1">TECHNOLOGY LAYER:</span>
                        <span className="text-slate-500 dark:text-slate-300">{modelCardsMap[selectedDemo].tech}</span>
                      </div>
                    </div>

                    {/* Metrics Gauges */}
                    <div className="space-y-4 bg-white dark:bg-slate-950/40 p-6 border border-slate-200 dark:border-blue-900/20 rounded-sm">
                      <span className="text-[9.5px] font-mono text-slate-400 dark:text-blue-400 tracking-widest block uppercase mb-2">// PERFORMANCE ESTIMATOR</span>
                      
                      {/* Metric 1 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-slate-500 dark:text-slate-300 font-semibold">ACCURACY:</span>
                          <span className="font-bold text-blue-600 dark:text-cyan-400">{modelCardsMap[selectedDemo].accuracy}</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 dark:bg-cyan-500" style={{ width: modelCardsMap[selectedDemo].accuracy.includes('%') ? modelCardsMap[selectedDemo].accuracy : '90%' }} />
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-slate-500 dark:text-slate-300 font-semibold">PRECISION:</span>
                          <span className="font-bold text-blue-600 dark:text-cyan-400">{modelCardsMap[selectedDemo].precision}</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 dark:bg-cyan-500" style={{ width: modelCardsMap[selectedDemo].precision }} />
                        </div>
                      </div>

                      {/* Metric 3 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-slate-500 dark:text-slate-300 font-semibold">RECALL:</span>
                          <span className="font-bold text-blue-600 dark:text-cyan-400">{modelCardsMap[selectedDemo].recall}</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 dark:bg-cyan-500" style={{ width: modelCardsMap[selectedDemo].recall }} />
                        </div>
                      </div>

                      {/* Metric 4 */}
                      <div className="pt-3 border-t border-slate-100 dark:border-blue-900/10 flex justify-between items-center text-[11px] font-mono">
                         <span className="text-slate-400">INFERENCE SPEED:</span>
                         <span className="text-slate-800 dark:text-white font-bold">{modelCardsMap[selectedDemo].speed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. ARCHITECTURE TAB */}
            {activeTab === 'architecture' && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex flex-col items-center py-6"
              >
                <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 dark:text-blue-400 mb-10 uppercase">// AGENTIC SYSTEM FLOW ({modelCardsMap[selectedDemo].name})</span>
                
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 max-w-5xl w-full text-center">
                  {architectureFlows[selectedDemo].map((flow, index) => (
                    <React.Fragment key={index}>
                      <div className={`w-[175px] p-4 border rounded-sm transition-colors duration-500 flex flex-col justify-between h-[135px] ${
                        index === 2
                          ? 'border-blue-500 dark:border-cyan-500/50 bg-blue-50 dark:bg-[#1e293b] shadow-sm dark:shadow-[0_0_15px_rgba(37,99,235,0.15)]'
                          : 'border-slate-200 dark:border-blue-500/30 bg-slate-50 dark:bg-slate-950/40'
                      }`}>
                        <div>
                          <span className="text-[9px] font-mono text-blue-600 dark:text-cyan-400 block mb-1">{flow.step}</span>
                          <p className="text-slate-800 dark:text-white text-xs font-semibold uppercase tracking-wide leading-tight">{flow.title}</p>
                        </div>
                        <p className="text-[9.5px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">{flow.desc}</p>
                      </div>
                      
                      {index < architectureFlows[selectedDemo].length - 1 && (
                        <span className="text-blue-600 dark:text-cyan-400 font-bold text-lg animate-pulse lg:rotate-0 rotate-90">➔</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default AiLab;
