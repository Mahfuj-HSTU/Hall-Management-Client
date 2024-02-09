import React, { useContext, useEffect, useRef, useState } from 'react';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';
import Loading from '../../../Shared/Loading/Loading';
import { MdOutlineDeleteOutline } from 'react-icons/md';

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
  const { data: students = [], isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: () =>
      fetch(`${ServerLink}/api/students`).then((res) => res.json()),
  });
  // console.log(students);

  // const filteredUser = students?.filter(
  //   (user) => user.hall === details.hallName
  // );

  const searchUser = students?.filter((user) => {
    if (search === '' && user.hall === details.hallName) {
      return true;
    } else if (
      user.sid.toString().includes(search.toString()) &&
      user.hall === details.hallName
    ) {
      return true;
    }
  });

  console.log(searchUser);

  const handleSearch = () => {
    const searchData = inputRef.current.value;
    setSearch(searchData);
  };

  return (
    <div className='my-5'>
      <div className='lg:flex lg:justify-between mb-5 p-4 pt-7 bg-slate-300 rounded-lg ml-4'>
        <div className='lg:flex mlg:justify-between gap-9'>
          <span className='flex justify-between gap-5'>
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
        <input
          className='hidden lg:block btn btn-primary rounded-xl w-32'
          value='Add student'
        />
      </div>
      {/* <div className='bg-slate-200 mx-4 pt-5'>
        <h2 className='text-3xl font-semibold'>Student List</h2>
        <div className='text-center lg:text-left pb-5'>
          <input
            ref={inputRef}
            id='searchName'
            className='ml-4 p-2 rounded fs-4 mt-5 w-72 border-2'
            type='text'
            placeholder='Search'
            onChange={handleSearch}
          />
        </div>
      </div> */}
      <table className='table table-compact w-full border-2 shadow-lg mx-4'>
        <thead className='text-center bg-slate-200 font-semibold'>
          <tr>
            <th className='border-2 border-r-slate-300'>Name</th>
            <th className='border-2 border-r-slate-300'>Student Id</th>
            <th className='border-2 border-r-slate-300'>Department</th>
            <th className='border-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchUser.map((user) => (
            <tr
              key={user?._id}
              className='border-2'>
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
                <button className='text-red-600 text-2xl'>
                  <MdOutlineDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
