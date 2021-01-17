import { authActionTypes } from "./types";

const initialState = {
  username: null,
  picture: null,
  isLoading: true,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_START:
    case authActionTypes.REGISTER_START:
    case authActionTypes.GET_ME_START:
      return {
        ...state,
        isLoading: true,
      };
    case authActionTypes.AUTHORIZATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        isLoading: false,
      };
    case authActionTypes.AUTHORIZATION_FAILURE:
      return {
        ...state,
        username: null,
        picture: null,
        error: action.payload,
        isLoading: false,
      };
    case authActionTypes.UNSET_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case authActionTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
