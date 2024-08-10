import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';
import './App.css';
import { FaFilter } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Slider from '../../assets/slider/slider';
import Heart from '../../assets/animatedHeart/heart';
import AppofferCardslide from '../../assets/offersCards/appoffercardslide';
import AppcouponsCardslide from '../../assets/appCouponscards/appcouponscardslider';
import AppdiscountCardslide from '../../assets/appdicountcards/appdiscountslider'
import { Link } from 'react-router-dom';
import News from '../../assets/newsletter/newsletter';
import AppstoresCardslide from '../../assets/appstorescards/appstorescardsslider';
import Review from '../../assets/reviews/review';
import Download from '../../assets/appdownload/appdownload';
import BlogPromotion from './blog/BlogPromotion'
import axios from 'axios';

const sliderimages = [
  '3f40ca489b925fa4988ef4a8671b808b.png',
  '995bbb6f18d35580538d356028807958.png',
  '3f40ca489b925fa4988ef4a8671b808b.png',
];

const offercards = [
  {offerImageHeader:'./nike.svg',  offerImageBackground:'./gigachad.png', discount: 40, ending: "18 days", name:'Nike', stars:4.5, number: 500, name2: 'McDonald’s',beforeprice: '59,000', afterprice: '500', currency: 'EGP'},

  {offerImageHeader:'./offericon.svg',  offerImageBackground:'./market.png', discount: 40, ending: "18 days", name:'Domino', stars:2.5, number: 500, name2: 'McDonald’s',beforeprice: '59,000', afterprice: '500', currency: 'EGP'},

  {offerImageHeader:'./mac.svg',  offerImageBackground:'./macmeal.png', discount: 40, ending: "18 days", name:'Macdonald\'s', stars:3, number: 500, name2: 'McDonald’s',beforeprice: '59,000', afterprice: '500', currency: 'EGP'},

  {offerImageHeader:'./google.svg',  offerImageBackground:'./googleplace.png', discount: 40, ending: "18 days", name:'Google', stars:5, number: 500, name2: 'McDonald’s',beforeprice: '59,000', afterprice: '500', currency: 'EGP'},

  {offerImageHeader:'./nike.svg',  offerImageBackground:'./gigachad.png', discount: 40, ending: "18 days", name:'Nike', stars:4.5, number: 500, name2: 'McDonald’s',beforeprice: '59,000', afterprice: '500', currency: 'EGP'},

  {offerImageHeader:'./offericon.svg',  offerImageBackground:'./market.png', discount: 40, ending: "18 days", name:'Domino', stars:2.5, number: 500, name2: 'McDonald’s',beforeprice: '59,000', afterprice: '500', currency: 'EGP'},

  {offerImageHeader:'./mac.svg',  offerImageBackground:'./macmeal.png', discount: 40, ending: "18 days", name:'Macdonald\'s', stars:3, number: 500, name2: 'McDonald’s',beforeprice: '59,000', afterprice: '500', currency: 'EGP'},

  {offerImageHeader:'./google.svg',  offerImageBackground:'./googleplace.png', discount: 40, ending: "18 days", name:'Google', stars:5, number: 500, name2: 'McDonald’s',beforeprice: '59,000', afterprice: '500', currency: 'EGP'},
]

