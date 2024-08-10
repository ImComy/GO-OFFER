import './appCouponscards.css';
import React, { useState } from 'react';
import { BsDot } from "react-icons/bs";
import axios from 'axios';
import ArrowRight from '../../arrow/arrow';
import { useLocation } from 'react-router-dom';

const AppCouponscards = ({
  couponsimageheader,
  discount,
  name,
  text1,
  text2,
  people,
  img2,
  link,
  code,
  couponId,
  isProfilePage,
  onRemoveCoupon,
  onAddCoupon
}) => {
  const location = useLocation();
  const isNotProfile = location.pathname !== '/profile';

  const handlePostCouponClick = async () => {
    try {
      const coupon = {
        couponsimageheader: couponsimageheader || '',
        discount: discount || 0,
        name: name || '',
        people: people || 0,
        text1: text1 || '',
        text2: text2 || '',
        img2: img2 || '',
        link: link || '',
        code: code || ''
      };
      onAddCoupon(coupon);
    } catch (error) {
      console.error('Error posting coupon:', error.response ? error.response.data : error.message);
    }
  };

  const handleRemoveCouponClick = async () => {
    if (!couponId) {
      console.error('No couponId provided');
      return;
    }
    try {
      console.log('Removing coupon with ID:', couponId);
      onRemoveCoupon(couponId);
    } catch (error) {
      console.error('Error removing coupon:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='appCouponscards-container'>
      <div className='appCouponscards-header'>
        <img src={couponsimageheader} className='appCouponscards-headerimg' />
        <h1 className='appCouponscards-discount'>{discount}% OFF</h1>
      </div>
      <div className="appCouponscards-text-container">
        <ul className='appCouponscards-text'> <BsDot className='BsDot'/> {text1} </ul>
        <ul className='appCouponscards-text'> <BsDot className='BsDot'/> {text2} </ul>
      </div>
      <div className='appCouponscards-ending'>
        <h2 className="appCouponscards-ending-text"> All <span className='appCouponscards-span'>{name}’s</span> Coupons</h2>
        {isNotProfile ? (
          <button
            className="appCouponscards-ending-button"
            onClick={handlePostCouponClick}
          >
            <ArrowRight condition={true} />
          </button>
        ) : (
          <button
            className="appCouponscards-ending-button profile"
            onClick={handleRemoveCouponClick}
          >
            <ArrowRight condition={false} />
          </button>
        )}
      </div>
    </div>
  );
}

export default AppCouponscards;
