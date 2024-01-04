import React from 'react';
import HallBanner from './HallHome/HallBanner/HallBanner';
import Message from './HallHome/Message/Message';
import Students from './HallHome/Students/Students';

const HallDetails = () => {
  return (
    <div>
      <HallBanner></HallBanner>
      <Message></Message>
      <Students></Students>
    </div>
  );
};

export default HallDetails;
