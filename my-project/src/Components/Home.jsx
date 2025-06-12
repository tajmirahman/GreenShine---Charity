import React from 'react';
import Navber from './Navber';
import OurCauses from './OurCauses';
import HelpUs from './HelpUs';
import { Outlet } from 'react-router-dom';
import Volunteers from './Volunteers';


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            {/* Our causes */}
            <OurCauses></OurCauses>
            {/* help Us */}
            <HelpUs></HelpUs>
            <Outlet></Outlet>
            <Volunteers></Volunteers>
            
        </div>
    );
};

export default Home;