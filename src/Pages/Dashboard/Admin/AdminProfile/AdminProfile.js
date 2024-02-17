import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import imageUrl from '../../../../images/avater.png';

const AdminProfile = () => {
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
      {/* {isLoading ? (
        <span className='loading loading-spinner text-primary'></span>
      ) : ( */}
      <div className=' flex flex-col text-center md:text-left  mt-8 md:mx-5    '>
        <div className='  shadow-inherit  bg-white drop-shadow-lg p-3 w-fit h-fit'>
          <div class='avatar'>
            <div class='w-48 rounded'>
              <img
                src={imageUrl}
                alt='admin'
              />
            </div>
          </div>
        </div>{' '}
        <div className='  shadow-inherit rounded-t-none rounded-b-lg bg-white drop-shadow-lg p-3 w-full '>
          <div className='space-y-6 font-semibold text-[30px'>
            <h1 className='font-bold text-[30px]'>Professor Dr MD Test</h1>
            <h1>Department of aaaaaaa</h1>
            <h1>Faculty of bbbbb</h1>
            <h1>Hajee Mohammad Danesh Science and Technology University</h1>
            <h1>Email: test@gmail.com</h1>
            <h1>Mobile: 07101544444444</h1>
          </div>
        </div>{' '}
      </div>
      {/* )} */}
    </div>
  );
};

export default AdminProfile;
