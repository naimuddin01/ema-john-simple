import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const {cart, clearCart, children} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping;
    }
    // const tax = (total * 0.1).toFixed(2); //toFixed number ke string e kore fele
    const tax =parseFloat((total * 0.1).toFixed(2)); //parseFlote & parseInt = je string gulo number thake "553" tader ke number e kore fele 553
    const grandTotal = total + shipping + tax
    if(grandTotal > 0) {
        localStorage.setItem('total', grandTotal);
    }
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <button onClick={clearCart}>Clear cart</button>
            {children}
        </div>
    );
};

export default Cart;