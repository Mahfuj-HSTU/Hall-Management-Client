import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const HallDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1 className='text-5xl font-bold'>... hall home page is comming soon</h1>
    </div>
  );
};

export default HallDetails;
