import type { CSSProperties } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects, type Project } from '../data/projects';
import { useInView } from '../hooks/useInView';
import SectionHeading from './SectionHeading';
import './ProjectsSection.css';

interface CardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: CardProps) {
  const [ref, inView] = useInView<HTMLLIElement>();
  // Stagger cards that share a row so they don't land in lockstep.
  const style = { transitionDelay: `${(index % 2) * 90}ms` } as CSSProperties;

  return (
    <li ref={ref} className={`reveal ${inView ? 'is-visible' : ''}`} style={style}>
      <article className="project-card">
        <div className="project-image-container">
          <img
            src={project.imageSrc}
            alt={`Screenshot of ${project.title}`}
            className="project-image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="project-details">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-tech" aria-label="Tech stack">
            {project.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="project-links">
            {project.gitLink && (
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`${project.title} source on GitHub (opens in a new tab)`}
              >
                <FaGithub aria-hidden="true" />
                <span>Source</span>
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Visit ${project.title} (opens in a new tab)`}
              >
                <FaExternalLinkAlt aria-hidden="true" />
                <span>Visit</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      <ul className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </ul>
    </section>
  );
}
