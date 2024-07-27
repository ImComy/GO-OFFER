import './offersCards.css';
import { FiClock } from "react-icons/fi";

const OfferCards = ({ offerImageHeader, offerImageBackground, discount, ending, name }) => {
  return (
    <div className='offercard-container' style={{ backgroundImage: `url(${offerImageBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <img src={offerImageHeader} className='offercard-headerimg' />
      <p className='offercard-header-text'>{name}</p>
      <p className='offercard-header-text-hidden'>Get <span className='offercard-discount'>{discount}% OFF</span> on your first payment</p>
      <div className='offercard-flex'>
        <button className="offercard-button">
          Get Offer
        </button>
              <p className='offercard-header-text-hover'>the best prices and offers for installments and cash for Egypt from noon 2024</p>
        <p className='offercard-ends'><FiClock className='clock'/> &nbsp;&nbsp;Ends in {ending} </p>
      </div>
    </div>
  );
}

export default OfferCards;
