import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../component/Avtar';
import  Logout from './Logout'
import './Sidebar.css';


const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className='avatar'><Avatar /></div>
                <ul>
                    <li><NavLink exact to="/dashboard" activeClassName="active-link"> Home</NavLink></li>
                    <li><NavLink to="/configuration" activeClassName="active-link">Configuration</NavLink></li>
                    <li><NavLink to="/profile" activeClassName="active-link">Profile</NavLink></li>
                    <li><Logout/></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
