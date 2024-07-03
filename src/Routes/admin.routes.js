import AdminDashboard from '../Pages/Dashboard/Admin/AdminDashboard';
import AdminProfile from '../Pages/Dashboard/Admin/AdminProfile/AdminProfile';
import AllStudents from '../Pages/Dashboard/Admin/AllStudents/AllStudents';
import Applications from '../Pages/Dashboard/Admin/Applications/Applications';
import AddNotice from '../Pages/Dashboard/Admin/Notice/AddNotice';
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
    path: 'application',
    element: (
      <AdminRoute>
        <Applications></Applications>
      </AdminRoute>
    ),
  },
  {
    path: 'add-notice',
    element: <AddNotice></AddNotice>,
  },
];
