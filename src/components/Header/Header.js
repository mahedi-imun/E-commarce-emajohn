import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='nav-header'>
            <nav>
                <img src={logo} alt="" />

            </nav>
            
        </div>
    );
};

export default Header;