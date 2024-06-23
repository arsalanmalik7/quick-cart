// app/(components)/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../../(features)/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;