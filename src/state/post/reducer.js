import { postActionTypes } from "./types";

const initialState = {
  count: 0,
  rows: null,
  currentPost: null,
  error: null,
  isLoading: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActionTypes.GET_POSTS_LIST_START:
    case postActionTypes.GET_FEED_START:
    case postActionTypes.GET_POST_START:
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
    case postActionTypes.GET_POSTS_LIST_FAILURE:
      return {
        ...state,
        count: 0,
        rows: [],
        error: action.payload,
        isLoading: false,
      };
    case postActionTypes.ADD_POST_TO_LIST:
      return {
        ...state,
        count: state.count + 1,
        rows: [action.payload, ...state.rows],
        error: null,
      };
    case postActionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        currentPost: action.payload,
      };
    case postActionTypes.DELETE_POST_FROM_LIST:
      return {
        ...state,
        count: state.count - 1,
        rows: state.rows.filter((post) => post.id !== action.payload),
      };
    case postActionTypes.LIKE_POST_SUCCESS:
    case postActionTypes.UPDATE_POST_SUCCESS:
      return {
        ...state,
        rows: state.rows.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case postActionTypes.POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
