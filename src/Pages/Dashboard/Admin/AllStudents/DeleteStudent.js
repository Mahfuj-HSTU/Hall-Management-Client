import React, { useEffect } from 'react';
import { useUpdateStudentMutation } from '../../../../features/api/studentApi';
import { useRemoveStudentMutation } from '../../../../features/api/roomsApi';
import { useDeleteApplicationMutation } from '../../../../features/api/applicationApi';
import toast from 'react-hot-toast';

const DeleteStudent = ({ user, applications, refetch }) => {
  const [updateStudent, { isSuccess }] = useUpdateStudentMutation();
  const [removeStudent, { isSuccess: removeIsSuccess, error }] =
    useRemoveStudentMutation();
  const [deleteApplication] = useDeleteApplicationMutation();
  console.log(error);

  useEffect(() => {
    if (isSuccess && removeIsSuccess) {
      toast.success('Student remove successfully.');
    }
  }, [isSuccess, removeIsSuccess]);

  const handleTemporaryDelete = (usr) => {
    const application = applications?.find(
      (item) => item?.type === 'HallSeat' && item?.sid === usr?.sid
    );
    const info = {
      ...usr,
      room: '',
    };
    const room = {
      room: usr.room,
      hall: usr.hall,
      id: usr.sid,
    };
    removeStudent(room);
    updateStudent(info);
    if (application) {
      deleteApplication(application);
    }
    refetch();
  };

  const handleParmanentDelete = (usr) => {
    const application = applications?.find(
      (item) => item?.type === 'HallSeat' && item?.sid === usr?.sid
    );
    const info = {
      ...usr,
      isDeleted: true,
      room: '',
    };
    const room = {
      room: usr.room,
      hall: usr.hall,
      id: usr.sid,
    };
    removeStudent(room);
    updateStudent(info);
    if (application) {
      deleteApplication(application);
    }
    refetch();
  };

  return (
    <div>
      <dialog
        id='my_modal_2'
        className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <button
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
            onClick={() => document.getElementById('my_modal_2').close()}>
            ✕
          </button>
          <h3 className='font-bold text-lg'>
            Are you sure? you want to release "${user?.name}" from hall.
          </h3>
          <p className='pt-8 flex justify-evenly'>
            <button
              onClick={() => {
                handleTemporaryDelete(user);
                document.getElementById('my_modal_2').close();
              }}
              className='btn btn-warning'>
              Temporary
            </button>
            <button
              onClick={() => {
                handleParmanentDelete(user);
                document.getElementById('my_modal_2').close();
              }}
              className='btn btn-error'>
              Permanent
            </button>
          </p>
        </div>
        <form
          method='dialog'
          className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default DeleteStudent;
