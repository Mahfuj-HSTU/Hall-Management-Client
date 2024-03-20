import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerLink } from '../../Hooks/useServerLink';

export const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${ServerLink}`,
  }),
  tagTypes: ['Application'],
  endpoints: (builder) => ({
    getApplication: builder.query({
      query: (id) => ({
        url: `/api/applications/${id}`,
      }),
      providesTags: ['Application'],
    }),
  }),
});

export const { useGetApplicationQuery } = applicationApi;
