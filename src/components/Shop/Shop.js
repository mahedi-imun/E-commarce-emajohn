import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const addToCartHandler = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCartHandler={addToCartHandler}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <h3>Order summary</h3>
                <h4>Selected Items: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;