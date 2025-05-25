import React from 'react';
import Navber from './Navber';
import OurCauses from './OurCauses';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            {/* Our causes */}
            <OurCauses></OurCauses>
        </div>
    );
};

export default Home;