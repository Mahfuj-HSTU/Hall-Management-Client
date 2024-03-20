import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerLink } from '../../Hooks/useServerLink';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${ServerLink}`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => ({
        url: `/api/users/${email}`,
      }),
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
