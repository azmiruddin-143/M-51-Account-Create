import React, { useContext } from 'react';
import { formContect } from '../../Authform setup/Authform';
import { Navigate } from 'react-router-dom';

const Privet = ({children}) => {

    const {user,loader} = useContext(formContect)
     if(loader){
        return <span className="loading loading-spinner loading-lg"></span>
     }
    if(user){
        return children
    }
    
    return (
        <div>
             <Navigate to="/"></Navigate>
        </div>
    );
};

export default Privet;