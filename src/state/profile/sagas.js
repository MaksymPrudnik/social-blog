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
    const requestParams = { url: `/users/${payload}` };
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
      url: `/posts/${payload}`,
      token,
    };
    const { rows } = yield makeGetRequest(requestParams);
    yield put(getProfilePostsSuccess(rows));
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
