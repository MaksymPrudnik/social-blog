import { profileActionTypes } from "./types";

const initialState = {
  profile: null,
  isProfileLoading: false,
  isPostsLoading: false,
  posts: null,
  postComments: null,
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileActionTypes.GET_PROFILE_START:
      return {
        ...state,
        isProfileLoading: true,
      };
    case profileActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isProfileLoading: false,
        error: null,
        profile: action.payload,
      };
    case profileActionTypes.GET_PROFILE_POSTS_START:
      return {
        ...state,
        isPostsLoading: true,
      };
    case profileActionTypes.GET_PROFILE_POSTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isPostsLoading: false,
      };
    case profileActionTypes.CLEAR_PROFILE_DATA:
      return {
        ...state,
        ...initialState,
      };
    case profileActionTypes.PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
