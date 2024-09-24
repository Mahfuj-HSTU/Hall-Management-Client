import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import HallClearence from './HallClearence';
import { getDateOnly } from '../../../../Hooks/getDateOnly';
import { useGetStudentDetailsQuery } from '../../../../features/api/studentApi';
import { useGetApplicationQuery } from '../../../../features/api/applicationApi';
import { useGetUserQuery } from '../../../../features/api/userApi';
import { useGetNoticeQuery } from '../../../../features/api/noticeApi';
import HallSeat from './HallSeat';

const Application = () => {
  const { user, loading } = useContext(AuthContext);
  const date = new Date();

  if (loading) {
    <Loading></Loading>;
  }
  const {
    data: userData,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useGetUserQuery(user?.email);
  const {
    data: student,
    isLoading: studentIsLoading,
    isError: studentIsError,
    refetch,
  } = useGetStudentDetailsQuery(userData?.sid);
  // console.log(student);

  const { data: applications } = useGetApplicationQuery(userData?.sid);
  // console.log(applications);
  const { data: notices, isLoading: noticeIsLoading } = useGetNoticeQuery();

  if (userIsLoading || studentIsLoading || noticeIsLoading) {
    <Loading />;
  }
  if (userIsError || studentIsError) {
    return <div>Error to fetching data.</div>;
  }
  if (!userData) {
    return <div>User not found.</div>;
  }
  if (!student) {
    return <div>Student not found.</div>;
  }

  const filteredNotice = notices?.find(
    (item) => item.hall === userData.hallName && item.type === 'HallSeat'
  );

  const hallSeat = applications?.find((item) => item.type === 'HallSeat');
  const hallClearence = applications?.find(
    (item) => item.type === 'HallClearence'
  );

  return (
    <div className='mt-16'>
      {studentIsLoading ? (
        <Loading />
      ) : (
        <div className='grid place-items-center h-full mx-5'>
          <span className='grid md:grid-cols-2 w-full gap-9'>
            <div className='shadow-xl shadow-slate-300 rounded-xl p-5'>
              <h2 className='text-3xl mb-5'>Apply for a Hall Seat</h2>
              {student.isDeleted ? (
                <h2 className='text-red-700 text-xl'>
                  Your Studentship is Over
                </h2>
              ) : (
                <>
                  {student?.room ? (
                    <h2 className='text-2xl font-semibold my-5 text-blue-700'>
                      Room No: {student?.room}
                    </h2>
                  ) : (
                    <>
                      {!filteredNotice ? (
                        <h2 className='text-2xl my-5 text-red-500'>
                          Applications will start soon
                        </h2>
                      ) : (
                        <>
                          {filteredNotice?.date > getDateOnly(date) ? (
                            <label
                              htmlFor='hall-seat-modal'
                              // onClick={handleHallSeat}
                              className='btn btn-success px-6'>
                              Apply
                            </label>
                          ) : (
                            <h2 className='text-2xl my-5 text-red-500'>
                              Applications date is over.
                            </h2>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
            <div className='shadow-xl shadow-slate-300 rounded-xl p-5'>
              <h2 className='text-3xl mb-5'>Apply for Hall Clearence</h2>
              {student.isDeleted ? (
                <h2 className='text-red-700 text-xl'>
                  Your Studentship is Over
                </h2>
              ) : (
                <label
                  htmlFor='hall-clearence-modal'
                  className='btn btn-success px-6'>
                  Apply
                </label>
              )}
            </div>
          </span>
          <div>
            <h2 className='text-3xl mb-7 mt-20 font-semibold'>
              Application progess
            </h2>
            <div className='md:flex md:justify-between gap-24 lg:gap-32'>
              <span>
                <h2 className='text-2xl my-5'>Hall Seat Application</h2>
                {!hallSeat || student.isDeleted ? (
                  <h2 className='text-2xl my-5 text-red-500'>
                    You did not apply
                  </h2>
                ) : (
                  <>
                    {hallSeat.status === 'reject' ? (
                      <h2 className='text-2xl my-5 text-red-500'>
                        Your application is rejected. No more seats <br /> are
                        available right now. <br />
                        Please try again later
                      </h2>
                    ) : (
                      <ul className='steps steps-vertical md:steps-horizontal'>
                        <li
                          className={`step md:mx-5 ${
                            (hallSeat?.status === 'pending' ||
                              hallSeat?.status === 'accept') &&
                            'step-primary'
                          }`}>
                          Received
                        </li>
                        <li
                          className={`step ${
                            (hallSeat?.status === 'pending' ||
                              hallSeat?.status === 'accept') &&
                            'step-primary'
                          }`}>
                          Pending
                        </li>
                        <li
                          className={`step ${
                            hallSeat?.status === 'accept' && 'step-primary'
                          }`}>
                          Accept
                        </li>
                      </ul>
                    )}
                  </>
                )}
              </span>
              <span>
                <h2 className='text-2xl my-5'>Hall Clearence Application</h2>
                {!hallClearence || student.isDeleted ? (
                  <h2 className='text-2xl my-5 text-red-500'>
                    You did not apply
                  </h2>
                ) : (
                  <>
                    {hallClearence.status === 'reject' ? (
                      <h2 className='text-2xl my-5 text-red-500'>
                        Your application is rejected. <br /> Please try again
                        later
                      </h2>
                    ) : (
                      <ul className='steps steps-vertical md:steps-horizontal'>
                        <li
                          className={`step md:mx-5 ${
                            (hallClearence?.status === 'pending' ||
                              hallClearence?.status === 'accept') &&
                            'step-primary'
                          }`}>
                          Received
                        </li>
                        <li
                          className={`step ${
                            (hallClearence?.status === 'pending' ||
                              hallClearence?.status === 'accept') &&
                            'step-primary'
                          }`}>
                          Pending
                        </li>
                        {/* <li className='step'>Accept</li> */}
                        <li
                          className={`step ${
                            hallClearence?.status === 'accept' && 'step-primary'
                          }`}>
                          Accept
                        </li>
                      </ul>
                    )}
                  </>
                )}
              </span>
            </div>
            <HallSeat
              student={student}
              refetch={refetch}
            />
            <HallClearence
              student={student}
              refetch={refetch}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;
