
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { ArrowRightIcon } from '@heroicons/react/solid'
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useProducts()
    const [cart, setCart] = useCart(products);
    const addToCartHandler = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id);
        let newCart = []
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
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
                <Cart cart={cart}>
                    <Link to='/Orders'>
                        <div className='card-btn-container'>
                            <button className='card-btn'
                            >Review Order <span><ArrowRightIcon className='icon'></ArrowRightIcon></span>
                            </button>
                        </div>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;