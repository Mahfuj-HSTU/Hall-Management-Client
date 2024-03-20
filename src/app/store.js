import { configureStore } from '@reduxjs/toolkit';
import useRoleSlice from '../Hooks/Role/useRoleSlice';
import { hallApi } from '../features/api/hallApi';
import { userApi } from '../features/api/userApi';
import { studentApi } from '../features/api/studentApi';

export const store = configureStore({
  reducer: {
    roleReducer: useRoleSlice,
    [hallApi.reducerPath]: hallApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(hallApi.middleware)
      .concat(userApi.middleware)
      .concat(studentApi.middleware),
});
