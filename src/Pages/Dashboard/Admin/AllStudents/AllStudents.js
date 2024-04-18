import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import StudentDetails from './StudentDetails';
import AddStudent from './AddStudent';
import {
  useGetStudentsQuery,
  useUpdateStudentMutation,
} from '../../../../features/api/studentApi';
import { useGetUserQuery } from '../../../../features/api/userApi';
import {
  useDeleteApplicationMutation,
  useGetApplicationsQuery,
} from '../../../../features/api/applicationApi';
import { useRemoveStudentMutation } from '../../../../features/api/roomsApi';
import toast from 'react-hot-toast';

const AllStudents = () => {
  const { user, loading } = useContext(AuthContext);
  const inputRef = useRef(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');
  // console.log(selected);

  const {
    data: students,
    isLoading: studentIsLoading,
    isError: studentIsError,
    refetch,
  } = useGetStudentsQuery();

  const {
    data: userData,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useGetUserQuery(user?.email);

  const { data: applications, isLoading } = useGetApplicationsQuery();
  const [updateStudent, { isSuccess }] = useUpdateStudentMutation();
  const [removeStudent, { isSuccess: removeIsSuccess }] =
    useRemoveStudentMutation();
  const [deleteApplication] = useDeleteApplicationMutation();
  // console.log(applications);

  if (userIsLoading || studentIsLoading || loading || isLoading) {
    <Loading />;
  }

  if (isSuccess && removeIsSuccess) {
    toast.success('Student remove successfully.');
  }

  if (userIsError || studentIsError) {
    return <div>Error to fetching data.</div>;
  }

  if (!userData) {
    return <div>User not found.</div>;
  }
  if (!applications) {
    return <div>Applications not found.</div>;
  }

  if (!students) {
    return <div>Student not found.</div>;
  }

  const searchUser = students?.filter((user) => {
    if (search === '' && user.hall === userData?.hallName) {
      return true;
    } else if (
      user?.sid?.toString().includes(search?.toString()) &&
      user?.hall === userData?.hallName
    ) {
      return true;
    }
    return null;
  });

  const handleSearch = () => {
    const searchData = inputRef.current.value;
    setSearch(searchData);
  };

  const handleDelete = (usr) => {
    const application = applications?.find(
      (item) => item?.type === 'HallSeat' && item?.sid === usr?.sid
    );
    const agree = window.confirm(
      `Are you sure? you want to release "${usr?.name}" from hall.`
    );
    if (agree) {
      const info = {
        ...usr,
        room: '',
      };
      const room = {
        room: usr.room,
        hall: usr.hall,
        id: usr.sid,
      };
      // console.log(room);
      removeStudent(room);
      updateStudent(info);
      if (application) {
        console.log(application);
        deleteApplication(application);
      }
      refetch();
    }
  };

  return (
    <div className='md:my-5 mb-5'>
      <div className='lg:flex lg:justify-between mb-5 p-4 pt-12 md:pt-6 lg:pt-5 bg-slate-300 rounded-lg md:ml-4'>
        <div className='lg:flex lg:justify-between gap-9'>
          <span className='flex justify-between gap-5 mb-3'>
            <h2 className='text-4xl mb-4'>Student List</h2>
            <input
              className='lg:hidden block btn btn-primary rounded-xl w-20'
              value='Add'
            />
          </span>
          <input
            ref={inputRef}
            id='searchName'
            className='input input-bordered p-2 w-72 rounded-xl'
            type='text'
            placeholder='Search'
            onChange={handleSearch}
          />
        </div>

        <label
          htmlFor='add-modal'
          className='hidden btn btn-info rounded-xl w-32 lg:grid place-items-center'>
          Add Student
        </label>
      </div>
      <table className='table table-compact w-full border-2 shadow-lg md:mx-4 mx-0 overflow-x-scroll'>
        <thead className='text-center bg-slate-200 font-semibold'>
          <tr className='text-[17px]'>
            <th className='border-2 border-r-slate-300'>SL No.</th>
            <th className='border-2 border-r-slate-300'>Name</th>
            <th className='border-2 border-r-slate-300'>Student Id</th>
            <th className='border-2 border-r-slate-300'>Department</th>
            <th className='border-2 border-r-slate-300'>R. Status</th>
            <th className='border-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchUser
            ?.sort((a, b) => a.sid - b.sid)
            .map((user, i) => (
              <tr
                key={user?._id}
                className='border-2'>
                <td className='border-2 text-center w-16'>{i + 1}</td>
                <td className='border-2 font-semibold w-[300px]'>
                  <label
                    htmlFor='my-modal'
                    className='link link-primary'
                    onClick={() => setSelected(user)}>
                    {user.name}
                  </label>
                </td>
                <td className='border-2 text-center'>{user.sid}</td>
                <td className='border-2 w-80'>{user.dept}</td>
                <td className='border-2 text-center'>
                  {user?.room || 'Non-Residential'}
                </td>
                <td className='border-2 text-center p-0'>
                  <button
                    onClick={() => handleDelete(user)}
                    className='text-red-600 text-2xl'>
                    <MdOutlineDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <AddStudent
        details={userData}
        refetch={refetch}
      />
      {selected && <StudentDetails selected={selected}></StudentDetails>}
    </div>
  );
};

export default AllStudents;
