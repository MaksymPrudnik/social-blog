import { takeLatest, put } from "redux-saga/effects";
import { makePostRequest } from "../../services/axios";
import { addCommentToList, commentFailure } from "./actions";
import { commentActionTypes } from "./types";

function* commentPostAsync({ payload: { isCurrent, ...payload } }) {
  try {
    const token = localStorage.getItem("accessToken");
    const { document, ...comment } = yield makePostRequest({
      url: "/comments",
      data: payload,
      token,
    });
    yield put(addCommentToList(document, comment, isCurrent));
  } catch ({ message }) {
    yield put(commentFailure(message || "Error commenting post"));
  }
}

export function* commentPostStart() {
  yield takeLatest(commentActionTypes.COMMENT_POST_START, commentPostAsync);
}
