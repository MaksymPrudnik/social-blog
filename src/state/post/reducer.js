import { postActionTypes } from "./types";

const initialState = {
  count: 0,
  rows: [],
  error: null,
  isLoading: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActionTypes.GET_POSTS_LIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case postActionTypes.GET_POSTS_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        isLoading: false,
      };
    case postActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
        rows: state.rows.push(action.payload),
        error: null,
      };
    case postActionTypes.GET_POSTS_LIST_FAILURE:
      return {
        ...state,
        count: 0,
        rows: null,
        error: action.payload,
        isLoading: false,
      };
    case postActionTypes.CREATE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};