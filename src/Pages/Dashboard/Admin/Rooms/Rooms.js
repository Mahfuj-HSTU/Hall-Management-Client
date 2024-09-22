import React, { useContext, useEffect, useRef, useState } from 'react';
import { useGetRoomsQuery } from '../../../../features/api/roomsApi';
import { useGetUserQuery } from '../../../../features/api/userApi';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';
import { useDispatch } from 'react-redux';
import Loading from '../../../Shared/Loading/Loading';
import AddRoom from './AddRoom';
import { useGetStudentDetailsQuery } from '../../../../features/api/studentApi';
import StudentDetails from '../AllStudents/StudentDetails';

const Rooms = () => {
  const { user } = useContext(AuthContext);
  const inputRef = useRef(null);
  const [roomSearch, setRoomSearch] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');
  const [id, setId] = useState('');
  const { data: userData } = useGetUserQuery(user?.email);
  const dispatch = useDispatch();
  // console.log(data);

  const { data: rooms, isLoading } = useGetRoomsQuery();
  const { data: studentDetails } = useGetStudentDetailsQuery(id);
  // console.log(studentDetails);

  if (isLoading) {
    <Loading />;
  }

  useEffect(() => {
    dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  const handleSearch = () => {
    const searchData = inputRef.current.value;
    setRoomSearch(searchData);
  };

  // First, filter rooms by the user's hall
  const roomsInHall = rooms?.filter((room) => room.hall === userData.hallName);

  // Calculate the max floor based on rooms from the selected hall
  const maxFloor = roomsInHall?.reduce((max, room) => {
    const floor = Math.floor(room?.room / 100);
    return Math.max(max, floor);
  }, 0);

  // Create an array of floors from 1 to maxFloor
  const floorsArray = Array.from({ length: maxFloor }, (_, index) => index + 1);

  // Now filter rooms based on the selected floor and room search
  const filteredRoom = roomsInHall?.filter((room) => {
    const floor = Math.floor(room?.room / 100);

    // Filter based on the selected floor
    if (selectedFloor && floor !== selectedFloor) {
      return false;
    }

    // Filter by room search input
    if (roomSearch === '') {
      return true;
    } else {
      return room?.room?.toString().includes(roomSearch?.toString());
    }
  });

  const getOrdinal = (n) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };
  // console.log(selectedFloor);

  return (
    <div className='md:my-5 mb-5'>
      <div className='lg:flex lg:justify-between mb-4 p-4 pt-12 md:pt-6 lg:pt-5 bg-slate-300 rounded-lg md:ml-4'>
        <div className='lg:flex lg:justify-between gap-9'>
          <span className='flex justify-between gap-5 mb-3'>
            <h2 className='text-4xl mb-4'>Hall Rooms List</h2>
            <input
              className='lg:hidden block btn btn-primary rounded-xl w-20'
              value='Add'
            />
          </span>
          <span className='md:flex md:justify-between gap-5'>
            <input
              ref={inputRef}
              id='searchName'
              className='input input-bordered p-2 w-72 rounded-xl'
              type='text'
              placeholder='Search by room number'
              onChange={handleSearch}
            />
            <select
              value={selectedFloor || ''}
              onChange={(e) => setSelectedFloor(Number(e.target.value))}
              className='select select-bordered w-56 md:mt-0 mt-3 max-w-xs block'>
              <option value=''>Select Floor</option>
              {floorsArray?.map((floor, i) => (
                <option
                  key={i}
                  value={floor}>
                  {getOrdinal(floor)}
                </option>
              ))}
            </select>
          </span>
        </div>

        <label
          htmlFor='add-room-modal'
          className='hidden btn btn-info rounded-xl w-32 lg:grid place-items-center'>
          Add Room
        </label>
      </div>
      <h2 className='flex ml-4 mb-3 text-xl font-semibold'>
        Total Rooms:
        <span className='text-red-700 font-bold underline pl-2'>
          {/* {searchUser?.length} */}
        </span>{' '}
      </h2>
      <table className='table table-compact w-full border-2 shadow-lg md:mx-4 mx-0 overflow-x-scroll'>
        <thead className='text-center bg-slate-200 font-semibold'>
          <tr className='text-[17px]'>
            <th className='border-2 border-r-slate-300'>SL No.</th>
            <th className='border-2 border-r-slate-300'>Room No.</th>
            <th className='border-2 border-r-slate-300'>Students</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoom
            ?.sort((a, b) => a.room - b.room)
            .map((room, i) => (
              <tr
                key={room?._id}
                className='border-1'>
                <td className='text-center border-2'>{i + 1}</td>
                <td className='text-center border-2'>
                  <span className='font-semibold'>Room-</span>
                  {room.room}{' '}
                </td>
                <td className='border-2'>
                  {room.ids.map((id, index) => (
                    <label
                      htmlFor='my-modal'
                      onClick={() => setId(id)}
                      key={index}
                      className='p-0 pr-2 font-semibold cursor-pointer link link-primary'>
                      {id} ,
                    </label>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {studentDetails && <StudentDetails selected={studentDetails} />}
      <AddRoom details={userData} />
    </div>
  );
};

export default Rooms;
