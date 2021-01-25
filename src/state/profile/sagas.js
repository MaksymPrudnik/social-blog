import { put, takeLatest } from "redux-saga/effects";
import { makeGetRequest, makePostRequest } from "../../services/axios";

import { profileActionTypes } from "./types";

import {
  profileFailure,
  getProfileSuccess,
  getProfilePostsSuccess,
  getProfileStart,
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

function* sendFriendRequestAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const requestParams = {
      url: `/friend-requests/${payload}`,
      token,
    };
    const { receiverUsername, ...friendRequest } = yield makePostRequest(
      requestParams
    );
    console.log(friendRequest);
    yield put(getProfileStart(receiverUsername));
  } catch ({ message }) {
    yield put(profileFailure(message));
  }
}

export function* getProfile() {
  yield takeLatest(profileActionTypes.GET_PROFILE_START, getProfileAsync);
}

export function* getProfilePosts() {
  yield takeLatest(
    profileActionTypes.GET_PROFILE_POSTS_START,
    getProfilePostsAsync
  );
}

export function* sendFriendRequest() {
  yield takeLatest(
    profileActionTypes.SEND_FRIEND_REQUEST_START,
    sendFriendRequestAsync
  );
}
