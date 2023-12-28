import React from 'react';
import login from '../../../images/login.jpg';
import { MdMarkEmailRead, MdLock } from 'react-icons/md';
import { BsSendCheckFill } from 'react-icons/bs';

const Login = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url(${login})`,
      }}>
      <div className='hero-overlay bg-opacity-30'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-[360px]'>
          <form className='bg-indigo-300 bg-opacity-70 pt-5 pb-14 rounded-lg text-black'>
            <h1 className='mb-5 text-4xl font-bold py-2 text-blue-800'>
              LOGIN
            </h1>
            <label
              htmlFor='email'
              className='relative '>
              <MdMarkEmailRead className='pointer-events-none w-5 h-5 text-green-600 absolute top-1/2 transform -translate-y-1/2 right-3' />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='test@gmail.com'
                className='input input-bordered w-full max-w-xs mb-7'
              />
            </label>

            <label
              htmlFor='password'
              className='relative'>
              <MdLock className='pointer-events-none w-5 h-5 text-green-600 absolute mt-4 right-3' />
              <input
                type='password'
                name='password'
                id='password'
                placeholder='password'
                className='input input-bordered w-full max-w-xs mb-7'
              />
            </label>

            <label className='relative'>
              <BsSendCheckFill className='pointer-events-none w-4 h-5 text-green-600 absolute right-28 mt-4' />
              <input
                type='submit'
                placeholder='test@gmail.com'
                className='cursor-pointer font-semibold input input-bordered w-full max-w-xs mb-2'
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
