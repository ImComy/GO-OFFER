import React from 'react';
import './offersCards.css';
import { FiClock } from "react-icons/fi";
import axios from 'axios';

const OfferCards = ({ offerImageHeader, offerImageBackground, discount, ending, name, isProfilePage, offerId, onRemoveOffer, onButtonClick }) => {
  const handleGetOfferClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const offer = { offerImageHeader, offerImageBackground, discount, ending, name };

      const response = await axios.post('http://localhost:8000/api/users/add-offer', { token, offer }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
      onButtonClick(offer);
    } catch (error) {
      console.error('Error adding offer:', error.response ? error.response.data : error.message);
    }
  };

  const handleRemoveOfferClick = async () => {
    try {
      console.log('Removing offer with ID:', offerId); // Log the offerId
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:8000/api/users/offers/${offerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      onRemoveOffer(offerId);
    } catch (error) {
      console.error('Error removing offer:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='offercard-container' style={{ backgroundImage: `url(${offerImageBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <img src={offerImageHeader} className='offercard-headerimg' alt="Offer Header"/>
      <p className='offercard-header-text'>{name}</p>
      <p className='offercard-header-text-hidden'>Get <span className='offercard-discount'>{discount}% OFF</span> on your first payment</p>
      <div className='offercard-flex'>
        {!isProfilePage && (
          <button className="offercard-button" onClick={handleGetOfferClick}>
            Get Offer
          </button>
        )}
        {isProfilePage && (
          <button className="offercard-button remove" onClick={handleRemoveOfferClick}>
            Remove Offer
          </button>
        )}
        <p className='offercard-header-text-hover'>The best prices and offers for installments and cash for Egypt from noon 2024</p>
        <p className='offercard-ends'><FiClock className='clock'/> &nbsp;&nbsp;Ends in {ending}</p>
      </div>
    </div>
  );
};

export default OfferCards;
