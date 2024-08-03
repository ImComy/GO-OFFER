import React from 'react';
import './pageoffers.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

const OffersCardspage = ({
  offerImageHeader = './mac.svg',
  offerImageBackground = './macmeal.png',
  discount = 20,
  name = 'McDonald’s Something',
  stars = 4.5,
  number = 500,
  name2 = 'McDonald’s',
  beforeprice = '59,000',
  afterprice = '500',
  currency = 'EGP'
}) => {
  return (
    <div className='offercard-big-container'>
      <div className='offerpage-container' style={{ backgroundImage: `url(${offerImageBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src={offerImageHeader} className='offercardpage-headerimg' alt='Offer Header' />
        <p className='offerpage-discount'>{discount}% OFF</p>
      </div>
      <div className='offerpage-content'>
        <p className='offerpage-name1'>{name}</p>
        <div className='offerpage-flex'>
          <div className='offerpage-stars'>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
          </div>
          <p className='offerpage-ratings'><BsPeopleFill /> {number}</p>
        </div>
        <p className='offerpage-name2'>{name2}</p>
        <div className='offerpage-button'>
          <p className='offerpage-currency'>{currency}</p>
          <p className='offerpage-beforeprice'><s>{currency} {beforeprice}</s></p>
          <p className='offerpage-afterprice'>{currency} {afterprice}</p>
        </div>
      </div>
    </div>
  );
}

export default OffersCardspage;
