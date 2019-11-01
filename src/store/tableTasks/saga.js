import { takeLatest, put } from 'redux-saga/effects'
import { deleteRowTask } from './actions'

function* addNewRowTaskSaga() {
  yield put({
    type: "ADD_NEW_TASK",
    payload: JSON.parse(localStorage.getItem('newTask'))
  })
}

export function* watchAddNewTask() {
  yield takeLatest("GET_NEW_TASK", addNewRowTaskSaga)
}

function* deleteTaskSaga() {
  yield put({
    type: "DELETE_ROW_TASK",
    payload: deleteRowTask().payload
  })
}

export function* watchDeleteTask() {
  yield takeLatest("DELETE_ROW_TASK", deleteTaskSaga)
}

