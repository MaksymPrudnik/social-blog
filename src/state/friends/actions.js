import { friendsActionTypes } from "./types";

export const sendFriendRequestStart = (userId) => ({
  type: friendsActionTypes.SEND_FRIEND_REQUEST_START,
  payload: userId,
});

export const sendFriendRequestSuccess = (username) => ({
  type: friendsActionTypes.SEND_FRIEND_REQUEST_SUCCESS,
  payload: username,
});

export const cancelFriendRequestStart = (requestId) => ({
  type: friendsActionTypes.CANCEL_FRIEND_REQUEST_START,
  payload: requestId,
});

export const cancelFriendRequestSuccess = (username) => ({
  type: friendsActionTypes.CANCEL_FRIEND_REQUEST_SUCCESS,
  payload: username,
});

export const acceptFriendRequestStart = (userId) => ({
  type: friendsActionTypes.ACCEPT_FRIEND_REQUEST_START,
  payload: userId,
});

export const acceptFriendRequestSuccess = (username) => ({
  type: friendsActionTypes.ACCEPT_FRIEND_REQUEST_SUCCESS,
  payload: username,
});

export const rejectFriendRequestStart = (requestId) => ({
  type: friendsActionTypes.REJECT_FRIEND_REQUEST_START,
  payload: requestId,
});

export const rejectFriendRequestSuccess = (username) => ({
  type: friendsActionTypes.REJECT_FRIEND_REQUEST_SUCCESS,
  payload: username,
});

export const removeFriendStart = (userId) => ({
  type: friendsActionTypes.REMOVE_FRIEND_START,
  payload: userId,
});

export const removeFriendSuccess = (username) => ({
  type: friendsActionTypes.REMOVE_FRIEND_SUCCESS,
  payload: username,
});

export const friendsActionsFailure = (message) => ({
  type: friendsActionTypes.FRIENDS_ACTIONS_FAILURE,
  payload: message,
});
