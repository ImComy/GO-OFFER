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

const offercards = [
  {offerImageHeader:'./nike.svg',  offerImageBackground:'./gigachad.png', discount: 40, ending: "18 days", name:'Nike'},
  {offerImageHeader:'./offericon.svg',  offerImageBackground:'./market.png', discount: 40, ending: "18 days", name:'Domino'},
  {offerImageHeader:'./mac.svg',  offerImageBackground:'/macmeal.png', discount: 40, ending: "18 days", name:'Macdonald\'s'},
  {offerImageHeader:'./google.svg',  offerImageBackground:'./googleplace.png', discount: 40, ending: "18 days", name:'Google'},
  {offerImageHeader:'./nike.svg',  offerImageBackground:'./gigachad.png', discount: 40, ending: "18 days", name:'Nike'},
  {offerImageHeader:'./mac.svg',  offerImageBackground:'/macmeal.png', discount: 40, ending: "18 days", name:'Macdonald\'s'},
  {offerImageHeader:'./google.svg',  offerImageBackground:'./googleplace.png', discount: 40, ending: "18 days", name:'Google'},
]
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
  return (
    <div className='profile-container'>
      <Navigation />
      <div className='profileheader'>
      <Header path={'Home/Profile'} name={'My Profile'} className='profileheader'/>
      </div>
      <div className='profile-second-container'>
        <div className='profile-content'>
          <div className='profile-left'>
            <img src='./patricbateman.png' className='pfp' alt='Profile' />
            <p className='profile-email'>patricbateman@gmail.com </p>
            <p className='profile-phone'>+93 123456789 </p>
            <button className='profile-logout'>Log Out</button>
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
            <div className='slide-bar'>
              <p> All </p>
              <p>Flat 50% OFF </p>
              <p>Flat 20% OFF </p>
            </div>
            <AppcouponsCardslide cardsObject={Couponscards} />
            <h1>My Offers</h1>
            <div className='slide-bar'>
              <p> All </p>
              <p>Flat 50% OFF </p>
              <p>Flat 20% OFF </p>
            </div>
            <AppofferCardslide cardsObject={offercards} className='profile-offerslider'/>
          </div>
        </div>
      </div>
      <News />
      <Footer className='footer' />
    </div>
  );
}

export default Profile;
