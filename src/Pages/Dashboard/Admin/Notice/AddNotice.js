import React, { useState } from 'react';

const AddNotice = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };
  return (
    <div className='pt-10 shadow-2xl bg-slate-50 mx-7'>
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
                required
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
