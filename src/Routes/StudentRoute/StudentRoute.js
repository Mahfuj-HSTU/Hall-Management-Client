import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { fetchRole } from '../../Hooks/Role/useRoleSlice';
import Loading from '../../Pages/Shared/Loading/Loading';
import { useGetUserQuery } from '../../features/api/userApi';

const StudentRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const location = useLocation();
  const { data, isLoading } = useGetUserQuery(user?.email);
  const student = 'student';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  if (user && data?.role === student) {
    return children;
  }
  logOut().then().catch();

  return (
    <Navigate
      to='/halls'
      state={{ from: location }}
      replace></Navigate>
  );
};

export default StudentRoute;
