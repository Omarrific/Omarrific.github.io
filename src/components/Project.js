import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ImageSlideshow from './ImageSlideshow';
import './Project.css';

const Project = ({ project }) => {
  return (
    <div className="project">
      <ImageSlideshow images={project.images} />
      <div className="project-details">
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
