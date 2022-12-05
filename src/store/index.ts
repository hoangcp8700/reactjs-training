import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import exampleReducer from "./example";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    example: exampleReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ thunk: false }).prepend(sagaMiddleware, logger),
});

// Run the saga
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
