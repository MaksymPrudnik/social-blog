import { all, call } from "redux-saga/effects";

import { getMeStart, loginStart, registerStart, logout } from "./auth/sagas";
import { commentPostStart } from "./comment/sagas";
import {
  getPostsListStart,
  createPostStart,
  updatePostStart,
  deletePostStart,
  likePostStart,
  getFeedStart,
  getPostStart,
} from "./post/sagas";
import {
  getProfilePosts,
  getProfile,
  sendFriendRequest,
} from "./profile/sagas";

export function* rootSaga() {
  yield all([
    call(loginStart),
    call(registerStart),
    call(getMeStart),
    call(logout),
    call(getProfile),
    call(getProfilePosts),
    call(sendFriendRequest),
    call(getPostsListStart),
    call(getFeedStart),
    call(getPostStart),
    call(createPostStart),
    call(updatePostStart),
    call(likePostStart),
    call(deletePostStart),
    call(commentPostStart),
  ]);
}
