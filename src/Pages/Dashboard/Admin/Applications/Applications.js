import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import StudentDetails from '../AllStudents/StudentDetails';
import toast from 'react-hot-toast';
import {
  useGetApplicationsQuery,
  useUpdateApplicationMutation,
} from '../../../../features/api/applicationApi';
import RoomAllocation from './RoomAllocation';
import { sendEmail } from '../../../../Utilities/emailService';
import FilterApplications from './FilterApplications';
import { useGetUserQuery } from '../../../../features/api/userApi';

const Applications = () => {
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [salary, setSalary] = useState(false); // Initially false
  const [distance, setDistance] = useState(false); // Initially false
  const { data: details } = useGetUserQuery(user?.email);

  const { data: applications, refetch, isLoading } = useGetApplicationsQuery();
  const [updateApplication, { isSuccess }] = useUpdateApplicationMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Application Action Performed');
    }
  }, [isSuccess]);

  // Filter applications based on selected criteria
  const filteredApplications = applications?.filter((application) => {
    const studentYear = Math.floor(application?.sid / 100000);
    const selectedYearPrefix = selectedYear ? selectedYear % 100 : null;
    const matchesYear = selectedYear
      ? studentYear === selectedYearPrefix
      : true;
    const matchesType = selectedValue
      ? application?.type.toLowerCase().includes(selectedValue.toLowerCase())
      : true;
    const matchesSalary = salary ? application.salary !== undefined : true;
    const matchesDistance = distance
      ? application.distance !== undefined
      : true;

    return (
      application.hall === details.hallName &&
      application.status === 'pending' &&
      matchesYear &&
      matchesType &&
      matchesSalary &&
      matchesDistance
    );
  });

  const sortedApplication = filteredApplications?.sort((a, b) => {
    if (distance && a.distance !== undefined && b.distance !== undefined) {
      return b.distance - a.distance;
    }
    if (salary && a.salary !== undefined && b.salary !== undefined) {
      return a.salary - b.salary;
    }
    return b.cgpa - a.cgpa;
  });

  const handleAccept = (event) => {
    const templateParams = {
      to_name: event.name,
      from_name: 'HSTU',
      subject: `Hall Clearance Application`,
      message: ``,
      to_mail: event.email,
    };
    const info = {
      ...event,
      status: 'accept',
    };
    if (event.type === 'HallClearence') {
      const agree = window.confirm(
        `${event.name}'s payment status is ${event?.pinfo}. Do you want to accept?`
      );
      if (agree) {
        templateParams.message = `Your hall clearance application has been accepted.`;
        sendEmail(templateParams)
          .then((response) => {
            alert('Mail Sent!');
          })
          .catch((error) => {
            alert(JSON.stringify(error));
          });
        updateApplication(info);
        refetch();
      }
    } else {
      updateApplication(info);
      refetch();
    }
  };

  const handleReject = (event) => {
    const templateParams = {
      to_name: event.name,
      from_name: 'HSTU',
      subject: `Hall Clearance Application`,
      message: ``,
      to_mail: event.email,
    };
    const info = {
      ...event,
      status: 'reject',
    };
    if (event.type === 'HallClearence')
      templateParams.message = `Your hall clearance application has been rejected. Please provide the correct payment information.`;
    else {
      templateParams.subject = `Hall Seat Application`;
      templateParams.message = `Your hall seat application has been rejected. Try again next time!!`;
    }
    sendEmail(templateParams)
      .then((response) => {
        alert('Mail Sent!');
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
    updateApplication(info);
  };

  return (
    <div className='mt-5'>
      <div className='lg:flex mb-5 p-4 pt-4 lg:pt-5 bg-slate-300 rounded-lg md:ml-4'>
        <h2 className='text-4xl mb-7 mr-7'>Applied Students</h2>
        <FilterApplications
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          setSelectedValue={setSelectedValue}
          setDistance={(value) => setDistance(value === 'distance')}
          setSalary={(value) => setSalary(value === 'salary')}
        />
      </div>
      {isLoading ? (
        <span className='loading loading-spinner text-primary'></span>
      ) : (
        <table className='table table-compact w-full border-2 shadow-lg md:mx-4 mx-0 overflow-x-scroll'>
          <thead className='text-center bg-slate-200 font-semibold'>
            <tr className='text-[17px]'>
              <th className='border-2 border-r-slate-300'>SL No.</th>
              <th className='border-2 border-r-slate-300 px-0'>Name</th>
              <th className='border-2 border-r-slate-300 px-0'>Student Id</th>
              <th className='border-2 border-r-slate-300 px-0'>
                Application for
              </th>
              <th className='border-2 border-r-slate-300 px-0'>Department</th>
              <th className='border-2'>Action</th>
            </tr>
          </thead>

          <tbody>
            {sortedApplication.map((application, i) => (
              <tr
                key={application?._id}
                className='border-2'>
                <td className='border-2 text-center w-14'>{i + 1}</td>
                <td className='border-2 font-semibold w-60'>
                  <label
                    htmlFor='my-modal'
                    className='link link-primary'
                    onClick={() => setSelected(application)}>
                    {application.name}
                  </label>
                </td>
                <td className='border-2 w-40'>{application.sid}</td>
                <td className='border-2 w-52'>{application.type}</td>
                <td className='border-2 w-44'>{application.dept}</td>
                <td className='border-2 text-center p-0 w-56'>
                  {application?.type === 'HallClearence' ? (
                    <button
                      onClick={() => handleAccept(application)}
                      className='btn btn-sm btn-success'>
                      Accept
                    </button>
                  ) : (
                    <label
                      onClick={() => setSelected(application)}
                      htmlFor='room-allocation-modal'
                      className='btn btn-sm btn-success'>
                      Accept
                    </label>
                  )}
                  <button
                    onClick={() => handleReject(application)}
                    className='btn btn-sm btn-error ml-3'>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selected && (
        <>
          <StudentDetails selected={selected}></StudentDetails>
          <RoomAllocation
            selected={selected}
            user={details}
          />
        </>
      )}
    </div>
  );
};

export default Applications;
