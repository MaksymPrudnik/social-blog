import { all, call } from "redux-saga/effects";

import { loginStart } from "./auth/sagas";
import { getPostsListStart } from "./post/sagas";

export function* rootSaga() {
  yield all([call(getPostsListStart), call(loginStart)]);
}
