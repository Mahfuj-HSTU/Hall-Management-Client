import React, { useContext, useEffect, useRef, useState } from 'react';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';
import Loading from '../../../Shared/Loading/Loading';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import StudentDetails from './StudentDetails';
import AddStudent from './AddStudent';

const AllStudents = () => {
  const { user, loading } = useContext(AuthContext);
  const inputRef = useRef(null);
  const [search, setSearch] = useState('');
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
  const { data: students = [], refetch } = useQuery({
    queryKey: ['students'],
    queryFn: () =>
      fetch(`${ServerLink}/api/students`).then((res) => res.json()),
  });
  // console.log(students);

  const searchUser = students?.filter((user) => {
    if (search === '' && user.hall === details.hallName) {
      return true;
    } else if (
      user?.sid.toString().includes(search?.toString()) &&
      user.hall === details.hallName
    ) {
      return true;
    }
    return null;
  });

  const sortedUser = searchUser.sort((a, b) => {
    const aSidPrefix = Math.floor(a.sid / 100000);
    const bSidPrefix = Math.floor(b.sid / 100000);
    // console.log(aSidPrefix, bSidPrefix);

    // if (aSidPrefix === bSidPrefix) {
    return b.cgpa - a.cgpa;
    // }

    // return aSidPrefix - bSidPrefix;
  });

  console.log(sortedUser);

  const handleSearch = () => {
    const searchData = inputRef.current.value;
    setSearch(searchData);
  };

  const handleDelete = (usr) => {
    // console.log(user);
    const agree = window.confirm(
      `Are you sure? you want to delete: ${usr.name}`
    );
    if (agree) {
      refetch();
      fetch(`${ServerLink}/api/users/${usr.sid}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('user deleted successfully.');
            refetch();
          }
        });
    }
  };

  return (
    <div className='md:my-5 mb-5'>
      <div className='lg:flex lg:justify-between mb-5 p-4 pt-12 md:pt-6 lg:pt-5 bg-slate-300 rounded-lg md:ml-4'>
        <div className='lg:flex mlg:justify-between gap-9'>
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
        {/* <input
          className='hidden lg:block btn btn-primary rounded-xl w-32 '
          value='Add student'
        /> */}
      </div>
      <table className='table table-compact w-full border-2 shadow-lg md:mx-4 mx-0 overflow-x-scroll'>
        <thead className='text-center bg-slate-200 font-semibold'>
          <tr className='text-[17px]'>
            <th className='border-2 border-r-slate-300'>SL No.</th>
            <th className='border-2 border-r-slate-300'>Name</th>
            <th className='border-2 border-r-slate-300'>Student Id</th>
            <th className='border-2 border-r-slate-300'>Department</th>
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
                <td className='border-2 font-semibold'>
                  <label
                    htmlFor='my-modal'
                    className='link link-primary'
                    onClick={() => setSelected(user)}>
                    {user.name}
                  </label>
                </td>
                <td className='border-2'>{user.sid}</td>
                <td className='border-2'>{user.dept}</td>
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
        details={details}
        refetch={refetch}
      />
      {selected && <StudentDetails selected={selected}></StudentDetails>}
    </div>
  );
};

export default AllStudents;
