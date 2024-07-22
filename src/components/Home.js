import React from 'react';
import Typical from 'react-typical';
import './Home.css';

const Home = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <h2>
        Hi, I'm <span className="color-change">Omar</span>
      </h2>
      <p>
        I'm a{' '}
        <Typical
          loop={Infinity}
          wrapper="span"
          steps={[
            'full stack developer',
            2000,
            'software developer',
            2000,
          ]}
          className="typing-effect"
        />
      </p>
      <button className="button" onClick={scrollToProjects}>Go to Projects</button>
    </section>
  );
};

export default Home;
