import React from 'react';
import Profile from './Profile';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../../Hooks/useServerLink';

const MyAccount = () => {
  const { data: student = [] } = useQuery({
    queryKey: ['students'],
    queryFn: () =>
      fetch(`${ServerLink}/api/students`).then((res) => res.json()),
  });

  console.log(student);
  return (
    <div className='mx-auto bg-cyan-100 rounded-lg my-3 max-w-[1100px] ml-3'>
      <div className='flex flex-col p-5'>
        <div className='flex bg-white items-center mt-16 rounded-lg'>
          <div className='m-5 bg-white shadow-lg rounded-lg -mt-10'>
            <img
              className='w-40 h-44 p-2 rounded-lg'
              src=''
              alt='user img'
            />
          </div>
          <div className='p-2 rounded-lg text-left -mt-4'>
            <h1 className='text-3xl font-bold'>Name: </h1>
            <span>ID: </span>
            <br />
            <span>
              <p>Dept: </p>
            </span>
          </div>
        </div>
        {/* profile section  */}
        <div className='flex flex-col md:flex-row justify-start mt-5 bg-white rounded-lg'>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
