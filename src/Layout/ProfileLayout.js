import React, { useContext, useEffect } from 'react';
import hstu from '../images/HSTU_Logo.png';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Pages/Shared/Loading/Loading';
import { useGetUserQuery } from '../features/api/userApi';
import { useGetHallsQuery } from '../features/api/hallApi';

const ProfileLayout = () => {
  // const hall = useLoaderData();
  const { user, loading, logOut } = useContext(AuthContext);
  const {
    data: details,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  } = useGetUserQuery(user?.email);
  // const dispatch = useDispatch();
  const role = details?.role;
  const superAdmin = 'superAdmin';
  const admin = 'admin';
  const student = 'student';
  // console.log(role);

  const {
    data: halls,
    isLoading: hallIsLoading,
    isFetching: hallIsFatching,
  } = useGetHallsQuery();

  const hall = halls?.find((hl) => hl.name === details?.hallName);
  console.log(hall);

  useEffect(() => {
    if (isLoading || loading || isFetching || hallIsLoading || hallIsFatching) {
      <Loading></Loading>;
    }
  }, [isLoading, loading, isFetching, hallIsLoading, hallIsFatching]);

  if (isError) {
    return <div>Error to fetching data.</div>;
  }

  if (!details) {
    return <div>User not found.</div>;
  }
  if (!hall) {
    return (
      <div>
        Hall not found.
        <Loading></Loading>
      </div>
    );
  }

  const handleLogOut = () => {
    logOut().then().catch();
  };

  // useEffect(() => {
  //   user?.email && dispatch(fetchRole(user?.email));
  // }, [dispatch, user?.email]);

  return (
    <div>
      {isSuccess && (
        <div className='drawer drawer-mobile lg:drawer-open relative'>
          <input
            id='my-drawer-2'
            type='checkbox'
            className='drawer-toggle'
          />
          <label
            htmlFor='my-drawer-2'
            className='btn btn-ghost lg:hidden absolute top-3 left-4 z-[1]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <div className='drawer-content z-[0]'>
            {/* Page content here */}
            <Outlet></Outlet>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer-2'
              aria-label='close sidebar'
              className='drawer-overlay'></label>
            <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between'>
              <div>
                <div className='flex justify-center normal-case mb-5'>
                  <img
                    className='h-14'
                    src={hstu}
                    alt=''
                    width='50px'
                    height='50px'
                  />
                </div>
                <Link
                  to={`/hall/${hall?._id}`}
                  className='font-semibold link-hover'>
                  {details?.hallName}
                </Link>
                <div className='divider divider-primary'></div>
                {user?.email && (
                  <>
                    {role === superAdmin && <></>}
                    {role === admin && (
                      <>
                        <li className='font-semibold'>
                          <Link to={`/dashboard/${hall?._id}/admin`}>
                            Dashboard
                          </Link>
                        </li>
                        <li className='font-semibold'>
                          <Link to={`/dashboard/${hall._id}/admin/profile`}>
                            Profile
                          </Link>
                        </li>
                        <li className='font-semibold'>
                          <Link to={`/dashboard/${hall._id}/admin/students`}>
                            All Students
                          </Link>
                        </li>
                        <li className='font-semibold'>
                          <Link to={`/dashboard/${hall._id}/admin/application`}>
                            Applications
                          </Link>
                        </li>
                        <li className='font-semibold'>
                          <Link to={`/dashboard/${hall._id}/admin/add-notice`}>
                            Create Notice
                          </Link>
                        </li>
                        <li className='font-semibold'>
                          <Link to={`/dashboard/${hall._id}/admin/rooms`}>
                            Rooms
                          </Link>
                        </li>
                      </>
                    )}
                    {role === student && (
                      <>
                        <li className='font-semibold'>
                          <Link to={`/dashboard/${hall._id}/student`}>
                            Dashboard
                          </Link>
                        </li>
                        <li className='font-semibold'>
                          <Link to={`/dashboard/${hall._id}/student/profile`}>
                            Profile
                          </Link>
                        </li>
                        <li className='font-semibold'>
                          <Link
                            to={`/dashboard/${hall._id}/student/application`}>
                            Applications
                          </Link>
                        </li>
                      </>
                    )}
                    <li className='font-semibold'>
                      <button onClick={handleLogOut}>Log Out</button>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileLayout;
