import React, { useEffect } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import DropdownMenu from './components/DropdownMenu';
import Background from './components/Background';
import './App.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      let isProjectsSectionVisible = false;

      entries.forEach(entry => {
        if (entry.target.classList.contains('projects')) {
          isProjectsSectionVisible = entry.isIntersecting;
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
          }
        } else if (entry.target.classList.contains('project')) {
          if (isProjectsSectionVisible) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              entry.target.classList.remove('hidden');
            } else {
              entry.target.classList.remove('visible');
              entry.target.classList.add('hidden');
            }
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Optionally observe project components directly
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      observer.observe(project);
    });

  }, []);

  return (
    <div className="App">
      <Background /> 
      <DropdownMenu />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
