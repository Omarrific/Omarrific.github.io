import React, { useEffect, useState } from 'react';
import './Background.css';

const Background = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleLoad = () => {
      setIsVisible(true);
      const newStars = Array.from({ length: 20 }, (_, i) => ({
        key: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
      }));
      setStars(newStars);
    };

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="background">
      <div className={`night ${isVisible ? 'show' : ''}`}>
        {stars.map(star => (
          <div
            key={star.key}
            className={`shooting_star ${isVisible ? 'show' : ''}`}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.animationDelay,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Background;
