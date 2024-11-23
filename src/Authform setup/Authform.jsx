import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase setup/Firebase.init';

export const formContect = createContext(null)
const Authform = ({ children }) => {
   const [user,setuser] = useState(null)
   const [loader,setloader] = useState(true)
    // Create Account//
    const accountCreate = (email, password) => {
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login setup//
    const accountLogin = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // currently user chek//

     useEffect(() =>{
        const unsubscibe =   onAuthStateChanged(auth, (currentlyUser) => {
            console.log("user login");
            setuser(currentlyUser)
            setloader(false)
        });

        return() =>{
            unsubscibe()
            setuser(null)
            
        }
    
     },[])


    //  Logout Setup //

    const logOut = () =>{
        setloader(true)
        return signOut(auth)
         
    }

    const contextValue = {
        person: "Azmir Uddin",
        accountCreate,
        accountLogin,
        user,
        logOut,
        loader
    }
    return (
        <div>
            <formContect.Provider value={contextValue}>
                {children}
            </formContect.Provider>
        </div>
    );
};

export default Authform;