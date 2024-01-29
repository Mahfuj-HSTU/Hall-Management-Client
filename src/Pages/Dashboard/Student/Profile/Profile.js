import React from 'react';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className='flex-col flex gap-5 text-center md:text-left w-full mt-2 md:mx-5 pb-5 '>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold'>Profile</h1>
        <div>
          <label
            htmlFor='details-modal'
            className='text-lg cursor-pointer'>
            <FaEdit></FaEdit>
          </label>
        </div>
      </div>
      <form className='mx-auto w-[90%]'>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='bg-gray-100 px-2 py-5 rounded-lg w-[92%]'>
            <p className='pl-2 mb-1'>Name: </p>
            <input
              required
              type='text'
              name='name'
              placeholder='Your name'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Student ID: </p>
            <input
              required
              type='number'
              name='sid'
              placeholder='student id'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Department </p>
            <input
              required
              type='text'
              name='dept'
              placeholder='ex: cse'
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>

          <div className='bg-gray-100 px-2 py-5 rounded-lg w-[92%]'>
            <p className='pl-2 mb-1'>Email </p>
            <input
              required
              type='email'
              name='email'
              placeholder='ex: test@gmail.com'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Mobile </p>
            <input
              required
              type='number'
              name='mobile'
              placeholder='ex: 01XXXXXX'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Blood Group </p>
            <input
              required
              type='text'
              name='blood'
              placeholder='B+'
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>
        </div>{' '}
        <br />
        <div className='flex flex-col md:flex-row gap-5 '>
          <div className='bg-gray-100 px-2 py-5 rounded-lg w-[92%]'>
            <p className='pl-2 mb-1'>Father Name </p>
            <input
              required
              type='text'
              name='fname'
              placeholder='Father name'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Father Mobile </p>
            <input
              required
              type='number'
              name='fmobile'
              placeholder='ex: 01XXXXXX'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Mother Name </p>
            <input
              required
              type='text'
              name='mname'
              placeholder='Mother name'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Mother Mobile </p>
            <input
              required
              type='number'
              name='mmobile'
              placeholder='ex: 01XXXXXX'
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>

          <div className='bg-gray-100 px-2 py-5 rounded-lg w-[92%]'>
            <p className='pl-2 mb-1'>Present Address </p>
            <input
              required
              type='text'
              name='present'
              placeholder=''
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Parmanent Address </p>
            <input
              required
              type='text'
              name='parmanent'
              placeholder=''
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>National ID / Birth Certificate No </p>
            <input
              required
              type='number'
              name='nid'
              placeholder='National ID / Birth Certificate No'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Photo </p>
            <input
              required
              type='file'
              name='img'
              placeholder='National ID / Birth Certificate No'
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>
        </div>
        <div className='text-center mt-5'>
          <input
            type='submit'
            value='SAVE'
            className='btn btn-success font-semibold input input-bordered px-12'
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
