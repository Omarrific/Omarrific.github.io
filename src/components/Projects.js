import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Project from './Project';
import chronobreak1 from '../images/projectImages/chronobreak/chrono1.png';
import chronobreak2 from '../images/projectImages/chronobreak/chrono2.png';
import earthdex1 from '../images/projectImages/earthdex/earthdex1.png';
import earthdex2 from '../images/projectImages/earthdex/earthdex2.png';
import earthdex3 from '../images/projectImages/earthdex/earthdex3.png';
import capture1 from '../images/projectImages/capture/capture1.png';
import capture2 from '../images/projectImages/capture/capture2.png';
import { Pagination } from 'swiper/modules';
import './Projects.css';

const projects = [
  {
    name: "Chrono//Break",
    subheading: "A 2D Puzzle-Platforming Game",
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
  {
    name: "Capture",
    subheading: "A Cloud-Based Note Taking App",
    blurb: "Capture is an up-and-coming note taking application to help anyone and everyone organize their notes from anywhere and everywhere!",
    images: [capture1, capture2],
    links: {
      github: "https://github.com/Omarrific/Capture",
      //itch: "https://earthdex.vercel.app/"
    }
  },
  
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="project-slide">
            <Project project={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};



export default Projects;
