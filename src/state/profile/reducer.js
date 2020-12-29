import { profileActionTypes } from "./types";

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileActionTypes.GET_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      };
    case profileActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        profile: action.payload,
      };
    case profileActionTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        profile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
