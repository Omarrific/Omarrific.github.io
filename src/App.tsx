import { useEffect, useState } from 'react'
import NameIntro, { type Stage } from './components/NameIntro.tsx'
import StarBackground from './components/StarryBackground.tsx'
import Menu from './components/Menu.tsx'
import LandingPage from './components/LandingPage.tsx'
import ExperienceSection from './components/ExperienceSection.tsx'
import ProjectsSection from './components/ProjectsSection.tsx'
import ContactSection from './components/ContactSection.tsx'
import Footer from './components/Footer.tsx'
import './App.css'

const INTRO_DURATION_MS = 2000

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function App() {
  const [stage, setStage] = useState<Stage>('intro')

  useEffect(() => {
    const t = setTimeout(
      () => setStage('reveal'),
      prefersReducedMotion() ? 0 : INTRO_DURATION_MS
    )
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', stage !== 'reveal')
  }, [stage])

  return (
    <div className={`app stage-${stage}`}>
      <NameIntro stage={stage} />

      {stage === 'reveal' && (
        <>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <StarBackground />
          <Menu />
          <main id="main" tabIndex={-1}>
            <LandingPage />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
