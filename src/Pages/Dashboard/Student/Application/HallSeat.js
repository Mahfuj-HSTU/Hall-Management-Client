import React from 'react';
import { BsSendCheckFill } from 'react-icons/bs';
import { ServerLink } from '../../../../Hooks/useServerLink';
import toast from 'react-hot-toast';

const HallSeat = ({ student, refetch }) => {
  const handleHallSeat = () => {
    const agree = window.confirm(`Do you want to apply for hall seat?`);
    const info = {
      ...student,
      status: 'pending',
      type: 'HallSeat',
    };
    if (agree) {
      fetch(`${ServerLink}/api/applications`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged || data.message === 'Application updated.') {
            console.log(data);
            toast.success('Applied successfully');
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <input
        type='checkbox'
        id='hall-clearence-modal'
        className='modal-toggle'
      />
      <div className='modal '>
        <div className='modal-box relative max-w-md'>
          <label
            htmlFor='hall-clearence-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h2 className='text-2xl font-semibold'>
            Applying for Hall Clearence
          </h2>
          <div className='card w-full'>
            <div className='card-body text-start'>
              <form
                onSubmit={handleHallSeat}
                className='rounded-xl text-blue-900 relative'>
                <label className='font-semibold pl-1'>Payment Info.</label>{' '}
                <br />
                <input
                  required
                  type='text'
                  name='name'
                  placeholder='payment information'
                  className='input input-bordered w-full max-w-xs mb-7 mt-3'
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

export default HallSeat;
