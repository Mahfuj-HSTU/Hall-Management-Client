import React, { useContext, useEffect } from 'react';
import { useGetRoomsQuery } from '../../../../features/api/roomsApi';
import { useGetUserQuery } from '../../../../features/api/userApi';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';
import { useDispatch } from 'react-redux';

const Rooms = () => {
  const { user } = useContext(AuthContext);
  const { data } = useGetUserQuery(user?.email);
  const dispatch = useDispatch();
  // console.log(data);

  const { data: rooms, isLoading } = useGetRoomsQuery();
  // console.log(rooms);

  useEffect(() => {
    dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  const filteredRoom = rooms?.filter((usr) => {
    if (usr.hall === data.hallName) {
      return true;
    }
    return null;
  });
  console.log(filteredRoom);

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
        </div>

        <label
          htmlFor='add-modal'
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
            {/* <th className='border-2 border-r-slate-300'>Department</th>
            <th className='border-2 border-r-slate-300'>R. Status</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredRoom
            ?.sort((a, b) => a.room - b.room)
            .map((room, i) => (
              <tr
                key={room?._id}
                className='border-1'>
                <td>{i + 1}</td>
                <td>{room.room} </td>
                <td className='border-2 py-1'>
                  {room.ids.map((id, index) => (
                    <td
                      key={index}
                      className='p-0 pr-2 font-semibold'>
                      {id} ,
                    </td>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;
