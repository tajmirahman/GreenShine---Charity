import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GalleryImg from './GalleryImg';

const GalleryData = () => {
    const data=useLoaderData();
    console.log(data);



    return (
        <div className='grid grid-cols-3 md:grid-cols-4 w-9/12 mx-auto gap-2 mt-6'>
            {
                data.slice(0,8).map(gallery=> <GalleryImg key={gallery.id} gallery={gallery}></GalleryImg>)
            }
        </div>
    );
};

export default GalleryData;