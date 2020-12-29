import { authActionTypes } from "./types";

export const loginStart = (email, password) => ({
  type: authActionTypes.LOGIN_START,
  payload: { email, password },
});

export const registerStart = (email, password, username) => ({
  type: authActionTypes.REGISTER_START,
  payload: { email, password, username },
});

export const getMeStart = (token) => ({
  type: authActionTypes.GET_ME_START,
  payload: token,
});

export const authorizationSuccess = (username) => ({
  type: authActionTypes.AUTHORIZATION_SUCCESS,
  payload: username,
});

export const authorizationFailure = (message) => ({
  type: authActionTypes.AUTHORIZATION_FAILURE,
  payload: message,
});
