import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Banner from '../Pages/Home/Banner/Banner';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className='max-w-screen-xl mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
