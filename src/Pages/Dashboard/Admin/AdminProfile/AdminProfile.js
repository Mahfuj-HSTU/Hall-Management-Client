import React, { useContext } from 'react';
import Profile from '../../Student/Profile/Profile';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

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
      {isLoading ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : (
        <div className=" flex flex-col text-center md:text-left  mt-8 md:mx-5    ">
          <div className="  shadow-inherit  bg-white drop-shadow-lg p-3 w-fit h-fit">
            <div class="avatar">
              <div class="w-48 rounded">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>{' '}
          <div className="  shadow-inherit rounded-t-none rounded-b-lg bg-white drop-shadow-lg p-3 w-full ">
            <h1>Professor Dr MD X</h1>
          </div>{' '}
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
