import { commentActionTypes } from "./types";

export const addPostComments = (id, comments) => ({
  type: commentActionTypes.ADD_POST_COMMENTS,
  payload: { id, comments },
});

export const loadPostCommentsList = (commentsData) => ({
  type: commentActionTypes.LOAD_POST_COMMENTS_LIST,
  payload: commentsData,
});

export const loadCurrentPostComments = (comments) => ({
  type: commentActionTypes.LOAD_CURRENT_POST_COMMENTS,
  payload: comments,
});

export const commentPostStart = (id, text) => ({
  type: commentActionTypes.COMMENT_POST_START,
  payload: { document: id, text },
});

export const addCommentToList = (id, comment) => ({
  type: commentActionTypes.ADD_COMMENT_TO_LIST,
  payload: { id, comment },
});

export const commentFailure = (error) => ({
  type: commentActionTypes.COMMENT_FAILURE,
  payload: error,
});
