import React from 'react';

const Blogcards = ({
    img = './streets.jpg',
    name = 'Macdonald\'s',
    available = 'Available NOW',
    discount = '10%',
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut porta neque. Nunc pulvinar massa dolor, at ornare magna sodales nec. Etiam vehicula vel nulla sed elementum. Praesent aliquam sapien ipsum, vitae interdum diam aliquet eget. Vestibulum porttitor porttitor risus. Praesent tortor mauris, semper ac est eu, fermentum tempus elit. Curabitur eu nisl eleifend.',
}) => {
    return (
        <div className='blogcard-container'>
            <div className='blogcard-header'>
              <div className='blognew'>
                <img className='new-icon' src='/GO-OFFER/new.svg' alt='New' />
              </div>
                <img className='blogcard-image' src={img} alt={name} />
                <div className='overlay'>
                    <h2>New <span>{name}</span> Coupons</h2>
                    <p className='blogcard-discount'>
                        Up to <span className='discount-span'>{discount}</span> <span className='discount-off'>OFF</span>
                    </p>
                    <p className='available'>{available}</p>
                </div>
            </div>
            <div className='blogcard-content'>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Blogcards;
