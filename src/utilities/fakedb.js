// use local storage to manage cart data
let shoppingCart = {};
const getLocalStorageItem =()=>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
        return shoppingCart;
    }
};
const addToDb = id =>{
    //get the shopping cart from local storage
   getLocalStorageItem();
    // add quantity
    const quantity = shoppingCart[id];
    // console.log(quantity);
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    getLocalStorageItem,
    removeFromDb,
    deleteShoppingCart
}