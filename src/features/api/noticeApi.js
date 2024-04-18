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
    postNotice: builder.mutation({
      query: (data) => ({
        url: '/api/notice',
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Notice'],
    }),
  }),
});

export const { useGetNoticeQuery, usePostNoticeMutation } = noticeApi;
