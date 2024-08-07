import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import OfferCards from './cards/offersCards';
import './appoffercardslide.css';

function AppofferCardslide({ cardsObject }) {
  if (!cardsObject || !cardsObject.length) {
    return <p>No cards to display.</p>;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedOffer, setClickedOffer] = useState(null);
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

  const handleButtonClick = async (offer) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("/api/add-offer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, offer }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Offer added successfully", data);
        setClickedOffer(offer.name);
      } else {
        console.error("Error adding offer:", data.message);
      }
    } catch (error) {
      console.error("Error adding offer:", error);
    }
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
                  cardData && (
                    <OfferCards key={index} {...cardData} onButtonClick={handleButtonClick} />
                  )
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
            <OfferCards key={index} {...cardData} onButtonClick={handleButtonClick} />
          ))}
        </div>
      )}
      {clickedOffer && (
        <div className="clicked-offer">
          <p>Offer added to your account: {clickedOffer}</p>
        </div>
      )}
    </div>
  );
}

export default AppofferCardslide;
