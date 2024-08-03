import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './login.css';
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';
import axios from 'axios';

function Signup() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData); // No need to specify the full URL
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data); // Handle errors here
    }
  };

  return (
    <div className='container'>
      <Navigation IsSigned={'false'} className='navigation' />
      <div className='content'>
        <p className='Login'>Signup</p>
        <p className='Login-welcome'>Create your account</p>
        <form onSubmit={handleSubmit} className='form'>
          <input type='text' placeholder='Email' className='inputelementmail' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <div className='input-flex'>
            <input type='text' placeholder='First Name' className='inputelement' value={formData.firstname} onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
            <input type='text' placeholder='Last Name' className='inputelement' value={formData.lastname} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
          </div>
          <input type='password' placeholder='Password' className='inputelementpass' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <button className='submit' type='submit'>Signup</button>
        </form>
        <div className='OR'>
          <div className='line'></div>
          <p>OR</p>
          <div className='line'></div>
        </div>
        <div className='social'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <button className='login-button'>
              <FaFacebook className='facebook-icon' />
              <p className='icon-text'>Continue with Facebook</p>
            </button>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <button className='login-button'>
              <FaGithub className='github-icon' />
              <p className='icon-text'>Continue with Github&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </button>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <button className='login-button'>
              <FaGoogle className='google-icon' />
              <p className='icon-text'>Continue with Google&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </button>
          </a>
        </div>
        <p className='ask'>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <Footer className='login-footer' />
    </div>
  );
}

export default Signup;
