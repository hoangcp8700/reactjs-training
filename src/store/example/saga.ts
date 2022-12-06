import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import { TodoProps, addTodo } from "./index";

function addTodoAPI(payload: TodoProps) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(payload), 1000);
  });
}

function* addTodoSaga(action: PayloadAction<TodoProps>) {
  const data: TodoProps = yield call(addTodoAPI, action.payload);
  yield put(addTodo(data));
}

function* watcherAddTodo() {
  // action - function
  yield takeLatest(addTodo.toString(), addTodoSaga);
}

export default function* exampleSaga() {
  yield all([fork(watcherAddTodo)]);
}
