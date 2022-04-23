import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import { CreditCardIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';
const Orders = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleDEleteProduct = (deleteProduct) => {
        const rest = cart.filter(pd => pd._id !== deleteProduct._id)
        setCart(rest)
        removeFromDb(deleteProduct._id)
    }
    return (
        <div className='shop-container'>
            <div className='review-Item-container'>
                {
                    cart.map(pd => <ReviewItems
                        key={pd._id}
                        product={pd}
                        handleDEleteProduct={handleDEleteProduct}
                    ></ReviewItems>)
                }
            </div>
            <div className='order-container'>
                <Cart cart={cart}>
                    <div className='card-btn-container'>
                        <button
                            onClick={() => navigate('/shipping')}
                            className='card-btn'>
                            Proceed Checkout
                            <span>
                                <CreditCardIcon className='icon'></CreditCardIcon>
                            </span>
                        </button>
                    </div>
                </Cart>
            </div>


        </div>
    );
};

export default Orders;