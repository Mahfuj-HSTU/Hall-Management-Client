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
import MyAccount from '../Pages/Dashboard/Student/Profile/MyAccount';
import Application from '../Pages/Dashboard/Student/Application/Application';
import StudentDashboard from '../Pages/Dashboard/Student/StudentDashboard';
import AdminDashboard from '../Pages/Dashboard/Admin/AdminDashboard';
import AdminRoute from './AdminRoute/AdminRoute';
import StudentRoute from './StudentRoute/StudentRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AdminProfile from '../Pages/Dashboard/Admin/AdminProfile/AdminProfile';
import AllStudents from '../Pages/Dashboard/Admin/AllStudents/AllStudents';
import Applications from '../Pages/Dashboard/Admin/Applications/Applications';
import AddNotice from '../Pages/Dashboard/Admin/Notice/AddNotice';

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
    element: (
      <PrivateRoute>
        <ProfileLayout></ProfileLayout>
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`${ServerLink}/api/halls/${params.id}`),
    children: [
      // admin routes
      {
        path: '/dashboard/:id/admin',
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/:id/admin/profile',
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/:id/admin/students',
        element: (
          // <AdminRoute>
          <AllStudents></AllStudents>
          // </AdminRoute>
        ),
      },
      {
        path: '/dashboard/:id/admin/application',
        element: (
          // <AdminRoute>
          <Applications></Applications>
          // </AdminRoute>
        ),
      },
      {
        path: '/dashboard/:id/admin/add-notice',
        element: <AddNotice></AddNotice>,
      },

      // students routes
      {
        path: '/dashboard/:id/student',
        element: (
          <StudentRoute>
            <StudentDashboard></StudentDashboard>
          </StudentRoute>
        ),
      },
      {
        path: '/dashboard/:id/student/profile',
        element: <MyAccount></MyAccount>,
      },
      {
        path: '/dashboard/:id/student/application',
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
