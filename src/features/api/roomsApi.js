import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerLink } from '../../Hooks/useServerLink';

export const roomApi = createApi({
  reducerPath: 'roomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${ServerLink}`,
  }),
  tagTypes: ['Rooms'],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => ({
        url: '/api/rooms',
      }),
      providesTags: ['Rooms'],
    }),
  }),
});

export const { useGetRoomsQuery } = roomApi;
