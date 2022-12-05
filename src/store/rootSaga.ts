import { all, fork } from "redux-saga/effects";

import exampleSaga from "./example/saga";

export function* rootSaga() {
  yield all([fork(exampleSaga)]);
}
