import { put, takeLatest } from "redux-saga/effects";
import {
  getFriendsSuccess,
  getMadeRequestsSuccess,
  getProfileSettingsSuccess,
  getReceivedRequestsSuccess,
  settingsError,
} from "./actions";
import { settingsActionTypes } from "./types";
import {
  makeGetMeRequest,
  makeGetRequest,
  makePutRequest,
} from "../../services/axios";

function* getProfileSettingsAsync() {
  try {
    const token = localStorage.getItem("accessToken");
    const user = yield makeGetMeRequest({ token });
    yield put(getProfileSettingsSuccess(user));
  } catch ({ message }) {
    yield put(settingsError(message));
  }
}

function* updateProfileAsync({ payload }) {
  try {
    const requestParams = {
      url: `/users/me`,
      data: payload,
    };
    const user = yield makePutRequest(requestParams);
    yield put(getProfileSettingsSuccess(user));
  } catch ({ message }) {
    yield put(settingsError(message));
  }
}

function* getFriendsAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const requestParams = {
      url: `/users/${payload}/friends`,
      token,
    };
    const data = yield makeGetRequest(requestParams);
    yield put(getFriendsSuccess(data));
  } catch ({ message }) {
    yield put(settingsError(message));
  }
}

function* getMadeRequestsAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const requestParams = {
      url: `/friend-requests/made/${payload}`,
      token,
    };
    const data = yield makeGetRequest(requestParams);
    yield put(getMadeRequestsSuccess(data));
  } catch ({ message }) {
    yield put(settingsError(message));
  }
}

function* getReceivedRequestsAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const requestParams = {
      url: `/friend-requests/received/${payload}`,
      token,
    };
    const data = yield makeGetRequest(requestParams);
    yield put(getReceivedRequestsSuccess(data));
  } catch ({ message }) {
    yield put(settingsError(message));
  }
}

export function* getProfileSettings() {
  yield takeLatest(
    settingsActionTypes.GET_PROFILE_SETTINGS_START,
    getProfileSettingsAsync
  );
}

export function* updateProfile() {
  yield takeLatest(
    settingsActionTypes.UPDATE_PROFILE_START,
    updateProfileAsync
  );
}

export function* getFriends() {
  yield takeLatest(settingsActionTypes.GET_FRIENDS_START, getFriendsAsync);
}

export function* getMadeRequests() {
  yield takeLatest(
    settingsActionTypes.GET_MADE_REQUESTS_START,
    getMadeRequestsAsync
  );
}

export function* getReceivedRequests() {
  yield takeLatest(
    settingsActionTypes.GET_RECEIVED_REQUESTS_START,
    getReceivedRequestsAsync
  );
}
