import React from 'react';
import './footer.css';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='footer-container'>
      <div className='footer-flex'>
        <div className='footer-social'>
          <span className='footer-logoText'>GO OFFER</span>
          <div className='footer-socialIcons'>
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
          </div>
          <p className='footer-socialText'>Go Offer is on a mission to make shopping more fun and rewarding with 10X more working codes than found anywhere else.</p>
        </div>

        <div className='footer-about'>
          <h3>About</h3>
          <Link to="/Privacy" className='footer-link'>
            About Osaka Deals
          </Link>
          <Link to="/Privacy" className='footer-link'>
            Communities
          </Link>
          <Link to="/Privacy" className='footer-link'>
            Blogs
          </Link>
          <Link to="/Privacy" className='footer-link'>
            Careers
          </Link>
          <Link to="/Privacy" className='footer-link'>
            Press Kit
          </Link>
        </div>

        <div className='footer-support'>
          <h3>Support</h3>
          <Link to="/Privacy" className='footer-link'>
            Help Center
          </Link>
          <Link to="/Privacy" className='footer-link'>
            Contact Us
          </Link>
          <Link to="/Privacy" className='footer-link'>
            Privacy
          </Link>
        </div>

        <div className='footer-compare'>
          <h3>Compare</h3>
          <Link to="/Privacy" className='footer-link'>
            How to find Promo codes
          </Link>
          <Link to="/Privacy" className='footer-link'>
            Most common coupon phrases
          </Link>
          <Link to="/Privacy" className='footer-link'>
            How to save with Autoship
          </Link>
        </div>

        <div className='footer-resources'>
          <h3>Resources</h3>
          <Link to="/Privacy" className='footer-link'>
            Go Offer VS Honey
          </Link>
          <Link to="/Privacy" className='footer-link'>
            GO Offer VS RetailMeNot
          </Link>
        </div>
      </div>

      <hr></hr>
      <div className='footer-copyrights'>
        <h3>© 2024 Go Offer All rights reserved</h3>
      </div>
      </div>
    </>
  );
}

export default Footer;
