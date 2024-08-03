import React, { useState } from 'react';
import './heart.css';

function Heart({ heartColor }) {
  const [liked, setLiked] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);

  const handleLike = (event) => {
    setLiked(!liked);
    setAnimateHeart(true);
    setTimeout(() => {
      setAnimateHeart(false);
    }, 300);
  };

  return (
    <div className='btns'>
      <button
        className={`like-button ${liked ? 'liked' : ''}`}
        onClick={handleLike}
        style={{ '--heart-color': heartColor }}
      >
        <div className='like-wrapper'>
          <div className='ripple'></div>
          <svg
            className={`heart ${animateHeart ? 'animate-heart' : ''}`}
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
              fill={liked ? 'var(--heart-color)' : 'none'}
              stroke='var(--heart-color)'
              strokeWidth='2'
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Heart;
