import AdminDashboard from '../Pages/Dashboard/Admin/AdminDashboard';
import AdminProfile from '../Pages/Dashboard/Admin/AdminProfile/AdminProfile';
import AllStudents from '../Pages/Dashboard/Admin/AllStudents/AllStudents';
import HallAlumni from '../Pages/Dashboard/Admin/AllStudents/HallAlumni';
import Applications from '../Pages/Dashboard/Admin/Applications/Applications';
import AddNotice from '../Pages/Dashboard/Admin/Notice/AddNotice';
import Rooms from '../Pages/Dashboard/Admin/Rooms/Rooms';
import AdminRoute from './AdminRoute/AdminRoute';

export const adminPaths = [
  {
    index: true,
    element: (
      <AdminRoute>
        <AdminDashboard></AdminDashboard>
      </AdminRoute>
    ),
  },
  {
    path: 'profile',
    element: (
      <AdminRoute>
        <AdminProfile></AdminProfile>
      </AdminRoute>
    ),
  },
  {
    path: 'students',
    element: (
      <AdminRoute>
        <AllStudents></AllStudents>
      </AdminRoute>
    ),
  },
  {
    path: 'alumni-students',
    element: (
      <AdminRoute>
        <HallAlumni></HallAlumni>
      </AdminRoute>
    ),
  },
  {
    path: 'application',
    element: (
      <AdminRoute>
        <Applications></Applications>
      </AdminRoute>
    ),
  },
  {
    path: 'add-notice',
    element: (
      <AdminRoute>
        <AddNotice></AddNotice>
      </AdminRoute>
    ),
  },
  {
    path: 'rooms',
    element: (
      <AdminRoute>
        <Rooms></Rooms>
      </AdminRoute>
    ),
  },
];
