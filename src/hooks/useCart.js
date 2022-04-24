import { useEffect, useState } from "react"
import { getLocalStorageItem } from "../utilities/fakedb"
const useCart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const getStorageCart = getLocalStorageItem();
        const savedCart = [];
        const keys = Object.keys(getStorageCart)
        
        fetch('http://localhost:5000/productByKeys',{
            method:'Post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(products =>{
            console.log(products);
            for (let id in getStorageCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = getStorageCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)

        })
        
    }, [])
    return [cart, setCart]
}
export default useCart