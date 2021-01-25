import { postActionTypes } from "./types";
import { commentActionTypes } from "../comment/types";

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
        currentPost: { id: action.payload.id, ...action.payload.post },
      };
    case postActionTypes.DELETE_POST_FROM_LIST:
      return {
        ...state,
        count: state.count - 1,
        rows: state.rows.filter((post) => post.id !== action.payload),
      };
    case postActionTypes.LIKE_POST_SUCCESS:
    case postActionTypes.UPDATE_POST_SUCCESS:
      const { isCurrent, post } = action.payload;
      if (isCurrent) {
        return {
          ...state,
          currentPost: post,
        };
      }
      return {
        ...state,
        rows: state.rows.map((item) => (item.id === post.id ? post : item)),
      };
    case postActionTypes.POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case commentActionTypes.ADD_COMMENT_TO_LIST:
      if (action.payload.isCurrent) {
        return {
          ...state,
          currentPost: {
            ...state.currentPost,
            commentsCount: state.currentPost.commentsCount + 1,
          },
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
