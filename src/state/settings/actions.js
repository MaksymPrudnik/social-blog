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

export const settingsError = (message) => ({
  type: settingsActionTypes.SETTINGS_ERROR,
  payload: message,
});
