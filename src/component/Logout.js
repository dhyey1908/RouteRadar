import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { logout } from './redux/authActions';
import './Logout.css'

const Logout = () => {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout())
    localStorage.clear()
    toast.success('Logout successful!');

  };
  return (
    <NavLink to="/" className='logout-btn' onClick={handleLogout}>Logout</NavLink>
  );
};

export default Logout;
