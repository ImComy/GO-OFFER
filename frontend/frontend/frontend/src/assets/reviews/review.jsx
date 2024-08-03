import './ewview.css';
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

const Review = ({
  users = "69K",
  stores = 240,
  coupons = "45,000",
  stars1 = 4.5,
  stars2 = 3,
  user1 = 'John Marston',
  user2 = 'Tony Bateman',
  text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisl id leo cursus egestas id a neque. Sed viverra mi eget ullamcorper eleifend. Curabitur vitae viverra felis. Aliquam',
  text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisl id leo cursus egestas id a neque. Sed viverra mi eget ullamcorper eleifend. Curabitur vitae viverra felis. Aliquam'
}) => {

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className='review-stars'>
        {Array(fullStars).fill(<FaStar />)}
        {halfStar && <FaStarHalfStroke />}
        {Array(5 - fullStars - (halfStar ? 1 : 0)).fill(<FaStar style={{ opacity: 0.2 }} />)}
      </div>
    );
  };

  return (
    <div className="review-container">
      <div className='review-header'>
        <h1 className='review-header-maintext'> What our customers are saying. </h1>
        <p className='review-header-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisl id leo cursus egestas id a neque. Sed viverra mi eget ullamcorper eleifend. Curabitur vitae viverra felis. Aliquam </p>
        <div className='review-header-statics'>
          <div className='review-header-statics-element'>
            <p className='review-header-number'> {users} </p>
            <p className="review-header-number-title"> Users </p>
          </div>
          <div className='review-header-statics-element'>
            <p className='review-header-number'> {stores} </p>
            <p className='review-header-number-title'> Stores </p>
          </div>
          <div className='review-header-statics-element'>
            <p className='review-header-number'> {coupons} </p>
            <p className='review-header-number-title'> Coupons </p>
          </div>
        </div>
      </div>
      <div className='review-flex'>
        <div className='review-main'>
          {renderStars(stars1)}
          <p className='review-name'> {user1} </p>
          <p className='review-text'> "{text1}" </p>
        </div>
        <div className='review-main'>
          {renderStars(stars2)}
          <p className='review-name'> {user2} </p>
          <p className='review-text'> "{text2}" </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
