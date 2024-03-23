import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerLink } from '../../Hooks/useServerLink';

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${ServerLink}`,
  }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: (id) => ({
        url: `/api/students`,
      }),
      providesTags: ['Students'],
    }),
    getStudentDetails: builder.query({
      query: (id) => ({
        url: `/api/students/${id}`,
      }),
      providesTags: ['Students'],
    }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: '/api/students',
        method: 'post',
        body: data,
        headers: {
          'Content-type': 'application/json;',
        },
      }),
      invalidatesTags: ['Students'],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentDetailsQuery,
  useAddStudentMutation,
} = studentApi;
