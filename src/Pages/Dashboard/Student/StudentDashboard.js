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

  if (isLoading) {
    <Loading />;
    refetch();
  }

  return (
    <div>
      {isLoading ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : (
        <div className="mx-auto bg-cyan-200 rounded-lg my-3 max-w-[1100px] ml-3">
          <div className="flex flex-col p-5">
            {/* <div className="flex bg-white items-center mt-16 rounded-lg"> */}
            <div className="m-5 bg-white shadow-lg rounded-lg -mt-10">
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
              <div className="p-2 rounded-lg text-left -mt-4"></div>
            </div>
            {/* </div> */}
            {/* profile section  */}

            <div className="flex flex-col md:flex-row justify-start mt-5 bg-white rounded-lg">
              {/* <div className="flex-col flex gap-5 text-center md:text-left w-full mt-2 md:mx-5 pb-5 "> */}
              <div className="modal-box w-full">
                <h2 className="text-2xl font-semibold">Student Details</h2>
                <div className="card w-full">
                  <h2 className="card-title">Name:</h2>
                  <p>
                    {' '}
                    <span className="font-semibold">Student ID:</span>
                  </p>
                  <p>
                    {' '}
                    <span className="font-semibold">Department:</span>
                  </p>
                  <p>
                    {' '}
                    <span className="font-semibold">Email:</span>{' '}
                  </p>
                  <p>
                    {' '}
                    <span className="font-semibold">Mobile:</span>{' '}
                  </p>
                  <p>
                    {' '}
                    <span className="font-semibold">Father Name:</span>
                  </p>
                  <p>
                    {' '}
                    <span className="font-semibold">Father Mobile:</span>
                  </p>
                  <p>
                    {' '}
                    <span className="font-semibold">Mother Name:</span>
                  </p>
                  <p>
                    {' '}
                    <span className="font-semibold">Mother Mobile:</span>
                  </p>
                  <p>
                    {' '}
                    <span className="font-semibold">Present Address:</span>{' '}
                  </p>
                  <p>
                    {' '}
                    <span className="font-semibold">
                      Parmanent Address:
                    </span>{' '}
                  </p>
                </div>
              </div>{' '}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
