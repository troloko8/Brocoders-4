import { watchAddNewTask } from './tableTasks/saga'
// import { watchModalStatus } from './stopwatch/saga';
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchAddNewTask(),
    // watchDeleteTask(),
    // watchModalStatus()
  ]);
}