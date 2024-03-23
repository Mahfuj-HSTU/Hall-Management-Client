import React, { useEffect } from 'react';
import { BsSendCheckFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { useAddApplicationMutation } from '../../../../features/api/applicationApi';

const HallClearence = ({ student, refetch }) => {
  const [addApplication, { isSuccess }] = useAddApplicationMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Applied successfully');
    }
  }, [isSuccess]);
  const handleHallClearence = (event) => {
    event.preventDefault();
    const agree = window.confirm(`Do you want to apply for hall clearence?`);
    const info = {
      ...student,
      status: 'pending',
      type: 'HallClearence',
      pinfo: 'paid',
    };
    if (agree) {
      addApplication(info);
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
                onSubmit={handleHallClearence}
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

export default HallClearence;
