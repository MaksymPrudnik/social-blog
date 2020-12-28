import { takeLatest, put } from "redux-saga/effects";
import { makeGetRequest } from "../../services/axios";
import { postActionTypes } from "./types";
import { getPostsListSuccess, getPostsListFailure } from "./actions";

export function* getPostsListAsync() {
  try {
    const posts = yield makeGetRequest({
      url: "/posts",
    });
    yield put(getPostsListSuccess(posts));
  } catch ({ message }) {
    yield put(getPostsListFailure(message));
  }
}

export function* getPostsListStart() {
  yield takeLatest(postActionTypes.GET_POSTS_LIST_START, getPostsListAsync);
}
