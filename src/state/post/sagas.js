import { takeLatest, put } from "redux-saga/effects";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest,
  makePutRequest,
} from "../../services/axios";
import { postActionTypes } from "./types";
import {
  getPostsListSuccess,
  getPostsListFailure,
  postFailure,
  addPostToList,
  updatePostSuccess,
  deletePostFromList,
  likePostSuccess,
  getPostSuccess,
} from "./actions";
import {
  loadCurrentPostComments,
  loadPostCommentsList,
} from "../comment/actions";

function* getPostsListAsync() {
  try {
    const { count, rows } = yield makeGetRequest({
      url: "/posts",
    });
    const posts = [];
    const commentsData = {};
    rows.forEach(({ id, comments, ...otherProps }) => {
      posts.push({ id, ...otherProps });
      commentsData[id] = comments;
    });
    yield put(getPostsListSuccess({ count, rows: posts }));
    yield put(loadPostCommentsList(commentsData));
  } catch ({ message }) {
    yield put(getPostsListFailure(message));
  }
}

function* getFeedAsync() {
  try {
    const token = localStorage.getItem("accessToken");
    const { count, rows } = yield makeGetRequest({
      url: "/posts/feed",
      token,
    });
    const posts = [];
    const commentsData = {};
    rows.forEach(({ id, comments, ...otherProps }) => {
      posts.push({ id, ...otherProps });
      commentsData[id] = comments;
    });
    yield put(getPostsListSuccess({ count, rows: posts }));
    yield put(loadPostCommentsList(commentsData));
  } catch ({ message }) {
    yield put(getPostsListFailure(message));
  }
}

function* getPostAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const { id, comments, ...post } = yield makeGetRequest({
      url: `/posts/${payload.id}`,
      token,
    });
    yield put(getPostSuccess({ id, post }));
    yield put(loadCurrentPostComments(comments));
  } catch ({ message }) {
    yield put(postFailure(message));
  }
}

function* createPostAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const post = yield makePostRequest({
      url: "/posts",
      data: payload,
      token,
    });
    yield put(addPostToList(post));
  } catch ({ message }) {
    yield put(postFailure(message));
  }
}

function* updatePostAsync({ payload: { id, body } }) {
  try {
    const token = localStorage.getItem("accessToken");
    const post = yield makePutRequest({
      url: `/posts/${id}`,
      data: body,
      token,
    });
    yield put(updatePostSuccess(post));
  } catch ({ message }) {
    yield put(postFailure(message));
  }
}

function* likePostAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const { comments, ...post } = yield makePutRequest({
      url: `posts/${payload}/like`,
      token,
    });
    yield put(likePostSuccess(post));
  } catch ({ message }) {
    yield put(postFailure(message));
  }
}

function* deletePostAsync({ payload }) {
  try {
    const token = localStorage.getItem("accessToken");
    const result = yield makeDeleteRequest({
      url: `/posts/${payload}`,
      token,
    });
    if (result) {
      yield put(deletePostFromList(payload));
    } else {
      throw new Error();
    }
  } catch ({ message }) {
    yield put(postFailure(message || "Error deleting post"));
  }
}

export function* getPostsListStart() {
  yield takeLatest(postActionTypes.GET_POSTS_LIST_START, getPostsListAsync);
}

export function* getFeedStart() {
  yield takeLatest(postActionTypes.GET_FEED_START, getFeedAsync);
}

export function* getPostStart() {
  yield takeLatest(postActionTypes.GET_POST_START, getPostAsync);
}

export function* createPostStart() {
  yield takeLatest(postActionTypes.CREATE_POST_START, createPostAsync);
}

export function* updatePostStart() {
  yield takeLatest(postActionTypes.UPDATE_POST_START, updatePostAsync);
}

export function* likePostStart() {
  yield takeLatest(postActionTypes.LIKE_POST_START, likePostAsync);
}

export function* deletePostStart() {
  yield takeLatest(postActionTypes.DELETE_POST_START, deletePostAsync);
}
