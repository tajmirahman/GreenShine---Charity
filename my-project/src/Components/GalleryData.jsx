import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import GalleryImg from './GalleryImg';

const GalleryData = () => {
    const data=useLoaderData();
    // console.log(data);
    const {category}=useParams();
    // console.log(category);

    const [galleryCard,setGalleryCard]=useState([]);

    useEffect(()=>{
        if(category){
            const categoryFilter=[...data].filter(d=>d.category === category);
        setGalleryCard(categoryFilter)
        }
        else{
            setGalleryCard(data)
        }
    },[category, data])



    return (
        <div className='grid grid-cols-3 md:grid-cols-4 w-9/12 mx-auto gap-2 mt-6'>
            {
                galleryCard.slice(0,8).map(gallery=> <GalleryImg key={gallery.id} gallery={gallery}></GalleryImg>)
            }
        </div>
    );
};

export default GalleryData;