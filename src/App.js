import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import DropdownMenu from './components/DropdownMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="night">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            className="shooting_star"
            key={index}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
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
