import React from 'react';
import hstu from '../../../images/HSTU_Logo.png';

const NoticeDetails = ({ selected }) => {
  const { title, description, hall, date } = selected;
  return (
    <div>
      <input
        type='checkbox'
        id='notice-modal'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box relative max-w-3xl min-h-[650px]'>
          <label
            htmlFor='notice-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <div className='card w-full flex flex-col items-center p-6'>
            <div className='flex gap-6'>
              <img
                className='h-14 mt-2'
                src={hstu}
                alt=''
                width='50px'
                height='50px'
              />
              <span>
                <h2 className='text-2xl font-semibold mb-3'>{hall}</h2>
                <h2 className='font-semibold mb-3'>
                  Hajee Mohammad Danesh Science and Technology University,
                  Dinajpur-5200
                </h2>
              </span>
            </div>
            <div className='px-12 w-full text-start'>
              <div className='flex justify-between mt-5'>
                <p className='font-semibold'>স্মারক নংঃ ......</p>
                <p className='font-semibold'>তারিখঃ {date}</p>
              </div>
              <h2 className='my-9'>
                <span className='font-semibold'>বিষয়ঃ</span> {title}
              </h2>
              <p>{description}</p>
            </div>

            <div className='fixed bottom-12 right-9 font-semibold'>
              <span>
                <p>Hall Super</p>
                <p>{hall}</p>
                <p>HSTU, Dinajpur</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
