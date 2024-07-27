import './appstorescards.css';
import { FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { RiCoupon3Fill } from "react-icons/ri";

const StoresCards = ({
  storesImageBackground = './shopping.png',
  stars = 3.7,
  offers = 0,
  coupons = 0,
  name = 'weeeeee',
  ending =' 7 d: 20h: 23m',
  text = 'Homezart Saudi Arabia First Order Discount: Enjoy 10% OFF on All Products',
}) => {
  return (
    <div
      className="app-storescard-container"
      style={{
        backgroundImage: `url(${storesImageBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="app-storescards-stars-container">
        <FaStar  className='storescards-star'/>
        <p className='storescarsd-stars-text'> {stars} </p>
      </div>
      <div className='app-storescard-header'>
      <p className="app-storescard-header-text">{name}</p>
      <div className='app-storescard-header-text-animation'>
      <p className="app-storescard-text">
        <BiSolidOffer className='storescards-icon'/>  &nbsp; {offers} Offers
      </p>
      <p className="app-storescard-text">
        <RiCoupon3Fill className='storescards-icon'/>  &nbsp; {coupons} Coupons
      </p>
      </div>
      <p className='appstores-text-hidden'>{text} </p>
      <div className="app-storescard-flex">
        <p className="app-storescard-ends">
          <FiClock className="clock" /> &nbsp;&nbsp;Ends in {ending}
        </p>
      </div>
      </ div>
    </div>
  );
};

export default StoresCards;
