import React from 'react';
import Typical from 'react-typical';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <h2>
        Hi, I'm <span className="color-change">Omar </span>
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
    </section>
  );
};

export default Home;
