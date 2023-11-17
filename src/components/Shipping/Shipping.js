import React, { useContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import './Shipping.css'
import { AuthContext } from '../../contexts/UserContext';
import { getShoppingCart } from '../../utilities/fakedb';

const Shipping = () => {
    const {user} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.totalAmount = localStorage.getItem('total')
        data.email = user?.email
        const savedCart = getShoppingCart();
        data.productAll = savedCart;
        console.log('data', data)

        fetch (`http://localhost:5000/order`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            window.location.replace(data.url);
            console.log("data", data)
        })
        reset();
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input {...register("name", { required: true })} />
                {errors.name && <span className="error">This field is required</span>}

                <label>Phone Number</label>
                <input {...register("phoneNumber", { required: true })} />
                {errors.phoneNumber && <span className="error">This field is required</span>}

                <label>Address</label>
                <input {...register("adderss", { required: true })} />
                {errors.adderss && <span className="error">This field is required</span>}

                <label>Post Number</label>
                <input {...register("postNo", { required: true })} />
                {errors.postNo && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;