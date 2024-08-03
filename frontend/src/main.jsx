import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Blog from './pages/blog/blog';
import About from './pages/aboutus/aboutus';
import Contact from './pages/contact/contact';
import Osaka from './pages/osaka'

const Main = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/coupons" element={<Coupons />} />
      <Route path="/offers" element={<Offer />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="SN" element={<Spstore />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/osaka" element={<Osaka />} />
    </Routes>
  </HashRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));
