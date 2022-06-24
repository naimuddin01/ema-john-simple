import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const saveCart = getDatabaseCart();
        console.log(saveCart);
        const productKeys = Object.keys(saveCart);
        console.log(productKeys);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        console.log(cartProducts);
        setCart(cartProducts)
    }, [])
    return (
        <div>
            <h1>Cart Items : {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem 
                    key = {pd.key}
                    product = {pd}>

                </ReviewItem>)
            }
        </div>
    );
};

export default Review;