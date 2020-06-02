import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pollutersSlice from './pollutersSlice';

export const store = configureStore({
  reducer: {
    polluters: pollutersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
