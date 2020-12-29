import { profileActionTypes } from "./types";

export const getProfileStart = (username) => ({
  type: profileActionTypes.GET_PROFILE_START,
  payload: username,
});

export const getProfileSuccess = (profile) => ({
  type: profileActionTypes.GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getProfileFailure = (message) => ({
  type: profileActionTypes.GET_PROFILE_FAILURE,
  payload: message,
});
