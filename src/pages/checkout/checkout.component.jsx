import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../Redux/cart/cart-selectors';

import './checkout.styles.scss';

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span className='checkout-hb'>Product</span>
            </div>
            <div className='header-block'>
                <span className='checkout-hb'>Description</span>
            </div>
            <div className='header-block'>
                <span className='checkout-hb'>Quantity</span>
            </div>
            <div className='header-block'>
                <span className='checkout-hb'>Price</span>
            </div>
            <div className='header-block'>
                <span className='checkout-hb'>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
        
        <div className='total'>
            <span className='total'>TOTAL: {total} lei</span>
        </div>

        <div className='buy-now'>
            <p className='buy-text'>SHOP NOW!</p>
            <span className='down-arrow'>&#8595;</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);