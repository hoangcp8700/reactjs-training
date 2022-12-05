import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExampleState {
  profile?: unknown;
  isAuth: boolean;
  loading: boolean;
}

const initialState: ExampleState = {
  profile: undefined,
  isAuth: false,
  loading: true,
};

export const exampleSlice = createSlice({
  name: "ExampleReducer",
  initialState,
  reducers: {
    togglePopup($state: ExampleState, action: PayloadAction<ExampleState>) {
      $state.loading = action.payload.loading;
    },
  },
});

export default exampleSlice.reducer;
