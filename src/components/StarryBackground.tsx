import React, { useEffect, useRef } from 'react';
import './StarryBackground.css';

const MAX_STARS = 100;
// Cap frame delta so returning to a background tab doesn't teleport the field.
const MAX_FRAME_SECONDS = 0.1;

interface Star {
  x: number;
  y: number;
  speed: number;
  size: number;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId = 0;
    let lastTimestamp = performance.now();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createStar = (): Star => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: Math.random() * 50 + 50,
      size: Math.random() * 2 + 1,
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = (time: number) => {
      const delta = Math.min((time - lastTimestamp) / 1000, MAX_FRAME_SECONDS);
      lastTimestamp = time;

      for (const star of stars) {
        star.y -= star.speed * delta;
        if (star.y < -star.size) {
          star.y = height + star.size;
          star.x = Math.random() * width;
        }
      }

      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    const stars: Star[] = Array.from({ length: MAX_STARS }, createStar);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const start = () => {
      cancelAnimationFrame(animationFrameId);
      if (motionQuery.matches) {
        draw();
      } else {
        lastTimestamp = performance.now();
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleResize = () => {
      resize();
      if (motionQuery.matches) draw();
    };

    start();
    window.addEventListener('resize', handleResize);
    motionQuery.addEventListener('change', start);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', start);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-field" aria-hidden="true" />;
};

export default StarBackground;
