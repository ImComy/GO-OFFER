import React from 'react';
import './BlogPromotion.css';

const BlogPromotion = () => {
  return (
    <div className="app-blog-container">
      <h1 className="app-blog-header-text">Check out our <span className="app-blog-span">Blog</span>!</h1>
      <p>For the latest news and updates</p>
      <a href="/blog">
        <button className="app-blog-button">
          Blog &#11166;
        </button>
      </a>
    </div>
  );
};

export default BlogPromotion;
