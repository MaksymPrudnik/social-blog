import { takeLatest } from "redux-saga/effects";
import { postActionTypes } from "./types";

export function* getPostsListAsync() {
  yield console.log("");
}

export function* getPostsListStart() {
  yield takeLatest(postActionTypes.GET_POSTS_LIST_START, getPostsListAsync);
}
