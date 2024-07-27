import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './login.css'; // Same CSS file as Login component
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';

function Signup() {
  return (
    <div className='container'>
      <Navigation IsSigned={'false'} className='navigation' />
      <div className='content'>
        <p className='Login'>Signup</p>
        <p className='Login-welcome'>Create your account</p>
        <input type='text' placeholder='Email' className='inputelement' />
        <div className='input-flex'>
          <input type='text' placeholder='First Name' className='inputelement' />
          <input type='text' placeholder='Last Name' className='inputelement' />
        </div>
        <input type='password' placeholder='Password' className='inputelement' />
        <button className='submit'>Signup</button>
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
