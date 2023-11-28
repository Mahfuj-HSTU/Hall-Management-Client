import React from 'react';

const Students = () => {
  return (
    <div>
      {' '}
      <div
        data-aos='fade-up'
        className='my-16'>
        <div className=' bg-gradient-to-b from-slate-700 to-slate-600 h-full lg:h-96 w-full bg-cover bg-center relative'>
          <img
            src='https://web.protildo.com/wp-content/uploads/elementor/thumbs/Background-Verification-Process-in-MNCs-pkhfove0iprn15hkdvkd47nc3lxv2u4afg54pczxbk.jpeg'
            alt=''
            className=' w-full h-full object-cover absolute mix-blend-overlay'
          />
          <div
            data-aos='fade-up'
            className='p-12 '>
            <h2 className='uppercase text-4xl font-bold text-base-200 mb-10 stroke-stone-950'>
              At a Glance
            </h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 justify-items-center lg:px-0 px-4'>
              <div
                data-aos='fade-up'
                className='card grid lg:w-[300px] w-[350px] text-white mb-3'>
                <div className='card-body items-center'>
                  <h1 className=' card-title text-7xl'>12</h1>
                  <h2 className=' text-xl'>Total Atached Students</h2>
                </div>
              </div>
              <div
                data-aos='fade-up'
                className='card lg:w-[300px] w-[350px] text-white mb-3'>
                <div className='card-body items-center'>
                  <h1 className=' card-title text-7xl'>12</h1>
                  <h2 className=' text-xl'>Total Seat Capacity</h2>
                </div>
              </div>
              <div
                data-aos='fade-up'
                className='card lg:w-[300px] w-[350px] text-white mb-3'>
                <div className='card-body items-center'>
                  <h1 className=' card-title text-7xl'>12</h1>
                  <h2 className=' text-xl'>Total appearing students </h2>
                </div>
              </div>
              <div
                data-aos='fade-up'
                className='card lg:w-[300px] w-[350px] text-white mb-1 lg:mb-3'>
                <div className='card-body items-center'>
                  <h1 className=' card-title text-7xl'>0</h1>
                  <h2 className=' text-xl'>Available Seat</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
