import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../Redux/cart/cart-selectors';
import { selectCurrentUser } from '../../Redux/user/user.selectors';


import Logo from '../../assets/img/THE GIFTED PIGGY.png';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        {
            hidden ? null : 
            <CartDropdown />
        }
        
    </div>
);

const mapStateToProps = 
createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
