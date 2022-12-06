import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  isLoading: boolean;
}

const initialState: CounterState = {
  count: 1,
  isLoading: false,
};

export const counterSlice = createSlice({
  name: "ExampleReducer",
  initialState,
  reducers: {
    TOGGLE_LOADING($state: CounterState, action: PayloadAction<boolean>) {
      $state.isLoading = action.payload;
    },
    INCREMENT($state: CounterState, action: PayloadAction<number>) {
      $state.count += action.payload;
    },
    DECREMENT($state: CounterState, action: PayloadAction<number>) {
      $state.count -= action.payload;
    },
    INCREMENT_ASYNC() {},
  },
});
export const { INCREMENT, DECREMENT, INCREMENT_ASYNC, TOGGLE_LOADING } = counterSlice.actions;

export const useCounterActionHook = () => ({ ...counterSlice.actions });

export default counterSlice.reducer;
