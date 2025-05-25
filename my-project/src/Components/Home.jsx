import React from 'react';
import Navber from './Navber';
import OurCauses from './OurCauses';
import HelpUs from './HelpUs';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            {/* Our causes */}
            <OurCauses></OurCauses>
            {/* help Us */}
            <HelpUs></HelpUs>
        </div>
    );
};

export default Home;