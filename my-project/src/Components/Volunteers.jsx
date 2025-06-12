import React from 'react';

const Volunteers = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-semibold uppercase'>Our <span className="text-[#00A9A5]">Volunteers</span> </h1>
            <div class="flex items-center justify-center w-1/6 mx-auto">
                    <div class="flex-grow h-px bg-gray-300"></div>
                    <div class="mx-4 border border-gray-300 p-1 rounded-sm">
                        <div class="w-1 h-1 border border-gray-400"></div>
                    </div>
                    <div class="flex-grow h-px bg-gray-300"></div>
                </div>
            <p className='w-3/6 text-center mx-auto'>
                We create events aiming to pear to the voice for children and gather for support.
                Please update with our events and confirm you presence.
            </p>

            <div>
                <div className="card">
                    <div className="card-body">
                        <img src="" alt="" />
                        <div>
                            <h1></h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteers;