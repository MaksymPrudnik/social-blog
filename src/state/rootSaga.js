import { all, call } from "redux-saga/effects";

import { getMeStart, loginStart } from "./auth/sagas";
import { getPostsListStart } from "./post/sagas";
import { registerStart } from "./auth/sagas";

export function* rootSaga() {
  yield all([
    call(getPostsListStart),
    call(loginStart),
    call(registerStart),
    call(getMeStart),
  ]);
}
