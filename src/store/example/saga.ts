import { takeEvery } from "redux-saga/effects";

const fetchTodo = (url: string) => fetch(url).then((res) => res.json());

function* workerSaga() {}

function* watcherSaga() {
  yield takeEvery(fetchTodo.toString(), workerSaga);
}

export default watcherSaga;
