import React, { useState, useRef, useEffect } from 'react';
import './stores.css';
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';
import News from '../../assets/newsletter/newsletter';
import Header from '../../assets/header/header';
import Search from '../../assets/search/search';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { RiCoupon3Fill } from "react-icons/ri";
import Couponpagecardslide from "../../assets/couponscards/couponcardslider";
import Storespagecardslide from './storespageslider'
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

const cardsObject = [
  {
  storesImageBackground: './shopping.png',
  stars: 3.7,
  offers: 0,
  coupons: 0,
  name: 'weeeeee',
  ending: ' 7 d: 20h: 23m',
  text: 'Homezart Saudi Arabia First Order Discount: Enjoy 10% OFF on All Products',
  },
  {
  storesImageBackground: './shopping.png',
  stars: 3.7,
  offers: 0,
  coupons: 0,
  name: 'weeeeee',
  ending: ' 7 d: 20h: 23m',
  text: 'Homezart Saudi Arabia First Order Discount: Enjoy 10% OFF on All Products',
  },
  {
  storesImageBackground: './shopping.png',
  stars: 3.7,
  offers: 0,
  coupons: 0,
  name: 'weeeeee',
  ending: ' 7 d: 20h: 23m',
  text: 'Homezart Saudi Arabia First Order Discount: Enjoy 10% OFF on All Products',
  },
  {
  storesImageBackground: './shopping.png',
  stars: 3.7,
  offers: 0,
  coupons: 0,
  name: 'weeeeee',
  ending: ' 7 d: 20h: 23m',
  text: 'Homezart Saudi Arabia First Order Discount: Enjoy 10% OFF on All Products',
  },
  {
  storesImageBackground: './shopping.png',
  stars: 3.7,
  offers: 0,
  coupons: 0,
  name: 'weeeeee',
  ending: ' 7 d: 20h: 23m',
  text: 'Homezart Saudi Arabia First Order Discount: Enjoy 10% OFF on All Products',
  },
  {
  storesImageBackground: './shopping.png',
  stars: 3.7,
  offers: 0,
  coupons: 0,
  name: 'weeeeee',
  ending: ' 7 d: 20h: 23m',
  text: 'Homezart Saudi Arabia First Order Discount: Enjoy 10% OFF on All Products',
  },
{
  storesImageBackground: './shopping.png',
  stars: 3.7,
  offers: 0,
  coupons: 0,
  name: 'weeeeee',
  ending: ' 7 d: 20h: 23m',
  text: 'Homezart Saudi Arabia First Order Discount: Enjoy 10% OFF on All Products',
  },

{
  storesImageBackground: './shopping.png',
  stars: 3.7,
  offers: 0,
  coupons: 0,
  name: 'weeeeee',
  ending: ' 7 d: 20h: 23m',
  text: 'Homezart Saudi Arabia First Order Discount: Enjoy 10% OFF on All Products',
  },

]

function Stores() {

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
            <Header path={'Home/Stores'} name={'Browse Categories'} />
            <div className='coupons-second-container'>
                <div className='coupons-search'>
                    <Search className='search-component' name='Coupons'/>
                </div>
                <div className='coupons-content'>
                    <div className='popularstores-content'>
                        <a href="#/SN">
                          <div className='popular-stores'>
                            <img src='./noon.jpeg' alt='Popular Store' className='popularstores-img' />
                            <div className='popularstores-details'>
                              <p> <BiSolidOffer /> <span className='popularstores-icon'>0 Offers</span></p>
                              <div className='line-stores'></div>
                                <p> <RiCoupon3Fill /> <span className='popularstores-icon'>1 Coupon</span> </p>
                              </div>
                           </div>
                         </a>
                        <a href="#/SN">
                          <div className='popular-stores'>
                            <img src='./noon.jpeg' alt='Popular Store' className='popularstores-img' />
                            <div className='popularstores-details'>
                              <p> <BiSolidOffer /> <span className='popularstores-icon'>0 Offers</span></p>
                              <div className='line-stores'></div>
                                <p> <RiCoupon3Fill /> <span className='popularstores-icon'>1 Coupon</span> </p>
                              </div>
                           </div>
                         </a>
                        <a href="#/SN">
                          <div className='popular-stores'>
                            <img src='./noon.jpeg' alt='Popular Store' className='popularstores-img' />
                            <div className='popularstores-details'>
                              <p> <BiSolidOffer /> <span className='popularstores-icon'>0 Offers</span></p>
                              <div className='line-stores'></div>
                                <p> <RiCoupon3Fill /> <span className='popularstores-icon'>1 Coupon</span> </p>
                              </div>
                           </div>
                         </a>
                    </div>
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
                        <Storespagecardslide cardsObject={cardsObject}/>
                    </div>
                </div>
            </div>
            <News />
            <Footer className='footer' />
        </div>
    );
}

export default Stores;
