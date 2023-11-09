import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className='max-w-screen-xl mx-auto'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
