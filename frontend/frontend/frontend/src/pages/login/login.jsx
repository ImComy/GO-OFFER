import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './login.css';
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';

function Login() {
  return (
    <div className='container'>
      <Navigation IsSigned={'false'} className='navigation' />
      <div className='content'>
        <p className='Login'>Login</p>
        <p className='Login-welcome'>Welcome Back!</p>
        <input type='text' placeholder='Email' className='inputelementmail' />
        <input type='password' placeholder='Password' className='inputelementpass' />
        <button className='submit'>Log In</button>
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
          You have not created an account yet? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <Footer className='login-footer' />
    </div>
  );
}

export default Login;
