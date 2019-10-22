import { takeEvery, takeLatest, put, delay } from 'redux-saga/effects'
import { number } from 'prop-types'

function* getNewRowTask() {
  yield put({
    type: "GET_NEW_ROW_TASK",
    playload: JSON.parse(localStorage.getItem('newTask'))
  })
}

export function* watchAddNewTask() {
  yield takeLatest("SET_ROW_TASKS", getNewRowTask)
}