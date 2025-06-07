import { useEffect, useState } from 'react'
import NameIntro from './components/NameIntro.tsx'
import StarBackground from './components/StarryBackground'
import LandingPage from './components/LandingPage.tsx'
import './App.css'
import ExperienceSection from './components/ExperienceSection.tsx'
import ProjectsSection from './components/ProjectsSection.tsx'
import ContactSection from './components/ContactSection.tsx'
import Menu from './components/Menu.tsx'

function App() {
  const [stage, setStage] = useState<'intro' | 'stars' | 'reveal'>('intro')

  useEffect(() => {
    const t1 = setTimeout(() => setStage('stars'), 2000)
    const t2 = setTimeout(() => setStage('reveal'), 2000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', stage !== 'reveal')
  }, [stage])

 return (
    <div className={`app stage-${stage}`}>
      <NameIntro stage={stage} />

      {(stage === 'stars' || stage === 'reveal') && <StarBackground />}

      <div className="gradient-overlay" />

      {stage === 'reveal' && (
        <>
         <Menu />
         <LandingPage />
         <ExperienceSection />
         <ProjectsSection />
         <ContactSection />
        </>
      )}
    </div>
  )
}

export default App
