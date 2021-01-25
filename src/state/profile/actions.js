import { profileActionTypes } from "./types";

export const getProfileStart = (username) => ({
  type: profileActionTypes.GET_PROFILE_START,
  payload: username,
});

export const getProfilePostsStart = (id) => ({
  type: profileActionTypes.GET_PROFILE_POSTS_START,
  payload: id,
});

export const getProfilePostsSuccess = (posts, postComments) => ({
  type: profileActionTypes.GET_PROFILE_POSTS_SUCCESS,
  payload: { posts, postComments },
});

export const getProfileSuccess = (profile) => ({
  type: profileActionTypes.GET_PROFILE_SUCCESS,
  payload: profile,
});

export const sendFriendRequestStart = (id) => ({
  type: profileActionTypes.SEND_FRIEND_REQUEST_START,
  payload: id,
});

export const clearProfileData = () => ({
  type: profileActionTypes.CLEAR_PROFILE_DATA,
});

export const profileFailure = (message) => ({
  type: profileActionTypes.PROFILE_FAILURE,
  payload: message,
});
