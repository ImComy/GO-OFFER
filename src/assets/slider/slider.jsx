import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import './slider.css'

const Slider = ({ sliderimages }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    setCurrentSlide(prevState => (prevState === sliderimages.length - 1) ? 0 : prevState + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(prevState => (prevState === 0) ? sliderimages.length - 1 : prevState - 1);
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={handlePrev}><MdArrowBackIosNew /></button>
      <img
        src={sliderimages[currentSlide - 1] || sliderimages[sliderimages.length - 1]}
        className={`slide-image-prev `}
      />
      <img
        src={sliderimages[currentSlide]}
        alt=" "
        className="slide-image"
      />
      <img
        src={sliderimages[currentSlide + 1] || sliderimages[0]}
        alt=" "
        className={`slide-image-next`}
      />
      <button className="slider-button next" onClick={handleNext}><MdArrowForwardIos /></button>
    </div>
  );
};

export default Slider;
