import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import DropdownMenu from './components/DropdownMenu';
import Background from './components/Background'; 
import './App.css';

function App() {
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
