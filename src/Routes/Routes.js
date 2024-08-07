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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Notice from '../Pages/Halls/Notice/Notice';
import { adminPaths } from './admin.routes';
import { studentPaths } from './student.routes';

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
        index: true,
        element: <HallDetails></HallDetails>,
        loader: ({ params }) => fetch(`${ServerLink}/api/halls/${params.id}`),
      },
      {
        path: 'notice',
        element: <Notice></Notice>,
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

  //* admin routes
  {
    path: '/dashboard/:id/admin',
    element: (
      <PrivateRoute>
        <ProfileLayout></ProfileLayout>
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`${ServerLink}/api/halls/${params.id}`),
    children: adminPaths,
  },

  //* student routes
  {
    path: '/dashboard/:id/student',
    element: (
      <PrivateRoute>
        <ProfileLayout></ProfileLayout>
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`${ServerLink}/api/halls/${params.id}`),
    children: studentPaths,
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
