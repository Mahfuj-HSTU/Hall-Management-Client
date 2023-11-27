import React from 'react';
import hstu from '../../../images/HSTU_Logo.png';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoPersonCircle } from 'react-icons/io5';

const HallHeader = () => {
  const menuItems = (
    <>
      {' '}
      <li className='font-semibold'>
        <Link to=''>Home</Link>{' '}
      </li>
      <li className='font-semibold relative group'>
        <button tabIndex={1}>
          Hall Administration
          <RiArrowDropDownLine className='text-xl' />
        </button>
        <ul className='absolute hidden group-hover:block mt-9 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 divide-y divide-blue-300'>
          <li className='font-semibold'>
            <Link to=''>Hall Super</Link>
          </li>
          <li className='font-semibold'>
            <Link to=''>Assistant Hall Super</Link>
          </li>
        </ul>
      </li>
      <li className='font-semibold'>
        <Link to=''>Notice</Link>{' '}
      </li>
      <li className='font-semibold'>
        <Link to=''>Photo Gallery</Link>{' '}
      </li>
      <li className='font-semibold'>
        <Link to=''>Contact Us</Link>{' '}
      </li>
      <li className='font-semibold relative group'>
        <button tabIndex={1}>
          <IoPersonCircle className='text-2xl' />
        </button>
        <ul className='absolute lg:right-0 hidden group-hover:block mt-9 z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto divide-y divide-blue-300'>
          <li className='font-semibold'>
            <Link to=''>Profile</Link>
          </li>
          <li className='font-semibold'>
            <Link to=''>Notifications</Link>
          </li>
          <li className='font-semibold'>
            <Link to=''>Log Out</Link>
          </li>
        </ul>
      </li>
      {/* <li className='font-semibold'>
        <Link to=''>Login</Link>{' '}
      </li> */}
    </>
  );

  return (
    <div className='navbar h-16 bg-slate-300 mx-auto lg:px-16'>
      <div className='navbar-start flex-row-reverse	md:flex-row'>
        <div className='dropdown'>
          <label
            tabIndex={0}
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
          <u
            tabIndex={0}
            className='menu menu-compact dropdown-content p-2 shadow bg-base-500 rounded-box w-52'>
            {menuItems}
          </u>
        </div>
        <Link
          to='/'
          className='btn btn-ghost normal-case'>
          <img
            className='h-14'
            src={hstu}
            alt=''
            width='50px'
            height='50px'
          />
        </Link>
      </div>
      <div className='navbar-end hidden lg:flex '>
        <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
      </div>
    </div>
  );
};

export default HallHeader;
