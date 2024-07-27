import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import AppCouponscards from './cards/appCouponscards';
import './appcouponscardslider.css';

function AppcouponsCardslide({ cardsObject }) {
  const scrollContainerRef = useRef(null);

  if (!cardsObject || !cardsObject.length) {
    return <p>No cards to display.</p>;
  }

  const [props, set] = useSpring(() => ({
    scrollLeft: 0,
    config: { tension: 280, friction: 60 }
  }));

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const offsetWidth = scrollContainerRef.current.offsetWidth;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - offsetWidth
        : scrollContainerRef.current.scrollLeft + offsetWidth;

      set({ scrollLeft: newScrollLeft });
    }
  };

  return (
    <div className="couponscardslide-container">
      <button className="couponsslider-button prev" onClick={() => scroll('left')}>
        <IoIosArrowDropleftCircle />
      </button>
      <animated.div
        className="couponsslider-wrapper"
        ref={scrollContainerRef}
        scrollLeft={props.scrollLeft}
      >
        <div className="couponsslider-flex">
          {cardsObject.map((cardData, index) => (
            <div className="couponsslider-content" key={index}>
              <AppCouponscards {...cardData} />
            </div>
          ))}
        </div>
      </animated.div>
      <button className="couponsslider-button next" onClick={() => scroll('right')}>
        <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
}

export default AppcouponsCardslide;
