import React from 'react';
import './BlogPromotion.css';
import { RiArrowRightSLine } from "react-icons/ri";

const BlogPromotion = () => {
  return (
    <div className="app-blog-container">
      <h1 className="app-blog-header-text">Check out our <span className="app-blog-span">Blog</span>!</h1>
      <p>For the latest news and updates</p>
      <a href="#/Blog">
        <button className="app-blog-button">
          Blog <span className='blog-arrow'> <RiArrowRightSLine /> </span>
        </button>
      </a>
    </div>
  );
};

export default BlogPromotion;
