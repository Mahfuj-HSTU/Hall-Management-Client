import React, { useContext } from 'react';
import hstu from '../../../images/HSTU_Logo.png';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoPersonCircle } from 'react-icons/io5';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../Hooks/useServerLink';
import { useGetUserQuery } from '../../../features/api/userApi';
import Loading from '../Loading/Loading';

const HallHeader = ({ hall }) => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };

  const { data: notices = [] } = useQuery({
    queryKey: ['notices'],
    queryFn: () => fetch(`${ServerLink}/api/notice`).then((res) => res.json()),
  });

  const { data, isLoading, isError } = useGetUserQuery(user?.email);

  const filteredNotice = notices?.filter((item) => item.hall === hall?.name);

  // console.log(data);

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    return <div>Error fetching user data</div>;
  }

  const menuItems = (
    <>
      {' '}
      <li className='font-semibold'>
        <Link to={`/hall/${hall._id}`}>Home</Link>{' '}
      </li>
      <li className='font-semibold relative group'>
        <button tabIndex={1}>
          Hall Administration
          <RiArrowDropDownLine className='text-xl' />
        </button>
        <ul className='absolute hidden group-hover:block mt-9 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 divide-y divide-blue-300'>
          <li className='font-semibold'>
            <Link to='/hall'>Hall Super</Link>
          </li>
          <li className='font-semibold'>
            <Link to='/hall'>Assistant Hall Super</Link>
          </li>
        </ul>
      </li>
      {/* <li className='font-semibold'>
        <Link to={`/hall/${hall._id}/notice`}>Notice</Link>{' '}
      </li> */}
      <li className='font-semibold relative group'>
        <button tabIndex={1}>
          Notice
          <RiArrowDropDownLine className='text-xl' />
        </button>
        <ul className='absolute hidden group-hover:block mt-9 z-[1] menu p-2 shadow bg-base-100 rounded-box w-72 divide-y divide-blue-300'>
          {filteredNotice?.map((notice) => (
            <li className='collapse collapse-arrow bg-base-200'>
              <input
                type='radio'
                name='my-accordion-2'
                checked='checked'
              />
              <p className='collapse-title font-medium'>{notice?.title}</p>
              <p className='collapse-content'>
                {notice?.description.slice(0, 35)}
              </p>
            </li>
          ))}
        </ul>
      </li>
      <li className='font-semibold'>
        <Link to={`/hall/${hall._id}`}>Photo Gallery</Link>{' '}
      </li>
      <li className='font-semibold'>
        <Link to={`/hall/${hall._id}`}>Contact Us</Link>{' '}
      </li>
      {user?.email ? (
        <>
          <li className='font-semibold relative group'>
            <button tabIndex={1}>
              <IoPersonCircle className='text-2xl' />
            </button>
            <ul className='absolute lg:right-0 hidden group-hover:block mt-9 z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto divide-y divide-blue-300'>
              <li className='font-semibold'>
                <Link to={`/dashboard/${hall._id}/${data?.role}`}>
                  Dashboard
                </Link>
              </li>
              <li className='font-semibold'>
                <Link to=''>Notifications</Link>
              </li>
              <li className='font-semibold'>
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            </ul>
          </li>
        </>
      ) : (
        <li className='font-semibold'>
          <Link to={`/hall/${hall._id}/login`}>Login</Link>{' '}
        </li>
      )}
    </>
  );

  return (
    <div className='navbar h-16 bg-slate-300 mx-auto flex justify-between items-center z-20'>
      <div className='navbar-start lg:pl-5'>
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
      <div className='navbar-end flex justify-center'>
        <div className='hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
        </div>
      </div>
      <div className='navbar-end lg:hidden flex-row-reverse	md:flex-row'>
        <div className='dropdown relative'>
          <label
            tabIndex={1}
            className='btn btn-ghost lg:hidden absolute md:right-4 -right-32 -top-6 z-[1]'>
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
            tabIndex={1}
            className='menu menu-compact dropdown-content z-[1] p-2 shadow bg-slate-300 rounded-box w-52 absolute md:right-4 -right-32 left-auto top-2'>
            {menuItems}
          </ul>
        </div>
      </div>
      {/* <div className='navbar-end hidden lg:flex '>
        <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
      </div> */}
    </div>
  );
};

export default HallHeader;
