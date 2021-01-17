import { authActionTypes } from "./types";

export const unsetLoading = () => ({
  type: authActionTypes.UNSET_LOADING,
});

export const loginStart = (email, password) => ({
  type: authActionTypes.LOGIN_START,
  payload: { email, password },
});

export const registerStart = (email, password, username) => ({
  type: authActionTypes.REGISTER_START,
  payload: { email, password, username },
});

export const logout = () => ({
  type: authActionTypes.LOG_OUT,
});

export const getMeStart = (token) => ({
  type: authActionTypes.GET_ME_START,
  payload: token,
});

export const authorizationSuccess = (user) => ({
  type: authActionTypes.AUTHORIZATION_SUCCESS,
  payload: user,
});

export const authorizationFailure = (message) => ({
  type: authActionTypes.AUTHORIZATION_FAILURE,
  payload: message,
});

export const logoutSuccess = () => ({
  type: authActionTypes.LOG_OUT_SUCCESS,
});
