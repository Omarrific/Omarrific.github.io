import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import capture from '../images/capture.png';
import chronobreak from '../images/chronobreak.png';
import earthdex from '../images/earthdex.png';
import frostbitten from '../images/frostbitten.png';

import './ProjectsSection.css';


interface Project {
  title: string;
  description: string;
  gitLink?: string;
  liveLink?: string; 
  techStack: string[];
  imageSrc: string;
}

const projects: Project[] = [
  {
    title: 'Frostbitten',
    description:
      'An ice-themed puzzle platformer where players master momentum to solve physics-driven challenges.',
    gitLink: '',
    liveLink: 'https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/frostbitten/',
    techStack: ['Java', 'LibGDX'],
    imageSrc: frostbitten
  },
  {
    title: 'Capture',
    description:
      'A cloud-powered note-taking app with offline support and AWS-backed storage.',
    gitLink: 'https://github.com/Omarrific/Capture',
    liveLink: '',
    techStack: ['React', 'FastAPI', 'AWS', 'Python'],
    imageSrc: capture
  },
  {
    title: 'Earthdex',
    description:
      'An AI-driven “Pokédex” that recognizes images and provides dynamic descriptions.',
    gitLink: 'https://github.com/Omarrific/Earthdex',
    liveLink: 'https://earthdex.vercel.app/',
    techStack: ['TensorFlow', 'OpenAI', 'FastAPI', 'React'],
    imageSrc: earthdex
  },
  {
    title: 'Chronobreak',
    description:
      'A 2D puzzle platformer featuring time-based mechanics and save-state support.',
    gitLink: 'https://github.com/Omarrific/Chronobreak',
    liveLink: 'https://omarriffic.itch.io/chronobreak',
    techStack: ['Godot Engine', 'GDScript', 'C#'],
    imageSrc: chronobreak
  },
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1 && !visibleIndices.has(idx)) {
              setVisibleIndices((prev) => {
                const next = new Set(prev);
                next.add(idx);
                return next;
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -100px 0px', threshold: 0.1 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [visibleIndices]);

  return (
    <section id='projects' className="projects-section">
      <h2 className="projects-title">
        Projects
        <div className="projects-underline" />
      </h2>

      <div className="projects-grid">
        {projects.map((proj, idx) => {
          const isVisible = visibleIndices.has(idx);
          const isActive = hoveredIndex === idx;

          return (
            <div
              key={idx}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className={`project-card ${isVisible ? 'visible' : ''} ${
                isActive ? 'active' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="project-image-container">
                <img
                  src={proj.imageSrc}
                  alt={proj.title}
                  className="project-image"
                />
              </div>
              <div className="project-details">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-description">{proj.description}</p>
                <ul className="project-tech">
                  {proj.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {proj.gitLink && proj.gitLink.trim().length > 0 && (
                  <a
                    href={proj.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon"
                  >
                    <FaGithub size={24} />
                  </a>
                  )}
                  {proj.liveLink && proj.liveLink.trim().length > 0 && (
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link-icon"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
