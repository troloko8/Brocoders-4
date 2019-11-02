import { takeLatest, put } from 'redux-saga/effects'

function* addNewRowTaskSaga() {
  yield put({
    type: "ADD_NEW_TASK",
    payload: JSON.parse(localStorage.getItem('newTask'))
  })
}

export function* watchAddNewTask() {
  yield takeLatest("GET_NEW_TASK", addNewRowTaskSaga)
}

// function* deleteTaskSaga() {
//   console.log(deleteRowTask.payload)
//   // yield put({
//   //   type: "DELETE_ROW_TASK",
//   //   payload: 1 // deleteRowTask().payload
//   // })
// }

// export function* watchDeleteTask() {
//   console.log('sdsd')
//   yield takeLatest("DELETE_ROW_TASK", deleteTaskSaga)
// }

