import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import OfferCards from './cards/offersCards';
import './appoffercardslide.css';

function AppofferCardslide({ cardsObject }) {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  if (!Array.isArray(cardsObject) || cardsObject.length === 0) {
    return <p>No cards to display.</p>;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedOffer, setClickedOffer] = useState(null);
  const [offers, setOffers] = useState(cardsObject);
  const maxSlide = Math.ceil(offers.length / 4) - 1;

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
      const response = await fetch("http://localhost:8000/api/users/add-offer", {
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

  const handleRemoveOffer = async (offerId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8000/api/users/offers/${offerId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Offer removed successfully", data);
        setOffers(offers.filter((offer) => offer._id !== offerId));
      } else {
        console.error("Error removing offer:", data.message);
      }
    } catch (error) {
      console.error("Error removing offer:", error);
    }
  }

  const dots = Array(maxSlide + 1).fill(null);

  return (
    <div className="cardslide-container">
      {offers.length > 4 && (
        <div className="slider-wrapper">
          <div className="slider-flex">
            <button className="slider-button prev" onClick={handlePrevSlide}>
              <MdArrowBackIosNew />
            </button>
            <div className="slider-content">
              {offers.slice(currentSlide * 4, (currentSlide + 1) * 4).map((cardData, index) => (
                <OfferCards
                  key={cardData._id}
                  {...cardData}
                  isProfilePage={isProfilePage}
                  onRemoveOffer={handleRemoveOffer}
                  offerId={cardData._id}
                />
              ))}
            </div>
            <button className="slider-button next" onClick={handleNextSlide}>
              <MdArrowForwardIos />
            </button>
          </div>
          <div className="slider-dots">
            {Array(maxSlide + 1).fill(null).map((_, index) => (
              <span
                key={index}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      )}
      {offers.length <= 4 && (
        <div className="slider-wrapper">
        <div className="slider-flex">
        <div className="slider-content">
          {offers.map((cardData, index) => (
            <OfferCards
              key={cardData._id}
              {...cardData}
              isProfilePage={isProfilePage}
              onRemoveOffer={handleRemoveOffer}
              offerId={cardData._id}
            />
          ))}
        </div>
        </div>
        </div>
      )}
      {clickedOffer && (
        <div className="clicked-offer">
          <p>Offer added to your account: {clickedOffer}</p>
        </div>
      )}
    </div>
  );
};

export default AppofferCardslide;
