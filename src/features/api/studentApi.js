import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerLink } from '../../Hooks/useServerLink';

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${ServerLink}`,
  }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    getStudent: builder.query({
      query: (id) => ({
        url: `/api/students/${id}`,
      }),
      providesTags: ['Students'],
    }),
  }),
});

export const { useGetStudentQuery } = studentApi;
