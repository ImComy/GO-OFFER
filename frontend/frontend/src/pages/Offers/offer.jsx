import './offer.css';
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';
import News from '../../assets/newsletter/newsletter';
import Header from '../../assets/header/header';
import Search from '../../assets/search/search';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Offerpagecardslide from '../../assets/pageoffers/pageoffersslider';
import React, { useState, useRef, useEffect } from 'react';

const cardsObject = [
  {
    offerImageHeader: './mac.svg',
    offerImageBackground: './macmeal.png',
    discount: 20,
    name: 'McDonald’s Something',
    stars: 4.5,
    number: 500,
    name2: 'McDonald’s',
    beforeprice: '59,000',
    afterprice: '500',
    currency: 'EGP'
  },
  {
    offerImageHeader: './mac.svg',
    offerImageBackground: './macmeal.png',
    discount: 20,
    name: 'McDonald’s Something',
    stars: 4.5,
    number: 500,
    name2: 'McDonald’s',
    beforeprice: '59,000',
    afterprice: '500',
    currency: 'EGP'
  },
  {
    offerImageHeader: './mac.svg',
    offerImageBackground: './macmeal.png',
    discount: 20,
    name: 'McDonald’s Something',
    stars: 4.5,
    number: 500,
    name2: 'McDonald’s',
    beforeprice: '59,000',
    afterprice: '500',
    currency: 'EGP'
  },
  {
    offerImageHeader: './mac.svg',
    offerImageBackground: './macmeal.png',
    discount: 20,
    name: 'McDonald’s Something',
    stars: 4.5,
    number: 500,
    name2: 'McDonald’s',
    beforeprice: '59,000',
    afterprice: '500',
    currency: 'EGP'
  },
  {
    offerImageHeader: './mac.svg',
    offerImageBackground: './macmeal.png',
    discount: 20,
    name: 'McDonald’s Something',
    stars: 4.5,
    number: 500,
    name2: 'McDonald’s',
    beforeprice: '59,000',
    afterprice: '500',
    currency: 'EGP'
  },
  {
    offerImageHeader: './mac.svg',
    offerImageBackground: './macmeal.png',
    discount: 20,
    name: 'McDonald’s Something',
    stars: 4.5,
    number: 500,
    name2: 'McDonald’s',
    beforeprice: '59,000',
    afterprice: '500',
    currency: 'EGP'
  },
  {
    offerImageHeader: './mac.svg',
    offerImageBackground: './macmeal.png',
    discount: 20,
    name: 'McDonald’s Something',
    stars: 4.5,
    number: 500,
    name2: 'McDonald’s',
    beforeprice: '59,000',
    afterprice: '500',
    currency: 'EGP'
  },
  {
    offerImageHeader: './mac.svg',
    offerImageBackground: './macmeal.png',
    discount: 20,
    name: 'McDonald’s Something',
    stars: 4.5,
    number: 500,
    name2: 'McDonald’s',
    beforeprice: '59,000',
    afterprice: '500',
    currency: 'EGP'
  },
]

function Offer() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

    return (
        <div className='Coupons-container'>
            <Navigation />
            <Header path={'Home/Offers'} name={'Trending Deals'} />
            <div className='coupons-second-container'>
                <div className='coupons-search'>
                    <Search className='search-component' name='Offers'/>
                </div>
                <div className='coupons-content'>
                <div className='coupons-search2'>
                    <FaSearch className='lincess-search-coupons'/>
                    <input type="text" id="fname" name="fname" className='coupons-input-text' placeholder='Search Coupons....' />
                    <button type="submit" className="app-top-submitbtn">
                        <MdKeyboardArrowRight />
                    </button>
                </div>
                <div className='sortby'>
                  <p className='coupons-sortby-text'> Sort By Countries: </p>
    <div className="coupons-select-container" ref={dropdownRef}>
      <FaFilter className="coupons-select-icon" />
      <div className={`coupons-select ${isOpen ? 'open' : ''}`} onClick={handleClick}>
        {selectedOption}
        <IoIosArrowDown className={`coupons-select-icon2 ${isOpen ? 'rotate' : 'close'}`} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <p onClick={() => handleOptionClick('All')}>All</p>
          <p onClick={() => handleOptionClick('osaka')}>Osaka</p>
          <p onClick={() => handleOptionClick('magdy')}>Magdy</p>
          <p onClick={() => handleOptionClick('uwu')}>uwu</p>
        </div>
      )}
      <div className='sortby-buttons'>
        <button className='coupons-button-filter'> All (3) </button>
        <button className='coupons-button-filter'> Coupons (3) </button>
        <button className='coupons-button-filter'> Offers (0) </button>
      </div>
    </div>
                </div>
                <div className='coupons-cards'>
                  <Offerpagecardslide cardsObject={cardsObject}/>
                </div>
            </div>
            </div>
            <News />
            <Footer className='footer' />
        </div>
    );
}

export default Offer;
