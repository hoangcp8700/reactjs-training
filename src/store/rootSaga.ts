import { all, fork } from "redux-saga/effects";

import exampleSaga from "./example/saga";
import counterSaga from "./counter/saga";

export function* rootSaga() {
  yield all([fork(exampleSaga), fork(counterSaga)]);
}
