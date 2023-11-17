import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {addToDb, deleteShoppingCart, getShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    // eki kaj
    //step 1
    // useLoaderData hook er maddome amra, app.js er modde, route er vitore, loder er vitore fetch kora data seta ke pasce
    // const {products, count} = useLoaderData() //amra jokhon data fetch kortece tokhon data ta ekta Object er vitore 'products' property naam er vitore ase = tai const {products} = useLoaderData()  kore racktece &&  And data fatch korte Products&CartLoader er modde 
    // console.log("count", count);
    //step 2
    //amra useEffect er maddome data take fatch korcelam kore, products state e rackcelam
    // const [products, setProducts] = useState([]);
    // useEffect( () => {
    //     fetch('products.json') //public folder e json file ta ase tai direct neyo gese
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data);
    //         setProducts(data)})
    // },[]);
    
    //pagination er jonno
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0); 
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
 
    const pages = Math.ceil(count / size) ;

    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCount(data.count);
            setProducts(data.products);
        })
    }, [page, size])
    //end pagination er jonno

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    //jehetu amara data nisce amader code er baire thake se jonno amader useEffect bebohar korte hobe
    useEffect(() => {
        const storedCart = getShoppingCart(); //localstore thake data nisce
        // console.log(storedCart);
        const saveCart = [];

        //paginagin thakta sotte o cart er data thik rakhar jonno
        const ids = Object.keys(storedCart);
        console.log(ids); //eikhane sob gulo id ekta array er modde pabo
        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)

        })
        .then(res => res.json())
        .then(data => {
            for(const id in storedCart) { //object ke loop korar jonno for in use kori
                    const addedProduct = data.find(product => product._id === id);
                    if(addedProduct){
                        // console.log(addedProduct);
                        const quantity = storedCart[id]
                        // console.log(quantity);
                        addedProduct.quantity = quantity;
                        saveCart.push(addedProduct);
                    }
                }
                setCart(saveCart);

        })
        //end paginagin thakta sotte o cart er data thik rakhar jonno

        //paginagin na thakta cart er data dekhanor jonno
        // for(const id in storedCart) { //object ke loop korar jonno for in use kori
        //     /*
        //     puro code ta jokhon run hobe tokhon uporer useEffect ta ei useEffect 2tai eksathe run hoy
        //     prothom bar ei useEffect kno data pay na
        //     tai dependency add korce jate uporer products ta change hole ei useEffect ta call hoy
        //     products ta dependency korce tar karon amra products useState thake find korbo
        //     */
        //     const addedProduct = products.find(product => product._id === id);
        //     if(addedProduct){
        //         // console.log(addedProduct);
        //         const quantity = storedCart[id]
        //         // console.log(quantity);
        //         addedProduct.quantity = quantity;
        //         saveCart.push(addedProduct);
        //     }
        // }
        // setCart(saveCart);
        //paginagin na thakta cart er data dekhanor jonno
    },[products]) //products state jotobar change hobe toto bar useEffect call hobe

    const handleAddToCart = (selectedProduct) => {
        console.log("selectedProduct",selectedProduct)
        // cart.push(product);  //this is a bad way for inside eliment in array
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        console.log("exists", exists)
        console.log(selectedProduct.CartId)
        //ami jothy prothom e product ke click kori thole seta cart component e dekhay na , website ta load dile tokhon dehay
        //tar karon holo click korle db te add hosse kintu product er vitore quantity ta add hosse na karon amra quantity add korce uporer useeffect er vitor 
        //r click korle amader useeffect ta run hoy na r default vabe amra product er quantity ta 0 disi
        //tai amader notun kore cart State e mann bosate hoy sei jonno newcart state set kortece 
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        // jothy 2nd bar kno product add kori tahole tar quantity barasce
        //r seta ke setCart state set kortece
        else{
            const rest= cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];

        }
        setCart(newCart)
        //kno product click korle tar quantity BA notun product localDB te add korar jonno AddtoDB ke call kortece
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                            key={product._id}
                            product= {product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    clearCart ={clearCart}>
                    {/* component er pet er vitore thakle seta ke amra 
                        ekta bydefalt special props hisebe pai seta holo children
                    */}
                    <Link to="/orders">
                        <button>Review Order</button>    
                    </Link>
                </Cart>
            </div>
            <div className="pagination">
                <p>Current Selected page: {page} and Size: {size}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page === number ? 'selected' : ''}
                        onClick={() => setPage(number)} //amra click er maddome ekta value set korbo sei jonno '==>' disi
                    >
                        {number}
                    </button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

            </div>
        </div>
    );
};

export default Shop;