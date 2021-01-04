import { commentActionTypes } from "./types";

export const addPostComments = (id, comments) => ({
  type: commentActionTypes.ADD_POST_COMMENTS,
  payload: { id, comments },
});

export const loadPostCommentsList = (commentsData) => ({
  type: commentActionTypes.LOAD_POST_COMMENTS_LIST,
  payload: commentsData,
});
