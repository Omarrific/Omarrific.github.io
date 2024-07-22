import React from 'react';
import Project from './Project';
import chronobreak1 from '../images/projectImages/project1/chrono1.png';
import chronobreak2 from '../images/projectImages/project1/chrono2.png';

import './Projects.css';

const projects = [
  {
    name: "Chrono//Break",
    subheading: "2D Puzzle-Platforming Game",
    blurb: "ChronoBreak is a 2D puzzle-platforming game being created in the Godot Engine. In this thrilling adventure, players control the flow of time to solve intricate puzzles and navigate through a dynamically evolving world. As the sole developer of this game, I am responsible for all aspects from gameplay and level design, to world building.",
    images: [chronobreak1, chronobreak2],
    links: {
      github: "https://github.com/Omarrific/Chronobreak",
      itch: "https://omarriffic.itch.io/chronobreak"
    }
  },
  /*
  {
    name: "Project 2",
    subheading: "Description 2",
    blurb: "This is a detailed description of Project 2.",
    images: [chronobreak1, chronobreak2],
    links: {
      github: "https://github.com/project2",
      itch: "https://itch.io/project2"
    }
  },
  */
];

const Projects = () => (
  <div className="projects" id="projects">
    <h2 className="projects-title">Projects</h2>
    {projects.map((project, index) => (
      <Project key={index} project={project} index={index} />
    ))}
    <div className="more-to-come">
      <p>More to Come...</p>
    </div>
  </div>
);

export default Projects;
