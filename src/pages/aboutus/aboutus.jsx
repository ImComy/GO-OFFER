import React from 'react';
import './aboutus.css';
import Footer from '../../assets/footer/footer';
import Navigation from '../../assets/navigation/navigation';

function About() {
    return (
        <div className='about-container'>
            <Navigation />
            <div className='about-header'>
                <div className='aboutus-image'>
                    <div className='about-overlay'>
                        <p className='path'>Home / <span>About Us</span></p>
                        <h1 className='h1-header'>About Us</h1>
                        <div className='about-header-content'>
                           <h1>Score the Deals!</h1>
                           <p>Welcome to Go Offer, your ultimate destination for unbeatable savings and exclusive deals! At Go Offer, we believe that smart shopping shouldn’t mean sacrificing quality or convenience. Our mission is to empower savvy shoppers like you with the best discounts, offers, and promotions available, so you can get more for less.</p>
                           <h2>Our Story</h2>
                           <p>Founded in 2024 by a team of passionate deal-seekers, Go Offer was born out of a simple idea: to make finding and using coupons easier and more enjoyable. We understand that in today’s fast-paced world, finding the right discount can be overwhelming and time-consuming. That’s why we’ve dedicated ourselves to curating a comprehensive collection of coupons and deals from your favorite retailers, so you can save time and money effortlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-content'>
                <section className='about-section'>
                    <h2>What We Offer</h2>
                    <p>At CouponCraze, we offer a wide range of features to enhance your shopping experience:</p>
                    <ul>
                        <li><strong>Curated Deals: </strong>We find the best offers from top retailers and present them to you.</li>
                        <li><strong>Exclusive Coupons: </strong>Enjoy access to special coupons that you won't find anywhere else.</li>
                        <li><strong>Personalized Alerts: </strong>Stay updated with personalized alerts for your favorite stores and products.</li>
                    </ul>
                </section>
                <section className='about-section'>
                    <h2>Our Commitment</h2>
                    <p>We are dedicated to providing you with a seamless and enjoyable shopping experience. Our detailed reviews and comprehensive guides ensure that you get the best value for your money.</p>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default About;
