import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);//
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);//sigin loading disi tar kaon amra promise ta pathanor age loding set kortece, karon promise ta pathano r asar modde js onno kno rout e jasse na,kintu promise ta asar por auth er state change hosse sathe  niche useEffect er vitore user state o change hosse tokhon loader false kore disce 
        //eita baire thake call kortece kintu eita event tregar er maddome hosse
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //amra amader control er bire thake kisu call korbo tai, r eita kno event tregar er maddome hosse na, nije nije hobe. sei jonno useEffect er vitore disce
    useEffect(() => { //useEffect ta use use korar karon user ase ki nai seta dekhar jonno
        //onAuthStateChanged() er maddome amra user er state ta bujte pari je user ase ki na
        //onAuthStateChanged() use korle unSubscribe diye abar call korte hoy 
        
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside state change', currentUser);
            setUser(currentUser);
            // lodar use korar karon, (onAuthStateChanged) eita promise pathay firebase ke je user ta ase kina tar database
            //loder ta na dile promise asar age js onno route e chole jabe tohon user state e value null hobe r sei jonno parivate page gulo user ke ber kore login page e niye jabe, jekhane user login ase already
            //sei jonno promise ta asa porjonto js loding ta dekhabe, r promise asar por onno kaj e jabe  
            setLoading(false);//amra bydefelt loading er maan true kore disilam, r ei khane user asar por loading ke false kore disi , karon loading ta dorkar hosse ta karon uporer promise ta chole asse
        });
        //useEffect return korte pare r amra jokhon unSubscribe ke call korbo tokhon onAuthStateChanged ke detach kore fele
        return () => unSubscribe();
    }, [])

    const authInfo = {user, loading, createUser, signIn, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;