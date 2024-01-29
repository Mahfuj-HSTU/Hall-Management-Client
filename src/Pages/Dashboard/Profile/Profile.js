import React from 'react';

const Profile = () => {
  return (
    <div class='bg-cyan-300 h-full'>
      {' '}
      <div class='avatar'>
        <div class='w-32 rounded-full mt-10'>
          <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
        </div>
      </div>
      <div class='text-center text-2xl'>Zubayer Saad</div>
      <div class='flex flex-col lg:flex-row  mt-10 ml-5 mr-5'>
        <div class='w-full'>
          <div class='text-left w-full'>Student ID</div>
          <div class='grid flex-grow w-full card h-12 bg-gray-100 rounded-md items-center text-left'>
            1902067
          </div>
        </div>
        <div class='divider lg:divider-horizontal'></div>
        <div class='w-full'>
          <div class='text-left w-full'>Degree Name</div>
          <div class='grid flex-grow w-full card h-12 bg-gray-100 rounded-md items-center text-left'>
            CSE
          </div>
        </div>
      </div>
      <div class='flex flex-col lg:flex-row  mt-5 ml-5 mr-5'>
        <div class='w-full'>
          <div class='text-left w-full'>Hall Name</div>
          <div class='grid flex-grow w-full card h-12 bg-gray-100 rounded-md items-center text-left'>
            BSMRH
          </div>
        </div>
        <div class='divider lg:divider-horizontal'></div>
        <div class='w-full'>
          <div class='text-left w-full'>Residental Status</div>
          <div class='grid flex-grow w-full card h-12 bg-gray-100 rounded-md items-center text-left'>
            NR
          </div>
        </div>
      </div>
      <div class='flex flex-col lg:flex-row  mt-5 ml-5 mr-5'>
        <div class='w-full'>
          <div class='text-left w-full'>Mobile No</div>
          <div class='grid flex-grow w-full card h-12 bg-gray-100 rounded-md items-center text-left'>
            01xxxxxxxxx
          </div>
        </div>
        <div class='divider lg:divider-horizontal'></div>
        <div class='w-full'>
          <div class='text-left w-full'>Email</div>
          <div class='grid flex-grow w-full card h-12 bg-gray-100 rounded-md items-center text-left'>
            xxx@xxx.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
