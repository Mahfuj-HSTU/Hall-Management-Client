import React from 'react';
import { useGetStudentsQuery } from '../../../../features/api/studentApi';
import Loading from '../../../Shared/Loading/Loading';
import { useGetRoomsQuery } from '../../../../features/api/roomsApi';

const Students = ({ hall }) => {
  const { data: students, isLoading: studentIsLoading } = useGetStudentsQuery();
  const { data: rooms, isLoading: roomsIsLoading } = useGetRoomsQuery();
  // console.log(students);
  if (studentIsLoading || roomsIsLoading) {
    <Loading />;
  }

  const filteredStudent = students?.filter((students) => {
    return students.hall === hall.name;
  });
  const presentStudent = filteredStudent?.filter((students) => {
    return (
      students.room === '' ||
      students.room === undefined ||
      students.room === null
    );
  });

  const filteredRooms = rooms?.filter((rooms) => {
    return rooms.hall === hall.name;
  });
  const attachStudent = filteredStudent?.length;
  const totalSeat = filteredRooms?.length * 4;
  const totalpresentStudent = attachStudent - presentStudent?.length;
  const availabelSeat = totalSeat - totalpresentStudent;

  // console.log(filteredStudent);

  return (
    <div>
      {' '}
      <div
        data-aos='fade-up'
        className='my-16'>
        <div className=' bg-gradient-to-b from-slate-700 to-slate-600 h-full lg:h-96 w-full bg-cover bg-center relative'>
          <img
            src='https://web.protildo.com/wp-content/uploads/elementor/thumbs/Background-Verification-Process-in-MNCs-pkhfove0iprn15hkdvkd47nc3lxv2u4afg54pczxbk.jpeg'
            alt=''
            className=' w-full h-full object-cover absolute mix-blend-overlay'
          />
          <div
            data-aos='fade-up'
            className='p-12 '>
            <h2 className='uppercase text-4xl font-bold text-base-200 mb-10 stroke-stone-950'>
              At a Glance
            </h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 justify-items-center lg:px-0 px-4'>
              <div
                data-aos='fade-up'
                className='card grid lg:w-[300px] w-[350px] text-white mb-3'>
                <div className='card-body items-center'>
                  <h1 className=' card-title text-7xl'>{attachStudent}</h1>
                  <h2 className=' text-xl'>Total Atached Students</h2>
                </div>
              </div>
              <div
                data-aos='fade-up'
                className='card lg:w-[300px] w-[350px] text-white mb-3'>
                <div className='card-body items-center'>
                  <h1 className=' card-title text-7xl'>{totalSeat}</h1>
                  <h2 className=' text-xl'>Total Seat Capacity</h2>
                </div>
              </div>
              <div
                data-aos='fade-up'
                className='card lg:w-[300px] w-[350px] text-white mb-3'>
                <div className='card-body items-center'>
                  <h1 className=' card-title text-7xl'>
                    {totalpresentStudent}
                  </h1>
                  <h2 className=' text-xl'>Total Present Students </h2>
                </div>
              </div>
              <div
                data-aos='fade-up'
                className='card lg:w-[300px] w-[350px] text-white mb-1 lg:mb-3'>
                <div className='card-body items-center'>
                  <h1 className=' card-title text-7xl'>{availabelSeat}</h1>
                  <h2 className=' text-xl'>Available Seat</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
