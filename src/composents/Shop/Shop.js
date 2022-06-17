import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const first10 = fakeData.slice(0, 10); 

    const [products, setProducts] = useState(first10)
    console.log("Data", first10)

    const [cart, setcart] = useState([])

    const handleAddProduct = (products) =>{
        console.log('product add', products)
        const newCart = [...cart,products]
        setcart(newCart);
    } 

    return (
        <div className='shop-container'>
            <h3>{products.length}</h3>

            <div className="product-container">
                    {
                        products.map(pd => <Product

                             handleAddProduct = {handleAddProduct}
                             product = {pd}>
                             console.log("product",product);
                             
                            </Product>)  
                    }
                    
            </div>

            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;