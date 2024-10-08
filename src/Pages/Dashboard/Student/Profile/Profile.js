import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useUpdateStudentMutation } from '../../../../features/api/studentApi';

const Profile = ({ student, refetch }) => {
  const [status, setStatus] = useState(true);
  const [pic, setPic] = useState();
  const [updateStudent, { isSuccess }] = useUpdateStudentMutation();
  const {
    name,
    gender,
    dateOfBirth,
    sid,
    faculty,
    dept,
    cgpa,
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
    room,
  } = student;

  const handleStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };
  // console.log(status);
  useEffect(() => {
    if (isSuccess) {
      toast.success('Updated successfully');
    }
  }, [isSuccess]);

  const handleSubmit = (event) => {
    handleStatus();
    event.preventDefault();
    const form = event.target;
    const formData = {
      sid: sid,
      hall: hall,
      gender: form.gender.value,
      dateOfBirth: form.dateOfBirth.value,
      email: form.email.value,
      mobile: form.mobile.value,
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
    // console.log(formData);
    updateStudent(formData);
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
    // console.log(pics);
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
      <div className='flex justify-between md:mx-0 mx-2'>
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
            <h2 className='text-center text-lg font-semibold mb-3 underline'>
              Personal Information
            </h2>
            <p className='pl-2 mb-1 font-semibold'>Name </p>
            <input
              readOnly
              defaultValue={name}
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Gender </p>
            <select
              disabled={status ? 'disabled' : null}
              name='gender'
              defaultValue={gender}
              className='input input-bordered w-full max-w-xs mb-2 pr-5'>
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
            {/* <input
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='gender'
              defaultValue={gender}
              placeholder='gender'
              className='input input-bordered w-full max-w-xs mb-2'
            /> */}
            <p className='pl-2 mb-1 font-semibold'>Date of Birth </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='date'
              name='dateOfBirth'
              defaultValue={dateOfBirth}
              placeholder='Date of Birth'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Blood Group</p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='blood'
              defaultValue={blood}
              placeholder='ex: B+'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>
              National ID / Birth Certificate No{' '}
            </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='number'
              name='nid'
              defaultValue={nid}
              placeholder='National ID / Birth Certificate No'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Image </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='file'
              name='img'
              onChange={(e) => postDetails(e.target.files[0])}
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>

          <div className='bg-gray-200 px-2 py-5 rounded-lg w-[92%]'>
            <h2 className='text-center text-lg font-semibold mb-3 underline'>
              Academic Information
            </h2>
            <p className='pl-2 mb-1 font-semibold'>Student ID </p>
            <input
              readOnly
              defaultValue={sid}
              placeholder='student id'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Faculty </p>
            <input
              readOnly
              defaultValue={faculty}
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Department </p>
            <input
              readOnly
              defaultValue={dept}
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>CGPA </p>
            <input
              readOnly
              defaultValue={cgpa}
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Hall </p>
            <input
              readOnly
              defaultValue={hall}
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Room No. </p>
            <input
              readOnly
              defaultValue={room ? room : 'Non-Residential'}
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>
        </div>{' '}
        <br />
        <div className='flex flex-col md:flex-row gap-5 '>
          <div className='bg-gray-200 px-2 py-5 rounded-lg w-[92%]'>
            <h2 className='text-center text-lg font-semibold mb-3 underline'>
              Guardian's Information
            </h2>
            <p className='pl-2 mb-1 font-semibold'>Father Name </p>
            <input
              required
              readOnly={status || fname ? 'readOnly' : null}
              type='text'
              name='fname'
              defaultValue={fname}
              placeholder='Father name'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Father Mobile </p>
            <input
              required
              readOnly={status ? 'readOnly' : null}
              type='number'
              name='fmobile'
              defaultValue={fmobile}
              placeholder='ex: 01XXXXXX'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Mother Name </p>
            <input
              readOnly={status || mname ? 'readOnly' : null}
              type='text'
              name='mname'
              defaultValue={mname}
              placeholder='Mother name'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Mother Mobile </p>
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
            <h2 className='text-center text-lg font-semibold mb-3 underline'>
              Contact Information
            </h2>
            <p className='pl-2 mb-1 font-semibold'>Email </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='email'
              name='email'
              defaultValue={email}
              placeholder='ex: test@gmail.com'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Mobile </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='number'
              name='mobile'
              defaultValue={mobile}
              placeholder='ex: 01XXXXXX'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Present Address </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='present'
              defaultValue={present}
              placeholder='present address'
              className='input input-bordered w-full max-w-xs mb-2'
            />
            <p className='pl-2 mb-1 font-semibold'>Parmanent Address </p>
            <input
              readOnly={status ? 'readOnly' : null}
              type='text'
              name='parmanent'
              defaultValue={parmanent}
              placeholder='parmanent address'
              className='input input-bordered w-full max-w-xs mb-2'
            />
          </div>
        </div>
        <div className='text-center mt-5'>
          <input
            disabled={status ? 'disabled' : null}
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
