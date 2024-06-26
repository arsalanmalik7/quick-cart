// app/(components)/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../../(features)/user/userSlice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
