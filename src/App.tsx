import { ThemeProvider } from './components/ThemeContext';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AiTerminal } from './components/AiTerminal';
import { ProjectsSection } from './components/ProjectsSection';
import { AiLab } from './components/AiLab';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { AiChatAssistant } from './components/AiChatAssistant';

function AppContent() {
  return (
    <div className="w-full min-h-screen bg-[#f8fafc] dark:bg-[#070b13] text-slate-900 dark:text-[#E8DFD8] transition-colors duration-500 selection:bg-blue-200 dark:selection:bg-[#cbb59d] selection:text-black tech-grid">
      <HeroSection />
      <AboutSection />
      <AiTerminal />
      <ProjectsSection />
      <AiLab />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <AiChatAssistant />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;