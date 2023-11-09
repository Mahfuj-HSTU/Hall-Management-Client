import React from 'react';

const test = () => {
  const menuItems = (
    <>
      {' '}
      <li className='font-semibold'>
        <Link to='/'>Home</Link>{' '}
      </li>
      <li className='font-semibold dropdown dropdown-hover'>
        <button tabIndex={1}>
          Academic
          <RiArrowDropDownLine className='text-xl' />
        </button>
        <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li className='font-semibold'>
            <Link to=''>Faculties & Department</Link>
          </li>
          <li className='font-semibold'>
            <Link to=''>Exam Result</Link>
          </li>
        </ul>
      </li>
      {/* <li className='font-semibold dropdown dropdown-hover'>
        <label
          tabIndex={0}
          className='btn m-1'>
          Hover
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li>check</li>
        </ul>
      </li> */}
      <li className='font-semibold'>
        <Link to='/'>Admission</Link>{' '}
      </li>
      <li className='font-semibold  dropdown dropdown-hover'>
        <label tabIndex={0}>
          Research & Training
          <RiArrowDropDownLine className='text-xl' />
        </label>
        <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li className='font-semibold'>
            <Link to=''>Institute of Reasearch & Training</Link>
          </li>
        </ul>
      </li>
      <li className='font-semibold dropdown dropdown-hover'>
        <label tabIndex={0}>
          Student Affairs
          <RiArrowDropDownLine className='text-xl' />
        </label>
        <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li className='font-semibold'>
            <Link to=''>Proctor Office</Link>{' '}
          </li>
          <li className='font-semibold'>
            <Link to='/'>Physical Education</Link>{' '}
          </li>
          <li className='font-semibold'>
            <Link to='/halls'>Hall & Residence</Link>{' '}
          </li>
        </ul>
      </li>
      <li className='font-semibold'>
        <Link to='/'>Campus</Link>{' '}
      </li>
      <li className='font-semibold dropdown dropdown-hover'>
        <label tabIndex={0}>
          Notice Board
          <RiArrowDropDownLine className='text-xl' />
        </label>
        <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li className='font-semibold'>
            <Link to=''>All Notice</Link>
          </li>
        </ul>
      </li>
      <li className='font-semibold'>
        <Link to='/'>Contact Us</Link>{' '}
      </li>
    </>
  );
  return (
    <div>
      <div className='flex justify-evenly items-center'>
        <img
          className='h-32'
          src={hstu}
          alt='hstu logo'
        />{' '}
        <span>
          <h2 className='text-4xl font-semibold leading-relaxed	'>
            Hajje Mohammad Danesh Science and Technology University
          </h2>
          <h2 className='text-3xl font-semibold '>
            হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
          </h2>
        </span>
        <img
          className='h-32'
          src={MujibBorsho}
          alt='Mujib Borsho'
        />
      </div>
      <div className='navbar justify-center h-20 bg-slate-300 mx-auto'>
        <div className='navbar-start lg:hidden'>
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
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content p-2 shadow bg-base-500 rounded-box w-52'>
              {menuItems}
            </ul>
          </div>
          {/* <Link
          to='/'
          className='btn btn-ghost normal-case text-xl'>
          HSTU
        </Link> */}
        </div>
        <div className='navbar-center hidden lg:flex '>
          <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default test;