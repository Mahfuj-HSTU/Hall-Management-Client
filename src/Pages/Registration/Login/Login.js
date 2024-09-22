import React, { useContext, useState } from 'react';
import loginImg from '../../../images/login.jpg';
import { MdMarkEmailRead, MdLock } from 'react-icons/md';
import { BsSendCheckFill } from 'react-icons/bs';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import ForgatePassword from './ForgatePassword';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { ClipLoader } from 'react-spinners';

const Login = () => {
  const hall = useLoaderData();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setLoading(false);
        if (user.emailVerified) {
          toast.success('Successfully logged in!');
          navigate(`/hall/${hall._id}`);
        } else {
          toast.error(
            'Your email is not verified, please verify your email first.'
          );
        }
      })
      .catch((error) => {
        console.error('error ', error);
        toast.error('Register first to login');
        setError(error.message);
        setLoading(false);
        form.reset();
      });
  };

  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url(${loginImg})`,
      }}>
      <div className='hero-overlay bg-opacity-30'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-[360px]'>
          <form
            onSubmit={handleLogin}
            className='bg-indigo-300 bg-opacity-80 pt-5 pb-14 rounded-xl text-black relative animate__animated animate__fadeInUp'>
            <span className='text-start absolute top-4 left-2 '>
              <Link
                to={`/hall/${hall._id}`}
                className=''>
                <IoArrowBackCircleOutline className='text-2xl ml-2 btn btn-circle btn-sm btn-outline border-none btn-primary' />
              </Link>
            </span>
            <h1 className='mb-5 text-4xl font-bold py-2 text-blue-800'>
              LOGIN
            </h1>
            <label
              htmlFor='email'
              className='relative'>
              <MdMarkEmailRead className='pointer-events-none w-5 h-5 text-green-600 absolute top-1/2 transform -translate-y-1/2 right-3' />
              <input
                required
                type='email'
                name='email'
                id='email'
                placeholder='test@gmail.com'
                className='input input-bordered w-full max-w-xs mb-7 bg-white'
              />
            </label>

            <label
              htmlFor='password'
              className='relative'>
              <MdLock className='pointer-events-none w-5 h-5 text-green-600 absolute mt-4 right-3' />
              <input
                required
                type='password'
                name='password'
                id='password'
                placeholder='password'
                className='input input-bordered w-full max-w-xs bg-white'
              />
              <p className='pb-4 text-start pl-6 text-xs font-semibold mt-[2px]'>
                <label
                  htmlFor='reset-modal'
                  className='label-text-alt link link-hover'>
                  Forgot password?
                </label>
              </p>
              <p className='text-red-600 font-semibold mb-2'>
                {error?.slice(22, 45)}
              </p>
            </label>

            <label className='relative '>
              {loading ? (
                <button className='bg-teal-500 hover:bg-teal-600 text-lg font-semibold input input-bordered w-full max-w-xs mb-2 cursor-pointer'>
                  <ClipLoader size={20} />
                </button>
              ) : (
                <>
                  <BsSendCheckFill className='pointer-events-none w-4 h-4 text-green-800 absolute top-2/3 transform -translate-y-1/2 right-[118px]' />
                  <button
                    type='submit'
                    className='bg-teal-500 hover:bg-teal-600 text-lg font-semibold input input-bordered w-full max-w-xs mb-2 cursor-pointer'
                    disabled={loading}>
                    Login
                  </button>
                </>
              )}
            </label>
            <p className='pt-2 font-semibold'>
              New to website?{' '}
              <Link
                to={`/hall/${hall._id}/signup`}
                className='link link-neutral'>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ForgatePassword />
    </div>
  );
};

export default Login;
