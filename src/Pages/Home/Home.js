import React from 'react';
import Message from './Message/Message';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='mt-30 max-w-screen-xl mx-auto'>
        <Message></Message>
      </div>
    </div>
  );
};

export default Home;
