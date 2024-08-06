import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import './login.css';
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';
import axios from 'axios';

function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone:"",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className='container'>
      <Navigation IsSigned={'false'} className='navigation' />
      <div className='content'>
        <p className='Login'>Signup</p>
        <p className='Login-welcome'>Create your account</p>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='inputelementmail'
            value={data.email}
            onChange={handleChange}
            required
          />
          <div className='input-flex'>
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              className='inputelement'
              value={data.firstName}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              className='inputelement'
              value={data.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            className='inputelementpass'
            value={data.password}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            placeholder='Phone Number'
            name='phone'
            className='inputelementpass'
            value={data.phone}
            onChange={handleChange}
            required
          />
          {error && <div className='error-message'>{error}</div>}
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
