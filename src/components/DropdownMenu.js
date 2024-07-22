import React, { useState, useEffect } from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const homeSection = document.getElementById('home');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMenuVisible(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  return (
    isMenuVisible && (
      <div className="dropdown-menu-container">
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
      </div>
    )
  );
};

export default DropdownMenu;
