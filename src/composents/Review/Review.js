import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true)
        processOrder();
    }

    const removeProduct = (productKey) => {
        // console.log('Remove Clicked', productKey)
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);   
        removeFromDatabaseCart("remode product key",productKey);
    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        console.log(saveCart);
        const productKeys = Object.keys(saveCart); //here return all keys in the getDataBasecart
        console.log("Database product key",productKeys);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            console.log("fackData : ",fakeData);

            //eikhane savecart hosse database r database e key pathasce bole amra valu ta pasce
            product.quantity = saveCart[key]; //database e jokhon amra key pathay tokhon amra value ta pai
            return product;
        });
        console.log(cartProducts);
        setCart(cartProducts)
    }, [])

    let thankYon;
    if(orderPlaced) {
        thankYon = <img src={happyImage} alt="" />
    }
    return (
        <div className='twin-container'>
            <div className='product-container'>
                <h1>Cart Items : {cart.length}</h1>
                {
                    cart.map(pd => <ReviewItem 
                        key = {pd.key}
                        removeProduct = {removeProduct}
                        product = {pd}>

                    </ReviewItem>)
                }
                {
                    thankYon  
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;