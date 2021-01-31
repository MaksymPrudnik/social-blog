import { put, takeLatest } from "redux-saga/effects";
import {
  acceptFriendRequestSuccess,
  cancelFriendRequestSuccess,
  friendsActionsFailure,
  rejectFriendRequestSuccess,
  removeFriendSuccess,
  sendFriendRequestSuccess,
} from "./actions";
import { friendsActionTypes } from "./types";
import {
  makePostRequest,
  makePutRequest,
  makeDeleteRequest,
} from "../../services/axios";

function* sendFriendRequestAsync({ payload }) {
  try {
    const requestParams = {
      url: `/friend-requests/${payload}`,
    };
    const { username } = yield makePostRequest(requestParams);
    yield put(sendFriendRequestSuccess(username));
  } catch ({ message }) {
    yield put(friendsActionsFailure(message));
  }
}

function* cancelFriendRequestAsync({ payload }) {
  try {
    const requestParams = {
      url: `/friend-requests/${payload}`,
    };
    const { username } = yield makeDeleteRequest(requestParams);
    yield put(cancelFriendRequestSuccess(username));
  } catch ({ message }) {
    yield put(friendsActionsFailure(message));
  }
}

function* acceptFriendRequestAsync({ payload }) {
  try {
    const requestParams = {
      url: `/users/add-friend/${payload}`,
    };
    const { username } = yield makePutRequest(requestParams);
    yield put(acceptFriendRequestSuccess(username));
  } catch ({ message }) {
    yield put(friendsActionsFailure(message));
  }
}

function* rejectFriendRequestAsync({ payload }) {
  try {
    const requestParams = {
      url: `/friend-request/${payload}`,
    };
    const { username } = makeDeleteRequest(requestParams);
    yield put(rejectFriendRequestSuccess(username));
  } catch ({ message }) {
    yield put(friendsActionsFailure(message));
  }
}

function* removeFriendAsync({ payload }) {
  try {
    const requestParams = {
      url: `/users/remove-friend/${payload}`,
    };
    const { username } = yield makePutRequest(requestParams);
    yield put(removeFriendSuccess(username));
  } catch ({ message }) {
    yield put(friendsActionsFailure(message));
  }
}

export function* sendFriendRequest() {
  yield takeLatest(
    friendsActionTypes.SEND_FRIEND_REQUEST_START,
    sendFriendRequestAsync
  );
}

export function* cancelFriendRequest() {
  yield takeLatest(
    friendsActionTypes.CANCEL_FRIEND_REQUEST_START,
    cancelFriendRequestAsync
  );
}

export function* acceptFriendRequest() {
  yield takeLatest(
    friendsActionTypes.ACCEPT_FRIEND_REQUEST_START,
    acceptFriendRequestAsync
  );
}

export function* rejectFriendRequest() {
  yield takeLatest(
    friendsActionTypes.REJECT_FRIEND_REQUEST_START,
    rejectFriendRequestAsync
  );
}

export function* removeFriend() {
  yield takeLatest(friendsActionTypes.REMOVE_FRIEND_START, removeFriendAsync);
}
