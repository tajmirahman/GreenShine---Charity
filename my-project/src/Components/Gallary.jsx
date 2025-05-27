import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Gallary = () => {

    const categories=useLoaderData();


    return (
        <div className='my-6'>
            <div className='space-y-2'>
                <h1 className="text-2xl  text-center font-semibold">OUR <span className="text-[#00A9A5]">Gallery</span></h1>
                <div class="flex items-center justify-center w-1/6 mx-auto">
                    <div class="flex-grow h-px bg-gray-300"></div>
                    <div class="mx-4 border border-gray-300 p-1 rounded-sm">
                        <div class="w-1 h-1 border border-gray-400"></div>
                    </div>
                    <div class="flex-grow h-px bg-gray-300"></div>
                </div>
                <p className="w-3/6 text-center mx-auto">We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence.</p>
            </div>

            <div className='flex flex-row justify-center items-center gap-3 mt-6'>
                {
                    categories.map(category=> <Link to={`/category/${category.category}`}><button className='btn bg-[#00A9A5] text-white'>{category.category}</button></Link>)
                }
            </div>

            <Outlet></Outlet>

        </div>
    );
};

export default Gallary;