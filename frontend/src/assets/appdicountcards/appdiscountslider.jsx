import Appdiscountscards from './cards/appdiscountcards'
import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

function AppdiscountCardslide({ cardsObject }) {
  if (!cardsObject || !cardsObject.length) {
    return <p>No cards to display.</p>;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = Math.ceil(cardsObject.length / 3) - 1;

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
      {cardsObject.length > 3 && (
        <div className="slider-wrapper">
        <div className="slider-flex">
          <button className="discountslider-button prev" onClick={handlePrevSlide}>
            <MdArrowBackIosNew />
          </button>
          <div className="slider-content">
            {cardsObject
              .slice(currentSlide * 3, (currentSlide + 1) * 3)
              .map((cardData, index) => (
                cardData && <Appdiscountscards key={index} {...cardData} />
              ))}
          </div>
          <button className="discountslider-button next" onClick={handleNextSlide}>
            <MdArrowForwardIos />
          </button>
          </div>
          <div className="discountslider-dots">
            {dots.map((_, index) => (
              <span
                key={index}
                className={`discountslider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      )}
      {cardsObject.length <= 3 && (
        <div>
          {cardsObject.map((cardData, index) => (
            <Appdiscountscards key={index} {...cardData} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AppdiscountCardslide;
