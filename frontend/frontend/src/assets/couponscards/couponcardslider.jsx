import Couponcards from './cards/couponcard';
import React, { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import './couponcardslider.css';

function Couponpagecardslide({ cardsObject = [] }) {
  if (!cardsObject.length) {
    return <p>No cards to display.</p>;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const maxSlide = Math.ceil(cardsObject.length / 4) - 1;

  const handleNextSlide = () => {
    if (currentSlide < maxSlide) {
      setAnimationClass('slide-left');
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setAnimationClass('');
      }, 500);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setAnimationClass('slide-right');
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setAnimationClass('');
      }, 500);
    }
  };

  const handleDotClick = (index) => {
    if (index > currentSlide) {
      setAnimationClass('slide-left');
    } else if (index < currentSlide) {
      setAnimationClass('slide-right');
    }
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimationClass('');
    }, 500);
  };

  const dots = Array.from({ length: maxSlide + 1 }, (_, index) => index + 1);

  return (
    <div className="couponpagecardslide-container">
      {cardsObject.length > 4 && (
        <div className="couponpagecardslide-wrapper">
          <div className={`couponpagecardslide-content ${animationClass}`}>
            {cardsObject
              .slice(currentSlide * 4, (currentSlide + 1) * 4)
              .map((cardData, index) => (
                cardData && <Couponcards key={index} {...cardData} />
              ))}
          </div>
          <div className="couponpagecardslide-dots">
            <button className="couponpagecardslide-button prev" onClick={handlePrevSlide}>
              <MdArrowBackIosNew />
            </button>
            {dots.map((num, index) => (
              <span
                key={index}
                className={`couponpagecardslide-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              >
                {num}
              </span>
            ))}
            <button className="couponpagecardslide-button next" onClick={handleNextSlide}>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      )}
      {cardsObject.length <= 4 && (
        <div>
          {cardsObject.map((cardData, index) => (
            <Couponcards key={index} {...cardData} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Couponpagecardslide;
