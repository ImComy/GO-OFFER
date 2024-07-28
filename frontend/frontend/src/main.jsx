import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/home/App';
import Login from './pages/login/login.jsx';
import Signup from './pages/login/signup.jsx';
import Browse from './browse.jsx';
import Coupons from './pages/Coupons/coupons';
import Offer from './pages/Offers/offer';
import Stores from './pages/stores/stores';
import Profile from './pages/profile/profile';
import Privacy from './pages/privacy/privacy';
import Spstore from './pages/specificstore/spstore';

const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Coupons" element={<Coupons />} />
      <Route path="/Offers" element={<Offer />} />
      <Route path="/Stores" element={<Stores />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/Stores/noon" element={<Spstore />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));