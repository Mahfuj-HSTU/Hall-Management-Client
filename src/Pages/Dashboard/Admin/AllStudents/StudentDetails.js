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
    cgpa,
    img,
    salary,
    fOccupation,
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
          <h2 className='text-2xl font-semibold mb-3'>Student Details</h2>
          <div className='card w-full flex flex-col items-center'>
            <figure className='rounded-full h-52 w-52 flex-shrink-0 mb-4 md:mb-0 md:mr-4'>
              <img
                src={img}
                alt='Profile'
                className='rounded-full object-cover h-full w-full'
              />
            </figure>
            <div className='card-body text-start p-5 w-full'>
              <h2 className='card-title'>Name: {name}</h2>
              <p>
                <span className='font-semibold'>Student ID:</span> {sid}
              </p>
              <p>
                <span className='font-semibold'>Department:</span> {dept}
              </p>
              <p>
                <span className='font-semibold'>CGPA:</span> {cgpa}
              </p>
              <p>
                <span className='font-semibold'>Email:</span>{' '}
                {email || 'test@gmail.com'}
              </p>
              <p>
                <span className='font-semibold'>Mobile:</span>{' '}
                {mobile || '01XXXXXXX'}
              </p>
              <p>
                <span className='font-semibold'>Father Name:</span> {fname}
              </p>
              <p>
                <span className='font-semibold'>Father Mobile:</span> {fmobile}
              </p>
              <p>
                <span className='font-semibold'>Mother Name:</span> {mname}
              </p>
              <p>
                <span className='font-semibold'>Mother Mobile:</span> {mmobile}
              </p>
              <p>
                <span className='font-semibold'>
                  Father's/Guardian's Occupation:
                </span>{' '}
                {fOccupation}
              </p>
              <p>
                <span className='font-semibold'>Yearly Income:</span> {salary}
              </p>
              <p>
                <span className='font-semibold'>Present Address:</span>{' '}
                {present}
              </p>
              <p>
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
