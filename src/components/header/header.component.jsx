import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/THE GIFTED PIGGY.png';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <img className='logo' src={Logo}/>
        </Link>
        <div className='motto-container'>
            <p className='motto'>“Yesterday is history , tomorrow is a mystery , but today is a <span className='gift'>gift</span> , which is why we call it the present.”</p>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                ABOUT
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            
        </div>
    </div>
)

export default Header;
