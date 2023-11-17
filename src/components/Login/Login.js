import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate(); //useNavigate ta use korar karon, jothy kno kaj er por amder oi page thake onno page e auto jayo lage tahole useNavigate use kori
    const location = useLocation();//user er current location janar jonno
    const from = location.state?.from?.pathname || '/' //private router er vitore jothy (state?.from?.pathname) er mann thake, mane private route er vitore je component ase tar vitore thake user tahole login er por sei location e jabe r jothy na thake tahole home page e jabe

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target; 
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            // navigate('/')
            navigate(from, {replace: true});// login er por auto current page e ba home page e nibe
        })
        .catch(error => console.log(error));

        

    };
    return (
        <div className='from-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login"/>
            </form>
            <p>New to ema john <Link to='/signup'>Create a new Account</Link></p>
        </div>
    );
};

export default Login;