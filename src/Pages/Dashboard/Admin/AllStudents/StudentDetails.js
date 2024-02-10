import React from 'react';

const StudentDetails = ({ selected }) => {
  const {
    name,
    sid,
    dept,
    email,
    mobile,
    fname,
    fmobile,
    mname,
    mmobile,
    present,
    parmanent,
  } = selected;
  return (
    <div>
      <input
        type='checkbox'
        id='my-modal'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h2 className='text-2xl font-semibold'>Student Details</h2>
          <div className='card w-full'>
            {/* <figure>
                <img
                  src={photoUrl}
                  alt='Profile'
                />
              </figure> */}
            <div className='card-body text-start'>
              <h2 className='card-title'>Name: {name}</h2>
              <p>
                {' '}
                <span className='font-semibold'>Student ID:</span> {sid}
              </p>
              <p>
                {' '}
                <span className='font-semibold'>Department:</span> {dept}
              </p>
              <p>
                {' '}
                <span className='font-semibold'>Email:</span>{' '}
                {email || 'test@gmail.com'}
              </p>
              <p>
                {' '}
                <span className='font-semibold'>Mobile:</span>{' '}
                {mobile || '01XXXXXXX'}
              </p>
              <p>
                {' '}
                <span className='font-semibold'>Father Name:</span> {fname}
              </p>
              <p>
                {' '}
                <span className='font-semibold'>Father Mobile:</span> {fmobile}
              </p>
              <p>
                {' '}
                <span className='font-semibold'>Mother Name:</span> {mname}
              </p>
              <p>
                {' '}
                <span className='font-semibold'>Mother Mobile:</span> {mmobile}
              </p>
              <p>
                {' '}
                <span className='font-semibold'>Present Address:</span>{' '}
                {present}
              </p>
              <p>
                {' '}
                <span className='font-semibold'>Parmanent Address:</span>{' '}
                {parmanent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
