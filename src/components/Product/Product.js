import React from 'react';
import { ShoppingCartIcon} from '@heroicons/react/solid'
import './Product.css'
const Product = (props) => {

    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className="product-card">
            <img src={img} alt="" />
            <div className="card-body">
                <p>{name.slice(0, 20)}</p>
                <p>price: ${price}</p>
                <p><small>Manufacturer :{seller}</small></p>
                <p><small>ratings:{ratings}</small></p>
            </div>
            <button onClick={() => props.addToCartHandler(props.product)} >Add to Cart <span><ShoppingCartIcon className='icon'/></span></button>

        </div>
    );
};

export default Product;