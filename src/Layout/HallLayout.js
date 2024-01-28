import React from 'react';
import HallHeader from '../Pages/Shared/Header/HallHeader';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const HallLayout = () => {
  const hall = useLoaderData();
  console.log(hall);
  return (
    <div>
      <HallHeader hall={hall}></HallHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HallLayout;
