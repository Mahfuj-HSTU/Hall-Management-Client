import React from 'react';
import Message from './HallHome/Message';
import Students from './HallHome/Students';

const HallDetails = () => {
  return (
    <div>
      <h3 className='text-3xl text-blue-800 py-9'>
        This is the hall home page
      </h3>
      <Message></Message>
      <Students></Students>
    </div>
  );
};

export default HallDetails;
