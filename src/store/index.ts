import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { rootSaga } from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: rootReducer(),
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      thunk: false,
      // serializableCheck: false,
    }).concat(sagaMiddleware, logger),
});

// Run the saga
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// example
// const { profile } = useAppSelector((state) => state.example);
// const dispatch = useAppDispatch();
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
