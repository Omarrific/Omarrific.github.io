import React from 'react';
import './Background.css';

const Background = () => {
  const shootingStars = Array.from({ length: 20 }, (_, i) => <div key={i} className="shooting_star"></div>);

  return (
    <div className="background">
      <div className="night">
        {shootingStars}
      </div>
    </div>
  );
};

export default Background;
