import { put, takeLatest } from "redux-saga/effects";
import { makeGetRequest } from "../../services/axios";

import { profileActionTypes } from "./types";

import { getProfileFailure, getProfileSuccess } from "./actions";

function* getProfileAsync({ payload }) {
  try {
    const requestParams = { url: `/users/${payload}` };
    if (payload === "me") {
      requestParams.token = localStorage.getItem("accessToken");
    }
    const profile = yield makeGetRequest(requestParams);
    yield put(getProfileSuccess(profile));
  } catch ({ message }) {
    yield put(getProfileFailure(message));
  }
}

export function* getProfileStart() {
  yield takeLatest(profileActionTypes.GET_PROFILE_START, getProfileAsync);
}
