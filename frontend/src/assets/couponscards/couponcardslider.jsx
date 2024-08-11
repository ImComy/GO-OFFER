import Couponcards from './cards/couponcard';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import './couponcardslider.css';

function Couponpagecardslide({ cardsObject = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const maxSlide = Math.ceil(cardsObject.length / 4) - 1;
  const [coupons, setCoupons] = useState([]);

  const handleNextSlide = () => {
    if (currentSlide < maxSlide) {
      setAnimationClass('slide-left');
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setAnimationClass('');
      }, 500);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setAnimationClass('slide-right');
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setAnimationClass('');
      }, 500);
    }
  };

  const handleDotClick = (index) => {
    if (index > currentSlide) {
      setAnimationClass('slide-left');
    } else if (index < currentSlide) {
      setAnimationClass('slide-right');
    }
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimationClass('');
    }, 500);
  };

  const dots = Array.from({ length: maxSlide + 1 }, (_, index) => index + 1);

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

const handleRemoveCoupon = async (couponId) => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('No token found');
        return;
    }
    if (!couponId) {
        console.error('No couponId provided');
        return;
    }
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
        console.error("Error removing coupon:", error.response ? error.response.data : error.message);
    }
};

  if (!cardsObject || !cardsObject.length) {
    return <p>No cards to display.</p>;
  }

return (
  <div className="couponpagecardslide-container">
    {cardsObject.length > 4 && (
      <div className="couponpagecardslide-wrapper">
        <div className={`couponpagecardslide-content ${animationClass}`}>
          {cardsObject
            .slice(currentSlide * 4, (currentSlide + 1) * 4)
            .map((cardData) => (
              <Couponcards
                key={cardData.id}  // Ensure `id` is unique
                {...cardData}
                couponId={cardData.id}  // Pass the `id` to handleRemoveCoupon
                onAddCoupon={handleAddCoupon}
                onRemoveCoupon={handleRemoveCoupon}  // Ensure this function receives the correct id
              />
            ))}
        </div>
        <div className="couponpagecardslide-dots">
          <button className="couponpagecardslide-button prev" onClick={handlePrevSlide}>
            <MdArrowBackIosNew />
          </button>
          {dots.map((num, index) => (
            <span
              key={index}
              className={`couponpagecardslide-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            >
              {num}
            </span>
          ))}
          <button className="couponpagecardslide-button next" onClick={handleNextSlide}>
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    )}
    {cardsObject.length <= 4 && (
      <div>
        {cardsObject.map((cardData) => (
          <Couponcards
            key={cardData.id}  // Ensure `id` is unique
            {...cardData}
            couponId={cardData.id}  // Pass the `id` to handleRemoveCoupon
            onAddCoupon={handleAddCoupon}
            onRemoveCoupon={handleRemoveCoupon}  // Ensure this function receives the correct id
          />
        ))}
      </div>
    )}
  </div>
);

}

export default Couponpagecardslide;
