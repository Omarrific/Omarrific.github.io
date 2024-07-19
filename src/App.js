import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const homeSection = document.querySelector('#home');
      const homeSectionBottom = homeSection.getBoundingClientRect().bottom;

      if (homeSectionBottom <= 0) {
        header.classList.remove('hidden');
      } else {
        header.classList.add('hidden');
      }
    };

    const main = document.querySelector('main');
    main.addEventListener('scroll', handleScroll);
    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
