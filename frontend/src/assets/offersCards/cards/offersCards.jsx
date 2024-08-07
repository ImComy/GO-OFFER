import React from 'react';
import './offersCards.css';
import { FiClock } from "react-icons/fi";
import axios from 'axios';

const OfferCards = ({ offerImageHeader, offerImageBackground, discount, ending, name }) => {
  const handleGetOfferClick = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in local storage
      const offer = { offerImageHeader, offerImageBackground, discount, ending, name };

      const response = await axios.post('http://localhost:8000/api/users/add-offer', { token, offer }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data); // Handle successful response
    } catch (error) {
      console.error('Error adding offer:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='offercard-container' style={{ backgroundImage: `url(${offerImageBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <img src={offerImageHeader} className='offercard-headerimg' />
      <p className='offercard-header-text'>{name}</p>
      <p className='offercard-header-text-hidden'>Get <span className='offercard-discount'>{discount}% OFF</span> on your first payment</p>
      <div className='offercard-flex'>
        <button className="offercard-button" onClick={handleGetOfferClick}>
          Get Offer
        </button>
        <p className='offercard-header-text-hover'>the best prices and offers for installments and cash for Egypt from noon 2024</p>
        <p className='offercard-ends'><FiClock className='clock'/> &nbsp;&nbsp;Ends in {ending} </p>
      </div>
    </div>
  );
};

export default OfferCards;
