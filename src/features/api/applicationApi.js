import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerLink } from '../../Hooks/useServerLink';

export const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${ServerLink}`,
  }),
  tagTypes: ['Application'],
  endpoints: (builder) => ({
    getApplications: builder.query({
      query: () => ({
        url: `/api/applications`,
      }),
      providesTags: ['Application'],
    }),
    getApplication: builder.query({
      query: (id) => ({
        url: `/api/applications/${id}`,
      }),
      providesTags: ['Application'],
    }),
    addApplication: builder.mutation({
      query: (data) => ({
        url: '/api/applications',
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Application'],
    }),
    updateApplication: builder.mutation({
      query: (data) => ({
        url: `/api/applications/${data?._id}`,
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Application'],
    }),
    deleteApplication: builder.mutation({
      query: (data) => ({
        url: `/api/applications/${data?._id}`,
        method: 'delete',
      }),
      invalidatesTags: ['Application'],
    }),
  }),
});

export const {
  useGetApplicationQuery,
  useGetApplicationsQuery,
  useAddApplicationMutation,
  useUpdateApplicationMutation,
  useDeleteApplicationMutation,
} = applicationApi;
