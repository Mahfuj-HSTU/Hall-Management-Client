import React from 'react';
import toast from 'react-hot-toast';

const Application = () => {
  const handleHallSeat = (user) => {
    const agree = window.confirm(`Are you want to apply for hall seat?`);
    if (agree) {
      toast.success('Apply successfull');
    }
  };
  const handleHallClearence = (user) => {
    const agree = window.confirm(`Are you want to apply for hall clearence?`);
    if (agree) {
      toast.success('Apply successfull');
    }
  };

  return (
    // <div>
    <div className='grid grid-cols-2 place-items-center h-full gap-9 mx-5'>
      <div className='shadow-xl shadow-slate-300 rounded-xl p-5 w-full'>
        <h2 className='text-3xl mb-5'>Apply for a Hall Seat</h2>
        <button
          onClick={handleHallSeat}
          className='btn btn-success px-6'>
          Apply
        </button>
      </div>
      <div className='shadow-xl shadow-slate-300 rounded-xl p-5 w-full'>
        <h2 className='text-3xl mb-5'>Apply for Hall Clearence</h2>
        <button
          onClick={handleHallClearence}
          className='btn btn-success px-6'>
          Apply
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Application;
