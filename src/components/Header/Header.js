import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-header'>
                <img src={logo} alt="emajohnlogo" />
                <div>
                    <a href="/Shop">Shop</a>
                    <a href="/Order">Order</a>
                    <a href="/Order review"> Order review</a>
                    <a href="/Manage Inventory">Manage Inventory</a>
                </div>        
        </nav>
    );
};

export default Header;