import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import exampleAsync from "./thunks";

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
  // if use redux thunk
  // extraReducers(builder) {
  //   builder.addCase(exampleAsync.pending, ($state) => {
  //     $state.loading = true;
  //   });
  //   builder.addCase(exampleAsync.fulfilled, ($state, action) => {
  //     $state.profile = action.payload;
  //     $state.loading = false;
  //     $state.isAuth = true;
  //   });
  //   builder.addCase(exampleAsync.rejected, ($state) => {
  //     $state.loading = false;
  //     $state.isAuth = false;
  //     $state.profile = undefined;
  //   });
  // },
});

export default exampleSlice.reducer;
