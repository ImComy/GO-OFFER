import React, { useState } from 'react';
import './blog.css';
import Header from '../../assets/header/header';
import Footer from '../../assets/footer/footer';
import Navigation from '../../assets/navigation/navigation';
import Blogcards from './cards/cards';
import Modal from './Modal';

function Blog() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className='blog-container'>
            <Navigation />
            <div className='Blog-header-first'>
                <Header path={'Home/Blog'} name={'Blog'} className='Blog-header-first' />
            </div>
            <div className='blog-header'>
                <h1> All the Latest News! </h1>
            </div>
            <div className='blog-content1'>
                <Blogcards onClick={() => handleCardClick('Card 1')} />
                <Blogcards onClick={() => handleCardClick('Card 2')} />
            </div>
            <div className='blog-content2'>
                <Blogcards onClick={() => handleCardClick('Card 3')} />
                <Blogcards onClick={() => handleCardClick('Card 4')} />
            </div>
            <Footer />
            {selectedCard && (
                <Modal onClose={handleCloseModal}>
                    <div className='modal-title'>Title</div>
                    <div className='modal-line'></div>
                    <div className='modal-subtitle'>Subtitle</div>
                    <div className='modal-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus aliquet odio, eu mattis magna condimentum in. Vivamus vitae semper tortor, fermentum cursus arcu. Phasellus quis risus euismod, tempus ipsum in, luctus magna. Pellentesque pretium eros nisi, in bibendum ligula dignissim.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus aliquet odio, eu mattis magna condimentum in. Vivamus vitae semper tortor, fermentum cursus arcu. Phasellus quis risus euismod, tempus ipsum in, luctus magna. Pellentesque pretium eros nisi, in bibendum ligula dignissim.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus aliquet odio, eu mattis magna condimentum in. Vivamus vitae semper tortor, fermentum cursus arcu. Phasellus quis risus euismod, tempus ipsum in, luctus magna. Pellentesque pretium eros nisi, in bibendum ligula dignissim.</p>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Blog;
