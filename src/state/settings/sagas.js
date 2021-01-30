import { put, takeLatest } from "redux-saga/effects";
import { getProfileSettingsSuccess, settingsError } from "./actions";
import { settingsActionTypes } from "./types";
import { makeGetMeRequest, makePutRequest } from "../../services/axios";

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
