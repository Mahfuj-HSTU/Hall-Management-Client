import React, { useContext, useEffect, useRef, useState } from 'react';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';
import Loading from '../../../Shared/Loading/Loading';

const AllStudents = () => {
  const { user, loading } = useContext(AuthContext);
  const inputRef = useRef(null);
  const [search, setSearch] = useState('');
  const details = useSelector((state) => state?.roleReducer.role);
  const dispatch = useDispatch();

  if (loading) {
    <Loading></Loading>;
  }

  useEffect(() => {
    user?.email && dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  // console.log(user, details);
  const {
    data: students = [],
    isLoading,
    refetch,
  } = useQuery({
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
    <div>
      <div className=' text-center lg:text-left pb-5'>
        <input
          ref={inputRef}
          id='searchName'
          className='p-2 rounded fs-4 mt-5 w-72 border-2'
          type='text'
          placeholder='Search'
          onChange={handleSearch}
        />
      </div>
      <h2>All Students</h2>
    </div>
  );
};

export default AllStudents;
