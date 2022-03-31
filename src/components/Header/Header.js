import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-header'>
            <img src={logo} alt="emajohnlogo" />
            <div>
                <Link to="/Shop">Shop</Link>
                <Link to="/Orders">Order review</Link>
                <Link to="/Inventory">Manage Inventory</Link>
            </div>
        </nav>
    );
};

export default Header;