import React from 'react';
import Message from './HallHome/Message';
import Students from './HallHome/Students';
import HallBanner from './HallHome/HallBanner/HallBanner';

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
