import React, { useState, useEffect } from 'react';
import './SlideShow.css'; // Import your styles
const API_URL = process.env.REACT_APP_DB_HOST

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: 5
  }
  
  // Automatically change slide every 'interval' milliseconds
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const timer = setTimeout(() => setCurrentIndex(nextIndex), interval);

    return () => clearTimeout(timer); // Cleanup on unmount or index change
  }, [currentIndex, images.length, interval]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-slide" key={currentIndex}>
        <img src={API_URL+images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={imageStyle} />
      </div>
      <button className="prev" onClick={goToPreviousSlide}>&#10094;</button>
      <button className="next" onClick={goToNextSlide}>&#10095;</button>
      <div className="dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`} 
            onClick={() => setCurrentIndex(index)} 
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
