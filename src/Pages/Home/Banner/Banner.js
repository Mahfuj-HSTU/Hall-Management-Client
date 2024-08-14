import React from 'react';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
// import banner3 from '../../../images/banner2.jpg';
// import './banner.css';

const Banner = () => {
  return (
    <div className='carousel w-full custom'>
      <div
        id='slide1'
        className='carousel-item relative w-full'>
        <img
          src={banner1}
          alt=''
          data-bs-interval='true'
          className='rounded-xl h-auto'
        />
        <div className='absolute transform top-2/3 left-16 text-center text-white bg-blue-900 bg-opacity-70 p-3'>
          <h1 className='text-lg md:text-2xl lg:text-4xl mb-3 font-semibold'>
            Welcome to HSTU website
          </h1>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a
            href='#slide2'
            className='btn btn-accent mr-5'>
            ❮
          </a>
          <a
            href='#slide2'
            className='btn btn-accent'>
            ❯
          </a>
        </div>
      </div>

      <div
        id='slide2'
        className='carousel-item relative w-full'>
        <img
          src={banner2}
          alt=''
          data-bs-interval='true'
          className='w-full rounded-xl'
        />
        <div className='absolute transform top-2/3 left-16 text-center text-white bg-blue-900 bg-opacity-70 p-3'>
          <h1 className='text-lg md:text-2xl lg:text-4xl mb-3 font-semibold'>
            University Day 2023
          </h1>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a
            href='#slide1'
            className='btn btn-accent mr-5'>
            ❮
          </a>
          <a
            href='#slide1'
            className='btn btn-accent'>
            ❯
          </a>
        </div>
      </div>

      {/* <div
        id='slide3'
        className='carousel-item relative w-full'>
        <img
          src={banner3}
          alt=''
          className='w-full rounded-xl'
        />
        <div className='absolute transform top-1/2 left-16 text-start text-white bg-blue-900 bg-opacity-70 p-3'>
          <h1 className='text-lg md:text-2xl lg:text-4xl mb-3 font-semibold'>
            জাতির পিতার প্রতিকৃতিতে <br /> হাবিপ্রবির উপাচার্যের শ্রদ্ধা নিবেদন
          </h1>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a
            href='#slide2'
            className='btn btn-accent mr-5'>
            ❮
          </a>
          <a
            href='#slide1'
            className='btn btn-accent'>
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
