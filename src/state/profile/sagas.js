import { put, takeLatest } from "redux-saga/effects";
import { makeGetRequest } from "../../services/axios";

import { profileActionTypes } from "./types";

import {
  profileFailure,
  getProfileSuccess,
  getProfilePostsSuccess,
} from "./actions";

function* getProfileAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const requestParams = {
      url: `/users/${payload}`,
      token,
    };
    if (payload === "me") {
      requestParams.token = localStorage.getItem("accessToken");
    }
    const profile = yield makeGetRequest(requestParams);
    yield put(getProfileSuccess(profile));
  } catch ({ message }) {
    yield put(profileFailure(message));
  }
}

function* getProfilePostsAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const requestParams = {
      url: `/posts/feed/${payload}`,
      token,
    };
    const { rows } = yield makeGetRequest(requestParams);
    const posts = [];
    const postComments = {};
    rows.forEach(({ id, comments, ...post }) => {
      posts.push({ id, ...post });
      postComments[id] = comments;
    });
    yield put(getProfilePostsSuccess(posts, postComments));
  } catch ({ message }) {
    yield put(profileFailure(message));
  }
}

export function* getProfileStart() {
  yield takeLatest(profileActionTypes.GET_PROFILE_START, getProfileAsync);
}

export function* getProfilePostsStart() {
  yield takeLatest(
    profileActionTypes.GET_PROFILE_POSTS_START,
    getProfilePostsAsync
  );
}
