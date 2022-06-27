import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';



const Shop = () => {
    
    const first10 = fakeData.slice(0, 15); 

    const [products, setProducts] = useState(first10)
    // console.log("Data", first10)

    const [cart, setcart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productsKeys = Object.keys(savedCart)
        const previousCart = productsKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey]
            // console.log("getValue "+existingKey, savedCart[existingKey]);
            return product;
        })

        console.log(savedCart)
        console.log(productsKeys)
        setcart(previousCart)
    },[])

    const handleAddProduct = (product) =>{

        console.log("cart handel", product)
        const toBeAddedKey = product.key;

        console.log("handle cart",cart)
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        
        let count = 1;
        let newCart;
        if (sameProduct){
            count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
            console.log("if newCart",newCart)

        }
        else{

            product.quantity = 1;
            newCart = [...cart, product]
            console.log(" else newCart",newCart)
        }

        console.log('product add', product)

        setcart(newCart);

        //quentity kaj er jon
        // const sameProduct = newCart.filter(pd => pd.key === product.key)
        // const count = sameProduct.length;
        
        addToDatabaseCart(product.key, count) //productkey & quentity
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
                <Cart cart = {cart}>
                    <Link to="/review">
                        <button className='main-button'>Review Button</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;