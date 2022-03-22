import React, { useEffect, useState } from 'react';
import { addToDb, getLocalStorageItem } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect(() => {
        const getStorageCart = getLocalStorageItem();
        const savedCart = [];
        for (let id in getStorageCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = getStorageCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        };
        setCart(savedCart)

    }, [products])
    const addToCartHandler = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;