import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerLink } from '../../Hooks/useServerLink';

export const hallApi = createApi({
  reducerPath: 'hallApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${ServerLink}`,
    // baseUrl: 'http://localhost:5000',
  }),
  tagTypes: ['Halls'],
  endpoints: (builder) => ({
    getHalls: builder.query({
      query: () => ({
        url: '/api/halls',
      }),
      providesTags: ['Halls'],
    }),
  }),
});

export const { useGetHallsQuery } = hallApi;
