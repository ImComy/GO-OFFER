import React from 'react';
import './newletter.css';
import { MdEmail } from "react-icons/md";

function News() {
  return (
    <div className='news-container'>
      <div className='new-circle'>
        <div className='news-email-icon'>
          <MdEmail />
        </div>
        <svg width="144" height="138" viewBox="0 0 144 138" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="72" cy="68.9362" rx="72" ry="68.9362" fill="#FAFF00"/>
        </svg>
      </div>
      <div className='news-text-container'>
        <p className='news-text1'>Subscribe to our </p>
        <p className='news-textsp'>Newsletter </p>
        <p className='news-text2'>And never miss an offer </p>
      </div>
      <div className='news-form'>
        <input className='news-input' placeholder=' &nbsp; &nbsp; Email' type="text" />
        <button className='news-button'>Join</button>
      </div>
    </div>
  );
}

export default News;
