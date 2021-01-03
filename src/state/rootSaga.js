import { all, call } from "redux-saga/effects";

import { getMeStart, loginStart, registerStart, logout } from "./auth/sagas";
import {
  getPostsListStart,
  createPostStart,
  updatePostStart,
  deletePostStart,
} from "./post/sagas";
import { getProfileStart } from "./profile/sagas";

export function* rootSaga() {
  yield all([
    call(loginStart),
    call(registerStart),
    call(getMeStart),
    call(logout),
    call(getPostsListStart),
    call(getProfileStart),
    call(createPostStart),
    call(updatePostStart),
    call(deletePostStart),
  ]);
}
