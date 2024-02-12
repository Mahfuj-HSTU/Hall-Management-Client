import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { ServerLink } from '../../../../Hooks/useServerLink';
import toast from 'react-hot-toast';

const Profile = ({ student, refetch }) => {
  const [status, setStatus] = useState(true);
  const [pic, setPic] = useState();
  const {
    name,
    sid,
    dept,
    hall,
    email,
    mobile,
    fname,
    fmobile,
    mname,
    mmobile,
    present,
    parmanent,
    blood,
    nid,
  } = student;

  const handleStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };
  // console.log(status);

  const handleSubmit = (event) => {
    handleStatus();
    event.preventDefault();
    const form = event.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      sid: sid,
      dept: dept,
      mobile: form.mobile.value,
      hall: hall,
      blood: form.blood.value,
      fname: form.fname.value,
      fmobile: form.fmobile.value,
      mname: form.mname.value,
      mmobile: form.mmobile.value,
      present: form.present.value,
      parmanent: form.parmanent.value,
      nid: form.nid.value,
      img: pic,
    };

    console.log(formData);
    fetch(`${ServerLink}/api/students`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((event) => {
        toast.success('updated successfully');
        refetch();
      });
  };

  const postDetails = (pics) => {
    if (pics === undefined) {
      toast({
        title: 'Please Select an Image!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    console.log(pics);
    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append('file', pics);
      data.append('upload_preset', 'Hall Management');
      data.append('cloud_name', 'dvtf0kosr');
      fetch('https://api.cloudinary.com/v1_1/dvtf0kosr/image/upload', {
        method: 'post',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast({
        title: 'Please Select an Image!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });

      return;
    }
  };

  return (
    <div className='flex-col flex gap-5 text-center md:text-left w-full mt-2 md:mx-5 pb-5 '>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold'>Profile</h1>
        <div>
          <label
            disabled={status ? null : 'disabled'}
            onClick={handleStatus}
            htmlFor='details-modal'
            className='text-lg cursor-pointer btn'>
            <FaEdit></FaEdit>
          </label>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className='mx-auto w-[90%]'>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='bg-gray-200 px-2 py-5 rounded-lg w-[92%]'>
            <p className='pl-2 mb-1'>Name: </p>
            <input
              required
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='name'
              defaultValue={name}
              placeholder='Your name'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Student ID: </p>
            <input
              readOnly
              type='number'
              name='sid'
              defaultValue={sid}
              placeholder='student id'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Department </p>
            <input
              readOnly
              type='text'
              name='dept'
              defaultValue={dept}
              placeholder='ex: cse'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>CGPA </p>
            <input
              readOnly
              type='text'
              defaultValue='3.50'
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>

          <div className='bg-gray-200 px-2 py-5 rounded-lg w-[92%]'>
            <p className='pl-2 mb-1'>Email </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='email'
              name='email'
              defaultValue={email}
              placeholder='ex: test@gmail.com'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Mobile </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='number'
              name='mobile'
              defaultValue={mobile}
              placeholder='ex: 01XXXXXX'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Blood Group </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='blood'
              defaultValue={blood}
              placeholder='B+'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Hall </p>
            <input
              readOnly
              type='text'
              name='hall'
              defaultValue={hall}
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>
        </div>{' '}
        <br />
        <div className='flex flex-col md:flex-row gap-5 '>
          <div className='bg-gray-200 px-2 py-5 rounded-lg w-[92%]'>
            <p className='pl-2 mb-1'>Father Name </p>
            <input
              required
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='fname'
              defaultValue={fname}
              placeholder='Father name'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Father Mobile </p>
            <input
              required
              readOnly={status ? 'readOnly' : null}
              type='number'
              name='fmobile'
              defaultValue={fmobile}
              placeholder='ex: 01XXXXXX'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Mother Name </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='mname'
              defaultValue={mname}
              placeholder='Mother name'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Mother Mobile </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='number'
              name='mmobile'
              defaultValue={mmobile}
              placeholder='ex: 01XXXXXX'
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>

          <div className='bg-gray-200 px-2 py-5 rounded-lg w-[92%]'>
            <p className='pl-2 mb-1'>Present Address </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='present'
              defaultValue={present}
              placeholder='present address'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Parmanent Address </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='parmanent'
              defaultValue={parmanent}
              placeholder='parmanent address'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>National ID / Birth Certificate No </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='number'
              name='nid'
              defaultValue={nid}
              placeholder='National ID / Birth Certificate No'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1'>Photo </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='file'
              name='img'
              onChange={(e) => postDetails(e.target.files[0])}
              placeholder='National ID / Birth Certificate No'
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>
        </div>
        <div className='text-center mt-5'>
          <input
            readOnly={status ? 'disabled' : null}
            type='submit'
            value='SAVE'
            className='btn btn-success font-semibold input input-bordered px-12'
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
