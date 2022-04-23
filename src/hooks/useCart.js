import { useEffect, useState } from "react"
import { getLocalStorageItem } from "../utilities/fakedb"
const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const getStorageCart = getLocalStorageItem();
        const savedCart = [];
        for (let id in getStorageCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = getStorageCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])
    return [cart, setCart]
}
export default useCart