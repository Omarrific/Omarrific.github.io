import React from 'react';
import Project from './Project';
import chronobreak1 from '../images/projectImages/project1/chrono1.png';
import chronobreak2 from '../images/projectImages/project1/chrono2.png';
import earthdex1 from '../images/projectImages/project2/earthdex1.png';
import earthdex2 from '../images/projectImages/project2/earthdex2.png';
import earthdex3 from '../images/projectImages/project2/earthdex3.png';
import './Projects.css';

const projects = [
  {
    name: "Chrono//Break",
    subheading: "2D Puzzle-Platforming Game",
    blurb: "ChronoBreak is a 2D puzzle-platforming game being created in the Godot Engine. In this thrilling adventure, players control the flow of time to solve intricate puzzles and navigate through a dynamically evolving world.",
    images: [chronobreak1, chronobreak2],
    links: {
      github: "https://github.com/Omarrific/Chronobreak",
      itch: "https://omarriffic.itch.io/chronobreak"
    }
  },
  {
    name: "Earthdex",
    subheading: "Your Real-Life Pokédex",
    blurb: "Earthdex is an application that uses Tensorflow's image object identification models and OpenAI's text generation models to create Pokédex-like entries of real-life objects!",
    images: [earthdex1, earthdex2, earthdex3],
    links: {
      github: "https://github.com/Omarrific/earthdex",
      itch: "https://earthdex.vercel.app/"
    }
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="projects-title">Projects</h2>
    {projects.map((project, index) => (
      <Project key={index} project={project} index={index} />
    ))}
    <div className="more-to-come">
      <p>More to Come...</p>
    </div>
  </section>
);

export default Projects;
