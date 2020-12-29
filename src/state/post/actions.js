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

export const createPostStart = (data) => ({
  type: postActionTypes.CREATE_POST_START,
  payload: data,
});

export const createPostSuccess = (post) => ({
  type: postActionTypes.CREATE_POST_SUCCESS,
  payload: post,
});

export const createPostFailure = (message) => ({
  type: postActionTypes.CREATE_POST_FAILURE,
  payload: message,
});
