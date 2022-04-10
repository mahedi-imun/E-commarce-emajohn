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
            <img src={logo} alt="emajohnlogo" />
            <div>
                <Link to="/Shop">Shop</Link>
                <Link to="/Orders">Order review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {
                    user?
                    <button onClick={()=>logOut()}>log out</button>
                    :
                    <Link to="/login">Login</Link>}
            </div>
        </nav>
    );
};

export default Header;