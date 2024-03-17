import React, { useState } from 'react';
import { images } from './imageList';
import './Gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === images.length - 1) { // when reaching the last image from the array, sets the index back to 0
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1); // when the current image is the first one, when go back to the end of the array
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <img src={images[currentIndex].url} alt={images[currentIndex].description} />
      <p>{images[currentIndex].description}</p>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Gallery;
