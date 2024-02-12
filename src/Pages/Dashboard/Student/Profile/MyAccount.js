import React, { useContext } from 'react';
import Profile from './Profile';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyAccount = () => {
  const { user } = useContext(AuthContext);
  const { data: us = {} } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      fetch(`${ServerLink}/api/users/${user?.email}`).then((res) => res.json()),
  });
  // console.log(us);

  const {
    data: student = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['student'],
    queryFn: () =>
      fetch(`${ServerLink}/api/students/${us?.sid}`).then((res) => res.json()),
  });
  // console.log(student);

  if (isLoading) {
    <Loading />;
    refetch();
  }

  return (
    <div>
      {isLoading ? (
        <span className='loading loading-spinner text-primary'></span>
      ) : (
        <div className='mx-auto bg-cyan-200 rounded-lg my-3 max-w-[1100px] ml-3'>
          <div className='flex flex-col p-5'>
            <div className='flex bg-white items-center mt-16 rounded-lg'>
              <div className='m-5 bg-white shadow-lg rounded-lg -mt-10'>
                <img
                  className='w-40 h-44 p-2 rounded-lg'
                  src={student.img}
                  alt='user img'
                />
              </div>
              <div className='p-2 rounded-lg text-left -mt-4'>
                <h1 className='text-3xl font-semibold'>Name: {student.name}</h1>
                <span>ID: {student.sid}</span>
                <br />
                <span>
                  <p>Dept: {student.dept} </p>
                </span>
              </div>
            </div>
            {/* profile section  */}

            <div className='flex flex-col md:flex-row justify-start mt-5 bg-white rounded-lg'>
              <Profile
                student={student}
                refetch={refetch}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
