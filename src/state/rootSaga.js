import { all, call } from "redux-saga/effects";

import { getMe, login, register, logout } from "./auth/sagas";
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
    call(login),
    call(register),
    call(getMe),
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
