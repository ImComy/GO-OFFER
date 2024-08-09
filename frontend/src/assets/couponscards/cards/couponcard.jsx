import React, { useState } from 'react';
import './couponcard.css';
import Popup from './popup/popup';
import Heart from '../../animatedHeart/heart';
import { LuShare2 } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdCheckmarkCircle } from "react-icons/io";

function Couponcards({
    couponsimageheader = './offericon.svg',
    code='CEVWRTIUWVOYT8E7Y',
    discount = 50,
    text=' Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    people=6,
    img2='https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link='https://sample.net/?connection=shop&stew=passenger',
    name='Booking'
}) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <>
            <div className='couponscardspage-container'>
                <div className='couponscardspage-header'>
                    <div className='couponscardspage-header-left'>
                        <img src={couponsimageheader} className='couponscardspage-img' alt='Offer' />
                        <p className='couponscardspage-header-text'> {discount}% OFF </p>
                    </div>
                    <div className='couponscardspage-header-right'>
                        <LuShare2 className='couponscardspage-share'/>
                        <Heart heartColor='#FA6619' />
                    </div>
                </div>
                <div className='couponscardspage-content'>
                    <p className='couponscardspage-text'> {text} </p>
                    <div className='couponscardspage-content-right'>
                        <div className='couponscardspage-button'>
                            <button className='couponscardspage-button-real' onClick={togglePopup}>
                                Show Coupon Code
                            </button>
                            <p className='couponscardspage-code-button'> {code} </p>
                        </div>
                        <div className='couponscardspage-detailes'>
                            <p className='couponscardspage-detailes-firsttext'>
                                <IoMdCheckmarkCircle className='couponscardspage-detailes-icon'/>
                                <span className='couponscardspage-detailes-span'> Verified</span>
                            </p>
                            <p className='couponscardspage-detailes-secondtext'>
                                <BsFillPeopleFill className='couponscardspage-detailes-icon'/>
                                <span className='couponscardspage-detailes-span'> {people} Uses</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Popup isVisible={isPopupVisible} onClose={togglePopup} code={code} link={link} discount={discount} img2={img2} name={name}/>
        </>
    );
}

export default Couponcards;
