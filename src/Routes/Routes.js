import { Link, createBrowserRouter } from 'react-router-dom';
import error from '../images/images.png';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Halls from '../Pages/Halls/Halls';
import HallDetails from '../Pages/Halls/HallDetails';
import HallLayout from '../Layout/HallLayout';
import ProfileLayout from '../Layout/ProfileLayout';
import Login from '../Pages/Registration/Login/Login';
import SignUp from '../Pages/Registration/SignUp/SignUp';
import { ServerLink } from '../Hooks/useServerLink';
import Profile from '../Pages/Dashboard/Profile/Profile';
import Application from '../Pages/Dashboard/Application/Application';
import Dashboard from '../Pages/Dashboard/Dashboard';

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
    path: '/hall/:id',
    element: <HallLayout></HallLayout>,
    loader: ({ params }) => fetch(`${ServerLink}/api/halls/${params.id}`),
    children: [
      {
        path: '/hall/:id',
        element: <HallDetails></HallDetails>,
        loader: ({ params }) => fetch(`${ServerLink}/api/halls/${params.id}`),
      },
    ],
  },
  {
    path: '/hall/:id/login',
    element: <Login></Login>,
    loader: ({ params }) => fetch(`${ServerLink}/api/halls/${params.id}`),
  },
  {
    path: '/hall/:id/signup',
    element: <SignUp></SignUp>,
    loader: ({ params }) => fetch(`${ServerLink}/api/halls/${params.id}`),
  },
  {
    path: '/dashboard/:id',
    element: <ProfileLayout></ProfileLayout>,
    loader: ({ params }) => fetch(`${ServerLink}/api/halls/${params.id}`),
    children: [
      {
        path: '/dashboard/:id',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/dashboard/:id/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/dashboard/:id/applicatoin',
        element: <Application></Application>,
      },
    ],
  },
  {
    path: '*',
    element: (
      <div className='flex justify-center mt-10'>
        <div className='flex-col'>
          <img
            src={error}
            alt=''
            width='500px'
          />
          <Link
            to='/halls'
            className='btn btn-primary btn-outline font-bold'>
            Back to home
          </Link>
        </div>
      </div>
    ),
  },
]);
export default router;
