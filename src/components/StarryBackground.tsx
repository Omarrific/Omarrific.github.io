import React, { useEffect } from 'react';
import './StarryBackground.css';

const MAX_STARS = 100;

interface Star {
  el: HTMLDivElement;
  x: number;
  y: number;
  speed: number;
  size: number;
}

const StarBackground: React.FC = () => {
  useEffect(() => {
    const container = document.createElement('div');
    container.id = 'star-container';
    container.classList.add('fade-in');
    document.body.appendChild(container);

    let stars: Star[] = [];
    let lastTimestamp = performance.now();
    let animationFrameId: number;
    let pauseTime = 0;

    const createStar = (): Star => {
      const size = Math.random() * 2 + 1;
      const speed = Math.random() * 50 + 50;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      const el = document.createElement('div');
      el.className = 'star';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      container.appendChild(el);

      return { el, x, y, speed, size };
    };

    const animate = (time: number) => {
      const delta = (time - lastTimestamp) / 1000;
      lastTimestamp = time;

      stars.forEach((star) => {
        star.y -= star.speed * delta;

        if (star.y < -star.size) {
          star.y = window.innerHeight + star.size;
          star.x = Math.random() * window.innerWidth;
        }

        star.el.style.top  = `${star.y}px`;
        star.el.style.left = `${star.x}px`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    for (let i = 0; i < MAX_STARS; i++) {
      stars.push(createStar());
    }

    animationFrameId = requestAnimationFrame(animate);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseTime = performance.now();
      } else {
        const now = performance.now();
        const delta = now - pauseTime;
        lastTimestamp += delta; 
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      container.remove();
    };
  }, []);

  return null;
};

export default StarBackground;
