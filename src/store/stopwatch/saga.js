import { takeLatest, put } from 'redux-saga/effects'
import { getModalStatus } from './actions'

function* getModalStatusSaga() {
  yield put({
    type: "GET_MODAL_STATUS",
    playload: getModalStatus().playload
  })
}

export function* watchModalStatus() {
  yield takeLatest("GET_MODAL_STATUS", getModalStatus)
}

