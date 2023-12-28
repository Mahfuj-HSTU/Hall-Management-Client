import React from 'react';
import banner from '../../../../images/hallbanner.jpg';

const HallBanner = () => {
  return (
    <div className='carousel w-full custom'>
      <div
        id='slide1'
        className='carousel-item relative w-full'>
        <img
          src={banner}
          alt=''
          data-bs-interval='true'
          className='rounded-xl h-auto w-full'
        />
        <div className='absolute transform top-2/3 left-16 text-center text-white bg-blue-900 bg-opacity-70 p-3'>
          <h1 className='text-lg md:text-2xl lg:text-4xl mb-3 font-semibold'>
            Welcome to HSTU website
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HallBanner;
