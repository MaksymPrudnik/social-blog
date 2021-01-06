import { all, call } from "redux-saga/effects";

import { getMeStart, loginStart, registerStart, logout } from "./auth/sagas";
import {
  getPostsListStart,
  createPostStart,
  updatePostStart,
  deletePostStart,
  likePostStart,
  getFeedStart,
} from "./post/sagas";
import { getProfileStart } from "./profile/sagas";

export function* rootSaga() {
  yield all([
    call(loginStart),
    call(registerStart),
    call(getMeStart),
    call(logout),
    call(getPostsListStart),
    call(getFeedStart),
    call(getProfileStart),
    call(createPostStart),
    call(updatePostStart),
    call(likePostStart),
    call(deletePostStart),
  ]);
}
