import React, { useState } from 'react';
import './couponcard.css';
import Popup from './popup/popup';
import Heart from '../../animatedHeart/heart';
import { LuShare2 } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdCheckmarkCircle } from "react-icons/io";

function Couponcards({
    couponsimageheader = './offericon.svg',
    code = 'CEVWRTIUWVOYT8E7Y',
    discount = 50,
    text1 = 'Exclusive Booking.com deal - Up to 20% off for Genius Members now!',
    text2 = "Can be combined with other promotions.",
    people = 6,
    img2 = 'https://tmpfiles.nohat.cc/full-m2i8K9G6N4m2H7Z5.png',
    link = 'https://sample.net/?connection=shop&stew=passenger',
    name = 'Booking',
    couponId,
    onAddCoupon,
    onRemoveCoupon,
    isCouponAdded = false
}) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isAdded, setIsAdded] = useState(isCouponAdded);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    const handleToggleCouponClick = async () => {
        if (isAdded) {
            if (!couponId) {
                console.error('No couponId provided');
                return;
            }
            try {
                console.log('Removing coupon with ID:', couponId);
                await onRemoveCoupon(couponId);
                setIsAdded(false);
                console.log('Coupon removed:', couponId);
            } catch (error) {
                console.error('Error removing coupon:', error.response ? error.response.data : error.message);
            }
        } else {
            try {
                const coupon = {
                    couponsimageheader,
                    discount,
                    name,
                    people,
                    text1,
                    text2,
                    img2,
                    link,
                    code,
                    couponId  // Include the couponId for identification
                };
                await onAddCoupon(coupon);
                setIsAdded(true);
                console.log('Coupon added:', couponId);
            } catch (error) {
                console.error('Error adding coupon:', error.response ? error.response.data : error.message);
            }
        }
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
                        <button onClick={handleToggleCouponClick}>
                            <Heart heartColor='#FA6619' isClicked={isAdded} />
                        </button>
                    </div>
                </div>
                <div className='couponscardspage-content'>
                    <p className='couponscardspage-text'> {text1} </p>
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
