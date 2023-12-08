import React from 'react';
import { useSelector } from 'react-redux';
import { FaEnvelope } from 'react-icons/fa';
import Logo from '../img/cars.png';
import './Header.css';

const Header = () => {
    const userEmail = useSelector((state) => state.auth);
    const email = userEmail.auth.user.email

    return (
        <div className="header">
            <FaEnvelope className='email-icon' /> <h3 className='email'>{email}</h3>
            <img className='logo' src={Logo} alt="Logo" /> 
        </div>
    );
};
export default Header;


