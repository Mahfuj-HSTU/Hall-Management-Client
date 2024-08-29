import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { useGetUserQuery } from '../../../features/api/userApi';
import { useGetStudentDetailsQuery } from '../../../features/api/studentApi';
import { useGetApplicationQuery } from '../../../features/api/applicationApi';

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const {
    data: userData,
    isLoading: userIsLoading,
    isError: userIsError,
    isFetching: userIsFetching,
  } = useGetUserQuery(user?.email);
  const {
    data: student,
    isLoading: studentIsLoading,
    isError: studentIsError,
    isFetching: studentIsFetching,
  } = useGetStudentDetailsQuery(userData?.sid);
  const { data: applications } = useGetApplicationQuery(userData?.sid);
  // console.log(applications);

  if (
    userIsLoading ||
    studentIsLoading ||
    studentIsFetching ||
    userIsFetching
  ) {
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
    <div className=''>
      {studentIsLoading ? (
        <span className='loading loading-spinner text-primary'></span>
      ) : (
        <div className='flex flex-col text-start md:text-left mt-2 md:mx-5 bg-gray-100   '>
          <div className='w-full shadow-inherit rounded-lg bg-white drop-shadow-lg p-3 text-center items-center justify-center'>
            <div class='avatar'>
              <div class='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img
                  src={student.img}
                  alt='profile'
                />
              </div>
            </div>
            <span className=''>
              <h1 className='text-3xl font-semibold'>{student.name}</h1>
              <p>
                <span className='font-semibold'>ID:</span> {student.sid}
              </p>
              <p>
                <span className='font-semibold'>Department:</span>{' '}
                {student.dept}{' '}
              </p>
              <p>
                {student.room ? (
                  <>
                    <span className='font-semibold'>Room No:</span>{' '}
                    {student.room}
                  </>
                ) : (
                  'Non-Residential'
                )}{' '}
              </p>
            </span>
          </div>{' '}
          <div className='flex flex-col md:flex-row gap-5 p-5'>
            <div className='w-full shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
              <h2 className='text-2xl font-semibold'>Contacts</h2>
              <p>Mobile: {student.mobile}</p>
              <p>Email : {student.email}</p>
            </div>
            <div className='w-full shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
              <h2 className='text-2xl font-semibold'>Address</h2>
              <p>Present address : {student.present}</p>
              <p>Parmanent address : {student.parmanent}</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row  gap-5 p-5'>
            <div className='w-full shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
              <h2 className='text-2xl font-semibold'>Applications</h2>
              {applications?.map((application) => (
                <>
                  {!application ? (
                    <h2 className='text-2xl my-5 text-red-500'>
                      You don't have any application.
                    </h2>
                  ) : (
                    <>
                      {application?.type === 'HallSeat' ? (
                        <p>
                          <span className='font-bold text-black'>🖋</span> Your
                          hall <b>seat</b> application is{' '}
                          <b>
                            {application.status}. <br />{' '}
                          </b>
                        </p>
                      ) : null}
                      {application?.type === 'HallClearence' ? (
                        <p>
                          <span className='font-bold text-black'>🖋</span> Your
                          hall <b>clearence</b> application is{' '}
                          <b>{application.status}.</b>
                        </p>
                      ) : null}
                    </>
                  )}
                </>
              ))}
            </div>{' '}
            <div className='w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
              <h2 className='text-2xl font-semibold'>Notifications</h2>
              <p>Empty </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
