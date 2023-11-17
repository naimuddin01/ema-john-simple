import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();// location er maddome use er current page konta te ase jeta jana jabe. eita react router er ekta hook.
    
    //eikhane loading ta check kortece, loading thakle niche jabe na.
    //user er promise ta asar por, loading ke flase kore disi(promise ta holo user ase kina  seta check kora ta)
    if(loading){
        return <div>Loading.....</div>
    }
    
    //ekta component e jayor age jothy tar login thaka lage tahole, r jothy login na thake tahole take login page e niye jabe
    if (user && user.uid){
        return children
    }
    
    //ptoblem hosse login hole home page e chole jasse tar current page e thaktese na, karon login hole amra take direct home page e pathaye disce
    // return <Navigate to='/login'></Navigate>

    //problem solve korar jonno
    return <Navigate to='/login' state= {{from: location}} replace></Navigate>
    
    //ekta component e jayor age jothy tar login thaka lage tahole r jothy login na thake tahole take login page e niye jabe
};

export default PrivateRoute;