import { settingsActionTypes } from "./types";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  friends: null,
  madeRequests: null,
  receivedRequests: null,
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
    case settingsActionTypes.GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload.rows,
      };
    case settingsActionTypes.GET_MADE_REQUESTS_SUCCESS:
      return {
        ...state,
        madeRequests: action.payload.rows,
      };
    case settingsActionTypes.GET_RECEIVED_REQUESTS_SUCCESS:
      return {
        ...state,
        receivedRequests: action.payload.rows,
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
