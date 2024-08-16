import React, { useContext } from 'react';
import Profile from './Profile';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import { useGetUserQuery } from '../../../../features/api/userApi';
import { useGetStudentDetailsQuery } from '../../../../features/api/studentApi';

const MyAccount = () => {
  const { user } = useContext(AuthContext);
  const {
    data: userData,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useGetUserQuery(user?.email);
  const {
    data: student,
    isLoading: studentIsLoading,
    isError: studentIsError,
    refetch,
  } = useGetStudentDetailsQuery(userData?.sid);

  if (userIsLoading || studentIsLoading) {
    <Loading />;
  }

  if (userIsError || studentIsError) {
    return <div>Error to fetching data.</div>;
  }

  if (!userData) {
    return <div>User not found.</div>;
  }

  if (!student) {
    return <div>Student not found.</div>;
  }
  return (
    <div>
      {studentIsLoading ? (
        <span className='loading loading-spinner text-primary'></span>
      ) : (
        <div className='mx-auto bg-cyan-200 rounded-lg my-3 max-w-[1100px] ml-3'>
          <div className='flex flex-col p-5'>
            <div className='flex bg-white items-center mt-16 rounded-lg'>
              <div className='m-5 bg-white shadow-lg rounded-lg -mt-10 md:mx-5 ml-3 mr-1'>
                <img
                  className='w-24 lg:w-40 h-28 lg:h-44 p-2 rounded-lg'
                  src={student?.img}
                  alt='user img'
                />
              </div>
              <div className='p-2 rounded-lg text-left -mt-4 pt-5 lg:pt-0'>
                <h1 className='md:text-3xl font-semibold'>
                  Name: {student?.name}
                </h1>
                <span>ID: {student?.sid}</span>
                <br />
                <span>
                  <p>Dept: {student?.dept} </p>
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
