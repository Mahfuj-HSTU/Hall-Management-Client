import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../Shared/Loading/Loading';
import { fetchRole } from '../../../../Hooks/Role/useRoleSlice';
import toast from 'react-hot-toast';
import { usePostNoticeMutation } from '../../../../features/api/noticeApi';

const AddNotice = () => {
  const { user, loading } = useContext(AuthContext);
  const details = useSelector((state) => state?.roleReducer.role);
  const [addNotice, { isSuccess }] = usePostNoticeMutation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  if (loading) {
    <Loading></Loading>;
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success('Successfully added a new notice');
    }
  }, [isSuccess]);

  useEffect(() => {
    user?.email && dispatch(fetchRole(user?.email));
  }, [dispatch, user?.email]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const info = {
      ...formData,
      hall: details.hallName,
    };
    addNotice(info);
    // console.log(info);
    event.target.reset();
  };

  return (
    <div className='pt-10 shadow-2xl bg-slate-50 mx-7 rounded-lg'>
      <h1 className='text-5xl font-semibold'>Create Notice</h1>
      <div className='hero-content flex-col lg:flex-row-reverse mx-7 pt-9 gap-14'>
        <div className='text-center lg:text-start w-full'>
          <h3 className='text-3xl font-semibold mb-9'>Notice preview</h3>
          <div>
            <p className='mb-3'>
              <strong>Title:</strong> {formData.title}
            </p>
            <p className='mb-7 text-justify	'>
              <strong>Message:</strong> {formData.description}
            </p>
            <p>
              <strong>{formData.date}</strong>
            </p>
          </div>
        </div>
        <div className='card shrink-0 w-full max-w-lg'>
          <form
            onSubmit={handleSubmit}
            className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-semibold'>Title</span>
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='title'
                placeholder='title'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-semibold'>Notice Type</span>
              </label>
              <select
                onChange={handleChange}
                required
                name='type'
                className='select select-bordered w-full max-w-md'>
                <option
                  disabled
                  selected>
                  Choose notice type
                </option>
                <option value='general'>General</option>
                <option value='HallSeat'>Hall Seat</option>
              </select>
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-semibold'>Description</span>
              </label>
              <textarea
                onChange={handleChange}
                type='text'
                name='description'
                placeholder='notice description'
                className='input input-bordered h-28'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-semibold'>Close Date</span>
              </label>
              <input
                onChange={handleChange}
                type='date'
                name='date'
                placeholder='close date'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNotice;
