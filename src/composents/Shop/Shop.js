import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const first10 = fakeData.slice(0, 15); 

    const [products, setProducts] = useState(first10)
    console.log("Data", first10)

    const [cart, setcart] = useState([])

    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct){
            count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]

        }
        else{

            product.quantity = 1;
            newCart = [...cart, product]
        }

        console.log('product add', product)

        setcart(newCart);

        //eountyti kaj er jon
        // const sameProduct = newCart.filter(pd => pd.key === product.key)
        // const count = sameProduct.length;
        
        addToDatabaseCart(product.key, count)
    } 

    return (
        <div className='twin-container'>
            <h3>{products.length}</h3>

            <div className="product-container">
                
                    {
                        products.map(pd => <Product
                             key = {pd.key}
                             showAddToCart = {true}
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