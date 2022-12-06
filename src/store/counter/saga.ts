import { PayloadAction } from "@reduxjs/toolkit";
import { INCREMENT, TOGGLE_LOADING } from "store/counter";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import { INCREMENT_ASYNC } from ".";

// eslint-disable-next-line no-promise-executor-return
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync(action: PayloadAction<number>) {
  yield put(TOGGLE_LOADING(true));
  yield call(delay, 3000);
  yield put(INCREMENT(action.payload || 1));
  yield put(TOGGLE_LOADING(false));
}
function* watcherIncrementAsync() {
  yield takeLatest(INCREMENT_ASYNC.toString(), incrementAsync);
  // yield takeEvery(INCREMENT_ASYNC.toString(), incrementAsync);
}

export default function* counterSaga() {
  yield all([fork(watcherIncrementAsync)]);
}
