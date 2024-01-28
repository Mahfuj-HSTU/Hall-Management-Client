import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ForgatePassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const handleReset = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    console.log(email);

    resetPassword(email)
      .then(() => {
        // const user = result.user;
        // console.log(user);
        toast.success('Password reset link was send, check your email.');
        form.reset();
      })
      .catch((error) => {
        console.error('error ', error);
        toast.error(
          'Your email is not registered! Please provide correct email.'
        );
        form.reset();
      });
  };

  return (
    <div>
      <input
        type='checkbox'
        id='reset-modal'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='reset-modal'
            className='btn btn-outline btn-info btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <form
            className='text-center'
            onSubmit={handleReset}>
            <h1 className='text-xl text-center font-semibold px-3 pb-4'>
              To reset your password give your email address{' '}
            </h1>
            <input
              type='email'
              name='email'
              placeholder='example@gmail.com'
              className='input input-bordered w-full rounded-lg my-2'
              required
            />
            <br />
            <input
              className='btn btn-outline btn-info btn-sm text-neutral-content cursor-pointer mt-3 sm:w-2/3 md:w-2/5'
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgatePassword;
