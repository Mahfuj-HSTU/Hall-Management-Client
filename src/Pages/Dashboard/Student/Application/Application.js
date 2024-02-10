import React from 'react';
import toast from 'react-hot-toast';

const Application = () => {
  const handleHallSeat = (user) => {
    const agree = window.confirm(`Do you want to apply for hall seat?`);
    if (agree) {
      toast.success('Apply successfull');
    }
  };
  const handleHallClearence = (user) => {
    const agree = window.confirm(`Do you want to apply for hall clearence?`);
    if (agree) {
      toast.success('Apply successfull');
    }
  };

  return (
    <div className='grid place-items-center h-full mx-5'>
      <span className='grid grid-cols-2 w-full gap-9'>
        <div className='shadow-xl shadow-slate-300 rounded-xl p-5'>
          <h2 className='text-3xl mb-5'>Apply for a Hall Seat</h2>
          <button
            onClick={handleHallSeat}
            className='btn btn-success px-6'>
            Apply
          </button>
        </div>
        <div className='shadow-xl shadow-slate-300 rounded-xl p-5'>
          <h2 className='text-3xl mb-5'>Apply for Hall Clearence</h2>
          <button
            onClick={handleHallClearence}
            className='btn btn-success px-6'>
            Apply
          </button>
        </div>
      </span>
      <div>
        <h2 className='text-3xl mb-5'>Application progess</h2>
        <ul className='steps steps-vertical lg:steps-horizontal'>
          <li className='step step-primary'>Received</li>
          <li className='step step-primary'>Checking</li>
          <li className='step'>Purchase</li>
          <li className='step'>Receive Product</li>
        </ul>
      </div>
    </div>
  );
};

export default Application;
