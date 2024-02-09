import { configureStore } from '@reduxjs/toolkit';
import useRoleSlice from '../Hooks/Role/useRoleSlice';

const store = configureStore({
  reducer: {
    roleReducer: useRoleSlice,
  },
});

export default store;
