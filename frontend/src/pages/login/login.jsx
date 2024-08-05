import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import './login.css';
import Navigation from '../../assets/navigation/navigation';
import Footer from '../../assets/footer/footer';
import { useState } from "react";
import axios from "axios";

function Login() {

  	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/api/auth";
			const { data: res } = await axios.post(url, data);
            console.log(res);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <div className='container'>
      <Navigation IsSigned={'false'} className='navigation' />
      <div className='content'>
        <p className='Login'>Login</p>
        <p className='Login-welcome'>Welcome Back!</p>
        <form onSubmit={handleSubmit} className='form'>

						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className='inputelementmail'
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='inputelementpass'
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className='submit'>
							Log In
						</button>

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
          You have not created an account yet? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <Footer className='login-footer' />
    </div>
  );
}

export default Login;
