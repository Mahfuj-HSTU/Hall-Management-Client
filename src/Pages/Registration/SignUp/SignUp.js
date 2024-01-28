import React, { useContext, useState } from 'react';
import signup from '../../../images/login1.jpg';
import { BsSendCheckFill } from 'react-icons/bs';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { ServerLink } from '../../../Hooks/useServerLink';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SignUp = () => {
  const hall = useLoaderData();
  const [error, setError] = useState('');
  const { createUser, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data: students = [], refetch } = useQuery({
    queryKey: ['students'],
    queryFn: () =>
      fetch(`${ServerLink}/api/students`).then((res) => res.json()),
  });
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(`${ServerLink}/api/users`).then((res) => res.json()),
  });
  const { data: halls = [] } = useQuery({
    queryKey: ['halls'],
    queryFn: () => fetch(`${ServerLink}/api/halls`).then((res) => res.json()),
  });

  // console.log(hall);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const sid = form.sid.value;
    const hallName = form.hall.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = 'student';

    // console.log(sid, hallName, email);

    let userFound = false;

    let registrationAllowed = true;

    users.forEach((us) => {
      if (us.sid === sid) {
        registrationAllowed = false;
      }
    });

    students.forEach((st) => {
      if (st.sid === sid && st.hall === hallName) {
        userFound = true;

        if (registrationAllowed) {
          createUser(email, password)
            .then((result) => {
              saveUser({ sid, hallName, email, role });
              // const user = result.user;
              // console.log(user);
              form.reset();
              verifyEmail();
              navigate(`/hall/${hall._id}/login`);
              refetch();
              setError('');
            })
            .catch((error) => {
              console.error(error);
              setError(error.message);
            });
        }

        const saveUser = (user) => {
          fetch(`${ServerLink}/api/users`, {
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
                toast.success(
                  'Registration successful. Now verify your email before login.'
                );
              }
            });
        };
      }
    });
    if (!registrationAllowed) {
      toast.error('Your SID is registered. Please login');
      userFound = true;
    }

    if (!userFound) {
      toast.error('Your hall and SID don`t match.');
    }
  };

  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url(${signup})`,
      }}>
      <div className='hero-overlay bg-opacity-30'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-sm'>
          <form
            onSubmit={handleSubmit}
            className='bg-gray-100 bg-opacity-80 pt-5 pb-12 rounded-xl text-black relative'>
            <span className='text-start absolute top-4 left-2 '>
              <Link
                to={`/hall/${hall._id}`}
                className=''>
                <IoArrowBackCircleOutline className='text-2xl ml-2 btn btn-circle btn-sm btn-outline border-none btn-primary' />
              </Link>
            </span>
            <h1 className='mb-5 text-4xl font-bold py-2 text-blue-800'>
              Sign Up
            </h1>
            <input
              required
              type='number'
              name='sid'
              placeholder='Student ID'
              className='input input-bordered w-full max-w-xs mb-5'
            />
            <select
              required
              name='hall'
              className='select select-bordered w-full max-w-xs mb-5'>
              <option
                disabled
                selected>
                Choose your hall
              </option>
              {halls.map((hall) => (
                <option
                  key={hall._id}
                  value={hall.name}>
                  {hall.name}
                </option>
              ))}
              {/* <option>Dormitory-2</option> */}
            </select>
            <input
              required
              type='email'
              name='email'
              placeholder='test@gmail.com'
              className='input input-bordered w-full max-w-xs mb-5'
            />

            <input
              required
              type='password'
              name='password'
              placeholder='password'
              className='input input-bordered w-full max-w-xs mb-3'
            />
            <p className='text-red-600 font-semibold mb-2'>
              {error.slice(22, 45)}
            </p>

            <label className='relative'>
              <BsSendCheckFill className='pointer-events-none w-4 h-5 text-green-800 absolute right-28 mt-4' />
              <input
                type='submit'
                className='bg-teal-300 cursor-pointer font-semibold input input-bordered w-full max-w-xs mb-2'
              />
            </label>
            <p className='pt-2'>
              Already have an accoung?{' '}
              <Link
                to={`/hall/${hall._id}/login`}
                className='link link-primary font-semibold'>
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
