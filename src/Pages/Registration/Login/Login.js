import React from 'react';
import login from '../../../images/login.jpg';
import { MdMarkEmailRead, MdLock } from 'react-icons/md';
import { BsSendCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
          <form className='bg-indigo-400 bg-opacity-80 pt-5 pb-14 rounded-xl text-black'>
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
                className='input input-bordered w-full max-w-xs'
              />
              <p className='pb-2 text-start pl-6 text-sm font-semibold'>
                <Link
                  to='/'
                  className='link mb-7'>
                  Forgot password?
                </Link>
              </p>
            </label>

            <label className='relative'>
              <BsSendCheckFill className='pointer-events-none w-4 h-4 text-green-800 absolute top-1/2 transform -translate-y-1/2 right-28' />
              <input
                type='submit'
                className='bg-teal-300 cursor-pointer font-semibold input input-bordered w-full max-w-xs mb-2'
              />
            </label>
            <p className='pt-2 font-semibold'>
              New to website?{' '}
              <Link
                to='/signup'
                className='link link-neutral'>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
