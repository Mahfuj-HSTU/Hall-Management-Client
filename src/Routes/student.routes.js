import Application from '../Pages/Dashboard/Student/Application/Application';
import MyAccount from '../Pages/Dashboard/Student/Profile/MyAccount';
import StudentDashboard from '../Pages/Dashboard/Student/StudentDashboard';
import StudentRoute from './StudentRoute/StudentRoute';

export const studentPaths = [
  {
    index: true,
    element: (
      <StudentRoute>
        <StudentDashboard></StudentDashboard>
      </StudentRoute>
    ),
  },
  {
    path: 'profile',
    element: <MyAccount></MyAccount>,
  },
  {
    path: 'application',
    element: <Application></Application>,
  },
];
