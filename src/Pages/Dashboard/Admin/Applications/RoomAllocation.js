import React, { useEffect, useState } from 'react';
import {
  useGetRoomsQuery,
  useUpdateRoomMutation,
} from '../../../../features/api/roomsApi';
import Loading from '../../../Shared/Loading/Loading';
import { useUpdateStudentMutation } from '../../../../features/api/studentApi';
import toast from 'react-hot-toast';
import { useUpdateApplicationMutation } from '../../../../features/api/applicationApi';
import { sendEmail } from '../../../../services/emailService';

const RoomAllocation = ({ selected, user }) => {
  const [selectedRadio, setSelectedRadio] = useState(null);
  const { data: rooms, isLoading } = useGetRoomsQuery();
  const [updateStudent, { isSuccess }] = useUpdateStudentMutation();
  const [updateRoom] = useUpdateRoomMutation();
  const [updateApplication] = useUpdateApplicationMutation();

  if (isLoading) {
    <Loading />;
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success('Room Allocated');
    }
  }, [isSuccess]);

  const filteredRoom = rooms?.filter((usr) => {
    if (usr.hall === user.hallName && usr.ids.length < 4) {
      return true;
    }
    return null;
  });
  // console.log(filteredRoom);

  const templateParams = {
    to_name: selected.name,
    from_name: 'HSTU',
    subject: `Hall Seat Application`,
    message: `Your application has been accepted. Your allocated room : ${selectedRadio}`,
    to_mail: selected.email,
  };

  const handleSubmit = () => {
    const application = {
      ...selected,
      status: 'accept',
    };
    const info = {
      ...selected,
      room: selectedRadio,
    };
    const room = {
      room: selectedRadio,
      hall: selected.hall,
      ids: [selected.sid],
    };
    // console.log(room);
    updateApplication(application);
    updateStudent(info);
    updateRoom(room);
    sendEmail(templateParams)
      .then((response) => {
        alert('Mail Sent!');
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  return (
    <div>
      <input
        type='checkbox'
        id='room-allocation-modal'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box relative max-w-3xl'>
          <label
            htmlFor='room-allocation-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h2 className='text-xl font-semibold'>
            Room Allocation for {selected.name}
          </h2>
          <div className='card w-full'>
            <div className='card-body text-start'>
              <table className='table table-compact w-full border-2 shadow-lg overflow-x-scroll'>
                <thead className='text-center bg-slate-200 font-semibold'>
                  <tr className='text-[17px]'>
                    <th className='border-2 border-r-slate-300'>Room No.</th>
                    <th className='border-2 border-r-slate-300'>Students</th>
                    <th className='border-2'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRoom
                    ?.sort((a, b) => a.room - b.room)
                    .map((room) => (
                      <tr
                        key={room?._id}
                        className='border-1'>
                        <td className='border-2 text-lg flex place-items-center'>
                          <input
                            type='radio'
                            name='radio-3'
                            className='radio radio-success mr-5'
                            value={room.room}
                            checked={selectedRadio === room.room}
                          />
                          {room.room}
                        </td>
                        <td className='border-2 py-1'>
                          {room.ids.map((id, index) => (
                            <td
                              key={index}
                              className='p-0 pr-2 font-semibold'>
                              {id} ,
                            </td>
                          ))}
                          <p className=''>
                            Available Seat:{' '}
                            <span className='font-semibold'>
                              {4 - room.ids.length}
                            </span>
                          </p>
                        </td>
                        <td className='border-2 text-center p-0'>
                          <button
                            onClick={() => setSelectedRadio(room.room)}
                            className='btn btn-info px-6 btn-sm'>
                            Select
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <label
            htmlFor='room-allocation-modal'
            onClick={handleSubmit}
            className='btn btn-info px-9'>
            submit
          </label>
        </div>
      </div>
    </div>
  );
};

export default RoomAllocation;
