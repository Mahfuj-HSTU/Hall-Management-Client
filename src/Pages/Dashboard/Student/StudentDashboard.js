import React, { useContext } from 'react';
import Profile from './Profile/Profile';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../Hooks/useServerLink';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const StudentDashboard = () => {
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
  const { data: application = {} } = useQuery({
    queryKey: ['application'],
    queryFn: () =>
      fetch(`${ServerLink}/api/applications/${us?.sid}`).then((res) =>
        res.json()
      ),
  });
  console.log(application);


  if (isLoading) {
    <Loading />;
    refetch();
  }

  return (
    <div>
      {isLoading ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : (
        <div className=" flex flex-col text-center md:text-left  mt-2 md:mx-5 bg-gray-100   ">
          <div className="flex flex-row md:flex-row  gap-5 p-5">
            <div className="w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3">
              <h2 className="text-2xl font-semibold">Your Profile</h2>
              <img
                className="w-40 h-44 p-2 rounded-lg"
                src={student.img}
                alt="user img"
              />
              <h1 className="text-3xl font-semibold">Name: {student.name}</h1>
              <span>ID: {student.sid}</span>
              <br />
              <span>
                <p>Dept: {student.dept} </p>
              </span>
            </div>
            <div className="w-full  shadow-inherit rounded-lg bg-white drop-shadow-lg p-3">
              <h2 className="text-2xl font-semibold">Applications</h2>
              <p>Applied for {application.type} </p>
            </div>
          </div>
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
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