const Couponscards = [
  {couponsimageheader:'./nike.svg', discount: 40, name: "Nike", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y"},

  {couponsimageheader:'./offericon.svg', discount: 50, name: "Domino", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y"},

  {couponsimageheader:'./mac.svg', discount: 20, name: "Macdonald", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y"},

  {couponsimageheader:'./google.svg', discount: 40, name: "Google", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y"},

  {couponsimageheader:'./nike.svg', discount: 40, name: "Nike", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y"},

  {couponsimageheader:'./mac.svg', discount: 40, name: "Macdonald", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y"},

  {couponsimageheader:'./google.svg', discount: 40, name: "Google", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y"},

]

const StoresCards = [
  {storesImageBackground: './shopping.png', stars: 3.1, offers: 1, coupons: 0, name: 'Walmart Stores, Inc',ending: ' 7 d: 20h: 23m'},
  {storesImageBackground: './fate.png', stars: 3.5, offers: 1, coupons: 0, name: 'Wholesale Corporation',ending: ' 7 d: 20h: 23m'},
  {storesImageBackground: './uwu.png', stars: 4.5, offers: 1, coupons: 0, name: 'Kroger Company',ending: ' 7 d: 20h: 23m'},
  {storesImageBackground: './fate.png', stars: 3.5, offers: 1, coupons: 0, name: 'Wholesale Corporation',ending: ' 7 d: 20h: 23m'},
  {storesImageBackground: './uwu.png', stars: 4.5, offers: 1, coupons: 0, name: 'Kroger Company',ending: ' 7 d: 20h: 23m'},
]

function App() {

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
    <div className="app-container">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="content1">
        <h1 className='app-top-text1'>The Best Deals in the <span className="UKspan">UK</span></h1>
        <p className="app-top-text2">Let our experts find them for you</p>
        <div className="form-container">
    <div className="app-select-container" ref={dropdownRef}>
      <FaFilter className="coupons-select-icon" />
      <div className={`coupons-select ${isOpen ? 'open' : ''}`} onClick={handleClick}>
        {selectedOption}
        <IoIosArrowDown className={`app-select-icon2 ${isOpen ? 'rotate' : 'close'}`} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <p onClick={() => handleOptionClick('All')}>All</p>
          <p onClick={() => handleOptionClick('osaka')}>Osaka</p>
          <p onClick={() => handleOptionClick('magdy')}>Magdy</p>
          <p onClick={() => handleOptionClick('uwu')}>uwu</p>
        </div>
      )}
    </div>
          <form action="/" className="form-elements">
            <input type="text" id="fname" name="fname" className='input-text' placeholder='Click to start typing....' />
            <button type="submit" className="app-top-submitbtn">
              <MdKeyboardArrowRight />
            </button>
          </form>
        </div>
        <p className="app-top-text3">E.g Coupons, Offers, Brands, Stores, Restaurants & More</p>
      </div>
      <div className='slideshow-container'>
        <Slider sliderimages={sliderimages} />
      </div>
      <div className="app-offers-container">
        <div className='viewmore-flex'>
          <h2 className="app-topoffers">Top Offers</h2>
          <Link to="/" className='offer-viewmore'> <span>View More</span> <i className="stores-arrow right"></i> </Link>
        </div>
        <div className='app-offercards'>
          <AppofferCardslide cardsObject={offercards} />
        </div>
        <div className='blog-wee'>
          <BlogPromotion />
        </div>
      <div className="app-Coupons-container">
        <h2 className="app-topCoupons">New Coupons</h2>
        <div className='AppcouponsCardslide'/>
          <AppcouponsCardslide cardsObject={Couponscards} />
        </div>
      </div>
        <div className="app-discount-container">
          <div className='app-discount-header'>
            <h2 className="app-topdiscounts">Featured Deep Discounts</h2>
            <div className='app-viewmore-container'>
              <Link to="/" className='app-viewmore'> View More   </Link>
              <p className='app-viewmore-arrow'>  &nbsp;&nbsp;  <i className="arrow right"></i></p>
            </div>
          </div>
          <div className='AppdiscountCardslide'/>
            <AppdiscountCardslide cardsObject={Couponscards} />
          </div>
          <div className='app-storescards'>
            <div className='app-storescards-header'>
              <h2 className="app-storescards-header-h2">Featured Stores</h2>
                            <div className='app-storescards-header-text'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,  neque vitae aliquet sagittis, justo lorem posuere ipsum, at pulvinar  elit ex quis est. Praesent </p>
              </div>
              <div className='app-stores-viewmore-container'>
                <Link to="/" className='app-storescards-viewmore'> View More   </Link>
                  <p className='app-viewmore-arrow'>  &nbsp;&nbsp;  <i className="stores-arrow right"></i></p>
              </div>
            </div>
            <div className='app-stores-slidercards'>
              <AppstoresCardslide cardsObject={StoresCards}/>
            </div>
          </div>
          <div className='app-download'>
            <Download />
          </div>
          <div className='app-reviews'>
            <Review />
          </div>
          <News className='app-newws'/>
      <Footer className="footer" />
    </div>
  );
}

export default App;
