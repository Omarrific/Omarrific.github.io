import React, { useState } from 'react';
import './ImageSlideshow.css';

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow">
      <button onClick={prevSlide} className="slideshow-button">‹</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      <button onClick={nextSlide} className="slideshow-button">›</button>
    </div>
  );
};

export default ImageSlideshow;
