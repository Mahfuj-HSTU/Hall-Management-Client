import { createBrowserRouter } from 'react-router-dom';
import error from '../images/images.png';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Halls from '../Pages/Halls/Halls';
import HallDetails from '../Pages/Halls/HallDetails';
import HallLayout from '../Layout/HallLayout';
import ProfileLayout from '../Layout/ProfileLayout';
import Login from '../Pages/Registration/Login/Login';
import SignUp from '../Pages/Registration/SignUp/SignUp';
import Profile from '../Pages/Dashboard/Profile';
import Application from '../Pages/Dashboard/Application';

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
    path: '/:id',
    element: <HallLayout></HallLayout>,
    children: [
      {
        path: '/:id',
        element: <HallDetails></HallDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/hall/${params.id}`),
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
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
