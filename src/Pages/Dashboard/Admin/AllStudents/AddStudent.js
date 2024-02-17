import React from 'react';
import { BsSendCheckFill } from 'react-icons/bs';
import { ServerLink } from '../../../../Hooks/useServerLink';
import toast from 'react-hot-toast';

const AddStudent = ({ details, refetch }) => {
  // console.log(details);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sid = form.sid.value;
    const hall = form.hall.value;
    const dept = form.dept.value;

    const user = { name, sid, hall, dept };
    // console.log(user);
    fetch(`${ServerLink}/api/students`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error || 'Failed to add a new student');
          });
        }
        return res.json();
      })
      .then((data) => {
        // Handle successful response
        if (data.acknowledged) {
          toast.success('Successfully added a new student');
          form.reset();
          refetch();
        }
      });
  };

  return (
    <div>
      <input
        type='checkbox'
        id='add-modal'
        className='modal-toggle '
      />
      <div className='modal'>
        <div className='modal-box relative max-w-md'>
          <label
            htmlFor='add-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h1 className='text-4xl font-bold py-2 text-blue-800'>Add Student</h1>
          <div className='card w-full '>
            <div className='card-body text-start'>
              <form
                onSubmit={handleSubmit}
                className='rounded-xl text-blue-900 relative'>
                <label className='font-semibold pl-1'>Student Name</label>{' '}
                <br />
                <input
                  type='text'
                  name='name'
                  placeholder='student name'
                  className='input input-bordered w-full max-w-xs mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Student Id</label> <br />
                <input
                  type='number'
                  name='sid'
                  placeholder='190...'
                  className='input input-bordered w-full max-w-xs mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Hall Name</label> <br />
                <input
                  value={details.hallName}
                  type='text'
                  name='hall'
                  placeholder='hall name'
                  className='input input-bordered w-full max-w-xs mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Department</label> <br />
                <input
                  type='text'
                  name='dept'
                  placeholder='department name'
                  className='input input-bordered w-full max-w-xs mb-7 mt-1'
                />
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

export default AddStudent;
