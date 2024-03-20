import { configureStore } from '@reduxjs/toolkit';
import useRoleSlice from '../Hooks/Role/useRoleSlice';
import { hallApi } from '../features/api/hallApi';
import { userApi } from '../features/api/userApi';
import { studentApi } from '../features/api/studentApi';
import { applicationApi } from '../features/api/applicationApi';
import { noticeApi } from '../features/api/noticeApi';

export const store = configureStore({
  reducer: {
    roleReducer: useRoleSlice,
    [hallApi.reducerPath]: hallApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [noticeApi.reducerPath]: noticeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(hallApi.middleware)
      .concat(userApi.middleware)
      .concat(studentApi.middleware)
      .concat(applicationApi.middleware)
      .concat(noticeApi.middleware),
});
