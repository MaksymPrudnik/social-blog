import { postActionTypes } from "./types";

const initialState = {
  count: 0,
  rows: [],
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActionTypes.GET_POSTS_LIST_SUCCESS:
      return {
        ...state,
        rows: action.payload,
        error: null,
      };
    case postActionTypes.GET_POSTS_LIST_FAILURE:
      return {
        ...state,
        rows: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
