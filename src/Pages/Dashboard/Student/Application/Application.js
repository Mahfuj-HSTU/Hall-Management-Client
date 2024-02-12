import toast from 'react-hot-toast';
import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../Shared/Loading/Loading';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';

const Application = () => {
  const { user, loading } = useContext(AuthContext);
  const details = useSelector((state) => state?.roleReducer.role);
  const dispatch = useDispatch();

  if (loading) {
    <Loading></Loading>;
  }

  useEffect(() => {
    user?.email && dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  // console.log(user, details);
  const { data: student = [] } = useQuery({
    queryKey: ['students'],
    queryFn: () =>
      fetch(`${ServerLink}/api/students/${details.sid}`).then((res) =>
        res.json()
      ),
  });
  console.log(student);

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
          if (data.acknowledged) {
            console.log(data);
            toast.success('Applied successfully');
          }
        });
    }
  };
  const fff = () => {
    // handleHallSeat();
    window.setTimeout(handleHallSeat(), 6000);
    // window.setTimeout(handleHallClearence(), 6000);
  };

  const handleHallClearence = () => {
    const agree = window.confirm(`Do you want to apply for hall clearence?`);
    const info = {
      ...student,
      status: 'pending',
      type: 'HallClearence',
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
          if (data.acknowledged) {
            console.log(data);
            toast.success('Applied successfully');
          }
        });
    }
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
              <button
                disabled={student.sid ? null : 'disabled'}
                onClick={fff}
                className='btn btn-success px-6'>
                Apply
              </button>
            </div>
            <div className='shadow-xl shadow-slate-300 rounded-xl p-5'>
              <h2 className='text-3xl mb-5'>Apply for Hall Clearence</h2>
              <button
                onClick={handleHallClearence}
                className='btn btn-success px-6'>
                Apply
              </button>
            </div>
          </span>
          <div>
            <h2 className='text-3xl mb-5 mt-16'>Application progess</h2>
            <ul className='steps steps-vertical lg:steps-horizontal'>
              <li className='step step-primary'>Received</li>
              <li className='step step-primary'>Checking</li>
              <li className='step'>Purchase</li>
              <li className='step'>Receive Product</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;
