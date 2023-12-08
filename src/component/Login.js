import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../services/api';
import { loginSuccess } from './redux/authActions';
import logo from '../img/car.jpg';
import './Login.css';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.warn('Please fill in both email and password.');
      return;
    }

    try {
      const data = await login(email, password);
      const sub = data.session.idToken.payload.sub;
      dispatch(loginSuccess(email, sub));
      toast.success('Signin successful');
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (error) {
      toast.error('Error while signing in');
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form">
        <img src={logo} alt="Logo" className="logo-signin" />
        <h2 className="signin-form">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={Login}>
          Sign In
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignInForm;
