import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import imageUrl from '../../../images/avater.png';
import { useGetRoomsQuery } from '../../../features/api/roomsApi';
import { useGetStudentsQuery } from '../../../features/api/studentApi';
import { useGetUserQuery } from '../../../features/api/userApi';
import { useGetApplicationsQuery } from '../../../features/api/applicationApi';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: students, isLoading: studentIsLoading } = useGetStudentsQuery();
  const {
    data: rooms,
    isLoading: roomsIsLoading,
    isFetching,
  } = useGetRoomsQuery();
  const { data: details } = useGetUserQuery(user?.email);
  const { data: applications, isLoading } = useGetApplicationsQuery();

  if (studentIsLoading || roomsIsLoading || isLoading || isFetching) {
    <Loading />;
  }

  const filteredPresentStudent = students?.filter((student) => {
    return student.hall === details.hallName && student.isDeleted !== true;
  });
  const filteredPastStudent = students?.filter((student) => {
    return student.hall === details.hallName && student.isDeleted === true;
  });
  const filteredRooms = rooms?.filter((room) => {
    return room.hall === details.hallName;
  });

  const filteredApplications = applications?.filter((application) => {
    return application.hall === details.hallName;
  });
  // console.log(filteredApplications);

  const totalAttachedStudent = filteredPresentStudent?.length;
  const totalPastStudent = filteredPastStudent?.length;
  const totalRoom = filteredRooms?.length;
  const totalPendingApplication = filteredApplications?.filter(
    (application) => {
      return application.status === 'pending';
    }
  ).length;
  const totalSeat = totalRoom * 4;
  const totalResedentialStudents = filteredPresentStudent?.filter((student) => {
    return student.room;
  }).length;
  // console.log(totalSeat, totalAttachedStudent, totalPendingApplication);
  const totalavailabelSeats = totalSeat - totalResedentialStudents;

  return (
    <div>
      <div className='flex flex-col text-center md:text-left mt-8 md:mx-5 bg-gray-100'>
        <div className='w-full shadow-inherit rounded-lg bg-white drop-shadow-lg p-3 text-center items-center justify-center'>
          <div class='avatar'>
            <div class='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img
                src={imageUrl}
                alt='img'
              />
            </div>
          </div>
          <h1 className='text-3xl font-semibold'>{'Admin'}</h1>
          <br />
        </div>{' '}
        <div className='flex flex-row md:flex-row gap-5 p-5'>
          <div className='w-full shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
            <h2 className='text-2xl font-semibold'>Students</h2>
            <p>
              Total Attached Students:{' '}
              <span className='underline font-semibold'>
                {' '}
                {totalAttachedStudent}
              </span>
            </p>
            <p>
              Total Residential Students :{' '}
              <span className='underline font-semibold'>
                {totalResedentialStudents}
              </span>
            </p>
            <p>
              Total Alumni Students :{' '}
              <span className='underline font-semibold'>
                {totalPastStudent}
              </span>
            </p>
          </div>
          <div className='w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
            <h2 className='text-2xl font-semibold'>Rooms</h2>
            <p>
              Total Rooms :{' '}
              <span className='underline font-semibold'> {totalRoom}</span>
            </p>
            <p>
              Total Seats :
              <span className='underline font-semibold'>{totalSeat}</span>{' '}
            </p>
            <p>
              Availble Seats :
              <span className='underline font-semibold'>
                {totalavailabelSeats}
              </span>{' '}
            </p>
          </div>
        </div>
        <div className='flex flex-row md:flex-row  gap-5 p-5'>
          <div className='w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
            <h2 className='text-2xl font-semibold'>Applications</h2>
            <p>
              Total Pending Applications :{' '}
              <span className='underline font-semibold'>
                {totalPendingApplication}
              </span>
            </p>
          </div>{' '}
          <div className='w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3'>
            <h2 className='text-2xl font-semibold'>Notices</h2>
            {/* <p>Applied for {application.type} </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
