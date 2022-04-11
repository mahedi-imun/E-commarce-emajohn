import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const [user]= useAuthState(auth)
    const logOut = ()=>{
        signOut(auth)
    }
    return (
        <nav className='nav-header'>
            <div className='header-items'>
            <div className='header-img'><img src={logo} alt="ema-john-logo" /></div>
            <div>
                <Link to="/Shop">Shop</Link>
                <Link to="/Orders">Order review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {
                    user?
                    <button className='header-btn' onClick={()=>logOut()}>log out</button>
                    :
                    <Link to="/login">Login</Link>}
            </div>
            </div>
        </nav>
    );
};

export default Header;