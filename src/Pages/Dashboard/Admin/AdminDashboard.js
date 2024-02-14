import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../Hooks/useServerLink';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: us = {} } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      fetch(`${ServerLink}/api/users/${user?.email}`).then((res) => res.json()),
  });
  // console.log(us);

  const {
    data: student = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['student'],
    queryFn: () =>
      fetch(`${ServerLink}/api/students/${us?.sid}`).then((res) => res.json()),
  });
  // console.log(student);
  // const { data: applications = [],  } = useQuery({
  //   queryKey: ['applications'],
  //   queryFn: () =>
  //     fetch(`${ServerLink}/api/applications`).then((res) => res.json()),
  // });

  // const filteredApplications = applications?.filter((user) => {
  //   refetch();
  //   return user.hall === details.hallName;
  // });

  // const { data: application = {} } = useQuery({
  //   queryKey: ['application'],
  //   queryFn: () =>
  //     fetch(`${ServerLink}/api/applications/${us?.sid}`).then((res) =>
  //       res.json()
  //     ),
  // });
  // const { data: applications = [] } = useQuery({
  //   queryKey: ['applications'],
  //   queryFn: () =>
  //     fetch(`${ServerLink}/api/applications/${us?.sid}`).then((res) =>
  //       res.json()
  //     ),
  // });
  // console.log(application);

  if (isLoading) {
    <Loading />;
    refetch();
  }

  return (
    <div>
      {isLoading ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : (
        <div className=" flex flex-col text-center md:text-left  mt-8 md:mx-5 bg-gray-100   ">
          <div className="w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3 text-center items-center justify-center">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={student.img} alt="img"/>
              </div>
            </div>
            <h1 className="text-3xl font-semibold">{student.name}</h1>
            <span>ID: {student.sid}</span>
            <br />
            <span>
              <p>{student.dept} </p>
            </span>
          </div>{' '}
          <div className="flex flex-row md:flex-row  gap-5 p-5">
            <div className="w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3">
              <h2 className="text-2xl font-semibold">Contacts</h2>
              <p>Mobile: {student.mobile}</p>
              <p>Email : {student.email}</p>
            </div>
            <div className="w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3">
              <h2 className="text-2xl font-semibold">Address</h2>
              <p>Present address : {student.present}</p>
              <p>Parmanent address : {student.parmanent}</p>
            </div>
          </div>
          <div className="flex flex-row md:flex-row  gap-5 p-5">
            <div className="w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3">
              <h2 className="text-2xl font-semibold">Applications</h2>
              {/* <p>Applied for {application.type} </p> */}
            </div>{' '}
            <div className="w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3">
              <h2 className="text-2xl font-semibold">Notifications</h2>
              {/* <p>Applied for {application.type} </p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
