import { authActionTypes } from "./types";

const initialState = {
  username: null,
  isLoading: false,
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
        username: action.payload,
        error: null,
        isLoading: false,
      };
    case authActionTypes.AUTHORIZATION_FAILURE:
      return {
        ...state,
        username: null,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
