import { call, put } from "redux-saga/effects";
import { setUsers } from "../redux/actions/userAction";
import { getUsersApi } from "./handlers/userApi";

export function* userSaga() {
  const users = yield call(getUsersApi);
  console.log("users saga", users);
  yield put(setUsers(users));
}
