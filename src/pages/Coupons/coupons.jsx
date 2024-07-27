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


const cardsObject = [
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: './offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
];

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
                  <Couponpagecardslide cardsObject={cardsObject}/>
                </div>
            </div>
            </div>
            <News />
            <Footer className='footer' />
        </div>
    );
}

export default Coupons;
