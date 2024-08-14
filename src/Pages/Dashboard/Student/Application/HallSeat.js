import React, { useEffect, useState } from 'react';
import { BsSendCheckFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { District } from '../../../../Utilities/district';
import { useAddApplicationMutation } from '../../../../features/api/applicationApi';

const HallSeat = ({ student, refetch }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [addApplication, { isSuccess }] = useAddApplicationMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Applied successfully');
    }
  }, [isSuccess]);
  const handleHallSeat = (event) => {
    event.preventDefault();
    const form = event.target;
    const agree = window.confirm(`Do you want to apply for hall seat?`);
    const info = {
      ...student,
      status: 'pending',
      type: 'HallSeat',
      fOccupation: form.foccupation.value,
      fIncome: form.fincome.value,
      district: selectedDistrict,
    };
    if (agree) {
      console.log(info);
      addApplication(info);
      form.reset();
    }
  };
  return (
    <div>
      <input
        type='checkbox'
        id='hall-seat-modal'
        className='modal-toggle'
      />
      <div className='modal '>
        <div className='modal-box relative max-w-md'>
          <label
            htmlFor='hall-seat-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h2 className='text-2xl font-semibold'>Applying for Hall Seat</h2>
          <div className='card w-full'>
            <div className='card-body text-start'>
              <form
                onSubmit={handleHallSeat}
                className='rounded-xl text-blue-900 relative'>
                <label className='font-semibold pl-1'>
                  Father's Occupation
                </label>{' '}
                <br />
                <input
                  required
                  type='text'
                  name='foccupation'
                  placeholder='fathers occupation'
                  className='input input-bordered w-full max-w-xs mb-2 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>
                  Father's Income/Year
                </label>{' '}
                <br />
                <input
                  required
                  type='text'
                  name='fincome'
                  placeholder='fathers salary per year'
                  className='input input-bordered w-full max-w-xs mb-7 mt-1'
                />
                <br />
                <select
                  required
                  value={selectedDistrict || ''}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className='select select-bordered w-full mb-7 max-w-xs'>
                  <option selected>Select Your Distirict</option>
                  {District?.map((district, i) => (
                    <option
                      key={i}
                      value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
                <br />
                <label
                  htmlFor='hall-seat-modal'
                  className='relative'>
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
