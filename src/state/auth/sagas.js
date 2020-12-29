import { takeLatest, put } from "redux-saga/effects";
import {
  makeGetMeRequest,
  makeLoginRequest,
  makeRegisterRequest,
} from "../../services/axios";
import { authorizationSuccess, authorizationFailure } from "./actions";

import { authActionTypes } from "./types";

export function* loginAsync({ payload: { email, password } }) {
  try {
    const basicToken = btoa(`${email}:${password}`);
    const { token, user } = yield makeLoginRequest({ token: basicToken });
    localStorage.setItem("accessToken", token);
    yield put(authorizationSuccess(user.username));
  } catch ({ message }) {
    yield put(authorizationFailure(message));
  }
}

export function* registerAsync({ payload }) {
  try {
    const { token, user } = yield makeRegisterRequest({ data: payload });
    localStorage.setItem("accessToken", token);
    yield put(authorizationSuccess(user.username));
  } catch ({ message }) {
    yield put(authorizationFailure(message));
  }
}

function* getMeAsync({ payload }) {
  try {
    const user = yield makeGetMeRequest({ token: payload });
    yield put(authorizationSuccess(user.username));
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
