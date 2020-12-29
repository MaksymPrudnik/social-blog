import { takeLatest, put } from "redux-saga/effects";
import { makeGetRequest, makePostRequest } from "../../services/axios";
import { postActionTypes } from "./types";
import {
  getPostsListSuccess,
  getPostsListFailure,
  createPostFailure,
} from "./actions";

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

function* createPostAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const post = yield makePostRequest({
      url: "/posts",
      data: payload,
      token,
    });
    console.log(post);
  } catch ({ message }) {
    yield put(createPostFailure(message));
  }
}

export function* getPostsListStart() {
  yield takeLatest(postActionTypes.GET_POSTS_LIST_START, getPostsListAsync);
}

export function* createPostStart() {
  yield takeLatest(postActionTypes.CREATE_POST_START, createPostAsync);
}
