import './coupons.css';
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';
import News from '../../assets/newsletter/newsletter';
import Header from '../../assets/header/header';
import Search from '../../assets/search/search';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Couponpagecardslide from "../../assets/couponscards/couponcardslider";
import React, { useState, useRef, useEffect } from 'react';


const Couponscards = [
  {couponsimageheader:'./nike.svg', discount: 40, name: "Nike", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y", id: 1},

  {couponsimageheader:'./offericon.svg', discount: 50, name: "Domino", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y", id: 2},

  {couponsimageheader:'./mac.svg', discount: 20, name: "Macdonald", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y", id: 3},

  {couponsimageheader:'./google.svg', discount: 40, name: "Google", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y", id: 4},

  {couponsimageheader:'./nike.svg', discount: 40, name: "Nike", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y", id: 5},

  {couponsimageheader:'./mac.svg', discount: 40, name: "Macdonald", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y", id: 6},

  {couponsimageheader:'./google.svg', discount: 40, name: "Google", img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png', text1: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!', people: 6, text2: " Can be combined with other promotions.", link: 'https://sample.net/?connection=shop&stew=passenger', name: 'Booking', code: "CEVWRTIUWVOYT8E7Y", id: 1},
]

function Coupons() {

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
            <Header path={'Home/Coupons'} name={'Browse Coupons'} />
            <div className='coupons-second-container'>
                <div className='coupons-search'>
                    <Search className='search-component' name='Coupons'/>
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
                  <Couponpagecardslide cardsObject={Couponscards}/>
                </div>
            </div>
            </div>
            <News />
            <Footer className='footer' />
        </div>
    );
}

export default Coupons;
