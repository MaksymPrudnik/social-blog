import { settingsActionTypes } from "./types";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case settingsActionTypes.GET_PROFILE_SETTINGS_START:
      return {
        ...state,
        isLoading: true,
      };
    case settingsActionTypes.GET_PROFILE_SETTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case settingsActionTypes.SETTINGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
