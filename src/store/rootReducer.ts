import { combineReducers } from "@reduxjs/toolkit";

import exampleReducer from "./example";
import counterReducer from "./counter";

export default () =>
  combineReducers({
    example: exampleReducer,
    counter: counterReducer,
  });
