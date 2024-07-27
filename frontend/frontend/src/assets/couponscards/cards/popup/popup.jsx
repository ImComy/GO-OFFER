import React from 'react';
import './popup.css';
import { RiCloseCircleFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";

const Popup = ({ isVisible, onClose, code, link, img2, discount, name }) => {
  if (!isVisible) {
    return null;
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard");
    });
  };

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='popup-header'>
          <span className='discount'>{discount}%</span>
          <span className='deal-text'>Exclusive Booking.com deal - Up to 20% off for Genius Members now!</span>
          <img src={img2} className='brand' alt='Brand' />
        </div>
        <div className='popup-body'>
          <p className='instruction'>Copy and paste this code at <span className='popup-name'>{name}</span></p>
          <div className='popup-flex'>
            <div className='coupon-code'>
              <span className='code'>{code}</span>
            </div>
            <button className='copy-btn' onClick={() => handleCopy(code)}>Copy</button>
          </div>
          <div className='share-url'>
            <span className='shareurl-text'>Share URL</span>
            <div className='url'>
              <BsFillShareFill className='shareicon' />
              <span className='link'>{link}</span>
            </div>
            <button className='copy-link-btn' onClick={() => handleCopy(link)}>Copy</button>
          </div>
          <div className='share-via'>
            <span>Share via</span>
            <div className='social-icons'>
              <span className='icon'><FaXTwitter /></span>
              <span className='icon'><FaFacebook /></span>
              <span className='icon'><FaLinkedin /></span>
              <span className='icon'><FaInstagram /></span>
            </div>
          </div>
        </div>
        <button className='close-btn' onClick={onClose}><RiCloseCircleFill /></button>
      </div>
    </div>
  );
};

export default Popup;
