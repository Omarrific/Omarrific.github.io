import React from 'react';
import './Project.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ImageSlideshow from './ImageSlideshow';

const Project = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`project ${isEven ? 'left' : 'right'}`}>
      <div className={`slideshow-container ${isEven ? 'left' : 'right'}`}>
        <ImageSlideshow images={project.images} />
      </div>
      <div className={`project-details ${isEven ? 'left' : 'right'}`}>
        <h3>{project.name}</h3>
        <h4>{project.subheading}</h4>
        <p>{project.blurb}</p>
        <div className="project-links">
          {project.links.itch && (
            <a href={project.links.itch} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="external-link-icon" />
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="github-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
