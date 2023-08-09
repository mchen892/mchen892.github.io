import React from 'react';
import Image from 'next/image';

function ProjectTemp({ img, altmessage, title, caption }) {
    return (
        <div className='w-80 h-96 mb-8 bg-light-purp mx-5'>
            <Image className='pr-2 mx-auto w-80 lg:flex-col' src={img} alt={altmessage} />
            <h2 className=' text-center'>{title}</h2>
            <p>{caption}</p>
        </div>
    )
};

export default ProjectTemp;