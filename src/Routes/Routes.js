import { createBrowserRouter } from 'react-router-dom';
import error from '../images/images.png';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Halls from '../Pages/Halls/Halls';
import HallDetails from '../Pages/Halls/HallDetails';
import HallLayout from '../Layout/HallLayout';
import ProfileLayout from '../Layout/ProfileLayout';
import Profile from '../Pages/Profile/Profile';
import Application from '../Pages/Profile/Application';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/halls',
        element: <Halls></Halls>,
      },
    ],
  },
  {
    path: '/:name',
    element: <HallLayout></HallLayout>,
    children: [
      {
        path: '/:name',
        element: <HallDetails></HallDetails>,
        loader: ({ params }) => fetch(`data.json/${params.name}`),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <ProfileLayout></ProfileLayout>,
    children: [
      {
        path: '/dashboard',
        element: <Profile></Profile>,
      },
      {
        path: '/dashboard/applicatoin',
        element: <Application></Application>,
      },
    ],
  },
  {
    path: '*',
    element: (
      <div className='flex justify-center mt-10'>
        <img
          src={error}
          alt=''
          width='500px'
        />
      </div>
    ),
  },
]);
export default router;
