import './spstore.css';
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
import Storeheader from './header/storeheader'
import AppCouponscards from "../../assets/appCouponscards/cards/appCouponscards";
import Spouponscards from './cards/spstorecards';


const cardsObject = [
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
  {
    img: '../offericon.svg',
    code: 'CEVWRTIUWVOYT8E7Y',
    discount: 50,
    text: ' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people: 6,
    img2: 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link: 'https://sample.net/?connection=shop&stew=passenger',
    name: 'Booking'
  },
];

function Spstore() {

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
            <Storeheader />
            <div className='sp-second-container'>
              <div className='sptore-column'>
                <div className='coupons-search'>
                    <Search className='search-component' name='Coupons'/>
                </div>
                <div className='related-stores'>
                  <h2> Coupons from Similar Stores </h2>
                  <div className='spstore-coupons-cards'>
                    <Spouponscards />
                    <Spouponscards />
                  </div>
                </div>
              </div>
                <div className='sp-content'>
                <div className='Featured-Coupons'>
                  <h2>Featured Coupons</h2>
                  <div className='sp-cards-flex'>
                  <Spouponscards />
                  <Spouponscards />
                  <Spouponscards />
                  </div>
                </div>
                <h2> All Coupons </h2>
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
            <div className='spline'></div>
            <div className='moreinfo'>

              <h1>Details about Noon - نون </h1>
              <p> Noon online store is one of the best Arab marketing platforms that has achieved wide fame and received the approval of customers in the countries of Egypt, Saudi Arabia, and the Emirates, because of the distinguished sales services it provides that include many products, where we find devices and electronics of various uses and international brands, in addition to clothing for women, men, and children, accessories, and bags. </p>

              <p>  And shoes, in addition to perfumes, cosmetics, furniture, decor, party supplies, children’s toys, and even supermarket and grocery products, which makes the noon website one of the integrated stores that provides you with all your personal and household needs in one place with renewed offers and discounts.  </p>

              <p> Noon website operates according to a usage policy that guarantees you the right to return or exchange the sold product according to the standards described on the terms of sale page. For some products, it is enough that you have merely changed your mind to get your money back after bearing the shipping cost. Noon also provides after-sales services such as the warranty that It allows you free maintenance, replacement or even refund within 14 days of getting the product.  Noon is keen to offer various discounts to both new and existing customers, so you will notice a strong demand for Noon’s official store during the end of the year offers, holidays, Yellow Friday, and events specific to each country such as the Noon National Day discount code and others, so hurry now and get the desired products before they run out. Because the comprehensive products of offers and purchase vouchers are sold out in a short time, especially with the increasing demand of new customers from Egypt, Saudi Arabia and the Emirates.  Couponzl provides you with Noon store coupons and discount codes for the countries of Egypt, the Emirates, and Saudi Arabia as well, meaning that you will be able to obtain the promo code that is appropriate for you within your country, and in this way you can enjoy endless discounts, and we cannot forget the various purchase vouchers for the Noon store on All. Order, as the first order coupon provides you with a discount of up to 30%.  </p>

              <h2>The latest Noon discount codes and how to use them 2024 </h2>

              <p>  If you are asking how do I get a discount from Noon? On the Couponzl page, you will find a variety of purchase vouchers, coupons for the first order or new customers, free delivery, celebrities, and others, with a simple explanation of how to use them.  </p>

              <h3>Steps:</h3>
              <ol>
                <li>Click on the store you need to get.</li>
                <li>Our website will direct you directly to the Noon store.</li>
                <li>Browse the store's products, and put what you want to buy into the shopping cart.</li>
                <li>After shopping for everything you need, go to the shopping cart icon.</li>
                <li>Review your order and go to the shipping step.</li>
                <li>Click on the store you need to get.</li>
                <li>Our website will direct you directly to the Noon store.</li>
                <li>Browse the store's products, and put what you want to buy into the shopping cart.</li>
                <li>After shopping for everything you need, go to the shopping cart icon.</li>
                <li>Review your order and go to the shipping step.</li>
              </ol>
              <table>
                <tr>
                  <th>كوبونات وعروض نون</th>
                  <th>كوبونات وعروض نون</th>
                </tr>
                <tr>
                  <td>BG34</td>
                  <td>خصم 10% في مصر</td>
                </tr>
                <tr>
                  <td>BG34</td>
                  <td>خصم 10% في السعوية</td>
               </tr>
               <tr>
                 <td>BG34</td>
                 <td>خصم 10% في الامارات</td>
              </tr>
              <tr>
                <td>BG34</td>
                <td>خصم 10% بقالة نون</td>
              </tr>
              </table>
              <p>  If you are asking how do I get a discount from Noon? On the Couponzl page, you will find a variety of purchase vouchers, coupons for the first order or new customers, free delivery, celebrities, and others, with a simple explanation of how to use them. </p>

              <h2>Is there an active Noon coupon currently?</h2>

              <p> If you are asking how do I get a discount from Noon? On the Couponzl page, you will find a variety of purchase vouchers, coupons for the first order or new customers, free delivery, celebrities, and others, with a simple explanation of how to use them.  </p>

              <p> Noon online store is one of the best Arab marketing platforms that has achieved wide fame and received the approval of customers in the countries of Egypt, Saudi Arabia, and the Emirates, because of the distinguished sales services it provides that include many products, where we find devices and electronics of various uses and international brands, in addition to clothing for women, men, and children, accessories, and bags.  </p>

              <p> And shoes, in addition to perfumes, cosmetics, furniture, decor, party supplies, children’s toys, and even supermarket and grocery products, which makes the noon website one of the integrated stores that provides you with all your personal and household needs in one place with renewed offers and discounts. </p>

              <p> Noon website operates according to a usage policy that guarantees you the right to return or exchange the sold product according to the standards described on the terms of sale page. For some products, it is enough that you have merely changed your mind to get your money back after bearing the shipping cost. Noon also provides after-sales services such as the warranty that It allows you free maintenance, replacement or even refund within 14 days of getting the product.  Noon is keen to offer various discounts to both new and existing customers, so you will notice a strong demand for Noon’s official store during the end of the year offers, holidays, Yellow Friday, and events specific to each country such as the Noon National Day discount code and others, so hurry now and get the desired products before they run out. Because the comprehensive products of offers and purchase vouchers are sold out in a short time, especially with the increasing demand of new customers from Egypt, Saudi Arabia and the Emirates.  Couponzl provides you with Noon store coupons and discount codes for the countries of Egypt, the Emirates, and Saudi Arabia as well, meaning that you will be able to obtain the promo code that is appropriate for you within your country, and in this way you can enjoy endless discounts, and we cannot forget the various purchase vouchers for the Noon store on All. Order, as the first order coupon provides you with a discount of up to 30%. </p>
            </div>
            <News />
            <Footer className='footer' />
        </div>
    );
}

export default Spstore;
