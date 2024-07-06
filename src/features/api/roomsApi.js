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
    addRoom: builder.mutation({
      query: (data) => ({
        url: '/api/rooms',
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Rooms'],
    }),
    updateRoom: builder.mutation({
      query: (data) => ({
        url: '/api/rooms',
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Rooms'],
    }),
    removeStudent: builder.mutation({
      query: (data) => ({
        url: '/api/rooms',
        method: 'delete',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Rooms'],
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useUpdateRoomMutation,
  useRemoveStudentMutation,
  useAddRoomMutation,
} = roomApi;
