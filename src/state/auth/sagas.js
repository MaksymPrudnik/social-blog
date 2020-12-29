import { takeLatest, put } from "redux-saga/effects";

import {
  makeGetMeRequest,
  makeLoginRequest,
  makeRegisterRequest,
} from "../../services/axios";

import {
  authorizationSuccess,
  authorizationFailure,
  logoutSuccess,
} from "./actions";

import { authActionTypes } from "./types";

function* loginAsync({ payload: { email, password } }) {
  try {
    const basicToken = btoa(`${email}:${password}`);
    const {
      token,
      user: { username, picture },
    } = yield makeLoginRequest({ token: basicToken });
    localStorage.setItem("accessToken", token);
    yield put(authorizationSuccess({ username, picture }));
  } catch ({ message }) {
    yield put(authorizationFailure(message));
  }
}

function* registerAsync({ payload }) {
  try {
    const {
      token,
      user: { username, picture },
    } = yield makeRegisterRequest({ data: payload });
    localStorage.setItem("accessToken", token);
    yield put(authorizationSuccess({ username, picture }));
  } catch ({ message }) {
    yield put(authorizationFailure(message));
  }
}

function* getMeAsync({ payload }) {
  try {
    const { username, picture } = yield makeGetMeRequest({ token: payload });
    yield put(authorizationSuccess({ username, picture }));
  } catch ({ message }) {
    yield put(authorizationFailure(message));
  }
}

function* logoutAsync() {
  try {
    localStorage.removeItem("accessToken");
    yield put(logoutSuccess());
  } catch ({ message }) {
    yield put(authorizationFailure(message));
  }
}

export function* loginStart() {
  yield takeLatest(authActionTypes.LOGIN_START, loginAsync);
}

export function* registerStart() {
  yield takeLatest(authActionTypes.REGISTER_START, registerAsync);
}

export function* getMeStart() {
  yield takeLatest(authActionTypes.GET_ME_START, getMeAsync);
}

export function* logout() {
  yield takeLatest(authActionTypes.LOG_OUT, logoutAsync);
}
