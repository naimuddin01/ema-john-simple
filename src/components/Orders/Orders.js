import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {products, initialCart} = useLoaderData();//eikhan thake pasce {products: products, initialCart: initialCart }
    // console.log('products', products);
    // console.log('initialCart', initialCart);
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product._id !== id)
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product= {product}
                        handleRemoveItem = {handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items For Review <Link to = "/">Skop More</Link></h2>
                }
            </div>

            <div className="cart-container">
                <Cart 
                    clearCart = {clearCart}
                    cart={cart}>
                        <Link to= '/shipping'>
                            <button>Proceed Shipping</button>
                        </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;