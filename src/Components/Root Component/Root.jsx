import React from 'react';
import Home from '../Home Page/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer component/Footer';

const Root = () => {
    return (
        <div>
             <Home></Home>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;