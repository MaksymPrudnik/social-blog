import { put, takeLatest } from "redux-saga/effects";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest,
  makePutRequest,
} from "../../services/axios";

import { profileActionTypes } from "./types";

import {
  profileFailure,
  getProfileSuccess,
  getProfilePostsSuccess,
  getProfileStart,
  getFriendListSuccess,
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

function* sendFriendRequestAsync({ payload: { id, username } }) {
  try {
    const requestParams = {
      url: `/friend-requests/${id}`,
    };
    const isSuccessful = yield makePostRequest(requestParams);
    if (!isSuccessful) {
      throw new Error("Error sending friend request");
    }
    yield put(getProfileStart(username));
  } catch ({ message }) {
    yield put(profileFailure(message));
  }
}

function* cancelFriendRequestAsync({ payload: { id, username } }) {
  try {
    const requestParams = {
      url: `/friend-requests/${id}`,
    };
    const isDeleted = yield makeDeleteRequest(requestParams);
    if (!isDeleted) {
      throw new Error("Error deleting friend request");
    }
    yield put(getProfileStart(username));
  } catch ({ message }) {
    yield put(profileFailure(message));
  }
}

function* acceptFriendRequestAsync({ payload: { id, username } }) {
  try {
    const requestParams = {
      url: `/users/add-friend/${id}`,
    };
    const isSuccessful = yield makePutRequest(requestParams);
    if (!isSuccessful) {
      throw new Error("Error adding friend");
    }
    yield put(getProfileStart(username));
  } catch ({ message }) {
    yield put(profileFailure(message));
  }
}

function* removeFriendAsync({ payload: { id, username } }) {
  try {
    const requestParams = {
      url: `/users/remove-friend/${id}`,
    };
    const isSuccessful = yield makePutRequest(requestParams);
    if (!isSuccessful) {
      throw new Error("Error removing friend");
    }
    yield put(getProfileStart(username));
  } catch ({ message }) {
    yield put(profileFailure(message));
  }
}

function* getFriendListAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const requestParams = {
      url: `/users/${payload}/friends`,
      token,
    };
    const { ids, rows } = yield makeGetRequest(requestParams);
    yield put(getFriendListSuccess(ids, rows));
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

export function* cancelFriendRequest() {
  yield takeLatest(
    profileActionTypes.CANCEL_FRIEND_REQUEST_START,
    cancelFriendRequestAsync
  );
}

export function* acceptFriendRequest() {
  yield takeLatest(
    profileActionTypes.ACCEPT_FRIEND_REQUEST_START,
    acceptFriendRequestAsync
  );
}

export function* removeFriend() {
  yield takeLatest(profileActionTypes.REMOVE_FRIEND_START, removeFriendAsync);
}

export function* getFriendList() {
  yield takeLatest(
    profileActionTypes.GET_FRIEND_LIST_START,
    getFriendListAsync
  );
}
