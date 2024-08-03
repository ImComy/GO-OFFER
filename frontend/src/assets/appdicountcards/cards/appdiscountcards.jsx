import './appdiscountcards.css';
import React from 'react';
import { BsDot } from "react-icons/bs";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Appdiscountscards = ({ couponsimageheader, discount, name, text1="For all orders between $50.01 - 51.99 pay only $50.00", text2=" Can be combined with other promotions. "  }) => {
  return (
      <div className='appdiscountcards-container'>
        <div className='appCdiscountcards-header'>
          <img src={couponsimageheader} className='appdiscountcards-headerimg' />
          <h1 className='appCouponscards-discount'>{discount}% OFF</h1>
        </div>
        <div className='appdiscountcards-ending'>
          <h2 className="appdiscountcards-ending-text"> All <span className='appdiscountcards-span'>{name}’s</span> Coupons</h2>
          <button className="appdiscountcards-ending-button"> <IoIosArrowDroprightCircle /> </button>
        </div>
        <div className="appdiscountcards-text-container-all">
          <div className="appdiscountcards-text-container">
            <p className='appdiscountcards-text'> <BsDot className='BsDot'/> {text1} </p>
            <p className='appdiscountcards-text'> <BsDot className='BsDot'/> {text2} </p>
        </div>
      </div>
    </div>
  );
}

export default Appdiscountscards;
