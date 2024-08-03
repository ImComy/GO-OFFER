import React, { useState } from 'react';
import './card.css';

function Card() {
  const [particles, setParticles] = useState([]);
  const [liked, setLiked] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [text, setText] = useState("helooooiad afdhfdsfldkfalksdjhfalkjsdhflakjdshflaksjhafgdsa ausdofhasd jfhakli");

  const handleLike = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setLiked(!liked);
    setParticles([]);

    setAnimateHeart(true);
    setTimeout(() => {
      setAnimateHeart(false);
    }, 300);
  };

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  const displayText = showFullText ? text : truncateText(text, 20);

  return (
    <div className='card'>
      <img src='/illustrator.jpg' className='cardPic' alt='cardPic' />
      <div className='btns'>
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
          <div className='like-wrapper'>
            <div className='ripple'></div>
            <svg className={`heart ${animateHeart ? 'animate-heart' : ''}`} width='24' height='24' viewBox='0 0 24 24'>
              <path 
                d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                fill={liked ? 'var(--color-heart)' : 'none'}
                stroke='var(--color-heart)'
                strokeWidth='2'
              />
            </svg>
          </div>
        </button>
        <button className='apply'>apply now</button>
      </div>
      <div className='text'>
        <p>{displayText}</p>
        {text.length > 20 && !showFullText && (
          <button className='view-more' onClick={toggleText}>
            View More
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
