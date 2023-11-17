import React from 'react';
import { useParams } from 'react-router-dom';
import { deleteShoppingCart } from '../../utilities/fakedb';

const PaymentSuccess = () => {
    const {tranId} = useParams();
    if(tranId){
        deleteShoppingCart();
    }
    return (
        <div>
            <h1>Payment Success: {tranId}</h1>
        </div>
    );
};

export default PaymentSuccess;