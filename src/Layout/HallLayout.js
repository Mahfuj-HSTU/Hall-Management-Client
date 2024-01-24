import React from 'react';
import HallHeader from '../Pages/Shared/Header/HallHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const HallLayout = () => {
  return (
    <div>
      <HallHeader></HallHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HallLayout;
