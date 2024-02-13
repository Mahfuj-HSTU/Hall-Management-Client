import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../Shared/Loading/Loading';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { useQuery } from '@tanstack/react-query';
import StudentDetails from '../AllStudents/StudentDetails';
import toast from 'react-hot-toast';

const Applications = () => {
  const { user, loading } = useContext(AuthContext);
  const [selected, setSelected] = useState('');
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
    queryKey: ['applications'],
    queryFn: () =>
      fetch(`${ServerLink}/api/applications`).then((res) => res.json()),
  });

  const filteredApplications = applications?.filter((user) => {
    refetch();
    return user.hall === details.hallName;
  });

  // console.log(filteredApplications);
  const handleAccept = (event) => {
    const info = {
      ...event,
      status: 'accept',
    };
    // console.log(info);
    fetch(`${ServerLink}/api/applications`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((event) => {
        toast.success('updated successfully');
        refetch();
      });
  };

  return (
    <div className='mt-5'>
      <h2 className='text-4xl mb-7'>Applied Students</h2>
      <table className='table table-compact w-full border-2 shadow-lg md:mx-4 mx-0 overflow-x-scroll'>
        <thead className='text-center bg-slate-200 font-semibold'>
          <tr className='text-[17px]'>
            <th className='border-2 border-r-slate-300'>SL No.</th>
            <th className='border-2 border-r-slate-300 px-0'>Name</th>
            <th className='border-2 border-r-slate-300 px-0'>Student Id</th>
            <th className='border-2 border-r-slate-300 px-0'>
              Application for
            </th>
            <th className='border-2 border-r-slate-300 px-0'>Department</th>
            <th className='border-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications
            ?.sort((a, b) => a.sid - b.sid)
            .map((user, i) => (
              <tr
                key={user?._id}
                className='border-2'>
                <td className='border-2 text-center w-14'>{i + 1}</td>
                <td className='border-2 font-semibold w-60'>
                  <label
                    htmlFor='my-modal'
                    className='link link-primary'
                    onClick={() => setSelected(user)}>
                    {user.name}
                  </label>
                </td>
                <td className='border-2 w-40'>{user.sid}</td>
                <td className='border-2 w-52'>{user.type}</td>
                <td className='border-2 w-44'>{user.dept}</td>
                <td className='border-2 text-center p-0 w-56'>
                  <button
                    onClick={() => handleAccept(user)}
                    className='btn btn-sm btn-success '>
                    Accept
                  </button>
                  <button className='btn btn-sm btn-error ml-3'>Reject</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {selected && <StudentDetails selected={selected}></StudentDetails>}
    </div>
  );
};

export default Applications;
