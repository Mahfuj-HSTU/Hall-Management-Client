import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { fetchRole } from '../../Hooks/Role/useRoleSlice';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const location = useLocation();
  const role = useSelector((state) => state.roleReducer.role.role);
  const admin = 'admin';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && role === admin) {
    return children;
  } else {
    logOut().then().catch();
  }

  return (
    <Navigate
      to='/halls'
      state={{ from: location }}
      replace></Navigate>
  );
};

export default AdminRoute;
