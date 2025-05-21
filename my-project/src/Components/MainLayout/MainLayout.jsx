import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;