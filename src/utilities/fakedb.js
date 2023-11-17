// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // console.log("shoppingCart",shoppingCart)
    // add quantity
    const quantity = shoppingCart[id]; //first kno product add korle tar quantity undefine thakbe
    // console.log("quantity",quantity);
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;//shoppingCart[id]= key & newQuantity = value
    }
    // console.log("shoppingCart set value",shoppingCart) //shoppingCart {"13cbc7ed-a61b-4883-9d42-82d7d8642b86":1}
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
