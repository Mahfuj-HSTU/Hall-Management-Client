import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-slate-900 text-white text-center py-10'>
            <h3 className='text-3xl mb-2'>&copy;Mahfujur Rahman</h3>
            <p className=''>Frontend Developer</p>
            <div className='flex justify-center text-2xl '>
                <FaFacebook className='mx-3 mt-4 cursor-pointer'></FaFacebook>
                <FaWhatsapp className='mx-3 mt-4 cursor-pointer'></FaWhatsapp>
                <FaLinkedin className='mx-3 mt-4 cursor-pointer'></FaLinkedin>
            </div>
        </div>
    );
};

export default Footer;
