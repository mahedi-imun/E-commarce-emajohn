import React from 'react';
import './ReviewItems.css'
import { TrashIcon} from '@heroicons/react/solid'
const ReviewItems = ({product,handleDEleteProduct}) => {
    const {name, price,img,quantity }=product;
    // console.log(children);
    return (
        <div className='review-Item-container'>
            <div className='review-Item'>
                <div className='review-item-info'>
                <img src={img} alt="" />
                    <div>
                    <h5>{name}</h5>
                    <p>price: <span className='orange-color'>${price}</span></p>
                    <p>Quantity: <span className='orange-color'>${quantity}</span></p>
                    </div>
                </div >
                <button onClick={()=>handleDEleteProduct(product)} className='trash-btn'><TrashIcon className='trash-icon'></TrashIcon></button>
            </div>
        </div>
    );
};

export default ReviewItems;