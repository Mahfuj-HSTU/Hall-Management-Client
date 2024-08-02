import React from 'react';
import { BsSendCheckFill } from 'react-icons/bs';

const AddRoom = ({ details }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const room = form.room.value;
    const hall = form.hall.value;
    const ids = [];

    const user = { room, hall, ids };
    console.log(user);
    // form.reset();
  };

  return (
    <div>
      <input
        type='checkbox'
        id='add-room-modal'
        className='modal-toggle '
      />
      <div className='modal'>
        <div className='modal-box relative max-w-md'>
          <label
            htmlFor='add-room-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h1 className='text-4xl font-bold py-2 text-blue-800'>Add Rooms</h1>
          <div className='card w-full '>
            <div className='card-body text-start'>
              <form
                onSubmit={handleSubmit}
                className='rounded-xl text-blue-900 relative'>
                <label className='font-semibold pl-1'>Room No.</label> <br />
                <input
                  type='number'
                  name='room'
                  placeholder='101'
                  className='input input-bordered w-full max-w-xs mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Hall Name</label> <br />
                <input
                  readOnly
                  value={details?.hallName}
                  type='text'
                  name='hall'
                  className='input input-bordered w-full max-w-xs mb-7 mt-1'
                />
                <br />
                <label className='relative'>
                  <input
                    type='submit'
                    value='submit'
                    className='bg-teal-300 cursor-pointer font-semibold input input-bordered w-full max-w-xs'
                  />
                  <BsSendCheckFill className='pointer-events-none w-4 h-4 text-green-800 absolute top-1/4 right-28' />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
