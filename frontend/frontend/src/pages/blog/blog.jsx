import React from 'react';
import './blog.css';
import Header from '../../assets/header/header';
import Footer from '../../assets/footer/footer';
import Navigation from '../../assets/navigation/navigation';
import Blogcards from './cards/cards';

function Blog() {
    return (
        <div className='blog-container'>
          <Navigation />
          <div className='Blog-header-first'>
          <Header path={'Home/Blog'} name={'Blog'} className='Blog-header-first'/>
          </div>
          <div className='blog-header'>
            <h1> All the Latest News! </h1>
          </div>
          <div className='blog-content1'>
            <Blogcards />
            <Blogcards />
          </div>
          <div className='blog-content2'>
            <Blogcards />
            <Blogcards />
          </div>
          <Footer />
        </div>
    );
}

export default Blog;
