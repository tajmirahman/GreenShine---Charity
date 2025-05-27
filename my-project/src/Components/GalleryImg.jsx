import React from 'react';

const GalleryImg = ({gallery}) => {
    // console.log(gallery)
    return (
        <div >
            <img className='w-full h-full object-cover' src={gallery.image} alt="" />
        </div>
    );
};

export default GalleryImg;