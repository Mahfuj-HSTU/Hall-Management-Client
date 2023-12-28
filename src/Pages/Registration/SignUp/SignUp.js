import React from 'react';
import signup from '../../../images/login1.jpg';
import { BsSendCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url(${signup})`,
      }}>
      <div className='hero-overlay bg-opacity-30'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-sm'>
          <form className='bg-gray-100 bg-opacity-80 pt-5 pb-12 rounded-xl text-black'>
            <h1 className='mb-5 text-4xl font-bold py-2 text-blue-800'>
              Sign Up
            </h1>
            <input
              type='number'
              name='sid'
              placeholder='Student ID'
              className='input input-bordered w-full max-w-xs mb-5'
            />
            <input
              type='text'
              name='hname'
              placeholder='Hall Name'
              className='input input-bordered w-full max-w-xs mb-5'
            />
            <input
              type='email'
              name='email'
              placeholder='test@gmail.com'
              className='input input-bordered w-full max-w-xs mb-5'
            />

            <input
              type='password'
              name='password'
              placeholder='password'
              className='input input-bordered w-full max-w-xs mb-5'
            />

            <label className='relative'>
              <BsSendCheckFill className='pointer-events-none w-4 h-5 text-green-800 absolute right-28 mt-4' />
              <input
                type='submit'
                placeholder='test@gmail.com'
                className='bg-teal-300 cursor-pointer font-semibold input input-bordered w-full max-w-xs mb-2'
              />
            </label>
            <p className='pt-2'>
              Already have an accoung?{' '}
              <Link
                to='/login'
                className='link link-primary'>
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
