import { takeLatest } from "redux-saga/effects";
import { userSaga } from "./userSaga";

export default function* sagaWatcher() {
  yield takeLatest("GET_USERS", userSaga);
}
