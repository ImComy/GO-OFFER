import React from 'react';
import './contact.css';
import Header from '../../assets/header/header';
import Footer from '../../assets/footer/footer';
import Navigation from '../../assets/navigation/navigation';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div className='contact-container'>
            <Navigation />
            <div className='profileheader'>
                <Header path={'Home / Contact Us'} name={'Contact Us'} className='profileheader' />
            </div>
            <div className='contact-content'>
                <h2>Get in Touch!</h2>
                <div className='we-flexx'>
                <div className='contact-item'>
                    <FaPhone className='contact-icon' />
                    <div className='contact-info'>
                        <h3>By Phone</h3>
                        <p>+01223598423</p>
                    </div>
                </div>
                <div className='contact-line'></div>
                <div className='contact-item'>
                    <FaLocationDot className='contact-icon' />
                    <div className='contact-info'>
                        <h3>Our Address</h3>
                        <p>5th Avenue, Groove Street</p>
                    </div>
                </div>
                <div className='contact-line'></div>
                <div className='contact-item'>
                    <MdEmail className='contact-icon' />
                    <div className='contact-info'>
                        <h3>By E-Mail</h3>
                        <p>Gooffer@gmail.com</p>
                    </div>
                </div>
                </div>
                <div className='commitment-section'>
                    <h2>Our Commitment</h2>
                    <p>We are dedicated to providing you with a seamless and enjoyable shopping experience. Our detailed team works tirelessly to find the best offers and discounts, ensuring you get the best value for your money. If you have any questions or need assistance, our friendly customer support team is here to help.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
