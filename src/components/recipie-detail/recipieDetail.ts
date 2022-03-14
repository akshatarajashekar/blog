import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export interface RecipieDetailState {
  selectedRecipieName: string;
}

const initialState = {
  selectedRecipieName: "",
} as RecipieDetailState;

export type Action = { type: "SELECTED_RECIPIE"; payload: string };

export const counterSlice = createSlice({
  name: "recipieDetailReducer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setRecipieItem: (state, action: PayloadAction<string>) => {
      state.selectedRecipieName = action.payload
    },
  },
});

export const { setRecipieItem } = counterSlice.actions;

export const getselectedRecipieName = (state: RootState) =>
  state.recipieDetailStore.selectedRecipieName;

export default counterSlice.reducer;
