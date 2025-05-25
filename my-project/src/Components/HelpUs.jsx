import React from 'react';

const HelpUs = () => {
    return (
        <div className='my-8 bg-black text-white'>
            <div className='text-center mb-3'>
                <h1 >HOW CAN YOU HELP US?</h1>
            <p className='w-4/6 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet interdum erat, a pulvinar nibh sodales ac. </p>
            </div>
            <div className='flex justify-center items-center w-4/6 mx-auto'>
                <div>
                    <h1>Donator</h1>
                <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                <button>Learn more</button>
                </div>
                <div>
                    <h1>Funrising</h1>
                <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                <button>Learn more</button>
                </div>
                <div>
                    <h1>Volunteer</h1>
                <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                <button>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default HelpUs;