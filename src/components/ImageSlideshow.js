import React, { useState, useEffect } from "react";
import "./ImageSlideshow.css";

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [images.length]);

  return (
    <div className="slideshow">
      <div className="slideshow-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "visible" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
