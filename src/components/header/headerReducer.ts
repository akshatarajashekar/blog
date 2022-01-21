import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store';

export interface HeaderState {
  selectedNavItem: string;
}

const initialState = {
  selectedNavItem: 'ts',
} as HeaderState;

export type Action = { type: "SELECTED_NAVITEM"; payload: string };

export const counterSlice = createSlice({
  name: 'headerReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setNavItem: (state, action: PayloadAction<string>) => {
      state.selectedNavItem = action.payload
    },
  },
})

export const {setNavItem } = counterSlice.actions

export const getSelectednavItem = (state: RootState) => state.headerStore.selectedNavItem;

export default counterSlice.reducer