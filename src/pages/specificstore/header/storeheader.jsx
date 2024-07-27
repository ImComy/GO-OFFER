import './storeheader.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import Heart from '../../../assets/animatedHeart/heart';

function Storeheader({
    path = 'Home/Stores',
    name = 'Noon',
    stars = 4.5,
    reviews = '50,000',
    used = '100,137',
    update = 'July, 2024',
    text = 'The best prices and offers for installments and cash in Egypt from Noon 2024',
    img = '../noon.png'
}) {
    const segments = path.split('/');

    const renderPathSegments = (segments) => (
        segments.map((segment, index) => (
            <span
                key={index}
                className={`path-segment ${index % 2 === 0 ? 'green' : 'black'}`}
            >
                {segment}
                {index < segments.length - 1 && ' / '}
            </span>
        ))
    );

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} />);
        }

        if (halfStar) {
            stars.push(<FaStarHalfAlt key="half" />);
        }

        return stars;
    };

    return (
        <div className='storeheader-container'>
            <div className='storeheader-header'>
                <h3 className='storeheader-path'>
                    {renderPathSegments(segments)}
                </h3>
                <div className='storeheader-content'>
                    <img src={img} alt={name} className='storeheader-img' />
                    <div className='storeheader-details'>
                    <div className='store-header-flex2'>
                        <p>
                            <BsFillPeopleFill /> {used} People Used
                            <span>Last Updated: {update}</span>
                        </p>
                        <h2>{name}</h2>
                        <p>{text}</p>
                        </div>
                        <div className='storeheader-flex'>
                        <div className='storeheader-rating'>
                            <div className='storeheader-rating-stars'>{renderStars(stars)}</div>
                            <span>{reviews} Reviews</span>
                        </div>
                        <div className='storeheader-icons'>
                            <IoShareSocialSharp />
                            <div className='heart-store'>
                            <Heart heartColor={'#FA6619'} className='heart-store'/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Storeheader;
