import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

import data from '../data/top_polluters.json';

interface TopPollutersState {
  highlightedPolluter: number;
  selectedPolluter: number;
  selectedPolluterInfo: string[];
  polluterInfo: string[][];
}

const initialState: TopPollutersState = {
  highlightedPolluter: -1,
  selectedPolluter: -1,
  selectedPolluterInfo: ['', '', '', '', '', '', ''],
  polluterInfo: data
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
    polluterHighlighted: (state, action: PayloadAction<number>) => {
      state.highlightedPolluter = action.payload;
    },
    polluterSelected: (state, action: PayloadAction<number>) => {
      state.selectedPolluterInfo = [
        state.polluterInfo[0][action.payload],
        state.polluterInfo[1][action.payload],
        state.polluterInfo[2][action.payload],
        state.polluterInfo[3][action.payload],
        state.polluterInfo[4][action.payload],
        state.polluterInfo[5][action.payload],
        state.polluterInfo[6][action.payload],
      ];
    },
  },
});

export const { polluterHighlighted, polluterSelected } = pollutersSlice.actions;

// AppThunk
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.polluters.value)`
export const selectHighlightedPolluter = (state: RootState) => state.polluters.highlightedPolluter;
export const selectPolluterInfo = (state: RootState) => state.polluters.selectedPolluterInfo;

export default pollutersSlice.reducer;
