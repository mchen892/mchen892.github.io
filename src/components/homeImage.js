import React, { useState } from 'react';
import Image from 'next/image';

function HomeImages({ img, img2, img3, altmessage, altmessage2, altmessage3, title }) {
    return (
        <>
            <div className=''>
                <div className='flex flex-row'>
                    <Image className='p-2 rounded-md' src={img} alt={altmessage} />
                    <Image className='p-2 rounded-md' src={img2} alt={altmessage2} />
                    <Image className='p-2 rounded-md' src={img3} alt={altmessage3} />
                </div>

                <h2 className='ml-2 mb-10'> {title}</h2>
            </div>
        </>
    )
};

export default HomeImages;