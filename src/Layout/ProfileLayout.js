import React from 'react';
import hstu from '../images/HSTU_Logo.png';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const ProfileLayout = () => {
  const hall = useLoaderData();
  return (
    <div>
      <div className='drawer drawer-mobile lg:drawer-open'>
        <input
          id='my-drawer-2'
          type='checkbox'
          className='drawer-toggle'
        />
        <label
          htmlFor='my-drawer-2'
          className='btn btn-ghost lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </label>
        <div className='drawer-content'>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
            {/* Sidebar content here */}
            <Link
              to={`/hall/${hall._id}`}
              className='flex justify-center normal-case mb-5'>
              <img
                className='h-14'
                src={hstu}
                alt=''
                width='50px'
                height='50px'
              />
            </Link>
            <li className='font-semibold'>
              <Link to={`/dashboard/${hall._id}/profile`}>Profile</Link>{' '}
            </li>
            <li className='font-semibold'>
              <Link to={`/dashboard/${hall._id}/applicatoin`}>
                Applications
              </Link>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
