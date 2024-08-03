import StoresCards from '../../assets/appstorescards/cards/appstorescards';
import React, { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

function Storespagecardslide({ cardsObject = [] }) {
  if (!cardsObject.length) {
    return <p>No cards to display.</p>;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const cardsPerPage = 6;
  const maxSlide = Math.ceil(cardsObject.length / cardsPerPage) - 1;

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
    if (index !== currentSlide) {
      setAnimationClass(index > currentSlide ? 'slide-left' : 'slide-right');
      setTimeout(() => {
        setCurrentSlide(index);
        setAnimationClass('');
      }, 500);
    }
  };

  const dots = Array.from({ length: maxSlide + 1 }, (_, index) => index);

  return (
    <div className="couponpagecardslide-container">
      {cardsObject.length > cardsPerPage ? (
        <div className="couponpagecardslide-wrapper">
          <div className={`offerpagecardslide-content ${animationClass}`}>
            {cardsObject
              .slice(currentSlide * cardsPerPage, (currentSlide + 1) * cardsPerPage)
              .map((cardData, index) => (
                cardData && <StoresCards key={index} {...cardData} />
              ))}
          </div>
          <div className="couponpagecardslide-dots">
            <button className="couponpagecardslide-button prev" onClick={handlePrevSlide}>
              <MdArrowBackIosNew />
            </button>
            {dots.map((num) => (
              <span
                key={num}
                className={`couponpagecardslide-dot ${currentSlide === num ? 'active' : ''}`}
                onClick={() => handleDotClick(num)}
              >
                {num + 1}
              </span>
            ))}
            <button className="couponpagecardslide-button next" onClick={handleNextSlide}>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      ) : (
        <div>
          {cardsObject.map((cardData, index) => (
            cardData && <StoresCards key={index} {...cardData} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Storespagecardslide;
