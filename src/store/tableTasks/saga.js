import { takeLatest, put } from 'redux-saga/effects'
import { deleteRowTasks } from './actions'

function* getNewRowTask() {
  yield put({
    type: "GET_NEW_ROW_TASK",
    playload: JSON.parse(localStorage.getItem('newTask'))
  })
}

export function* watchAddNewTask() {
  yield takeLatest("SET_ROW_TASKS", getNewRowTask)
}

function* deleteTask() {
  yield put({
    type: "DELETE_ROW_TASKS",
    playload: deleteRowTasks().playload
  })
}

export function* watchDeleteTask() {
  yield takeLatest("DELETE_ROW_TASKS", deleteTask)
}

