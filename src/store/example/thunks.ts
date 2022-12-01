import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExampleProps } from "api/example/type";

const exampleAsync = createAsyncThunk<ExampleProps, void, { rejectValue: unknown }>(
  "auth/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      // NOTE: todo something
      return true;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default exampleAsync;
