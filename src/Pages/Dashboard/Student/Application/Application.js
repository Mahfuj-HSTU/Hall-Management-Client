import toast from 'react-hot-toast';
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ServerLink } from '../../../../Hooks/useServerLink';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
// import Loading from '../../../Shared/Loading/Loading';

const Application = () => {
  const { user } = useContext(AuthContext);
  const { data: us = {}} = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      fetch(`${ServerLink}/api/users/${user?.email}`).then((res) => res.json()),
  });
  
  // console.log(us);
  const sid = us.sid;
  const hallName = us.hallName;
  const status = 'pending';
  // console.log(sid, hallName);
  // const {
  //   data: student = us,
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ['student'],
  //   queryFn: () =>
  //     fetch(`${ServerLink}/api/students/${us?.sid}`).then((res) => res.json()),
  // });
  // console.log(student.sid)
  // if (isLoading) {
  //   <Loading />;
  //   refetch();
  // }
  const saveApplication = (user) => {
    fetch(`${ServerLink}/api/applications`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // console.log(data);
          toast.success('Applied successfully');
        }
      });
  };
  // console.log(us.sid);

  // const sid = us.sid;
  // const hallName = us.hallName;
//   const interval = setInterval(() => {
// }, 1000);
const handleHallSeat = (user) => {
  const agree = window.confirm(`Do you want to apply for hall seat?`);
  if (agree) {
    // const status = 'pending';
    // console.log(sid, hallName,status);
    saveApplication({ sid, hallName, status });
    toast.success('Apply successfull');
  }
};
const fff=()=>{
  // handleHallSeat();
  window.setTimeout(handleHallSeat(), 60000);
}

  const handleHallClearence = (user) => {
    const agree = window.confirm(`Do you want to apply for hall clearence?`);
    if (agree) {
      toast.success('Apply successfull');
    }
  };

  return (
    <div className="grid place-items-center h-full mx-5">
      <span className="grid grid-cols-2 w-full gap-9">
        <div className="shadow-xl shadow-slate-300 rounded-xl p-5">
          <h2 className="text-3xl mb-5">Apply for a Hall Seat</h2>
          <button onClick={fff} className="btn btn-success px-6">
            Apply
          </button>
        </div>
        <div className="shadow-xl shadow-slate-300 rounded-xl p-5">
          <h2 className="text-3xl mb-5">Apply for Hall Clearence</h2>
          <button
            onClick={handleHallClearence}
            className="btn btn-success px-6"
          >
            Apply
          </button>
        </div>
      </span>
      <div>
        <h2 className="text-3xl mb-5">Application progess</h2>
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Received</li>
          <li className="step step-primary">Checking</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>
    </div>
  );
};

export default Application;
