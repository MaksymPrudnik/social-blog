import { settingsActionTypes } from "./types";

export const getProfileSettingsStart = () => ({
  type: settingsActionTypes.GET_PROFILE_SETTINGS_START,
});

export const updateProfileStart = (body) => ({
  type: settingsActionTypes.UPDATE_PROFILE_START,
  payload: body,
});

export const getProfileSettingsSuccess = (profile) => ({
  type: settingsActionTypes.GET_PROFILE_SETTINGS_SUCCESS,
  payload: profile,
});

export const getFriendsStart = (username) => ({
  type: settingsActionTypes.GET_FRIENDS_START,
  payload: username,
});

export const getFriendsSuccess = (friendsData) => ({
  type: settingsActionTypes.GET_FRIENDS_SUCCESS,
  payload: friendsData,
});

export const getMadeRequestStart = (authorId) => ({
  type: settingsActionTypes.GET_MADE_REQUESTS_START,
  payload: authorId,
});

export const getMadeRequestsSuccess = (data) => ({
  type: settingsActionTypes.GET_MADE_REQUESTS_SUCCESS,
  payload: data,
});

export const getReceivedRequestsStart = (receiverId) => ({
  type: settingsActionTypes.GET_RECEIVED_REQUESTS_START,
  payload: receiverId,
});

export const getReceivedRequestsSuccess = (data) => ({
  type: settingsActionTypes.GET_RECEIVED_REQUESTS_SUCCESS,
  payload: data,
});

export const settingsError = (message) => ({
  type: settingsActionTypes.SETTINGS_ERROR,
  payload: message,
});
