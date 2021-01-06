import { postActionTypes } from "./types";

export const getPostsListStart = () => ({
  type: postActionTypes.GET_POSTS_LIST_START,
});

export const getFeedStart = () => ({
  type: postActionTypes.GET_FEED_START,
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

export const postFailure = (message) => ({
  type: postActionTypes.POST_FAILURE,
  payload: message,
});

export const addPostToList = (post) => ({
  type: postActionTypes.ADD_POST_TO_LIST,
  payload: post,
});

export const updatePostStart = (post) => ({
  type: postActionTypes.UPDATE_POST_START,
  payload: post,
});

export const updatePostSuccess = (post) => ({
  type: postActionTypes.UPDATE_POST_SUCCESS,
  payload: post,
});

export const likePostStart = (id) => ({
  type: postActionTypes.LIKE_POST_START,
  payload: id,
});

export const likePostSuccess = (post) => ({
  type: postActionTypes.LIKE_POST_SUCCESS,
  payload: post,
});

export const deletePostStart = (id) => ({
  type: postActionTypes.DELETE_POST_START,
  payload: id,
});

export const deletePostFromList = (id) => ({
  type: postActionTypes.DELETE_POST_FROM_LIST,
  payload: id,
});
