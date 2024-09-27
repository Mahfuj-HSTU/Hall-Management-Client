import React, { useContext, useState } from 'react';
import { useGetNoticeQuery } from '../../../features/api/noticeApi';
import { useGetUserQuery } from '../../../features/api/userApi';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import NoticeDetails from './NoticeDetails';

const Notice = () => {
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState('');
  const { data: notices } = useGetNoticeQuery();
  const { data, isLoading, isError } = useGetUserQuery(user?.email);

  const filteredNotice = notices?.filter(
    (item) => item.hall === data?.hallName
  );

  console.log(filteredNotice);

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <div>
      <ul className='absolute hidden group-hover:block mt-9 z-[1] menu p-2 shadow bg-base-100 rounded-lg w-72 divide-y divide-blue-300'>
        {filteredNotice?.map((notice) => (
          <li className='bg-base-200 mb-1'>
            <label
              htmlFor='notice-modal'
              className='link link-primary'
              onClick={() => setSelected(notice)}>
              {notice?.title}
            </label>
          </li>
        ))}
      </ul>
      <NoticeDetails selected={selected} />
    </div>
  );
};

export default Notice;
