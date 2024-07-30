import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './navigation.css';
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';
import { MdDiscount, MdEmail, MdOutlineWavingHand } from 'react-icons/md';
import { BiSolidOffer } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { CiLogin, CiLogout } from 'react-icons/ci';

const messages = [
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
  { title: 'test', from: 'me', message: 'weeeeeeeeeeeeeeeeeeee' },
];

const numberofnoti = messages.length;

function Navigation({ IsSigned = 'true', name = 'Patrick Bateman' }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const notificationRef = useRef(null);
  const emailRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const closeHamburger = () => {
    setIsHamburgerOpen(false);
  };

  const toggleNotification = () => {
    setIsNotificationOpen((prevState) => !prevState);
  };

  const toggleEmail = () => {
    setIsEmailOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (notificationRef.current && !notificationRef.current.contains(event.target)) {
      setIsNotificationOpen(false);
    }
    if (emailRef.current && !emailRef.current.contains(event.target)) {
      setIsEmailOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    console.log(option);
    setIsOpen(false);
  };

  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <BiSolidOffer className='nav-logoicon' />
        <span className='nav-logotext'>GO OFFER</span>
      </div>
      <div className='nav-middle'>
        <button className={`nav-btn ${isActive('/')}`} onClick={() => navigate('/')}>
          <AiOutlineHome className={`nav-icon ${isActive('/')}`} />
          <span className={`nav-link ${isActive('/')}`}>Home</span>
        </button>
        <button className={`nav-btn ${isActive('/Coupons')}`} onClick={() => navigate('/Coupons')}>
          <MdDiscount className={`nav-icon ${isActive('/Coupons')}`} />
          <span className={`nav-link ${isActive('/Coupons')}`}>Coupons</span>
        </button>
        <button className={`nav-btn ${isActive('/Offers')}`} onClick={() => navigate('/Offers')}>
          <BiSolidOffer className={`nav-icon ${isActive('/Offers')}`} />
          <span className={`nav-link ${isActive('/Offers')}`}>Offers</span>
        </button>
        <button className={`nav-btn ${isActive('/Stores')}`} onClick={() => navigate('/Stores')}>
          <AiOutlineShop className={`nav-icon ${isActive('/Stores')}`} />
          <span className={`nav-link ${isActive('/Stores')}`}>Stores</span>
        </button>
      </div>
      <div className='nav-flexflex'>
        {IsSigned === 'false' ? (
          <div className='notSigned'>
            <button className='nav-signin' onClick={() => navigate('/login')}>
              <CiLogin /><p className='nav-icon-text1'>&nbsp; Log In&nbsp;&nbsp;&nbsp; </p>
            </button>
            <button className='nav-signup' onClick={() => navigate('/signup')}>
              <MdOutlineWavingHand /> <p className='nav-icon-text1'> &nbsp; Sign Up</p>
            </button>
          </div>
        ) : (
          <div className='nav-right'>
            <div className={`nav-email-container ${isNotificationOpen ? 'open' : ''}`} onClick={toggleNotification} ref={notificationRef}>
              <FaBell className='nav-notifications-icon' />
              <div className='nav-number-noti'>{numberofnoti}</div>
              {isNotificationOpen && (
                <div className={`nav-dropdown-menu ${isNotificationOpen ? 'open' : ''}`}>
                  <div className='nav-email-dropdown-header'>
                    <h2>Notifications</h2>
                  </div>
                  <div className='nav-email-dropdown-content'>
                    {messages.map((msg, index) => (
                      <div key={index} className='message'>
                        <div className='message-content'><div className='weee'>{msg.message}</div></div>
                        <div className='msg-line'></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className={`nav-email-container ${isEmailOpen ? 'open' : ''}`} onClick={toggleEmail} ref={emailRef}>
              <MdEmail className='nav-email-icon' />
              <div className='nav-number-email'>{numberofnoti}</div>
              {isEmailOpen && (
                <div className={`nav-dropdown-menu ${isEmailOpen ? 'open' : ''}`}>
                  <div className='nav-email-dropdown-header'>
                    <h2>Messages</h2>
                  </div>
                  <div className='nav-email-dropdown-content'>
                    {messages.map((msg, index) => (
                      <div key={index} className='message'>
                        <h3 className='title'>Title: {msg.title}</h3>
                        <h3 className='from'>From: {msg.from}</h3>
                        <div className='message-content'><strong>Message: </strong><div className='weee'>{msg.message}</div></div>
                        <div className='msg-line'></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className='nav-loginbtn'>
              <button className='nav-pfpbtn' onClick={() => navigate('/profile')}>
                <span className='nav-profileText'>{name}</span>
                <CgProfile className='nav-pfp' />
              </button>
            </div>
          </div>
        )}
        <div className='nav-rightwe'>
          <div className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`} onClick={toggleHamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`dropdown-content ${isHamburgerOpen ? 'open' : ''}`}>
            <a href="#/" onClick={closeHamburger}><AiOutlineHome /> Home</a>
            <a href="#/Coupons" onClick={closeHamburger}><MdDiscount /> Coupons</a>
            <a href="#/Offers" onClick={closeHamburger}><BiSolidOffer /> Offers</a>
            <a href="#/Stores" onClick={closeHamburger}><AiOutlineShop /> Stores</a>
            <a href="#/login" onClick={closeHamburger}><CiLogin /> Login</a>
            <a href="#/signup" onClick={closeHamburger}><MdOutlineWavingHand /> Signup</a>
            <a href="#" onClick={closeHamburger}><CiLogout /> Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
