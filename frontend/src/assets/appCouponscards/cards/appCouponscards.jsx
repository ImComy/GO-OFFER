import './appCouponscards.css';
import React, { useState } from 'react';
import { BsDot } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";
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
  code
}) => {
  const [coupons, setCoupons] = useState([]);
  const location = useLocation();
  const isNotProfile = location.pathname !== '/profile';

  const handlePostCouponClick = async () => {
    try {
      const token = localStorage.getItem('token');
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

      const response = await axios.post('http://localhost:8000/api/users/add-coupon', { token, coupon }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error posting coupon:', error.response ? error.response.data : error.message);
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
        <button className="appCouponscards-ending-button" onClick={handlePostCouponClick}>
          <ArrowRight condition={isNotProfile} />
        </button>
      </div>
    </div>
  );
}

export default AppCouponscards;
