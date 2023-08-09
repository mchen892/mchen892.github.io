import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import linkedin from '../public/linkedin.png'
import github from '../public/github.png'

function FooterAll() {
    return (
        <footer className=" py-6 px-4 lg:px-10">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <h3 className="text-xl"><a href="mailto:sc2438@cornell.edu">Leave me a Message  💌 </a></h3>

                <div className="flex items-center space-x-4">
                    {/* LinkedIn icon */}
                    <a href="https://www.linkedin.com/in/mchen892/" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                    </a>

                    {/* GitHub icon */}
                    <a href="https://github.com/mchen892" target="_blank" rel="noopener noreferrer">
                        <Image src={github} alt="GitHub" className="w-6 h-6" />
                    </a>
                </div>
            </div>

            <div className="text-center mt-4">
                <a href="#top" className="text-sm text-gray-600 hover:text-gray-800">Back to Top</a>
            </div>
        </footer>
    )
}

export default FooterAll;