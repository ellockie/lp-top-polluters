import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface TopPollutersState {
  selectedPolluter: number;
}

const initialState: TopPollutersState = {
  selectedPolluter: -1
};

export const pollutersSlice = createSlice({
  name: 'polluters',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    // Use the PayloadAction type to declare the contents of `action.payload`
    pollutantSelected: (state, action: PayloadAction<number>) => {
      state.selectedPolluter = action.payload;
    },
  },
});

export const { pollutantSelected } = pollutersSlice.actions;

// AppThunk

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.polluters.value)`
export const selectPollutant = (state: RootState) => state.polluters.selectedPolluter;

export default pollutersSlice.reducer;
