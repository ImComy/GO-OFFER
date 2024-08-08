import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';
import News from '../../assets/newsletter/newsletter';
import Header from '../../assets/header/header';
import { BiSolidOffer } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import AppcouponsCardslide from '../../assets/appCouponscards/appcouponscardslider';
import AppofferCardslide from '../../assets/offersCards/appoffercardslide';

const Couponscards = [
  { couponsimageheader: './nike.svg', discount: 40, name: "Nike" },
  { couponsimageheader: './offericon.svg', discount: 40, name: "Domino" },
  { couponsimageheader: './mac.svg', discount: 40, name: "Macdonald" },
  { couponsimageheader: './google.svg', discount: 40, name: "Google" },
  { couponsimageheader: './nike.svg', discount: 40, name: "Nike" },
  { couponsimageheader: './mac.svg', discount: 40, name: "Macdonald" },
  { couponsimageheader: './google.svg', discount: 40, name: "Google" },
];

function Profile() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8000/api/users', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setEmail(response.data.email);
          setPhone(response.data.phone);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
    };

    const fetchOffers = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8000/api/users/offers', {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (response.data && Array.isArray(response.data)) {
            setOffers(response.data);
            setFilteredOffers(response.data); // Initialize filteredOffers with all offers
            console.log('Fetched offers:', response.data);
          } else {
            console.warn('Offers data is not an array or is missing', response.data);
          }
        } catch (err) {
          console.error('Error fetching offers:', err.response ? err.response.data.message : err.message);
          setError(err.response ? err.response.data.message : err.message);
        }
      }
    };

    fetchUserData();
    fetchOffers();
  }, []);

  useEffect(() => {
    console.log('Filtered offers:', filteredOffers);
  }, [filteredOffers]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = '/';
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index, discountCriteria) => {
    setActiveIndex(index);
    filterOffers(discountCriteria);
  };

  const filterOffers = (discountCriteria) => {
    if (discountCriteria === 'All') {
      setFilteredOffers(offers);
    } else if (discountCriteria === 'Flat 50% OFF') {
      const filtered = offers.filter((offer) => offer.discount === 50);
      setFilteredOffers(filtered);
    } else if (discountCriteria === 'Flat 20% OFF') {
      const filtered = offers.filter((offer) => offer.discount === 20);
      setFilteredOffers(filtered);
    }
  };

  const [discountData, setDiscountData] = useState({});
  const handleGetDiscountData = (discountData) => {
    setDiscountData(discountData);
  };

  return (
    <div className='profile-container'>
      <Navigation />
      <div className='profileheader'>
        <Header path={'Home/Profile'} name={'My Profile'} className='profileheader' />
      </div>
      <div className='profile-second-container'>
        <div className='profile-content'>
          <div className='profile-left'>
            <img src='./patricbateman.png' className='pfp' alt='Profile' />
            <p className='profile-email'>{email}</p>
            <p className='profile-phone'>{phone} </p>
            <button className='profile-logout' onClick={handleLogout}>Log Out</button>
            <div className='profile-statics'>
              <div className='profile-line'></div>
              <div className='profile-details-content'>
                <p><BiSolidOffer /> My Offers &nbsp;&nbsp;&nbsp;</p>
                <p><IoTicketSharp /> My Coupons</p>
                <p><FaStore /> My Stores &nbsp;&nbsp;&nbsp;</p>
                <p><IoMdSettings /> Settings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            </div>
          </div>
          <div className='profile-right'>
            <h1>My Coupons</h1>
            <div className="slide-bar">
              {['All', 'Flat 50% OFF', 'Flat 20% OFF'].map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index, label)}
                  className={activeIndex === index ? 'active' : ''}
                >
                  {label}
                </button>
              ))}
            </div>
            <AppcouponsCardslide cardsObject={Couponscards} />
            <h1>My Offers</h1>
            <div className="slide-bar">
              {['All', 'Flat 50% OFF', 'Flat 20% OFF'].map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index, label)}
                  className={activeIndex === index ? 'active' : ''}
                >
                  {label}
                </button>
              ))}
            </div>
            <div>
              <AppofferCardslide cardsObject={filteredOffers} className='profile-offerslider' />
            </div>
          </div>
        </div>
      </div>
      <News />
      <Footer className='footer' />
    </div>
  );
}

export default Profile;
