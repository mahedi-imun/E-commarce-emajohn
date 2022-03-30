import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products , setProducts]= useProducts()
    const [cart , setCart]= useCart(products)
    return (
        <div>
            <h3>This is orders{products.length}</h3>
            <h2>cart{cart.length}</h2>
            
        </div>
    );
};

export default Orders;