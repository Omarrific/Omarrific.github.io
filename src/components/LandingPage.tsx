import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { LuFileText } from 'react-icons/lu';
import headshot from '../images/headshot.jpg';
import resume from '../Omar_Abuhammoud_Resume.pdf';
import './LandingPage.css';

const roles = ['Software Engineer', 'Game Developer', 'Robotics Lead'];

const LandingPage: React.FC = () => (
  <section id="landing" className="landing-page" aria-labelledby="landing-name">
    <div className="text-section">
      <h1 id="landing-name" className="name-container">
        <span className="name-line">
          <span className="accent-underline">Omar</span>
        </span>
        <span className="name-line name-line--offset">
          <span className="accent-underline">Abuhammoud</span>
        </span>
      </h1>

      <p className="roles">
        {roles.map((role, i) => (
          <React.Fragment key={role}>
            {i > 0 && <span className="roles-sep" aria-hidden="true">/</span>}
            <span>{role}</span>
          </React.Fragment>
        ))}
      </p>

      <p className="intro-text">
        Hi! I’m Omar, a software engineer at Bloomberg and a Cornell Computer
        Science graduate, driven by curiosity and creativity. My work spans
        backend systems, robotics, and game development, from building AI
        tooling for enterprise data to leading Cornell Cup Robotics and
        shipping multiplayer games. That blend of software and hardware lets me
        approach challenges from a unique perspective, and I’m always eager to
        dive into new projects and explore emerging technologies. You can find
        my LinkedIn, GitHub, Email, and resume below!
      </p>

      <ul className="icon-buttons">
        <li>
          <a
            className="icon"
            href="https://www.linkedin.com/in/omarabuhammoud/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="https://github.com/Omarrific"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>
        </li>
        <li>
          <a className="icon" href="#contact" aria-label="Email me" title="Email">
            <FaEnvelope aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            className="icon"
            href={resume}
            download="Omar_Abuhammoud_Resume.pdf"
            aria-label="Download resume (PDF)"
            title="Resume"
          >
            <LuFileText aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>

    <div className="image-section">
      <div className="ellipse-wrapper">
        <img
          src={headshot}
          alt="Portrait of Omar Abuhammoud"
          className="headshot"
          width={444}
          height={634}
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </div>
  </section>
);

export default LandingPage;
