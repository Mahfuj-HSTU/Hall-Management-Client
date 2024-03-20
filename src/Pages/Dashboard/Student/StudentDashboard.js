import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { useGetUserQuery } from '../../../features/api/userApi';
import { useGetStudentDetailsQuery } from '../../../features/api/studentApi';

const StudentDashboard = () => {
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
        <div className=' flex flex-col text-center md:text-left  mt-2 md:mx-5 bg-gray-100   '>
          <div className='w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3 text-center items-center justify-center'>
            <div class='avatar'>
              <div class='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img
                  src={student.img}
                  alt='profile'
                />
              </div>
            </div>
            <h1 className='text-3xl font-semibold'>{student.name}</h1>
            <span>ID: {student.sid}</span>
            <br />
            <span>
              <p>{student.dept} </p>
            </span>
          </div>{' '}
          <div className='flex flex-row md:flex-row  gap-5 p-5'>
            <div className='w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
              <h2 className='text-2xl font-semibold'>Contacts</h2>
              <p>Mobile: {student.mobile}</p>
              <p>Email : {student.email}</p>
            </div>
            <div className='w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
              <h2 className='text-2xl font-semibold'>Address</h2>
              <p>Present address : {student.present}</p>
              <p>Parmanent address : {student.parmanent}</p>
            </div>
          </div>
          <div className='flex flex-row md:flex-row  gap-5 p-5'>
            <div className='w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
              <h2 className='text-2xl font-semibold'>Applications</h2>
              {/* <p>Applied for {application.type} </p> */}
            </div>{' '}
            <div className='w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
              <h2 className='text-2xl font-semibold'>Notifications</h2>
              {/* <p>Applied for {application.type} </p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
