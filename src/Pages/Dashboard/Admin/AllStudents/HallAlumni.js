import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { Years } from '../../../../Utilities/Years';
import { useGetStudentsQuery } from '../../../../features/api/studentApi';
import { useGetUserQuery } from '../../../../features/api/userApi';
import Loading from '../../../Shared/Loading/Loading';
import StudentDetails from './StudentDetails';

const HallAlumni = () => {
  const { user, loading } = useContext(AuthContext);
  const inputRef = useRef(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const allYears = Years(selectedYear);

  const {
    data: students,
    isLoading: studentIsLoading,
    isError: studentIsError,
  } = useGetStudentsQuery();

  const {
    data: userData,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useGetUserQuery(user?.email);

  // console.log(applications);

  if (userIsLoading || studentIsLoading || loading) {
    <Loading />;
  }

  if (userIsError || studentIsError) {
    return <div>Error to fetching data.</div>;
  }

  if (!userData) {
    return (
      <div>
        User not found.
        <Loading />
      </div>
    );
  }

  if (!students) {
    return (
      <div>
        Student not found.
        <Loading />
      </div>
    );
  }

  const searchUser = students?.filter((user) => {
    const studentYear = Math.floor(user?.sid / 100000);
    const selectedYearPrefix = selectedYear ? selectedYear % 100 : null;
    const matchesSearch =
      user?.sid?.toString().includes(search?.toString()) ||
      user?.name?.toLowerCase().includes(search?.toString().toLowerCase()) ||
      user?.dept?.toLowerCase().includes(search?.toString().toLowerCase());
    const matchesHall = user.hall === userData?.hallName;

    // Check if the student is not deleted
    const notDeleted = user?.isDeleted === true;

    if (search === '') {
      if (selectedYearPrefix) {
        return notDeleted && matchesHall && studentYear === selectedYearPrefix;
      } else {
        return notDeleted && matchesHall;
      }
    } else {
      return notDeleted && matchesSearch && matchesHall;
    }
  });

  const handleSearch = () => {
    const searchData = inputRef.current.value;
    setSearch(searchData);
  };

  return (
    <div className='md:my-5 mb-5'>
      <div className='lg:flex lg:justify-between mb-4 p-4 pt-12 md:pt-6 lg:pt-5 bg-slate-300 rounded-lg md:ml-4'>
        <h2 className='text-4xl mb-4'>Alumni Student List</h2>
        <span className='flex gap-16'>
          <input
            ref={inputRef}
            id='searchName'
            className='input input-bordered p-2 w-72 rounded-xl'
            type='text'
            placeholder='Search'
            onChange={handleSearch}
          />
          <select
            value={selectedYear || ''}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className='select select-bordered w-72 max-w-xs'>
            <option
              value=''
              selected>
              Select Session
            </option>
            {allYears?.map((yr, i) => (
              <option
                key={i}
                value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </span>
      </div>
      <h2 className='flex ml-4 mb-2 text-xl font-semibold'>
        Total Alumni Students:{' '}
        <span className='text-red-700 font-bold underline pl-2'>
          {searchUser?.length}
        </span>{' '}
      </h2>
      <table className='table table-compact w-full border-2 shadow-lg md:mx-4 mx-0 overflow-x-scroll'>
        <thead className='text-center bg-slate-200 font-semibold'>
          <tr className='text-[17px]'>
            <th className='border-2 border-r-slate-300'>SL No.</th>
            <th className='border-2 border-r-slate-300'>Name</th>
            <th className='border-2 border-r-slate-300'>Student Id</th>
            <th className='border-2 border-r-slate-300'>Department</th>
          </tr>
        </thead>
        <tbody>
          {searchUser
            ?.sort((a, b) => b.sid - a.sid)
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
              </tr>
            ))}
        </tbody>
      </table>
      {selected && <StudentDetails selected={selected}></StudentDetails>}
    </div>
  );
};

export default HallAlumni;
