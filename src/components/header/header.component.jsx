import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import Logo from '../../assets/img/THE GIFTED PIGGY.png';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <img className='logo' src={Logo} alt='logo'/>
        </Link>
        <div className='motto-container'>
            <p className='motto'>“Yesterday is history , tomorrow is a mystery , but today is a <span className='gift'>gift</span> , which is why we call it the present.”</p>
        </div>
        <div className='options'>
            <Link className='option-shop' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                ABOUT
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
                </div>
            )   :  (
                <Link className='option' to='/signin'>
                SIGN IN
                </Link>
            )}
        </div>
    </div>
)

export default Header;
