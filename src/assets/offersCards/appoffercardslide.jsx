import OfferCards from './cards/offersCards';
import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import './appoffercardslide.css';

function AppofferCardslide({ cardsObject }) {
  if (!cardsObject || !cardsObject.length) {
    return <p>No cards to display.</p>;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = Math.ceil(cardsObject.length / 4) - 1;

  const handleNextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const dots = Array(maxSlide + 1).fill(null);

  return (
    <div className="cardslide-container">
      {cardsObject.length > 4 && (
        <div className="slider-wrapper">
        <div className="slider-flex">
          <button className="slider-button prev" onClick={handlePrevSlide}>
            <MdArrowBackIosNew />
          </button>
          <div className="slider-content">
            {cardsObject
              .slice(currentSlide * 4, (currentSlide + 1) * 4)
              .map((cardData, index) => (
                cardData && <OfferCards key={index} {...cardData} />
              ))}
          </div>
          <button className="slider-button next" onClick={handleNextSlide}>
            <MdArrowForwardIos />
          </button>
          </div>
          <div className="slider-dots">
            {dots.map((_, index) => (
              <span
                key={index}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      )}
      {cardsObject.length <= 4 && (
        <div>
          {cardsObject.map((cardData, index) => (
            <OfferCards key={index} {...cardData} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AppofferCardslide;
