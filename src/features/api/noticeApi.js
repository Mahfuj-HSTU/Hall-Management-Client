import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerLink } from '../../Hooks/useServerLink';

export const noticeApi = createApi({
  reducerPath: 'noticeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${ServerLink}`,
  }),
  tagTypes: ['Notice'],
  endpoints: (builder) => ({
    getNotice: builder.query({
      query: () => ({
        url: '/api/notice',
      }),
      providesTags: ['Notice'],
    }),
  }),
});

export const { useGetNoticeQuery } = noticeApi;
