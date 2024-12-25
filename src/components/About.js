import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaJava } from 'react-icons/fa';
import { SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiCsharp, SiGodotengine, SiC, SiCplusplus } from 'react-icons/si';
import { LuFileText } from 'react-icons/lu';
import './About.css';
import headshot from '../images/headshot.jpg';
import resume from '../Omar_Abuhammoud_Resume.pdf';

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
            <a href={resume} download="Omar_Abuhammoud_Resume.pdf" className="icon resume" aria-label="Download Resume">
              <LuFileText />
            </a>
          </div>
          <p className="blurb">
            Hi! I'm Omar, a passionate Computer Science student at Cornell University,
            driven by curiosity and creativity. My journey in technology blends a solid
            foundation in both software and hardware, allowing me to approach challenges
            with a unique perspective. I thrive on innovation and problem-solving, always 
            eager to dive into new projects and explore emerging technologies. You can find 
            my LinkedIn, GitHub, Email, and resume above!
          </p>
          <div className="tech-icons">
            <FaJava className="tech-icon java" title="Java" />
            <SiPython className="tech-icon python" title="Python" />
            <SiHtml5 className="tech-icon html5" title="HTML5" />
            <SiCss3 className="tech-icon css" title="CSS" />
            <SiJavascript className="tech-icon javascript" title="JavaScript" />
            <SiReact className="tech-icon react" title="React" />
            <SiC className="tech-icon c" title="C" />
            <SiCplusplus className="tech-icon cpp" title="Cpp" />
            <SiCsharp className="tech-icon csharp" title="C#" />
            <SiGodotengine className="tech-icon godot" title="Godot" />
            <FaGithub className="tech-icon github" title="GitHub" />
          </div>
        </div>
        <img src={headshot} alt="Omar Abuhammoud" className="profile-picture" />
      </div>
    </section>
  );
};

export default About;
