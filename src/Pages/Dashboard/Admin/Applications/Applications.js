import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../Shared/Loading/Loading';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { useQuery } from '@tanstack/react-query';

const Applications = () => {
  const { user, loading } = useContext(AuthContext);
  const details = useSelector((state) => state?.roleReducer.role);
  const dispatch = useDispatch();

  if (loading) {
    <Loading></Loading>;
  }

  useEffect(() => {
    user?.email && dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  // console.log(user, details);
  const { data: applications = [], refetch } = useQuery({
    queryKey: ['students'],
    queryFn: () =>
      fetch(`${ServerLink}/api/applications`).then((res) => res.json()),
  });

  const filteredApplications = applications?.filter((user) => {
    //  if (user.hall === details.hallName) {
    //    return true;
    //  } else if (
    //    user?.sid.toString().includes(search?.toString()) &&
    //    user.hall === details.hallName
    //  ) {
    //    return true;
    //  }
    return user.hall === details.hallName;
  });

  console.log(filteredApplications);

  return (
    <div>
      <h2>Applications</h2>
    </div>
  );
};

export default Applications;
