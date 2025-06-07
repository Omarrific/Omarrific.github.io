import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { LuFileText } from 'react-icons/lu';
import headshot from '../images/headshot.jpg';
import resume from '../Omar_Abuhammoud_Resume.pdf';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='landing' className={`landing-page ${visible ? 'fade-in' : ''}`}>
      <div className="text-section">
        <div className="name-container">
          <div className="line-wrapper">
            <h1 className="first-name">Omar</h1>
            <div className="underline-small" />
          </div>
          <div className="line-wrapper second-line-wrapper">
            <h1 className="last-name">Abuhammoud</h1>
            <div className="underline-large" />
          </div>
        </div>
        <p className="intro-text">
          Hi! I’m Omar, a passionate Computer Science student at Cornell
          University, driven by curiosity and creativity. My journey in
          technology blends a solid foundation in both software and hardware,
          allowing me to approach challenges with a unique perspective. I thrive
          on innovation and problem‐solving, always eager to dive into new
          projects and explore emerging technologies. You can find my LinkedIn,
          GitHub, Email, and resume below!
        </p>
        <div className="icon-buttons">
          <a
            href="https://www.linkedin.com/in/omarabuhammoud/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
          <a
            href="https://github.com/Omarrific"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="icon github" />
          </a>
          <button
            className="icon email"
            onClick={scrollToContact}
            aria-label="Email"
          >
            <FaEnvelope />
          </button>
          <a
            href={resume}
            download="Omar_Abuhammoud_Resume.pdf"
            className="icon resume"
            aria-label="Download Resume"
          >
            <LuFileText />
          </a>
        </div>
      </div>
      <div className="image-section">
        <div className="ellipse-wrapper">
          <img src={headshot} alt="Omar Abuhammoud" className="headshot" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
