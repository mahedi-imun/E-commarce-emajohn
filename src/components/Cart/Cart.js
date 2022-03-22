import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h3 className='cart-header'>Order summary</h3>
            <div className='cart-body'>
            <h4>Selected Items: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Cart;