import React from 'react';
import HallBanner from './HallHome/HallBanner/HallBanner';
import Message from './HallHome/Message/Message';
import Students from './HallHome/Students/Students';
import { useLoaderData } from 'react-router-dom';
import SignUp from '../Registration/SignUp/SignUp';
import Login from '../Registration/Login/Login';

const HallDetails = () => {
  const hall = useLoaderData();
  // console.log(hall);
  return (
    <div>
      <HallBanner hall={hall}></HallBanner>
      <Message hall={hall}></Message>
      <Students hall={hall}></Students>
      <span className='hidden'>
        <SignUp hall={hall}></SignUp>
        <Login hall={hall}></Login>
      </span>
    </div>
  );
};

export default HallDetails;
