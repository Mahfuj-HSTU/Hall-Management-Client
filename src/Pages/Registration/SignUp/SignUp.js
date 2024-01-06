import React from 'react';
import signup from '../../../images/login1.jpg';
import { BsSendCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const sid = form.sid.value;
    const hall = form.hall.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = { sid, hall, email, password };
    console.log(data);
  };

  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url(${signup})`,
      }}>
      <div className='hero-overlay bg-opacity-30'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-sm'>
          <form
            onSubmit={handleSubmit}
            className='bg-gray-100 bg-opacity-80 pt-5 pb-12 rounded-xl text-black relative'>
            <span className='text-start absolute top-4 left-2 '>
              <Link
                to='/'
                className=''>
                <IoArrowBackCircleOutline className='text-2xl ml-2 btn btn-circle btn-sm btn-outline border-none btn-primary' />
              </Link>
            </span>
            <h1 className='mb-5 text-4xl font-bold py-2 text-blue-800'>
              Sign Up
            </h1>
            <input
              type='number'
              name='sid'
              placeholder='Student ID'
              className='input input-bordered w-full max-w-xs mb-5'
            />
            <select
              name='hall'
              className='select select-bordered w-full max-w-xs mb-5'>
              <option
                disabled
                selected>
                Choose your hall
              </option>
              <option>Bangabandhu Sheikh Mujibur Rahman Hall</option>
              <option>Dormitory-2</option>
              <option>Tajuddin Ahmad Hall</option>
              <option>Sheikh Russel Hall</option>
              <option>Ivy Rahman Hall</option>
              <option>Bangamata Sheikh Fazilatunnesa Mujib Hall</option>
              <option>Kobi Sufia Kamal Hall</option>
              <option>New Ladies Hall</option>
              <option>International Hall</option>
            </select>
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
                className='bg-teal-300 cursor-pointer font-semibold input input-bordered w-full max-w-xs mb-2'
              />
            </label>
            <p className='pt-2'>
              Already have an accoung?{' '}
              <Link
                to='/login'
                className='link link-primary font-semibold'>
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
