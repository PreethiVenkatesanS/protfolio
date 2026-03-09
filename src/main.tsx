import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './pages/Layout/Navbar.tsx'
import HeroSection from './pages/HeroSection/page.tsx'
import AboutSection from './pages/AboutSection/page.tsx'
import SkillsSection from './pages/Skills/page.tsx'
import ExperienceSection from './pages/ExeperienceSection/page.tsx'
import ProjectSection from './pages/ProjectSection/page.tsx'
import ContactSection from './pages/ContectSection/page.tsx'
import Footer from './pages/Layout/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </StrictMode>,
)
