import { postActionTypes } from "./types";

export const getPostsListStart = () => ({
  type: postActionTypes.GET_POSTS_LIST_START,
});

export const getPostsListSuccess = (posts) => ({
  type: postActionTypes.GET_POSTS_LIST_SUCCESS,
  payload: posts,
});

export const getPostsListFailure = (message) => ({
  type: postActionTypes.GET_POSTS_LIST_FAILURE,
  payload: message,
});
