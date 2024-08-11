import React, { useRef } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import AppCouponscards from './cards/appCouponscards';
import './appcouponscardslider.css';
import { useSpring, animated } from 'react-spring';

function AppcouponsCardslide({ cardsObject }) {
  const scrollContainerRef = useRef(null);
  const [props, set] = useSpring(() => ({
    scrollLeft: 0,
    config: { tension: 280, friction: 60 }
  }));

  const handleRemoveCoupon = async (couponId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8000/api/users/coupons/${couponId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Coupon removed successfully", data);
        setCoupons(coupons.filter((coupon) => coupon._id !== couponId));
      } else {
        console.error("Error removing coupon:", data.message);
      }
    } catch (error) {
      console.error("Error removing coupon:", error);
    }
  };

  const handleAddCoupon = async (coupon) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8000/api/users/add-coupon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, coupon }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Coupon added successfully", data);
        setCoupons([...coupons, data]);
      } else {
        console.error("Error adding coupon:", data.message);
      }
    } catch (error) {
      console.error("Error adding coupon:", error);
    }
  };

  if (!cardsObject || !cardsObject.length) {
    return <p>No cards to display.</p>;
  }

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
          {cardsObject.map((cardData) => (
            <div className="couponsslider-content" key={cardData._id}>
              <AppCouponscards
                {...cardData}
                couponId={cardData._id}
                isProfilePage={location.pathname === '/profile'}
                onRemoveCoupon={handleRemoveCoupon}
                onAddCoupon={handleAddCoupon}
              />
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
