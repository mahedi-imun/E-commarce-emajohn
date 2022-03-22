import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total =0;
    let shippingCost =0
    let tax = 0;
    let grandTotal =0
    for(let product of cart){
        total = total+product.price
        shippingCost = shippingCost +product.shipping;
        const newTax=(total *0.1).toFixed(2);
        tax =parseFloat(newTax)
        grandTotal = total +shippingCost+tax
    };

    return (
        <div className='cart'>
            <h3 className='cart-header'>Order summary</h3>
            <div className='cart-body'>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping cost: ${shippingCost}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            </div>
        </div>
    );
};

export default Cart;