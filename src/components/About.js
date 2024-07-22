import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './About.css';
import headshot from '../images/headshot.jpg';

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="about">
      <div className="about-content">
        <div className="text-content">
          <h1>Omar Abuhammoud</h1>
          <h2>Software Developer</h2>
          <div className="icon-buttons">
            <a href="https://www.linkedin.com/in/omarabuhammoud/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="https://github.com/Omarrific" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon github" />
            </a>
            <button className="icon email" onClick={scrollToContact}>
              <FaEnvelope />
            </button>
          </div>
          <p className="blurb">
            Hi! I'm Omar, a passionate Computer Science student at Cornell University,
            driven by curiosity and creativity. My journey in technology blends a solid
            foundation in both software and hardware, allowing me to approach challenges
            with a unique perspective. I thrive on innivation and problem-solving, always 
            eager to dive into new projects and explore emerging technologies.
          </p>
        </div>
        <img src={headshot} alt="Omar Abuhammoud" className="profile-picture" />
      </div>
    </section>
  );
};

export default About;
