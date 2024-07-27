import React from 'react';
import { BsDot } from "react-icons/bs";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Spouponscards = ({ couponsimageheader='../mac.svg', discount='20', name, text1="For all orders between $50.01 - 51.99 pay only $50.00", text2=" Can be combined with other promotions. "  }) => {
  return (
      <div className='spcards-container'>
        <div className='appCouponscards-header'>
          <img src={couponsimageheader} className='appCouponscards-headerimg' />
          <h1 className='appCouponscards-discount'>{discount}% OFF</h1>
        </div>
        <div className="spscards-text-container">
          <p className='spcards-text'> <BsDot className='BsDot'/> {text1} </p>
          <p className='spcards-text'> <BsDot className='BsDot'/> {text2} </p>
      </div>
      <div className='appCouponscards-ending'>
        <h2 className="appCouponscards-ending-text"> All <span className='appCouponscards-span'>{name}’s</span> Coupons</h2>
        <button className="appCouponscards-ending-button"> <IoIosArrowDroprightCircle /> </button>
      </div>
    </div>
  );
}

export default Spouponscards;
