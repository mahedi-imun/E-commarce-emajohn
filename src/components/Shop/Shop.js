
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { ArrowRightIcon } from '@heroicons/react/solid'
import './Shop.css'
import { useEffect, useState } from 'react';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [pagesCount, setPagesCount] = useState(0)
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [cart, setCart] = useCart(products);
    const addToCartHandler = (selectedProduct) => {
        
    
        const exists = cart.find(product => product._id === selectedProduct._id);
        let newCart = []
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart)
        addToDb(selectedProduct._id)
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/product?page=${page}&pageSize=${pageSize}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[page,pageSize])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.result;
                const pages = Math.ceil(count / 10)
                setPagesCount(pages)
            })
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        addToCartHandler={addToCartHandler}
                    ></Product>)
                }
                <div className='pagination-btn'>
                    {
                        [...Array(pagesCount).keys()]
                            .map(number => <button
                                onClick={() => setPage(number)}
                                className={page === number ? 'active' : ''}
                            >
                                {number + 1}
                            </button>)
                    }

                    <select onClick={(e) => setPageSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>

                </div>

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