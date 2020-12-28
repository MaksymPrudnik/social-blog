import { takeLatest } from "redux-saga/effects";

import { authActionTypes } from "./types";

export function* loginAsync() {
  yield console.log("i am fired");
}

export function* loginStart() {
  yield takeLatest(authActionTypes.LOGIN_START, loginAsync);
}
