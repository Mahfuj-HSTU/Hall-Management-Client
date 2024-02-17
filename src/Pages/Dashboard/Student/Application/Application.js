import toast from 'react-hot-toast';
import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../Shared/Loading/Loading';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';
import HallClearence from './HallClearence';
import { getDateOnly } from '../../../../Hooks/getDateOnly';

const Application = () => {
  const { user, loading } = useContext(AuthContext);
  const details = useSelector((state) => state?.roleReducer.role);
  const dispatch = useDispatch();

  const date = new Date();
  // console.log(getDateOnly(date));

  if (loading) {
    <Loading></Loading>;
  }

  useEffect(() => {
    user?.email && dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  // console.log(user, details);
  const { data: student = [], refetch } = useQuery({
    queryKey: ['students'],
    queryFn: () =>
      fetch(`${ServerLink}/api/students/${details.sid}`).then((res) =>
        res.json()
      ),
  });
  // console.log(student);
  const { data: applications = [] } = useQuery({
    queryKey: ['applications'],
    queryFn: () =>
      fetch(`${ServerLink}/api/applications/${details.sid}`).then((res) =>
        res.json()
      ),
  });
  // console.log(applications);
  const { data: notices = [] } = useQuery({
    queryKey: ['notices'],
    queryFn: () => fetch(`${ServerLink}/api/notice`).then((res) => res.json()),
  });

  const filteredNotice = notices?.find(
    (item) => item.hall === details.hallName
  );

  // if (filteredNotice?.date > getDateOnly(date)) {
  //   console.log('check');
  // }

  const hallSeat = applications?.find((item) => item.type === 'HallSeat');
  const hallClearence = applications?.find(
    (item) => item.type === 'HallClearence'
  );

  const handleHallSeat = () => {
    const agree = window.confirm(`Do you want to apply for hall seat?`);
    const info = {
      ...student,
      status: 'pending',
      type: 'HallSeat',
    };
    if (agree) {
      fetch(`${ServerLink}/api/applications`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged || data.message === 'Application updated.') {
            console.log(data);
            toast.success('Applied successfully');
            refetch();
          }
        });
    }
  };
  const fff = () => {
    // handleHallSeat();
    window.setTimeout(handleHallSeat(), 6000);
    // window.setTimeout(handleHallClearence(), 6000);
  };

  return (
    <div className='mt-16'>
      {!student.sid ? (
        <Loading />
      ) : (
        <div className='grid place-items-center h-full mx-5'>
          <span className='grid grid-cols-2 w-full gap-9'>
            <div className='shadow-xl shadow-slate-400 rounded-xl p-5'>
              <h2 className='text-3xl mb-5'>Apply for a Hall Seat</h2>
              {filteredNotice?.date > getDateOnly(date) ? (
                <button
                  disabled={
                    filteredNotice?.date > getDateOnly(date) ? null : 'disabled'
                  }
                  onClick={fff}
                  className='btn btn-success px-6'>
                  Apply
                </button>
              ) : (
                <h2 className='text-2xl my-5 text-red-500'>
                  Applications will start soon
                </h2>
              )}
            </div>
            <div className='shadow-xl shadow-slate-300 rounded-xl p-5'>
              <h2 className='text-3xl mb-5'>Apply for Hall Clearence</h2>
              <label
                htmlFor='hall-clearence-modal'
                // onClick={handleHallClearence}
                className='btn btn-success px-6'>
                Apply
              </label>
            </div>
          </span>
          <div>
            <h2 className='text-3xl mb-7 mt-20 font-semibold'>
              Application progess
            </h2>
            <div className='md:flex md:justify-between gap-28'>
              <span>
                <h2 className='text-2xl my-5'>Hall Seat Application</h2>
                {!hallSeat ? (
                  <h2 className='text-2xl my-5 text-red-500'>
                    You did not apply
                  </h2>
                ) : (
                  <>
                    {hallSeat.status === 'reject' ? (
                      <h2 className='text-2xl my-5 text-red-500'>
                        Your application is rejected. Please try again later
                      </h2>
                    ) : (
                      <ul className='steps steps-vertical lg:steps-horizontal'>
                        <li
                          className={`step mx-5 ${
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
                        {/* <li className='step'>Accept</li> */}
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
                {!hallClearence ? (
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
                      <ul className='steps steps-vertical lg:steps-horizontal'>
                        <li
                          className={`step mx-5 ${
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
              <HallClearence
                student={student}
                refetch={refetch}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;
