import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products ,setProduct] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>Shop now</h3>
                {
                    products.map(product => console.log(product))
                }
            </div>
            <div className="order-container">
                <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Shop;