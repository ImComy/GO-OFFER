import React from 'react';
import Navigation from './assets/navigation/navigation';
import Card from './assets/cards/card'; 
import './browse.css'; 

function Browse() {
  return (
    <div className='all'>
      <div className='navigation'>
        <Navigation />
      </div>
      <div className="app">
        <div className="card-container">
          <Card /> 
          <Card /> 
          <Card /> 
          <Card /> 
        </div>
      </div>
    </div>
  );
}

export default Browse;
